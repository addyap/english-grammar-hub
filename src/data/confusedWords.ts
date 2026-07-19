export interface ConfusedWordGroup {
  words: string[];
  explanation: string;
}

/**
 * Deliberately not duplicating pairs already covered as full grammar
 * topics elsewhere (e.g. rise/raise, lie/lay live in
 * riseVsRaiseLieVsLay.ts) — this is spelling/usage confusion between
 * otherwise-unrelated words, not verb-conjugation pairs.
 */
export const CONFUSED_WORD_GROUPS: ConfusedWordGroup[] = [
  { words: ["its", "it's"], explanation: "its = possessive (belonging to it): The dog wagged its tail. it's = 'it is' or 'it has': It's raining." },
  { words: ["your", "you're"], explanation: "your = possessive (belonging to you): Is this your bag? you're = 'you are': You're late." },
  { words: ["there", "their", "they're"], explanation: "there = place: Put it there. their = possessive: Their car broke down. they're = 'they are': They're coming." },
  { words: ["who's", "whose"], explanation: "who's = 'who is' or 'who has': Who's calling? whose = possessive: Whose coat is this?" },
  { words: ["then", "than"], explanation: "then = time/sequence: We ate, then left. than = comparison: She's taller than him." },
  { words: ["affect", "effect"], explanation: "affect = verb, to influence: The news affected her. effect = noun, a result: The effect was immediate." },
  { words: ["loose", "lose"], explanation: "loose = adjective, not tight: The screw is loose. lose = verb, to misplace or fail to win: Don't lose your keys." },
  { words: ["complement", "compliment"], explanation: "complement = something that completes: A good wine complements the meal. compliment = praise: She gave him a compliment." },
  { words: ["stationary", "stationery"], explanation: "stationary = not moving: The car remained stationary. stationery = paper and writing supplies: We ordered new stationery." },
  { words: ["principal", "principle"], explanation: "principal = head of a school, or most important: the principal reason. principle = a fundamental rule or belief: a principle of physics." },
  { words: ["farther", "further"], explanation: "farther = physical distance: The station is farther than I thought. further = figurative or additional: Let's discuss this further." },
  { words: ["fewer", "less"], explanation: "fewer = with countable nouns: fewer apples. less = with uncountable nouns: less time." },
  { words: ["accept", "except"], explanation: "accept = to agree to receive: I accept your offer. except = excluding: Everyone came except John." },
  { words: ["advice", "advise"], explanation: "advice = noun: Can I give you some advice? advise = verb: I advise you to leave early." },
  { words: ["practice", "practise"], explanation: "In British English, practice is the noun and practise is the verb: football practice / practise your English. American English uses practice for both." },
  { words: ["desert", "dessert"], explanation: "desert = a dry, sandy region (or to abandon): the Sahara desert. dessert = a sweet course after a meal: chocolate cake for dessert." },
  { words: ["breath", "breathe"], explanation: "breath = noun: Take a deep breath. breathe = verb: Remember to breathe." },
  { words: ["weather", "whether"], explanation: "weather = climate conditions: nice weather today. whether = introduces a choice/condition: I don't know whether to go." },
  { words: ["quiet", "quite"], explanation: "quiet = silent, calm: Please be quiet. quite = fairly, or completely: It's quite cold today." },
  { words: ["discreet", "discrete"], explanation: "discreet = tactful, careful not to attract attention: a discreet conversation. discrete = separate, distinct: three discrete stages." },
  { words: ["elicit", "illicit"], explanation: "elicit = to draw out a response: to elicit information. illicit = illegal or forbidden: illicit drugs." },
  { words: ["envelop", "envelope"], explanation: "envelop = verb, to surround completely: Fog enveloped the city. envelope = noun, for mailing letters: seal the envelope." },
  { words: ["cite", "site", "sight"], explanation: "cite = to quote as evidence: to cite a source. site = a location: a building site. sight = the ability to see, or a view: a beautiful sight." },
  { words: ["bare", "bear"], explanation: "bare = uncovered, plain: bare feet. bear = the animal, or to carry/endure: I can't bear the noise." },
  { words: ["peace", "piece"], explanation: "peace = absence of conflict: world peace. piece = a part of something: a piece of cake." },
  { words: ["altogether", "all together"], explanation: "altogether = entirely, in total: That's altogether wrong. all together = everyone/everything in one place or at once: We arrived all together." },
  { words: ["everyday", "every day"], explanation: "everyday = adjective, ordinary: everyday life. every day = each day: I go running every day." },
  { words: ["who", "whom"], explanation: "who = subject of a verb: Who called you? whom = object of a verb or preposition: To whom should I address this?" },
];
