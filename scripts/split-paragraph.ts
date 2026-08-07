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
 * Targeting bullet paragraphs: a paragraph is either a plain string or
 * { intro, items[] }. Pass `item: "intro"` or `item: <index>` to target one
 * part of a bullet paragraph. Omit `item` for a plain string paragraph.
 *
 * Repeated edits to one paragraph: applyEdits threads each edit's result
 * into the next, so several edits to the SAME (slug, lang, para, item) in
 * one call work in sequence. (Before this was threaded, the second such edit
 * always failed MISS(source), because the first had already rewritten the
 * literal it was looking for.)
 *
 * Usage:
 *   import { alignmentReport, applyEdits } from "./split-paragraph";
 *   alignmentReport("zero-article", 2);            // which delimiters align?
 *   alignmentReport("make-vs-do", 1, 0);           // ...for bullet item 0
 *   applyEdits([{ slug, para, lang, from, to }, ...]);
 */
import { readFileSync, writeFileSync } from "node:fs";
import { topics } from "../src/data/topics/index";

export const LANGS = ["en", "fr", "es", "pt", "it", "de", "ru", "ar", "zh"] as const;
export type Lang = (typeof LANGS)[number];

/** Which part of a paragraph an edit targets. Omit for a plain string paragraph. */
export type ItemRef = "intro" | number;

type Para = string | { intro: string; items: string[] };

const fileFor = (slug: string) => {
  // topic files are camelCase of the slug; resolve by scanning the barrel
  const idx = readFileSync("src/data/topics/index.ts", "utf8");
  const t = (topics as any[]).find((x) => x.slug === slug);
  if (!t) throw new Error(`unknown slug: ${slug}`);
  const m = idx.match(new RegExp(`import \\{ (\\w+) \\} from "\\./([\\w]+)"`, "g")) || [];
  for (const line of m) {
    const file = line.match(/from "\.\/(\w+)"/)![1];
    const src = readFileSync(`src/data/topics/${file}.ts`, "utf8");
    if (src.includes(`slug: "${slug}"`)) return `src/data/topics/${file}.ts`;
  }
  throw new Error(`no source file found for slug: ${slug}`);
};

/** Read one addressable string out of the parsed module. Throws on a bad address. */
function readTarget(slug: string, lang: string, para: number, item?: ItemRef): string {
  const t = (topics as any[]).find((x) => x.slug === slug);
  if (!t) throw new Error(`unknown slug: ${slug}`);
  const p: Para = t.explanations[lang][para];
  if (p === undefined) throw new Error(`${slug} ${lang}: no paragraph ${para}`);
  if (typeof p === "string") {
    if (item !== undefined) throw new Error(`${slug} p${para} ${lang}: plain paragraph, but item ${item} was given`);
    return p;
  }
  if (item === undefined) throw new Error(`${slug} p${para} ${lang}: bullet paragraph — pass item: "intro" or an index`);
  if (item === "intro") return p.intro;
  const v = p.items?.[item];
  if (v === undefined) throw new Error(`${slug} p${para} ${lang}: no item ${item} (has ${p.items?.length ?? 0})`);
  return v;
}

/**
 * Report which delimiters are present in the same count across all 9 languages.
 * Pass `item` to inspect one part of a bullet paragraph.
 */
export function alignmentReport(slug: string, para: number, item?: ItemRef) {
  const text = (l: string) => {
    if (item !== undefined) return readTarget(slug, l, para, item);
    const p: Para = (topics as any[]).find((x) => x.slug === slug).explanations[l][para];
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
  const where = item === undefined ? `p${para}` : `p${para}[${item}]`;
  console.log(`${slug} ${where}\n${rows.join("\n")}`);
}

export interface Edit {
  slug: string;
  para: number;
  lang: Lang;
  from: string;
  to: string;
  /** "intro" or an index, for bullet paragraphs. Omit for plain paragraphs. */
  item?: ItemRef;
}

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
  // Latest value per addressable string, so repeated edits to one target chain.
  const current = new Map<string, string>();
  const keyOf = (e: Edit) => `${e.slug}|${e.lang}|${e.para}|${e.item ?? "-"}`;

  for (const [file, list] of byFile) {
    let src = readFileSync(file, "utf8");
    for (const e of list) {
      const key = keyOf(e);
      let oldText: string;
      try {
        oldText = current.get(key) ?? readTarget(e.slug, e.lang, e.para, e.item);
      } catch (err) {
        console.error(`  BAD  ${key}: ${(err as Error).message}`);
        missed++;
        continue;
      }
      if (!oldText.includes(e.from)) {
        console.error(`  MISS ${key}: "${e.from.slice(0, 45)}"`);
        missed++;
        continue;
      }
      const newText = oldText.replace(e.from, e.to);
      const oldLit = JSON.stringify(oldText);
      if (!src.includes(oldLit)) {
        console.error(`  MISS(source) ${key}`);
        missed++;
        continue;
      }
      src = src.replace(oldLit, JSON.stringify(newText));
      current.set(key, newText);
      applied++;
    }
    writeFileSync(file, src);
  }
  console.log(`applied ${applied}, missed ${missed}`);
  if (missed) process.exit(1);
}
