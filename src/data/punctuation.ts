export interface PunctuationRule {
  mark: string;
  summary: string;
  points: string[];
}

export const PUNCTUATION_RULES: PunctuationRule[] = [
  {
    mark: "Comma ( , )",
    summary: "The most overused and underused mark in English — it separates, but doesn't always mean 'pause'.",
    points: [
      "Separates items in a list: I bought apples, oranges, and bananas.",
      "Goes before a coordinating conjunction (and, but, or, so) joining two complete sentences: She was tired, but she kept working.",
      "Follows an introductory word or phrase: However, we decided to stay. After the meeting, we went home.",
      "Surrounds non-essential information that could be removed without changing the core meaning: My brother, who lives in Paris, is visiting. (compare: The brother who lives in Paris is visiting — no commas, because which brother matters here.)",
      "The comma before and/or in a list (apples, oranges, and bananas) is called the Oxford comma — optional in British English, more standard in American English, and genuinely useful for avoiding ambiguity.",
    ],
  },
  {
    mark: "Semicolon ( ; )",
    summary: "Stronger than a comma, weaker than a full stop — for joining ideas that are closely related.",
    points: [
      "Joins two complete, closely related sentences without a conjunction: I have a big test tomorrow; I can't go out tonight.",
      "Separates items in a list when the items themselves already contain commas: We visited Paris, France; Rome, Italy; and Berlin, Germany.",
    ],
  },
  {
    mark: "Colon ( : )",
    summary: "Announces something — a list, an explanation, or a quotation — after a complete sentence.",
    points: [
      "Introduces a list: You'll need three things: eggs, flour, and sugar.",
      "Introduces an explanation or elaboration: There was one problem: nobody had the keys.",
      "Introduces a quotation: She said it best: \"Nothing worth having comes easy.\"",
      "The words before the colon should form a complete sentence on their own — not The ingredients are: eggs, flour, sugar, which is a common mistake.",
    ],
  },
  {
    mark: "Apostrophe ( ' )",
    summary: "Only ever means possession or a missing letter — never a plain plural.",
    points: [
      "Shows possession: the dog's bone (one dog), the dogs' bones (more than one dog).",
      "Forms contractions, standing in for missing letters: it's (it is), don't (do not), they're (they are).",
      "Never used to make a regular plural — apples, not apple's.",
      "its (possessive) vs it's ('it is'/'it has') is the single most common apostrophe mistake — see the confused words page.",
    ],
  },
  {
    mark: "Quotation marks ( \" \" )",
    summary: "Enclose someone else's exact words — and British and American English disagree on where the punctuation goes.",
    points: [
      "Enclose direct speech: She said, \"I'll be there at six.\"",
      "Enclose titles of short works — articles, poems, songs; longer works (books, films) are usually italicized instead.",
      "American English puts commas and periods inside the closing quotation mark: She said, \"I'm ready.\" British English often puts them outside unless they're part of the quoted material: She said, \"I'm ready\".",
    ],
  },
  {
    mark: "Hyphens and dashes ( - – — )",
    summary: "Three different marks, three different jobs, despite looking similar.",
    points: [
      "Hyphen (-): joins compound words or compound modifiers before a noun: mother-in-law, a well-known author.",
      "En dash (–): shows a range: pages 10–20, 2020–2024.",
      "Em dash (—): marks a parenthetical break or abrupt shift — like this — often replacing commas or parentheses for emphasis.",
    ],
  },
  {
    mark: "Question and exclamation marks ( ? ! )",
    summary: "End marks that carry meaning, not just punctuation-by-habit.",
    points: [
      "Question mark ends a direct question: What time is it?",
      "Not used after an indirect/reported question: She asked what time it was — no question mark, because it's now a statement.",
      "Exclamation mark shows strong emotion or emphasis — used sparingly in formal writing, since overuse weakens its effect.",
    ],
  },
];
