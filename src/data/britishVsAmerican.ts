export interface GrammarDifference {
  topic: string;
  british: string;
  american: string;
}

export interface SpellingPattern {
  pattern: string;
  examples: { british: string; american: string }[];
}

export interface VocabPair {
  british: string;
  american: string;
}

/** The actual grammar differences — not just spelling/vocabulary trivia — since this is a grammar site first. */
export const GRAMMAR_DIFFERENCES: GrammarDifference[] = [
  {
    topic: "Collective nouns",
    british: "Can take a plural verb when the group is thought of as individuals: The team are playing well.",
    american: "Almost always takes a singular verb: The team is playing well.",
  },
  {
    topic: "Recent past actions",
    british: "Prefers the present perfect: I've just eaten. Have you finished yet?",
    american: "Commonly uses the past simple instead: I just ate. Did you finish yet?",
  },
  {
    topic: "Possession",
    british: "Favors have got: I've got a car. Have you got a pen?",
    american: "Favors have (without got), though have got is understood: I have a car. Do you have a pen?",
  },
  {
    topic: "Past participle of get",
    british: "Only got: He hasn't got any better.",
    american: "Usually gotten for the meaning 'become/obtain', got for 'possess': He hasn't gotten any better. I've got two brothers.",
  },
  {
    topic: "Prepositions of time",
    british: "at the weekend, on a course, at university",
    american: "on the weekend, in a course, in college",
  },
  {
    topic: "Comparisons",
    british: "different from or different to",
    american: "different from or different than",
  },
];

export const SPELLING_PATTERNS: SpellingPattern[] = [
  {
    pattern: "-our → -or",
    examples: [
      { british: "colour", american: "color" },
      { british: "favourite", american: "favorite" },
      { british: "neighbour", american: "neighbor" },
    ],
  },
  {
    pattern: "-re → -er",
    examples: [
      { british: "centre", american: "center" },
      { british: "theatre", american: "theater" },
      { british: "metre", american: "meter" },
    ],
  },
  {
    pattern: "-ise → -ize",
    examples: [
      { british: "organise", american: "organize" },
      { british: "realise", american: "realize" },
      { british: "recognise", american: "recognize" },
    ],
  },
  {
    pattern: "-ogue → -og",
    examples: [
      { british: "catalogue", american: "catalog" },
      { british: "dialogue", american: "dialog" },
      { british: "analogue", american: "analog" },
    ],
  },
  {
    pattern: "Doubled consonant before -ed/-ing/-er",
    examples: [
      { british: "travelled", american: "traveled" },
      { british: "cancelled", american: "canceled" },
      { british: "modelling", american: "modeling" },
    ],
  },
  {
    pattern: "-ence → -ense (as a noun)",
    examples: [
      { british: "defence", american: "defense" },
      { british: "licence", american: "license" },
      { british: "offence", american: "offense" },
    ],
  },
];

export const VOCAB_PAIRS: VocabPair[] = [
  { british: "flat", american: "apartment" },
  { british: "lift", american: "elevator" },
  { british: "boot (of a car)", american: "trunk" },
  { british: "bonnet (of a car)", american: "hood" },
  { british: "pavement", american: "sidewalk" },
  { british: "chips", american: "fries" },
  { british: "crisps", american: "chips" },
  { british: "biscuit", american: "cookie" },
  { british: "jumper", american: "sweater" },
  { british: "trousers", american: "pants" },
  { british: "holiday", american: "vacation" },
  { british: "autumn", american: "fall" },
  { british: "rubbish", american: "garbage / trash" },
  { british: "queue", american: "line" },
  { british: "mobile phone", american: "cell phone" },
  { british: "football", american: "soccer" },
  { british: "garden", american: "yard" },
  { british: "torch", american: "flashlight" },
  { british: "nappy", american: "diaper" },
  { british: "petrol", american: "gas / gasoline" },
  { british: "chemist", american: "pharmacy / drugstore" },
  { british: "postman", american: "mailman" },
  { british: "tap", american: "faucet" },
  { british: "wardrobe", american: "closet" },
  { british: "car park", american: "parking lot" },
  { british: "underground / tube", american: "subway" },
];
