import type { TopicRegistryEntry } from "../types";

/**
 * Lightweight mirror of topics/index.ts — every topic's slug/section/title/
 * level plus its source file, with NO explanation or exercise content. This
 * is what HomePage and SectionPage import (cheap: bytes, not kilobytes per
 * topic); topics/lazy.ts uses `file` to dynamically import the full topic
 * only when its page is actually visited. Keep in sync with topics/index.ts
 * — scripts/validate.ts checks that every topic here matches one there
 * (same slug/sectionSlug/title/level) and vice versa.
 */
export const topicsRegistry: TopicRegistryEntry[] = [
  { slug: "word-order", sectionSlug: "sentence-basics", title: "Word Order", level: "A1", file: "wordOrder" },
  { slug: "verb-be", sectionSlug: "sentence-basics", title: "The Verb Be", level: "A1", file: "verbBe" },
  { slug: "demonstratives", sectionSlug: "sentence-basics", title: "This, That, These, Those", level: "A1", file: "demonstratives" },
  { slug: "plural-nouns", sectionSlug: "sentence-basics", title: "Plural Nouns", level: "A1", file: "pluralNouns" },
  { slug: "articles-a-an-the", sectionSlug: "articles-determiners", title: "Articles: A/An/The", level: "A1", file: "articlesAThe" },
  { slug: "zero-article", sectionSlug: "articles-determiners", title: "Zero Article", level: "A2", file: "zeroArticle" },
  { slug: "some-any", sectionSlug: "articles-determiners", title: "Some / Any", level: "A1", file: "someAny" },
  { slug: "quantifiers", sectionSlug: "articles-determiners", title: "Quantifiers: Much/Many, Few/Little", level: "A2", file: "quantifiers" },
  { slug: "present-simple", sectionSlug: "tenses", title: "Present Simple", level: "A1", file: "presentSimple" },
  { slug: "present-continuous", sectionSlug: "tenses", title: "Present Continuous", level: "A1", file: "presentContinuous" },
  { slug: "past-simple", sectionSlug: "tenses", title: "Past Simple", level: "A2", file: "pastSimple" },
  { slug: "past-continuous", sectionSlug: "tenses", title: "Past Continuous", level: "A2", file: "pastContinuous" },
  { slug: "present-perfect", sectionSlug: "tenses", title: "Present Perfect", level: "B1", file: "presentPerfect" },
  { slug: "present-perfect-continuous", sectionSlug: "tenses", title: "Present Perfect Continuous", level: "B2", file: "presentPerfectContinuous" },
  { slug: "past-perfect", sectionSlug: "tenses", title: "Past Perfect", level: "B1", file: "pastPerfect" },
  { slug: "past-perfect-continuous", sectionSlug: "tenses", title: "Past Perfect Continuous", level: "B2", file: "pastPerfectContinuous" },
  { slug: "future-will-going-to", sectionSlug: "tenses", title: "Future: Will vs Going to", level: "A2", file: "futureWillGoingTo" },
  { slug: "future-continuous", sectionSlug: "tenses", title: "Future Continuous", level: "B2", file: "futureContinuous" },
  { slug: "future-perfect", sectionSlug: "tenses", title: "Future Perfect", level: "B2", file: "futurePerfect" },
  { slug: "prepositions-of-time", sectionSlug: "prepositions", title: "Prepositions of Time", level: "A1", file: "prepositionsOfTime" },
  { slug: "prepositions-of-place", sectionSlug: "prepositions", title: "Prepositions of Place", level: "A1", file: "prepositionsOfPlace" },
  { slug: "prepositions-of-movement", sectionSlug: "prepositions", title: "Prepositions of Movement", level: "A2", file: "prepositionsOfMovement" },
  { slug: "dependent-prepositions", sectionSlug: "prepositions", title: "Dependent Prepositions", level: "B1", file: "dependentPrepositions" },
  { slug: "conditionals", sectionSlug: "conditionals", title: "Conditionals", level: "B1", file: "conditionals" },
  { slug: "modals", sectionSlug: "modals", title: "Modals", level: "B1", file: "modals" },
  { slug: "possessive-s", sectionSlug: "nouns-quantity", title: "Possessive 's", level: "A2", file: "possessiveS" },
  { slug: "countable-uncountable-nouns", sectionSlug: "nouns-quantity", title: "Countable & Uncountable Nouns", level: "A2", file: "countableUncountable" },
  { slug: "passive-voice", sectionSlug: "passive-voice", title: "Passive Voice", level: "B1", file: "passiveVoice" },
  { slug: "reported-speech", sectionSlug: "reported-speech", title: "Reported Speech", level: "B1", file: "reportedSpeech" },
  { slug: "questions-auxiliaries", sectionSlug: "questions-auxiliaries", title: "Questions & Auxiliaries", level: "B1", file: "questionsAuxiliaries" },
  { slug: "pronouns-possessives", sectionSlug: "pronouns-possessives", title: "Pronouns & Possessives", level: "A2", file: "pronounsPossessives" },
  { slug: "adjectives-adverbs", sectionSlug: "adjectives-adverbs", title: "Adjectives & Adverbs", level: "A2", file: "adjectivesAdverbs" },
  { slug: "conjunctions-linking", sectionSlug: "conjunctions-linking", title: "Conjunctions & Linking Words", level: "B1", file: "conjunctionsLinking" },
];
