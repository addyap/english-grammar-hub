/**
 * Generates public/sitemap.xml from the current topic/section registry, so
 * it can never drift from what's actually built. Runs as part of `npm run
 * build` (see package.json); writing to public/ means Vite copies the file
 * into dist/ verbatim. Uses relative imports only (no "@/" alias) — this
 * runs under plain tsx, which doesn't resolve tsconfig path aliases.
 */
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { topics } from "../src/data/topics";
import { sections } from "../src/data/sections";
import { SITE_URL } from "../src/lib/seo";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

type UrlEntry = { loc: string; priority: number };

const urls: UrlEntry[] = [
  { loc: "/", priority: 1.0 },
  ...sections
    .filter((s) => topics.some((t) => t.sectionSlug === s.slug))
    .map((s): UrlEntry => ({ loc: `/section/${s.slug}`, priority: 0.7 })),
  ...topics.map((t): UrlEntry => ({ loc: `/grammar/${t.slug}`, priority: 0.9 })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((u) => `  <url>\n    <loc>${SITE_URL}${u.loc}</loc>\n    <priority>${u.priority.toFixed(1)}</priority>\n  </url>`)
  .join("\n")}
</urlset>
`;

const outPath = path.resolve(__dirname, "../public/sitemap.xml");
writeFileSync(outPath, xml, "utf-8");
console.log(`✓ sitemap.xml written with ${urls.length} URLs → ${outPath}`);
