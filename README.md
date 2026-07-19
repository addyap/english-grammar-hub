# Grammatica

**English grammar, in your language.** A simple English grammar reference
site: rules explained in French, Spanish, Portuguese, Italian, German,
Russian, Arabic and Mandarin Chinese, with self-correcting, explained
10-question exercises in English.

## Stack

Vite + React + TypeScript + Tailwind + shadcn/ui primitives + react-router-dom.
No backend — progress (best score per exercise) is stored in `localStorage`.
Deploys to Vercel (static build, auto-detected). `vercel.json` rewrites every
path to `index.html` so react-router deep links survive a refresh — without
it, reloading any page other than `/` returns Vercel's 404.

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
  creating a file in this shape, then registering it in **two** places:
  `topics/index.ts` (the eager list, imported only by `scripts/validate.ts`)
  and `topics/registry.ts` (the lightweight `{slug, sectionSlug, title,
  level, file}` mirror that ships to the browser — see "Code splitting"
  below). `npm run validate` fails the build if the two ever disagree.

The curriculum in `sections.ts` is being built out section by section —
check the homepage for current coverage. Sections with no topics yet render
as "coming soon"; a section stays open until every topic on its roadmap is
built, same template each time, just more content.

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

Each paragraph is either a plain string (prose) or `{ intro, items }`
(rendered as a lead-in line plus a bulleted list). Use the list shape for
a **form** paragraph that's genuinely a set of parallel enumerated rules
(spelling patterns like -s/-ing/-ed, grouped fixed expressions) — bullets
make those scannable in a way semicolon-chained prose never is. Don't use
the list shape for **mistake** paragraphs: those are a causal argument
("this happens because X, so Y is easy to forget"), and chopping that into
bullets breaks the logic. A single **use** sentence never needs to be a
list either.

See `topics/presentSimple.ts` (single-structure shape, includes a bulleted
spelling-rule paragraph) and `topics/prepositionsOfTime.ts` (multi-rule
shape) for worked examples.

## Code splitting

`topics/index.ts` eagerly imports every topic — that's fine for
`scripts/validate.ts` (a Node script, never shipped) but would bundle every
topic's 9-language content into one browser chunk if any page imported it
directly. Pages don't: `HomePage`/`SectionPage` import `topics/registry.ts`
(bytes, not kilobytes, per topic — just enough for lists and counts), and
`TopicPage`/`ExercisePage` call `loadTopic(slug)` from `topics/lazy.ts`,
which uses `import.meta.glob` so Vite emits one chunk per topic file,
fetched only when that topic's page is actually visited. Both page
components hold the topic in `useState<GrammarTopicContent | null |
undefined>` (`undefined` = loading, `null` = not found) since the load is
now async. `loadTopic()` resolves a slug to a file via `registry.ts` — a
topic missing from `registry.ts` doesn't just fall out of `HomePage`/
`SectionPage` listings, its own `TopicPage`/`ExercisePage` renders "not
found" too, since there's no other way to find its file. `scripts/
validate.ts` catches this by diffing `registry.ts` against `topics/
index.ts` on every build, so a forgotten registration fails CI instead of
shipping a dead link.

## Adding a language

Add the code to `LANGUAGES` in `src/data/types.ts` (mark `rtl: true` if
needed), then add that key to each topic's `explanations` object. No
component changes required — the floating reference and topic page both
render whatever languages a topic has.

## SEO

The app is a client-only SPA (no server render), so per-route `<title>`,
meta description, canonical link, OG/Twitter tags, and a JSON-LD script are
set at runtime by `src/hooks/useSeo.ts` — called from `HomePage`,
`SectionPage`, and `TopicPage` — instead of being baked into `index.html`.
`src/lib/seo.ts` holds `SITE_URL`, the description-truncation helper, and
the `BreadcrumbList`/`WebSite` JSON-LD builders; it uses relative imports
only (no `@/` alias) because it's also imported by
`scripts/generate-sitemap.ts`, which runs under plain `tsx` and doesn't
resolve tsconfig path aliases. That script regenerates `public/sitemap.xml`
from the live topic/section registry on every build (`npm run sitemap` to
run it standalone), so the sitemap can't drift from what's actually built.
`public/robots.txt` points crawlers at it. If `SITE_URL` ever changes again,
update it in `src/lib/seo.ts`, `public/robots.txt`, and the canonical
`<link>` in `index.html` — all three currently point at
`grammatica.antonyaddy.com` (a Vercel-managed CNAME on the
`english-grammar-hub` project; the underlying `.vercel.app` URL still
works but is no longer canonical).

The homepage also has a client-side title search (`HomePage.tsx`) over
`topicsRegistry` — no backend, just a substring filter — for finding a
topic across all 100+ without browsing sections.

## Development

```bash
npm install
npm run dev
```

## Content validation

`scripts/validate.ts` (run via `npm run validate`, and automatically as the
first step of `npm run build`) asserts the invariants that TypeScript can't,
across every topic and language at once — so a broken topic fails the build
instead of shipping. It checks: every present language has the same paragraph
count as `paragraphKinds`; `paragraphKinds` is well-formed (valid kinds, a
mandatory `mistake`, a closing `markers` block, mistake-before-markers);
exactly two exercises of ten questions; every answer is among its options;
every gap sentence has `___`; unique slugs; each `sectionSlug` exists; and
`topics/registry.ts` exactly matches `topics/index.ts` (see "Code
splitting"). This is the guardrail that keeps 9 hand-maintained languages
and two parallel topic registrations in sync as the topic count grows —
don't rely on the per-page dev-mode warnings for that, they only fire when
a human opens that exact page.

## Scripts

- `npm run dev` — local dev server
- `npm run validate` — content invariants across all topics/languages
- `npm run sitemap` — regenerate `public/sitemap.xml` from the current registry
- `npm run build` — validate + sitemap + typecheck + production build
- `npm run lint` — oxlint
