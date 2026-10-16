/**
 * Writes one HTML file per sitemap URL (dist/grammatica/grammar/foo.html, …),
 * each a copy of dist/grammatica/index.html with that page's own <title>, description,
 * canonical and OG/Twitter tags. Without this every route is served the
 * home page's head until JavaScript runs, so Google saw each topic declare
 * the home page as its canonical and stopped indexing them. Vercel serves
 * these files ahead of the SPA rewrite (cleanUrls maps /grammatica/grammar/foo
 * to grammatica/grammar/foo.html); useSeo still keeps the tags right on client navigation.
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
  if (urlPath === "/") continue; // index.html already carries the home page's tags
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
  html = html.replace(
    /(<meta property="og:site_name"[^>]*>)/,
    `$1\n    <meta property="og:url" content="${escapeHtml(url)}" />`,
  );

  const outPath = path.join(dist, `${urlPath.slice(1)}.html`);
  mkdirSync(path.dirname(outPath), { recursive: true });
  writeFileSync(outPath, html, "utf-8");
  written++;
}

console.log(`✓ prerendered heads for ${written} routes → dist/`);
