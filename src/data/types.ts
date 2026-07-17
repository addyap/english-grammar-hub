export type CEFRLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export type LanguageCode = "en" | "fr" | "es" | "pt" | "it" | "de" | "ru" | "ar" | "zh";

export interface LanguageMeta {
  code: LanguageCode;
  label: string;
  rtl?: boolean;
}

export const LANGUAGES: LanguageMeta[] = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "pt", label: "Português" },
  { code: "it", label: "Italiano" },
  { code: "de", label: "Deutsch" },
  { code: "ru", label: "Русский" },
  { code: "ar", label: "العربية", rtl: true },
  { code: "zh", label: "中文" },
];

export interface GrammarSection {
  slug: string;
  title: string;
  description: string;
}

export interface ExerciseQuestion {
  /** Sentence with the gap written as ___ (may include a (verb) hint). */
  sentence: string;
  answer: string;
  /** Clickable choices, including the answer. Every question must have these. */
  options: string[];
  /** One-line English explanation of why, shown after answering. */
  explanation: string;
}

export interface Exercise {
  title: string;
  questions: ExerciseQuestion[];
}

/**
 * What role a paragraph plays, in order, across every language's explanation
 * array — "mistake" paragraphs get a distinct visual callout. This array is
 * shared across languages (not per-language) because paragraph count and
 * meaning-per-index must already match 1:1 across translations.
 */
export type ExplanationParagraphKind = "use" | "form" | "mistake" | "markers";

/**
 * A single explanation paragraph: either plain prose, or a lead-in sentence
 * plus a bulleted list — use the list shape for parallel enumerated rules
 * (spelling patterns, grouped fixed expressions), not for causal "why this
 * mistake happens" prose, which reads better connected.
 */
export type ExplanationParagraph = string | { intro: string; items: string[] };

export interface GrammarTopicContent {
  slug: string;
  sectionSlug: string;
  title: string;
  level: CEFRLevel;
  /** Short paragraphs per language. English is the required fallback. */
  explanations: Partial<Record<LanguageCode, ExplanationParagraph[]>> & { en: ExplanationParagraph[] };
  /** One kind per paragraph, same length and order as every explanations[lang] array. */
  paragraphKinds: ExplanationParagraphKind[];
  exercises: [Exercise, Exercise];
}

/**
 * Lightweight, browser-safe topic metadata — no explanations/exercises, so
 * every entry costs bytes, not kilobytes. HomePage and SectionPage import
 * this (via topics/registry.ts) instead of the full topic content, which
 * is lazy-loaded per-topic only when its page is actually visited. `file`
 * is the topic module's basename under src/data/topics/, used to resolve
 * the dynamic import.
 */
export interface TopicRegistryEntry {
  slug: string;
  sectionSlug: string;
  title: string;
  level: CEFRLevel;
  file: string;
}
