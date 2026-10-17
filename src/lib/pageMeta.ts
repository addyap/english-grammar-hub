/**
 * Title and description for every fixed page, in one place. The pages read
 * from here at runtime (via useSeo), and scripts/prerender-heads.ts reads
 * the same values at build time to bake them into per-route HTML, so the
 * tags Google sees before JavaScript runs match the ones after. No data
 * imports here: pages import this, and topic content must stay lazy-loaded.
 */

export interface PageMeta {
  title: string;
  description: string;
}

export const STATIC_PAGES = {
  "/": {
    title: "English grammar, in your language",
    description:
      "Clear rules explained in French, Spanish, Portuguese, Italian, German, Russian, Arabic and Mandarin Chinese, with self-correcting exercises.",
  },
  "/resources": {
    title: "Resources",
    description:
      "Reference pages and mixed practice that don't fit the topic-by-topic curriculum: contrast exercises, where English is spoken, irregular verbs, British vs American English, confused words, false friends, and punctuation.",
  },
  "/countries": {
    title: "Where Is English Spoken?",
    description:
      "Every country where English is a majority or official language, flag by flag — from the UK and US to Nigeria, India, Jamaica and beyond.",
  },
  "/irregular-verbs": {
    title: "Irregular Verbs List",
    description:
      "Nearly 150 common English irregular verbs — base, past simple, and past participle — grouped by pattern, with translations and a self-test mode.",
  },
  "/british-vs-american": {
    title: "British vs American English",
    description:
      "British vs American English: real grammar differences (collective nouns, present perfect, have got), plus common spelling and vocabulary contrasts.",
  },
  "/confused-words": {
    title: "Commonly Confused Words",
    description:
      "Commonly confused English words — its/it's, affect/effect, then/than, and more — with a one-line rule for telling them apart.",
  },
  "/false-friends": {
    title: "False Friends",
    description:
      "False friends by language — words in French, Spanish, Portuguese, Italian, and German that look like English words but mean something else entirely.",
  },
  "/punctuation": {
    title: "Punctuation Guide",
    description:
      "A quick reference for English punctuation — commas, semicolons, colons, apostrophes, quotation marks, dashes, and end marks — with examples.",
  },
  "/linking-words": {
    title: "Linking Words Reference",
    description:
      "A quick reference for English linking words — contrast, cause, result, addition, and discourse markers — grouped by function with one-line usage notes.",
  },
  "/contrast-practice": {
    title: "Contrast Practice",
    description:
      "Mixed exercises for the classic confusable tense pairs — Present Simple vs Continuous, Past Simple vs Present Perfect, and more — testing which one fits, not just how to conjugate it.",
  },
  "/mentions-legales": {
    title: "Mentions légales",
    description: "Legal notice, publisher identity, hosting, and data protection information for Grammatica.",
  },
  // Not in the sitemap, but still prerendered so a direct hit returns 200.
  "/progress": {
    title: "Your Progress",
    description: "Your saved exercise scores, stored locally in this browser — no account needed.",
  },
  // Baked into dist/404.html, which Vercel serves with a 404 status.
  "/404": {
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist.",
  },
} satisfies Record<string, PageMeta>;

/** Title and description for /grammar/:topic/exercise/:n, shared by ExercisePage and prerender-heads.ts. */
export function exerciseMeta(topicTitle: string, exerciseTitle: string): PageMeta {
  return {
    title: `${exerciseTitle} — ${topicTitle} Exercise`,
    description: `Practice ${topicTitle}: ${exerciseTitle}. Interactive English grammar exercise with instant feedback and explanations.`,
  };
}
