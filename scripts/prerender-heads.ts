/**
 * Writes one HTML file per sitemap URL (dist/grammatica/grammar/foo.html, …),
 * each a copy of dist/grammatica/index.html with that page's own <title>, description,
 * canonical and OG/Twitter tags. Without this every route is served the
 * home page's head until JavaScript runs, so Google saw each topic declare
 * the home page as its canonical and stopped indexing them. cleanUrls maps
 * /grammatica/grammar/foo to grammatica/grammar/foo.html; useSeo still keeps
 * the tags right on client navigation. Also writes the app-only routes and
 * dist/404.html, since vercel.json has no SPA catch-all rewrite.
 * Each file also gets the page's text inside #root (the English explanation
 * for a topic, the intro and topic list for a section, a contrast pair's
 * practice sentences, a reference page's data), so crawlers and link previews
 * that don't run JavaScript see real content. createRoot replaces it on mount.
 * Relative imports only — runs under plain tsx, like generate-sitemap.ts.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { topics } from "../src/data/topics";
import { sections } from "../src/data/sections";
import { CONTRAST_PAIRS } from "../src/data/contrastExercises";
import { GRAMMAR_DIFFERENCES, SPELLING_PATTERNS, VOCAB_PAIRS } from "../src/data/britishVsAmerican";
import { CONFUSED_WORD_GROUPS } from "../src/data/confusedWords";
import { MAJORITY_ENGLISH_COUNTRIES, OFFICIAL_ENGLISH_COUNTRIES } from "../src/data/countries";
import { FALSE_FRIENDS_LISTS } from "../src/data/falseFriends";
import { IRREGULAR_VERB_GROUPS } from "../src/data/irregularVerbs";
import { LINKING_WORD_CATEGORIES } from "../src/data/linkingWords";
import { PUNCTUATION_RULES } from "../src/data/punctuation";
import { STATIC_PAGES, exerciseMeta, type PageMeta } from "../src/lib/pageMeta";
import { SITE_URL, pageUrl, formatTitle, sectionPageTitle, toMetaDescription, paragraphToPlainText } from "../src/lib/seo";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.resolve(__dirname, "../dist/grammatica");

/** Same title and description each page passes to useSeo. */
function metaForPath(urlPath: string): PageMeta | undefined {
  if (urlPath in STATIC_PAGES) return STATIC_PAGES[urlPath as keyof typeof STATIC_PAGES];
  const [, kind, slug, sub] = urlPath.split("/");
  if (kind === "grammar" && !sub) {
    const topic = topics.find((t) => t.slug === slug);
    return topic && { title: topic.title, description: toMetaDescription(paragraphToPlainText(topic.explanations.en[0])) };
  }
  if (kind === "section") {
    const section = sections.find((s) => s.slug === slug);
    return section && { title: sectionPageTitle(section.title), description: section.description };
  }
  if (kind === "contrast-practice") {
    const pair = CONTRAST_PAIRS.find((p) => p.slug === slug);
    return pair && { title: pair.title, description: pair.description };
  }
  return undefined;
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Replaces one tag's value in the template, failing loudly if the tag is gone. */
function setTag(html: string, pattern: RegExp, value: string): string {
  if (!pattern.test(html)) throw new Error(`prerender-heads: ${pattern} not found in dist/index.html`);
  return html.replace(pattern, (_m, before: string, after: string) => `${before}${escapeHtml(value)}${after}`);
}

const link = (urlPath: string, text: string) => `<a href="${escapeHtml(pageUrl(urlPath))}">${escapeHtml(text)}</a>`;
const list = (items: string[]) => `<ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
const topicLinks = (sectionSlug: string) =>
  list(topics.filter((t) => t.sectionSlug === sectionSlug).map((t) => `${link(`/grammar/${t.slug}`, t.title)} (${t.level})`));

/** The page's readable text, placed inside #root until React mounts. */
function bodyForPath(urlPath: string, meta: PageMeta): string {
  const intro = `<h1>${escapeHtml(meta.title)}</h1><p>${escapeHtml(meta.description)}</p>`;
  if (urlPath === "/") {
    return (
      intro +
      sections
        .filter((section) => topics.some((t) => t.sectionSlug === section.slug))
        .map((section) => `<h2>${link(`/section/${section.slug}`, section.title)}</h2>${topicLinks(section.slug)}`)
        .join("")
    );
  }
  const [, kind, slug, sub] = urlPath.split("/");
  if (kind === "grammar" && !sub) {
    const topic = topics.find((t) => t.slug === slug)!;
    const section = sections.find((s) => s.slug === topic.sectionSlug);
    const paragraphs = topic.explanations.en
      .map((p) => (typeof p === "string" ? `<p>${escapeHtml(p)}</p>` : `<p>${escapeHtml(p.intro)}</p>${list(p.items.map(escapeHtml))}`))
      .join("");
    const exercises = topic.exercises.map((ex, i) => link(`/grammar/${topic.slug}/exercise/${i + 1}`, ex.title)).join(" · ");
    return (
      `<h1>${escapeHtml(topic.title)}</h1><p>Level ${topic.level}${section ? ` · ${link(`/section/${section.slug}`, section.title)}` : ""}</p>` +
      paragraphs +
      `<h2>Practice</h2><p>${exercises}</p>`
    );
  }
  if (kind === "section") {
    const section = sections.find((s) => s.slug === slug);
    return intro + (section?.intro ? `<p>${escapeHtml(section.intro)}</p>` : "") + topicLinks(slug);
  }
  if (kind === "contrast-practice" && slug) {
    const pair = CONTRAST_PAIRS.find((p) => p.slug === slug)!;
    const topicLink = (topicSlug: string) => {
      const topic = topics.find((t) => t.slug === topicSlug);
      return topic ? link(`/grammar/${topic.slug}`, topic.title) : "";
    };
    return (
      intro +
      `<p>Review: ${[topicLink(pair.topicASlug), topicLink(pair.topicBSlug)].filter(Boolean).join(" · ")}</p>` +
      `<h2>Practice sentences</h2>` +
      `<ol>${pair.questions.map((q) => `<li><p>${escapeHtml(q.sentence)} (${q.options.map(escapeHtml).join(" / ")})</p><p>${escapeHtml(q.explanation)}</p></li>`).join("")}</ol>`
    );
  }
  // The reference pages: their data, as plain lists, until React mounts.
  const rows = (items: string[]) => list(items.map(escapeHtml));
  switch (urlPath) {
    case "/contrast-practice":
      return intro + list(CONTRAST_PAIRS.map((p) => `${link(`/contrast-practice/${p.slug}`, p.title)}: ${escapeHtml(p.description)}`));
    case "/irregular-verbs":
      return intro + IRREGULAR_VERB_GROUPS.map((g) => `<h2>${escapeHtml(g.title)}</h2><p>${escapeHtml(g.description)}</p>${rows(g.verbs.map((v) => `${v.base} – ${v.past} – ${v.participle}`))}`).join("");
    case "/false-friends":
      return intro + FALSE_FRIENDS_LISTS.map((l) => `<h2>${escapeHtml(l.languageLabel)}</h2>${rows(l.entries.map((e) => `${e.word}: ${e.explanation}`))}`).join("");
    case "/confused-words":
      return intro + rows(CONFUSED_WORD_GROUPS.map((g) => `${g.words.join(" / ")}: ${g.explanation}`));
    case "/linking-words":
      return intro + LINKING_WORD_CATEGORIES.map((c) => `<h2>${escapeHtml(c.category)}</h2><p>${escapeHtml(c.summary)}</p>${rows(c.words.map((w) => `${w.word}: ${w.note}`))}`).join("");
    case "/punctuation":
      return intro + PUNCTUATION_RULES.map((r) => `<h2>${escapeHtml(r.mark)}</h2><p>${escapeHtml(r.summary)}</p>${rows(r.points)}`).join("");
    case "/british-vs-american":
      return (
        intro +
        `<h2>Grammar</h2>${rows(GRAMMAR_DIFFERENCES.map((d) => `${d.topic}: British "${d.british}", American "${d.american}"`))}` +
        `<h2>Spelling</h2>${rows(SPELLING_PATTERNS.map((p) => `${p.pattern}: ${p.examples.map((e) => `${e.british} / ${e.american}`).join(", ")}`))}` +
        `<h2>Vocabulary</h2>${rows(VOCAB_PAIRS.map((v) => `${v.british} / ${v.american}`))}`
      );
    case "/countries":
      return (
        intro +
        `<h2>English is the main language</h2>${rows(MAJORITY_ENGLISH_COUNTRIES.map((c) => c.name))}` +
        `<h2>English is an official language</h2>${rows(OFFICIAL_ENGLISH_COUNTRIES.map((c) => c.name))}`
      );
  }
  return intro;
}

function withBody(html: string, body: string): string {
  if (!html.includes('<div id="root"></div>')) throw new Error("prerender-heads: #root not found in dist/index.html");
  return html.replace('<div id="root"></div>', `<div id="root"><main class="prerender">${body}</main></div>`);
}


const template = readFileSync(path.join(dist, "index.html"), "utf-8");
const sitemap = readFileSync(path.join(dist, "sitemap.xml"), "utf-8");
const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].slice(SITE_URL.length) || "/");

/** The template with one page's title, description, canonical and OG/Twitter tags. */
function renderHead(urlPath: string, meta: PageMeta): string {
  const url = pageUrl(urlPath);
  let html = template;
  html = setTag(html, /(<title>)[^<]*(<\/title>)/, formatTitle(meta.title));
  html = setTag(html, /(<meta\s+name="description"\s+content=")[^"]*(")/, meta.description);
  html = setTag(html, /(<link rel="canonical" href=")[^"]*(")/, url);
  html = setTag(html, /(<meta property="og:title" content=")[^"]*(")/, meta.title);
  html = setTag(html, /(<meta\s+property="og:description"\s+content=")[^"]*(")/, meta.description);
  html = setTag(html, /(<meta name="twitter:title" content=")[^"]*(")/, meta.title);
  html = setTag(html, /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/, meta.description);
  return setTag(html, /(<meta property="og:url" content=")[^"]*(")/, url);
}

function writePage(urlPath: string, meta: PageMeta) {
  const outPath = path.join(dist, `${urlPath.slice(1)}.html`);
  mkdirSync(path.dirname(outPath), { recursive: true });
  writeFileSync(outPath, withBody(renderHead(urlPath, meta), bodyForPath(urlPath, meta)), "utf-8");
}

let written = 0;
for (const urlPath of paths) {
  if (urlPath === "/") {
    // index.html already carries the home page's tags; it only needs the text.
    writeFileSync(path.join(dist, "index.html"), withBody(template, bodyForPath("/", STATIC_PAGES["/"])), "utf-8");
    continue;
  }
  const meta = metaForPath(urlPath);
  if (!meta) throw new Error(`prerender-heads: no title/description for sitemap URL ${urlPath}`);
  writePage(urlPath, meta);
  written++;
}

// Routes the app links to but the sitemap leaves out. There is no SPA
// catch-all rewrite (unknown paths get a real 404), so each needs its own file
// or a direct hit or refresh would 404. ExercisePage reads /exercise/2 as the
// second exercise and anything else as the first; the links use 1 and 2.
writePage("/progress", STATIC_PAGES["/progress"]);
written++;
for (const topic of topics) {
  topic.exercises.slice(0, 2).forEach((exercise, i) => {
    const meta = exerciseMeta(topic.title, exercise.title);
    writePage(`/grammar/${topic.slug}/exercise/${i + 1}`, { ...meta, description: toMetaDescription(meta.description) });
    written++;
  });
}

// Vercel serves 404.html from the output root (dist/, not dist/grammatica)
// with a 404 status for any path no file matches. The SPA boots from it and
// its "*" route renders NotFoundPage, so visitors still get the app's page.
let notFound = renderHead("/404", STATIC_PAGES["/404"]);
notFound = notFound.replace(/\s*<link rel="canonical"[^>]*>/, "").replace(/\s*<meta property="og:url"[^>]*>/, "");
notFound = notFound.replace(/(<meta\s+name="description")/, `<meta name="robots" content="noindex" />\n    $1`);
writeFileSync(path.resolve(dist, "../404.html"), notFound, "utf-8");

console.log(`✓ prerendered heads for ${written} routes + 404.html → dist/`);
