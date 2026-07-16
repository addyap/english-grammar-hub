# English Grammar Hub

A simple English grammar reference site: rules explained in French, Spanish,
Portuguese, Italian, German, Russian, Arabic and Mandarin Chinese, with
self-correcting, explained 10-question exercises in English.

## Stack

Vite + React + TypeScript + Tailwind + shadcn/ui primitives + react-router-dom.
No backend — progress (best score per exercise) is stored in `localStorage`.
Deploys to Vercel with zero config (static build, auto-detected).

## Content model

Everything lives under `src/data`:

- `sections.ts` — the full ~15-section curriculum map (CEFR A1–C2). Sections
  with no topics yet render as "coming soon" on the homepage.
- `types.ts` — `GrammarTopicContent` shape: slug, section, CEFR level,
  per-language explanation paragraphs (`en` required, others optional with
  English fallback), a `paragraphKinds` array tagging each paragraph's role
  (`use` | `form` | `mistake` | `markers`, same length/order as every
  language's paragraph array — it's shared across languages because
  paragraph count and meaning-per-index must already match 1:1), and
  exactly two 10-question exercises.
- `topics/*.ts` — one file per built topic. Add a new grammar point by
  creating a file in this shape and registering it in `topics/index.ts`.

Currently built: Present Simple, Present Continuous, Past Simple (Tenses),
Prepositions of Time, Prepositions of Place (Prepositions). The rest of the
curriculum in `sections.ts` is scoped but not yet written — same template,
just more content.

## Explanation template — every topic follows this shape

Every topic's `explanations.en` (and its translations) must cover four
things, in this order. The number of paragraphs isn't fixed — a topic that's
really one structure (a tense) fits it in four; a topic that's really a
small set of parallel rules (prepositions: at/in/on) reasonably needs one
paragraph per rule before the last two. What must never be skipped or
reordered is: use and form come first, a common-mistake paragraph always
exists, and it always comes right before the closing markers paragraph.

1. **Use** — when/why this structure applies (the meaning, not the form).
2. **Form** — the structural pattern: what changes, what stays the same.
   (For a multi-rule topic like prepositions, paragraphs 1–2 become one
   paragraph per rule, since each rule's use and form are the same
   sentence — see `prepositionsOfTime.ts`.)
3. **Common mistake** — the single highest-value error, named explicitly and
   tied to *why* it happens where possible (most often L1 interference —
   e.g. Romance languages have no do-support, so learners drop or double the
   auxiliary: "She doesn't plays", "I working"; or a single L1 preposition
   covering at/in/on causes overuse of one form in English). Always give one
   wrong vs. right example inline, in English, so it reads the same
   regardless of which language tab is open. This paragraph is mandatory —
   never skip it just because a topic doesn't have an auxiliary. Verify the
   causal claim actually fits the topic's dominant learner L1s (e.g. "this
   language doesn't mark verbs for person" doesn't explain French/Spanish/
   Italian/Portuguese speakers dropping the 3rd-person -s, since those
   languages conjugate fully — the real cause there is that English marks
   almost nothing, so the one exception is what gets forgotten). Tag every
   paragraph carrying this content as `"mistake"` in `paragraphKinds` — it
   renders as a highlighted callout, so don't let it balloon past ~2-3
   sentences; split a second mistake into its own `"mistake"` paragraph
   rather than merging two errors into one dense block.
4. **Markers** — the words/contexts that signal this structure. Time words
   for tenses; the equivalent trigger words/contexts for anything else
   (e.g. "if" for conditionals).

Keep individual paragraphs short and single-idea — if a paragraph needs
"and" to bolt on a second unrelated point, split it. A wall of an 8+ line
paragraph is a readability regression even if every fact in it is correct.

See `topics/presentSimple.ts` (single-structure shape) and
`topics/prepositionsOfTime.ts` (multi-rule shape) for worked examples.

## Adding a language

Add the code to `LANGUAGES` in `src/data/types.ts` (mark `rtl: true` if
needed), then add that key to each topic's `explanations` object. No
component changes required — the floating reference and topic page both
render whatever languages a topic has.

## Development

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — local dev server
- `npm run build` — typecheck + production build
- `npm run lint` — oxlint
