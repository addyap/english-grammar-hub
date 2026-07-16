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
  accept?: string[];
  options?: string[];
  /** One-line English explanation of why, shown after answering. */
  explanation: string;
}

export interface Exercise {
  title: string;
  questions: ExerciseQuestion[];
}

export interface GrammarTopicContent {
  slug: string;
  sectionSlug: string;
  title: string;
  level: CEFRLevel;
  /** Short paragraphs per language. English is the required fallback. */
  explanations: Partial<Record<LanguageCode, string[]>> & { en: string[] };
  exercises: [Exercise, Exercise];
}
