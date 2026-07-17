/**
 * Content validator — runs before every build (see package.json "build").
 *
 * Type-checking (tsc) proves the *shape* is right; this proves the *content*
 * invariants that types can't express, across every topic and language at
 * once. The whole point is scale: 9 languages hand-edited in lockstep across
 * ~100 topics WILL drift, and a per-page dev-mode console.warn only fires when
 * a human happens to open that exact page in that exact language. This fails
 * the build instead, so a mismatched topic can't ship.
 */
import { topics } from "../src/data/topics";
import { topicsRegistry } from "../src/data/topics/registry";
import { LANGUAGES, type ExplanationParagraph, type ExplanationParagraphKind } from "../src/data/types";
import { sections } from "../src/data/sections";

const ALLOWED_KINDS: ExplanationParagraphKind[] = ["use", "form", "mistake", "markers"];
const errors: string[] = [];
const seenSlugs = new Set<string>();
const sectionSlugs = new Set(sections.map((s) => s.slug));

const isListParagraph = (p: ExplanationParagraph): p is { intro: string; items: string[] } =>
  typeof p === "object" && p !== null;

for (const t of topics) {
  const id = t.slug || "(topic with missing slug)";
  const fail = (msg: string) => errors.push(`${id}: ${msg}`);

  // --- identity ---
  if (!t.slug) fail("missing slug");
  else if (seenSlugs.has(t.slug)) fail("duplicate slug");
  if (t.slug) seenSlugs.add(t.slug);
  if (!sectionSlugs.has(t.sectionSlug)) fail(`sectionSlug "${t.sectionSlug}" is not defined in sections.ts`);
  if (!t.title?.trim()) fail("missing title");
  if (!t.level) fail("missing CEFR level");

  // --- paragraphKinds shape (the template contract) ---
  const kinds = t.paragraphKinds ?? [];
  const n = kinds.length;
  if (n === 0) fail("paragraphKinds is empty");
  for (const k of kinds) if (!ALLOWED_KINDS.includes(k)) fail(`invalid paragraphKind "${k}"`);
  if (!kinds.includes("mistake")) fail("no 'mistake' paragraph — the common-mistake beat is mandatory");
  const firstMarkers = kinds.indexOf("markers");
  const lastMistake = kinds.lastIndexOf("mistake");
  if (firstMarkers === -1) fail("no 'markers' paragraph");
  else {
    if (kinds[n - 1] !== "markers") fail(`last paragraph must be 'markers' (got "${kinds[n - 1]}")`);
    for (let i = firstMarkers; i < n; i++) if (kinds[i] !== "markers") fail(`non-markers paragraph at index ${i} inside the closing markers block`);
    if (lastMistake > firstMarkers) fail("a 'mistake' paragraph appears after 'markers' — mistake must come before markers");
  }

  // --- explanations: every present language matches paragraphKinds 1:1 ---
  if (!t.explanations?.en) fail("missing required 'en' explanation");
  for (const { code } of LANGUAGES) {
    const arr = t.explanations?.[code];
    if (!arr) continue; // non-en languages are optional (fall back to en)
    if (arr.length !== n) fail(`language '${code}' has ${arr.length} paragraphs but paragraphKinds has ${n} — they must match 1:1`);
    arr.forEach((p, i) => {
      if (typeof p === "string") {
        if (!p.trim()) fail(`'${code}' paragraph ${i} is an empty string`);
      } else if (isListParagraph(p)) {
        if (!p.intro?.trim()) fail(`'${code}' paragraph ${i} (list) has an empty intro`);
        if (!Array.isArray(p.items) || p.items.length === 0) fail(`'${code}' paragraph ${i} (list) has no items`);
        else p.items.forEach((it, j) => { if (typeof it !== "string" || !it.trim()) fail(`'${code}' paragraph ${i} item ${j} is empty`); });
      } else {
        fail(`'${code}' paragraph ${i} is neither a string nor { intro, items }`);
      }
    });
  }

  // --- exercises: exactly two, ten questions each, answers valid ---
  if (!Array.isArray(t.exercises) || t.exercises.length !== 2) {
    fail(`must have exactly 2 exercises (got ${t.exercises?.length ?? 0})`);
  }
  (t.exercises ?? []).forEach((ex, ei) => {
    const exLabel = ex?.title?.trim() || `#${ei + 1}`;
    if (!ex?.title?.trim()) fail(`exercise ${ei + 1} missing title`);
    if (ex?.questions?.length !== 10) fail(`exercise "${exLabel}" has ${ex?.questions?.length ?? 0} questions (must be exactly 10)`);
    (ex?.questions ?? []).forEach((q, qi) => {
      if (!q.sentence?.includes("___")) fail(`exercise "${exLabel}" Q${qi + 1} has no ___ gap`);
      if (!Array.isArray(q.options) || q.options.length < 2) fail(`exercise "${exLabel}" Q${qi + 1} needs at least 2 options`);
      else if (!q.options.includes(q.answer)) fail(`exercise "${exLabel}" Q${qi + 1} — answer "${q.answer}" is not among its options [${q.options.join(", ")}]`);
      if (!q.explanation?.trim()) fail(`exercise "${exLabel}" Q${qi + 1} missing explanation`);
    });
  });
}

// --- registry.ts (the lightweight, browser-loaded mirror used for lazy
// loading) must stay in exact sync with topics/index.ts (the eager,
// Node-only source of truth) — drift here means either a topic never shows
// up in lists (HomePage/SectionPage), or its dynamic import 404s.
{
  const byRegistrySlug = new Map(topicsRegistry.map((r) => [r.slug, r]));
  for (const t of topics) {
    const r = byRegistrySlug.get(t.slug);
    if (!r) {
      errors.push(`${t.slug}: missing from topics/registry.ts — HomePage/SectionPage counts and lazy-loading will be wrong`);
      continue;
    }
    if (r.sectionSlug !== t.sectionSlug) errors.push(`${t.slug}: registry.ts sectionSlug "${r.sectionSlug}" doesn't match topic's "${t.sectionSlug}"`);
    if (r.title !== t.title) errors.push(`${t.slug}: registry.ts title "${r.title}" doesn't match topic's "${t.title}"`);
    if (r.level !== t.level) errors.push(`${t.slug}: registry.ts level "${r.level}" doesn't match topic's "${t.level}"`);
  }
  const byTopicSlug = new Set(topics.map((t) => t.slug));
  for (const r of topicsRegistry) {
    if (!byTopicSlug.has(r.slug)) errors.push(`registry.ts has a stale entry for slug "${r.slug}" — no matching topic in topics/index.ts`);
  }
}

if (errors.length) {
  console.error(`\n✗ Content validation failed — ${errors.length} issue(s):\n`);
  for (const e of errors) console.error("  • " + e);
  console.error("");
  process.exit(1);
}

console.log(`✓ Content valid — ${topics.length} topics, all present languages in sync with paragraphKinds, exercises well-formed.`);
