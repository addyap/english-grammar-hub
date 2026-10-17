/**
 * Writes one HTML file per sitemap URL (dist/grammatica/grammar/foo.html, …),
 * each a copy of dist/grammatica/index.html with that page's own <title>, description,
 * canonical and OG/Twitter tags. Without this every route is served the
 * home page's head until JavaScript runs, so Google saw each topic declare
 * the home page as its canonical and stopped indexing them. cleanUrls maps
 * /grammatica/grammar/foo to grammatica/grammar/foo.html; useSeo still keeps
 * the tags right on client navigation. Also writes the app-only routes and
 * dist/404.html, since vercel.json has no SPA catch-all rewrite.
 * Relative imports only — runs under plain tsx, like generate-sitemap.ts.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { topics } from "../src/data/topics";
import { sections } from "../src/data/sections";
import { CONTRAST_PAIRS } from "../src/data/contrastExercises";
import { STATIC_PAGES, exerciseMeta, type PageMeta } from "../src/lib/pageMeta";
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

/** Replaces one tag's value in the template, failing loudly if the tag is gone. */
function setTag(html: string, pattern: RegExp, value: string): string {
  if (!pattern.test(html)) throw new Error(`prerender-heads: ${pattern} not found in dist/index.html`);
  return html.replace(pattern, (_m, before: string, after: string) => `${before}${escapeHtml(value)}${after}`);
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
  return html.replace(
    /(<meta property="og:site_name"[^>]*>)/,
    `$1\n    <meta property="og:url" content="${escapeHtml(url)}" />`,
  );
}

function writePage(urlPath: string, meta: PageMeta) {
  const outPath = path.join(dist, `${urlPath.slice(1)}.html`);
  mkdirSync(path.dirname(outPath), { recursive: true });
  writeFileSync(outPath, renderHead(urlPath, meta), "utf-8");
}

let written = 0;
for (const urlPath of paths) {
  if (urlPath === "/") continue; // index.html already carries the home page's tags
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
