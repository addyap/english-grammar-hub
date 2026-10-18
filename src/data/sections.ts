import type { GrammarSection } from "./types";

/**
 * Full curriculum map (~15 sections). Only topics that exist in src/data/topics
 * are clickable; the rest render as "coming soon" so the site is honest about
 * what's built vs planned. Add new topics under the matching sectionSlug.
 */
export const sections: GrammarSection[] = [
  { slug: "sentence-basics", title: "Sentence Basics", description: "Word order, be-verb, this/that, plurals",
    intro: "The foundations every English sentence rests on: word order (subject, verb, object), the verb be, this/that/these/those, plurals and there is / there are. You'll also find imperatives, exclamations with what and how, telling the time and dates, numbers, spelling rules for suffixes and the parts of speech. Most topics are A1–A2, so start here if you're a beginner, or come back to check the basics before tackling tenses." },
  { slug: "articles-determiners", title: "Articles & Determiners", description: "a/an/the, some/any, quantifiers",
    intro: "Small words that change meaning: a, an and the, when to use no article at all, some and any, and quantifiers such as much, many, few and little. The section ends with each vs every and all vs whole. They cause frequent errors whatever your first language. Levels A1–B1." },
  { slug: "tenses", title: "Tenses", description: "Present, past, future and perfect forms",
    intro: "All twelve English tenses, from present simple to future perfect continuous, with the contrasts that cause the most mistakes: past simple or present perfect, will or going to, used to or would. Further topics cover stative verbs, time clauses with when, until and as soon as, narrative tenses for telling a story, and already, just, yet and still. Seventeen topics from A1 to B2; follow them in order or jump to the one you need." },
  { slug: "modals", title: "Modals", description: "can, must, should, might, deduction",
    intro: "Can, could, may, might, must, should, shall and would: how to express ability, permission, obligation, advice and deduction. You'll learn the difference between must and have to, mustn't and don't have to, needn't have and didn't need to, and how to talk about the past with should have, could have and would have. Also covered: had better and would rather. Ten topics at A2–B2." },
  { slug: "conditionals", title: "Conditionals", description: "Zero, first, second, third, mixed",
    intro: "If sentences from the zero to the third conditional, and the mixed forms that combine them. The section goes further with wish and if only, alternatives to if such as as long as, provided that and in case, as if / as though, and the formal inverted conditionals with were, had and should. Five topics at B2–C1, for learners who already know the main tenses." },
  { slug: "passive-voice", title: "Passive Voice", description: "Present, past, modal and causative passives",
    intro: "How and when to use the passive: present and past forms, perfect, continuous and future passives, passive questions, and verbs with two objects. You'll also meet the get-passive, need + -ing, and impersonal structures such as it is said that…, common in news and formal writing. The last topic helps you choose between active and passive. Eight topics, mostly B2." },
  { slug: "reported-speech", title: "Reported Speech", description: "Statements, questions, reporting verbs",
    intro: "How to report what someone said: the tense changes, reported questions, commands and requests, and the reporting verbs that make your English sound natural, such as suggest, insist and deny. A separate topic clears up say, tell, talk and speak, one of the most frequent confusions in English. Four topics at B1–B2." },
  { slug: "questions-auxiliaries", title: "Questions & Auxiliaries", description: "Wh-questions, tags, indirect questions",
    intro: "How English builds questions with auxiliaries: do, be and have, wh-questions, questions ending in a preposition, alternative questions with or, and negative questions. You'll also learn question tags such as isn't it? and didn't you?, and when do is a main verb rather than an auxiliary. Six topics at A2–B2." },
  { slug: "pronouns-possessives", title: "Pronouns & Possessives", description: "Personal, possessive, reflexive",
    intro: "Personal and possessive pronouns (I, me, my, mine), reflexive pronouns used for emphasis, and indefinite pronouns such as somebody, anything and nowhere. Other topics cover each other vs one another, one and ones as substitutes, and the tricky another, other and the other. Seven topics from A1 to B1." },
  { slug: "prepositions", title: "Prepositions", description: "Time, place, movement, dependent prepositions",
    intro: "Prepositions of time, place and movement, with in, on and at for transport, plus the pairs learners often mix up: during, while and for, by and until, like and as. A dedicated topic covers dependent prepositions, the ones fixed after a verb, adjective or noun, as in interested in or depend on. Eight topics from A1 to B1." },
  { slug: "adjectives-adverbs", title: "Adjectives & Adverbs", description: "Comparatives, superlatives, order, manner",
    intro: "How to describe things and actions: adjectives vs adverbs, comparatives and superlatives, double comparatives such as the more… the more, and the order of adjectives before a noun. You'll also study too and enough, -ed vs -ing adjectives (bored or boring), adverbs of frequency and degree, and the suffixes that build adjectives, nouns and verbs. Ten topics from A2 to B2." },
  { slug: "nouns-quantity", title: "Nouns & Quantity", description: "Countable/uncountable, possessive 's",
    intro: "Countable and uncountable nouns, the nouns whose meaning changes between the two, and partitives such as a piece of and a loaf of. The section also covers the possessive 's, compound nouns, collective nouns and group agreement, subject-verb agreement, and irregular plurals from Latin and Greek. Eight topics from A2 to B2." },
  { slug: "conjunctions-linking", title: "Conjunctions & Linking Words", description: "Contrast, cause, discourse markers",
    intro: "The words that connect ideas: and, but, because and so, both, either and neither, so… that and such… that, and so or not as substitutes for a whole clause. Further topics practise contrast (although, however, whereas), reason (as, since, because) and result (therefore, consequently, as a result), essential for writing and presentations. Seven topics at B1–B2." },
  { slug: "verb-patterns", title: "Verb Patterns", description: "Gerunds, infinitives, phrasal verbs, causatives",
    intro: "What follows a verb: a gerund, an infinitive or an object. The section covers -ing vs to + infinitive (remember, forget, stop, try), make, let and help, perception verbs, purpose clauses and verbs with two objects. It also untangles pairs that confuse learners, such as make vs do, bring vs take, borrow vs lend and rise vs raise, and introduces phrasal verbs. Sixteen topics from A2 to B2." },
  { slug: "relative-clauses", title: "Relative Clauses", description: "Defining, non-defining, reduced",
    intro: "Joining ideas with who, which, that, whose and where: defining and non-defining relative clauses, and when you can leave the pronoun out. The advanced topics cover whom and prepositions in relative clauses, what as a relative pronoun, and whoever, whatever and whichever. Four topics at B2–C1." },
  { slug: "advanced-structures", title: "Advanced Structures", description: "Inversion, cleft sentences, emphasis",
    intro: "Structures for confident, formal English: inversion, cleft sentences for emphasis, participle and absolute clauses, the subjunctive, ellipsis and nominalization. The section ends with academic hedging (cautious, tentative language) and the differences between formal and informal English. Eight topics at B2–C2, for advanced learners and anyone writing reports or academic texts." },
];
