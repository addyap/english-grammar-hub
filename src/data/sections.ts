import type { GrammarSection } from "./types";

/**
 * Full curriculum map (~15 sections). Only topics that exist in src/data/topics
 * are clickable; the rest render as "coming soon" so the site is honest about
 * what's built vs planned. Add new topics under the matching sectionSlug.
 */
export const sections: GrammarSection[] = [
  { slug: "sentence-basics", title: "Sentence Basics", description: "Word order, be-verb, this/that, plurals" },
  { slug: "articles-determiners", title: "Articles & Determiners", description: "a/an/the, some/any, quantifiers" },
  { slug: "tenses", title: "Tenses", description: "Present, past, future and perfect forms" },
  { slug: "modals", title: "Modals", description: "can, must, should, might, deduction" },
  { slug: "conditionals", title: "Conditionals", description: "Zero, first, second, third, mixed" },
  { slug: "passive-voice", title: "Passive Voice", description: "Present, past, modal and causative passives" },
  { slug: "reported-speech", title: "Reported Speech", description: "Statements, questions, reporting verbs" },
  { slug: "questions-auxiliaries", title: "Questions & Auxiliaries", description: "Wh-questions, tags, indirect questions" },
  { slug: "pronouns-possessives", title: "Pronouns & Possessives", description: "Personal, possessive, reflexive" },
  { slug: "prepositions", title: "Prepositions", description: "Time, place, movement, dependent prepositions" },
  { slug: "adjectives-adverbs", title: "Adjectives & Adverbs", description: "Comparatives, superlatives, order, manner" },
  { slug: "nouns-quantity", title: "Nouns & Quantity", description: "Countable/uncountable, possessive 's" },
  { slug: "conjunctions-linking", title: "Conjunctions & Linking Words", description: "Contrast, cause, discourse markers" },
  { slug: "verb-patterns", title: "Verb Patterns", description: "Gerunds, infinitives, phrasal verbs, causatives" },
  { slug: "relative-clauses", title: "Relative Clauses", description: "Defining, non-defining, reduced" },
  { slug: "advanced-structures", title: "Advanced Structures", description: "Inversion, cleft sentences, emphasis" },
];
