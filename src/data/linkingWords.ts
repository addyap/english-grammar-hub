export interface LinkingWordEntry {
  word: string;
  note: string;
}

export interface LinkingWordCategory {
  category: string;
  summary: string;
  words: LinkingWordEntry[];
}

/**
 * Consolidates linking/discourse words already taught in depth across
 * conjunctionsLinking.ts, resultConnectors.ts, and contrastingWords.ts —
 * this page exists purely as a quick lookup grouped by function, not as
 * new content. See those topics (and soNotSubstitution.ts, soSuchThat.ts,
 * reasonClauses.ts) for the full grammar rules behind each word.
 */
export const LINKING_WORD_CATEGORIES: LinkingWordCategory[] = [
  {
    category: "Contrast",
    summary: "Words that show two ideas don't fit together the way you'd expect — each is a different part of speech, so the punctuation and structure around it changes.",
    words: [
      { word: "but", note: "coordinating conjunction — joins two independent clauses in one sentence, comma before it: It was cheap, but it broke quickly." },
      { word: "although / though / even though", note: "subordinating conjunctions — open a subordinate clause, can start the sentence: Although it was expensive, we bought it. though alone can also stand at the very end of a sentence: I didn't like it, though." },
      { word: "however", note: "linking adverb, not a conjunction — starts a new sentence or follows a semicolon, always with a comma after it: It was expensive. However, we bought it." },
      { word: "despite / in spite of", note: "followed by a noun or -ing form, never a full clause: despite the rain, despite raining — not despite it was raining." },
      { word: "whereas / while", note: "contrasts two separate facts or two different things, rather than conceding a point about one: Whereas my brother loves sports, I prefer reading." },
      { word: "yet", note: "a more formal, literary equivalent of but: The plan was risky, yet it worked perfectly. Unrelated to the yet that means \"up to now\" (I haven't finished yet)." },
    ],
  },
  {
    category: "Cause & Reason",
    summary: "Words that introduce why something happened.",
    words: [
      { word: "because / since / as", note: "+ a full clause: I stayed home because I was ill." },
      { word: "because of", note: "+ a noun, never a clause: I stayed home because of the rain." },
    ],
  },
  {
    category: "Result & Consequence",
    summary: "Words that introduce what happened as a result — so is everyday and mid-sentence; the rest are more formal and need their own sentence or a semicolon, never just a comma.",
    words: [
      { word: "so", note: "everyday, mid-sentence, comma before it: It was raining, so we stayed home." },
      { word: "therefore", note: "the most common formal connector: The evidence was inconclusive. Therefore, the case was dismissed." },
      { word: "consequently", note: "close synonym of therefore, slightly more formal: The flight was delayed; consequently, many passengers missed their connections." },
      { word: "as a result", note: "works exactly like therefore: The company cut costs. As a result, profits improved." },
      { word: "as a result of", note: "a different word entirely from as a result — a preposition + noun/-ing form, never a clause: As a result of the delay, we missed our connection." },
      { word: "thus / hence", note: "more literary and academic, often summarizing a conclusion: The report found no evidence of fraud; thus, the investigation was closed." },
    ],
  },
  {
    category: "Addition",
    summary: "Words that add a further point.",
    words: [
      { word: "and", note: "the everyday, neutral choice, joining within a sentence: The hotel was cheap and close to the beach." },
      { word: "also", note: "can sit mid-sentence or start a new one, less formal than the two below: The hotel was cheap. It was also close to the beach." },
      { word: "in addition / furthermore", note: "more formal, typically start a new sentence: The hotel was cheap. Furthermore, it was close to the beach." },
    ],
  },
  {
    category: "Organizing a Longer Piece of Writing",
    summary: "Discourse markers that structure an argument or a story rather than linking two clauses.",
    words: [
      { word: "firstly / first of all", note: "opens a list of points." },
      { word: "for example / for instance", note: "introduces an illustration of the previous point." },
      { word: "on the other hand", note: "introduces a contrasting second point (a discourse-level cousin of however)." },
      { word: "in conclusion / to sum up", note: "closes an argument or piece of writing." },
    ],
  },
];
