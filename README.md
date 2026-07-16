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
  English fallback), and exactly two 10-question exercises.
- `topics/*.ts` — one file per built topic. Add a new grammar point by
  creating a file in this shape and registering it in `topics/index.ts`.

Currently built: Present Simple, Present Continuous, Past Simple (Tenses),
Prepositions of Time, Prepositions of Place (Prepositions). The rest of the
curriculum in `sections.ts` is scoped but not yet written — same template,
just more content.

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
