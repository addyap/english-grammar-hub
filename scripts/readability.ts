/**
 * CEFR readability check: long sentences in the English explanations.
 *
 * Readability is measured on the English prose (the other 8 languages are
 * translations of it), so only `explanations.en` is scanned.
 *
 * Scope matters, and got re-derived by hand once because it wasn't written
 * down. A paragraph is either a plain string or { intro, items[] }:
 *   --scope=prose  plain paragraphs + bullet intros   (the historical metric,
 *                  used by every "A1/A2 sentences over 45 words" commit)
 *   --scope=all    the above plus individual bullet items
 * Bullet items were excluded historically because list structure already
 * breaks them up visually. Both scopes are reported; the exit code follows
 * whichever --scope selects.
 *
 * Usage:
 *   tsx scripts/readability.ts                              # A1/A2, >45w, prose
 *   tsx scripts/readability.ts --scope=all
 *   tsx scripts/readability.ts --levels=B1,B2 --max=60
 */
import { topics } from "../src/data/topics/index";

const arg = (name: string, fallback: string) =>
  process.argv.find((a) => a.startsWith(`--${name}=`))?.split("=")[1] ?? fallback;

const MAX = Number(arg("max", "45"));
const LEVELS = arg("levels", "A1,A2").split(",");
const SCOPE = arg("scope", "prose");
if (SCOPE !== "prose" && SCOPE !== "all") throw new Error(`--scope must be prose or all`);

const words = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;
const sentences = (s: string) =>
  s.split(/(?<=[.!?])\s+/).map((x) => x.trim()).filter(Boolean);

interface Hit { slug: string; para: number; item?: number; words: number; text: string }
const prose: Hit[] = [];
const items: Hit[] = [];

for (const t of topics as any[]) {
  if (!LEVELS.includes(t.level)) continue;
  (t.explanations.en as any[]).forEach((p, para) => {
    const units: [Hit["item"], string][] =
      typeof p === "string"
        ? [[undefined, p]]
        : [[undefined, p.intro], ...(p.items ?? []).map((x: string, i: number) => [i, x] as [number, string])];
    for (const [item, text] of units) {
      for (const s of sentences(text)) {
        if (words(s) <= MAX) continue;
        (item === undefined ? prose : items).push({ slug: t.slug, para, item, words: words(s), text: s });
      }
    }
  });
}

const show = (label: string, hits: Hit[]) => {
  console.log(`\n${label} (${hits.length})`);
  for (const h of [...hits].sort((a, b) => b.words - a.words)) {
    const where = h.item === undefined ? `p${h.para}` : `p${h.para}[${h.item}]`;
    console.log(`  ${h.words}w  ${h.slug} ${where}  ${h.text.slice(0, 70)}…`);
  }
};

show("paragraphs and bullet intros", prose);
show("bullet items", items);

const counted = SCOPE === "all" ? prose.length + items.length : prose.length;
console.log(
  `\n${LEVELS.join("/")} sentences over ${MAX} words (scope=${SCOPE}): ${counted}`
);
process.exit(counted > 0 ? 1 : 0);
