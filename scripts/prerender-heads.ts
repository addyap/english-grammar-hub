/**
 * Writes one HTML file per sitemap URL (dist/grammatica/grammar/foo.html, …),
 * each a copy of dist/grammatica/index.html with that page's own <title>, description,
 * canonical and OG/Twitter tags. Without this every route is served the
 * home page's head until JavaScript runs, so Google saw each topic declare
 * the home page as its canonical and stopped indexing them. Vercel serves
 * these files ahead of the SPA rewrite (cleanUrls maps /grammatica/grammar/foo
 * to grammatica/grammar/foo.html); useSeo still keeps the tags right on client navigation.
 * Each file also gets the page's text inside #root (the English explanation
 * for a topic, the topic list for a section), so crawlers and link previews
 * that don't run JavaScript see real content. createRoot replaces it on mount.
 * Relative imports only — runs under plain tsx, like generate-sitemap.ts.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { topics } from "../src/data/topics";
import { sections } from "../src/data/sections";
import { CONTRAST_PAIRS } from "../src/data/contrastExercises";
import { STATIC_PAGES, type PageMeta } from "../src/lib/pageMeta";
import { SITE_URL, pageUrl, formatTitle, toMetaDescription, paragraphToPlainText } from "../src/lib/seo";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.resolve(__dirname, "../dist/grammatica");

/** Same title and description each page passes to useSeo. */
function metaForPath(urlPath: string): PageMeta | undefined {
  if (urlPath in STATIC_PAGES) return STATIC_PAGES[urlPath as keyof typeof STATIC_PAGES];
  const [, kind, slug] = urlPath.split("/");
  if (kind === "grammar") {
    const topic = topics.find((t) => t.slug === slug);
    return topic && { title: topic.title, description: toMetaDescription(paragraphToPlainText(topic.explanations.en[0])) };
  }
  if (kind === "section") {
    const section = sections.find((s) => s.slug === slug);
    return section && { title: section.title, description: section.description };
  }
  if (kind === "contrast-practice") {
    const pair = CONTRAST_PAIRS.find((p) => p.slug === slug);
    return pair && { title: pair.title, description: pair.description };
  }
  return undefined;
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

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
  const [, kind, slug] = urlPath.split("/");
  if (kind === "grammar") {
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
  if (kind === "section") return intro + topicLinks(slug);
  return intro;
}

function withBody(html: string, body: string): string {
  if (!html.includes('<div id="root"></div>')) throw new Error("prerender-heads: #root not found in dist/index.html");
  return html.replace('<div id="root"></div>', `<div id="root"><main class="prerender">${body}</main></div>`);
}

/** Replaces one tag's value in the template, failing loudly if the tag is gone. */
function setTag(html: string, pattern: RegExp, value: string): string {
  if (!pattern.test(html)) throw new Error(`prerender-heads: ${pattern} not found in dist/index.html`);
  return html.replace(pattern, (_m, before: string, after: string) => `${before}${escapeHtml(value)}${after}`);
}

const template = readFileSync(path.join(dist, "index.html"), "utf-8");
const sitemap = readFileSync(path.join(dist, "sitemap.xml"), "utf-8");
const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].slice(SITE_URL.length) || "/");

let written = 0;
for (const urlPath of paths) {
  if (urlPath === "/") {
    // index.html already carries the home page's tags; it only needs the text.
    writeFileSync(path.join(dist, "index.html"), withBody(template, bodyForPath("/", STATIC_PAGES["/"])), "utf-8");
    continue;
  }
  const meta = metaForPath(urlPath);
  if (!meta) throw new Error(`prerender-heads: no title/description for sitemap URL ${urlPath}`);

  const url = pageUrl(urlPath);
  let html = template;
  html = setTag(html, /(<title>)[^<]*(<\/title>)/, formatTitle(meta.title));
  html = setTag(html, /(<meta\s+name="description"\s+content=")[^"]*(")/, meta.description);
  html = setTag(html, /(<link rel="canonical" href=")[^"]*(")/, url);
  html = setTag(html, /(<meta property="og:title" content=")[^"]*(")/, meta.title);
  html = setTag(html, /(<meta\s+property="og:description"\s+content=")[^"]*(")/, meta.description);
  html = setTag(html, /(<meta name="twitter:title" content=")[^"]*(")/, meta.title);
  html = setTag(html, /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/, meta.description);
  html = setTag(html, /(<meta property="og:url" content=")[^"]*(")/, url);

  html = withBody(html, bodyForPath(urlPath, meta));

  const outPath = path.join(dist, `${urlPath.slice(1)}.html`);
  mkdirSync(path.dirname(outPath), { recursive: true });
  writeFileSync(outPath, html, "utf-8");
  written++;
}

console.log(`✓ prerendered heads for ${written} routes → dist/`);
