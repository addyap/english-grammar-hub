/**
 * Safe cross-language paragraph editor.
 *
 * Bulk content edits on this repo have repeatedly failed in three ways:
 *   1. Only one delimiter was tested for cross-language alignment (";"),
 *      so paragraphs that split cleanly at ":" or "—" were wrongly written
 *      off as needing manual rewriting.
 *   2. Anchor strings were taken from the English text, so they silently
 *      matched nothing in the other 8 languages.
 *   3. The source escapes quotes (\"run\"), so plain-quote search strings
 *      missed English specifically — and since readability is measured on
 *      the English prose, that reads as "no progress" while a commit
 *      message claims otherwise.
 *
 * This tool removes all three. It never searches the source for prose.
 * It locates a paragraph by (slug, language, index) from the parsed module,
 * serialises the old value with JSON.stringify to get the exact source
 * literal, and swaps in JSON.stringify(newValue). Escaping is handled by
 * the serialiser, so quotes, typographic quotes and RTL text are safe.
 *
 * Usage:
 *   import { alignmentReport, applyEdits } from "./split-paragraph";
 *   alignmentReport("zero-article", 2);       // which delimiters align?
 *   applyEdits([{ slug, para, lang, from, to }, ...]);
 */
import { readFileSync, writeFileSync } from "node:fs";
import { topics } from "../src/data/topics/index";

export const LANGS = ["en", "fr", "es", "pt", "it", "de", "ru", "ar", "zh"] as const;
export type Lang = (typeof LANGS)[number];

type Para = string | { intro: string; items: string[] };

const fileFor = (slug: string) => {
  // topic files are camelCase of the slug; resolve by scanning the barrel
  const idx = readFileSync("src/data/topics/index.ts", "utf8");
  const t = (topics as any[]).find((x) => x.slug === slug);
  if (!t) throw new Error(`unknown slug: ${slug}`);
  const m = idx.match(new RegExp(`import \\{ (\\w+) \\} from "\\./([\\w]+)"`, "g")) || [];
  for (const line of m) {
    const name = line.match(/import \{ (\w+) \}/)![1];
    const file = line.match(/from "\.\/(\w+)"/)![1];
    const src = readFileSync(`src/data/topics/${file}.ts`, "utf8");
    if (src.includes(`slug: "${slug}"`)) return `src/data/topics/${file}.ts`;
  }
  throw new Error(`no source file found for slug: ${slug}`);
};

/** Report which delimiters are present in the same count across all 9 languages. */
export function alignmentReport(slug: string, para: number) {
  const t = (topics as any[]).find((x) => x.slug === slug);
  const text = (l: string) => {
    const p: Para = t.explanations[l][para];
    return typeof p === "string" ? p : p.intro + " " + p.items.join(" ");
  };
  const DELIMS: [string, RegExp][] = [
    [";", /;\s|؛/g],
    [":", /:\s|:/g],
    ["—", / — |——/g],
  ];
  const rows = DELIMS.map(([name, re]) => {
    const counts = LANGS.map((l) => (text(l).match(re) || []).length);
    const aligned = counts.every((c) => c === counts[0]) && counts[0] > 0;
    return `  ${name}  counts=${counts.join(",")}  ${aligned ? "ALIGNED ✓" : "not aligned"}`;
  });
  console.log(`${slug} p${para}\n${rows.join("\n")}`);
}

export interface Edit { slug: string; para: number; lang: Lang; from: string; to: string; }

/**
 * Apply substring edits inside specific paragraphs. The substring is matched
 * against the PARSED paragraph (not the source), so escaping never interferes.
 * Reports every miss loudly and exits non-zero rather than skipping silently.
 */
export function applyEdits(edits: Edit[]) {
  let applied = 0, missed = 0;
  const byFile = new Map<string, Edit[]>();
  for (const e of edits) {
    const f = fileFor(e.slug);
    byFile.set(f, [...(byFile.get(f) || []), e]);
  }
  for (const [file, list] of byFile) {
    let src = readFileSync(file, "utf8");
    for (const e of list) {
      const t = (topics as any[]).find((x) => x.slug === e.slug);
      const oldPara = t.explanations[e.lang][e.para];
      if (typeof oldPara !== "string") { console.error(`  SKIP ${e.slug} p${e.para} ${e.lang}: bullet paragraph`); missed++; continue; }
      if (!oldPara.includes(e.from)) { console.error(`  MISS ${e.slug} p${e.para} ${e.lang}: "${e.from.slice(0, 45)}"`); missed++; continue; }
      const newPara = oldPara.replace(e.from, e.to);
      const oldLit = JSON.stringify(oldPara);
      if (!src.includes(oldLit)) { console.error(`  MISS(source) ${e.slug} p${e.para} ${e.lang}`); missed++; continue; }
      src = src.replace(oldLit, JSON.stringify(newPara));
      applied++;
    }
    writeFileSync(file, src);
  }
  console.log(`applied ${applied}, missed ${missed}`);
  if (missed) process.exit(1);
}
