export interface ContrastQuestion {
  sentence: string;
  answer: string;
  options: string[];
  explanation: string;
}

/**
 * Unlike topics/*.ts, a contrast pair spans two existing topics (by slug,
 * looked up via loadTopic at render time) rather than owning its own
 * GrammarTopicContent — the exercise mixes questions from both structures
 * to test *selection* (which one fits this context?), not just conjugation
 * within a structure the learner is already told to use.
 */
export interface ContrastPair {
  slug: string;
  title: string;
  description: string;
  topicASlug: string;
  topicBSlug: string;
  questions: ContrastQuestion[];
}

export const CONTRAST_PAIRS: ContrastPair[] = [
  {
    slug: "present-simple-vs-continuous",
    title: "Present Simple vs Present Continuous",
    description:
      "Present Simple is for habits, routines, and permanent facts. Present Continuous is for actions happening right now, or temporary situations. Time words like usually, every day, and always point to Present Simple; right now, at the moment, and these days point to Present Continuous.",
    topicASlug: "present-simple",
    topicBSlug: "present-continuous",
    questions: [
      { sentence: "Water ___ (boil) at 100°C.", answer: "boils", options: ["boils", "is boiling", "boil"], explanation: "A permanent scientific fact — Present Simple." },
      { sentence: "Look! It ___ (rain) outside.", answer: "is raining", options: ["is raining", "rains", "rain"], explanation: "Happening right now — Present Continuous, signaled by \"Look!\"" },
      { sentence: "I usually ___ (have) coffee in the morning.", answer: "have", options: ["have", "am having", "has"], explanation: "A daily routine — Present Simple, signaled by \"usually\"." },
      { sentence: "She ___ (study) for her exam right now.", answer: "is studying", options: ["is studying", "studies", "study"], explanation: "In progress at this moment — Present Continuous, signaled by \"right now\"." },
      { sentence: "He ___ (work) at a bank.", answer: "works", options: ["works", "is working", "work"], explanation: "A permanent fact about his job — Present Simple." },
      { sentence: "They ___ (stay) with relatives while their house is being repaired.", answer: "are staying", options: ["are staying", "stay", "stays"], explanation: "A temporary situation — Present Continuous, even with no obvious time marker." },
      { sentence: "The sun ___ (rise) in the east.", answer: "rises", options: ["rises", "is rising", "rise"], explanation: "A permanent natural fact — Present Simple." },
      { sentence: "I ___ (not/understand) this sentence at the moment.", answer: "don't understand", options: ["don't understand", "am not understanding", "doesn't understand"], explanation: "Understand is a state verb — even with \"at the moment\", state verbs stay in Present Simple." },
      { sentence: "We ___ (meet) my parents for dinner this evening.", answer: "are meeting", options: ["are meeting", "meet", "meets"], explanation: "A fixed future arrangement — Present Continuous, common for planned events." },
      { sentence: "Cats ___ (be) independent animals.", answer: "are", options: ["are", "is", "am"], explanation: "A general truth about a category — Present Simple." },
    ],
  },
  {
    slug: "past-simple-vs-present-perfect",
    title: "Past Simple vs Present Perfect",
    description:
      "Past Simple is for finished actions at a specific, stated time in the past. Present Perfect is for actions at an unspecified past time, or actions that connect to the present. Yesterday, in 2020, and last week point to Past Simple; ever, never, already, just, yet, since, and for point to Present Perfect.",
    topicASlug: "past-simple",
    topicBSlug: "present-perfect",
    questions: [
      { sentence: "I ___ (visit) Paris last year.", answer: "visited", options: ["visited", "have visited", "have been visited"], explanation: "\"Last year\" is a specific finished past time — Past Simple." },
      { sentence: "___ (you/ever/be) to Japan?", answer: "Have you ever been", options: ["Have you ever been", "Did you ever be", "Have you ever went"], explanation: "\"Ever\" asks about unspecified past experience — Present Perfect." },
      { sentence: "She ___ (lose) her keys yesterday.", answer: "lost", options: ["lost", "has lost", "has losed"], explanation: "\"Yesterday\" is a specific past time — Past Simple." },
      { sentence: "I ___ (already/finish) my homework.", answer: "have already finished", options: ["have already finished", "already finished", "have already finish"], explanation: "\"Already\" signals a completed action relevant now — Present Perfect." },
      { sentence: "He ___ (start) working here in 2019.", answer: "started", options: ["started", "has started", "has start"], explanation: "\"In 2019\" is a specific finished past time — Past Simple." },
      { sentence: "We ___ (not/see) that film yet.", answer: "haven't seen", options: ["haven't seen", "didn't see", "haven't saw"], explanation: "\"Yet\" in a negative statement about an unfinished expectation — Present Perfect." },
      { sentence: "They ___ (get) married two years ago.", answer: "got", options: ["got", "have got", "have gotten"], explanation: "\"Two years ago\" is a specific past time — Past Simple." },
      { sentence: "I ___ (live) here since 2015.", answer: "have lived", options: ["have lived", "lived", "am living"], explanation: "\"Since\" plus a starting point, continuing to now — Present Perfect." },
      { sentence: "She ___ (call) me an hour ago.", answer: "called", options: ["called", "has called", "has call"], explanation: "\"An hour ago\" is a specific past time — Past Simple." },
      { sentence: "I ___ (just/eat) — I'm not hungry.", answer: "have just eaten", options: ["have just eaten", "just ate", "have just ate"], explanation: "\"Just\" signals something completed very recently, relevant now — Present Perfect." },
    ],
  },
  {
    slug: "past-simple-vs-past-continuous",
    title: "Past Simple vs Past Continuous",
    description:
      "Past Simple tells the main, completed events of a story. Past Continuous sets the scene or describes a longer action that was interrupted. When both appear together, the Past Continuous action was already in progress when the Past Simple action happened.",
    topicASlug: "past-simple",
    topicBSlug: "past-continuous",
    questions: [
      { sentence: "While I ___ (cook) dinner, the phone rang.", answer: "was cooking", options: ["was cooking", "cooked", "cook"], explanation: "The longer background action in progress — Past Continuous." },
      { sentence: "The phone ___ (ring) while I was cooking dinner.", answer: "rang", options: ["rang", "was ringing", "ring"], explanation: "The short action that interrupted — Past Simple." },
      { sentence: "I ___ (see) an old friend on my way home yesterday.", answer: "saw", options: ["saw", "was seeing", "see"], explanation: "A single completed event — Past Simple." },
      { sentence: "At 8pm last night, we ___ (watch) a movie.", answer: "were watching", options: ["were watching", "watched", "watch"], explanation: "An action in progress at a specific past moment — Past Continuous." },
      { sentence: "She ___ (break) her leg while she was skiing.", answer: "broke", options: ["broke", "was breaking", "break"], explanation: "The short event that happened during the longer action — Past Simple." },
      { sentence: "It ___ (rain) heavily when we left the house.", answer: "was raining", options: ["was raining", "rained", "rain"], explanation: "The background condition already in progress — Past Continuous." },
      { sentence: "He ___ (finish) his homework before dinner.", answer: "finished", options: ["finished", "was finishing", "finish"], explanation: "A completed action — Past Simple." },
      { sentence: "While they ___ (walk) in the park, they met an old friend.", answer: "were walking", options: ["were walking", "walked", "walk"], explanation: "The longer background action — Past Continuous." },
      { sentence: "I ___ (drop) my phone this morning.", answer: "dropped", options: ["dropped", "was dropping", "drop"], explanation: "A single completed event — Past Simple." },
      { sentence: "We ___ (have) dinner when the lights went out.", answer: "were having", options: ["were having", "had", "have"], explanation: "An action in progress, interrupted by a sudden event — Past Continuous." },
    ],
  },
  {
    slug: "present-perfect-vs-continuous",
    title: "Present Perfect vs Present Perfect Continuous",
    description:
      "Both connect the past to now, but Present Perfect emphasizes completion or result, while Present Perfect Continuous emphasizes the duration or ongoing nature of an activity — often with visible effects in the present.",
    topicASlug: "present-perfect",
    topicBSlug: "present-perfect-continuous",
    questions: [
      { sentence: "I ___ (read) that book — it was great.", answer: "have read", options: ["have read", "have been reading", "read"], explanation: "Emphasis on completion/result — Present Perfect." },
      { sentence: "I ___ (read) this book for two hours — my eyes hurt.", answer: "have been reading", options: ["have been reading", "have read", "read"], explanation: "Emphasis on the ongoing duration and its effect — Present Perfect Continuous." },
      { sentence: "She ___ (write) five emails this morning.", answer: "has written", options: ["has written", "has been writing", "wrote"], explanation: "A completed quantity/result — Present Perfect." },
      { sentence: "She ___ (write) emails all morning — she's exhausted.", answer: "has been writing", options: ["has been writing", "has written", "wrote"], explanation: "Emphasis on the continuous activity leading to her current state — Present Perfect Continuous." },
      { sentence: "He ___ (paint) the fence — it looks great now.", answer: "has painted", options: ["has painted", "has been painting", "painted"], explanation: "The completed result is visible — Present Perfect." },
      { sentence: "He ___ (paint) the fence all day — he's covered in paint.", answer: "has been painting", options: ["has been painting", "has painted", "painted"], explanation: "The ongoing activity explains his current state — Present Perfect Continuous." },
      { sentence: "How many cups of coffee ___ (you/drink) today?", answer: "have you drunk", options: ["have you drunk", "have you been drinking", "did you drink"], explanation: "Asking for a specific completed count — Present Perfect." },
      { sentence: "How long ___ (you/study) English?", answer: "have you been studying", options: ["have you been studying", "have you studied", "did you study"], explanation: "Asking about ongoing duration — Present Perfect Continuous." },
      { sentence: "We ___ (finish) the entire project.", answer: "have finished", options: ["have finished", "have been finishing", "finished"], explanation: "A completed whole — Present Perfect." },
      { sentence: "We ___ (work) on this project since January.", answer: "have been working", options: ["have been working", "have worked", "worked"], explanation: "Emphasis on ongoing duration from a starting point — Present Perfect Continuous." },
    ],
  },
  {
    slug: "first-vs-second-conditional",
    title: "First vs Second Conditional",
    description:
      "The First Conditional (if + present simple, will + base verb) talks about real, likely future possibilities. The Second Conditional (if + past simple, would + base verb) talks about hypothetical, unlikely, or imaginary situations.",
    topicASlug: "conditionals",
    topicBSlug: "conditionals",
    questions: [
      { sentence: "If it ___ (rain) tomorrow, we will cancel the picnic.", answer: "rains", options: ["rains", "rained", "will rain"], explanation: "A real, likely future possibility — First Conditional, present simple after if." },
      { sentence: "If I ___ (win) the lottery, I would travel the world.", answer: "won", options: ["won", "win", "will win"], explanation: "A hypothetical, unlikely situation — Second Conditional, past simple after if." },
      { sentence: "If you study hard, you ___ (pass) the exam.", answer: "will pass", options: ["will pass", "would pass", "pass"], explanation: "A likely real result — First Conditional." },
      { sentence: "If I ___ (be) you, I would apologize.", answer: "were", options: ["were", "was", "am"], explanation: "A hypothetical situation — Second Conditional; \"were\" is used for all persons in formal style." },
      { sentence: "She will call you if she ___ (have) time.", answer: "has", options: ["has", "had", "will have"], explanation: "A real future possibility — First Conditional." },
      { sentence: "If we ___ (live) on the moon, we would need spacesuits.", answer: "lived", options: ["lived", "live", "will live"], explanation: "An imaginary, impossible situation — Second Conditional." },
      { sentence: "If he ___ (not/hurry), he will miss the train.", answer: "doesn't hurry", options: ["doesn't hurry", "didn't hurry", "won't hurry"], explanation: "A real, likely future consequence — First Conditional." },
      { sentence: "What would you do if you ___ (see) a ghost?", answer: "saw", options: ["saw", "see", "will see"], explanation: "A hypothetical, imaginary situation — Second Conditional." },
      { sentence: "If it's sunny tomorrow, we ___ (go) to the beach.", answer: "will go", options: ["will go", "would go", "go"], explanation: "A likely real plan — First Conditional." },
      { sentence: "If I ___ (have) more money, I would buy a bigger house.", answer: "had", options: ["had", "have", "will have"], explanation: "A hypothetical present situation — Second Conditional." },
    ],
  },
  {
    slug: "past-perfect-vs-past-simple",
    title: "Past Perfect vs Past Simple",
    description:
      "When telling a story with two past events, Past Simple describes what happened, while Past Perfect describes what had already happened before that — the earlier of the two past events.",
    topicASlug: "past-perfect",
    topicBSlug: "past-simple",
    questions: [
      { sentence: "When I arrived at the station, the train ___ (already/leave).", answer: "had already left", options: ["had already left", "already left", "left already"], explanation: "The earlier of two past events — Past Perfect." },
      { sentence: "I ___ (arrive) at the station at 9am.", answer: "arrived", options: ["arrived", "had arrived", "was arriving"], explanation: "A simple past event, the reference point of the story — Past Simple." },
      { sentence: "She ___ (never/see) snow before she moved to Canada.", answer: "had never seen", options: ["had never seen", "never saw", "has never seen"], explanation: "An earlier past state, before another past event — Past Perfect." },
      { sentence: "He was tired because he ___ (not/sleep) well.", answer: "hadn't slept", options: ["hadn't slept", "didn't sleep", "hasn't slept"], explanation: "The cause happened before the past state described — Past Perfect." },
      { sentence: "We ___ (eat) dinner and then went for a walk.", answer: "ate", options: ["ate", "had eaten", "were eating"], explanation: "The first in a simple sequence of past events, told in order — Past Simple." },
      { sentence: "By the time she got home, everyone ___ (leave).", answer: "had left", options: ["had left", "left", "were leaving"], explanation: "The event completed before another past moment — Past Perfect." },
      { sentence: "I ___ (finish) my homework before I watched TV.", answer: "had finished", options: ["had finished", "finished", "was finishing"], explanation: "The earlier of two past actions — Past Perfect." },
      { sentence: "Yesterday, I ___ (go) to the cinema with my friends.", answer: "went", options: ["went", "had gone", "was going"], explanation: "A single completed past event — Past Simple." },
      { sentence: "He realized he ___ (leave) his wallet at home.", answer: "had left", options: ["had left", "left", "has left"], explanation: "The action happened before the moment of realizing — Past Perfect." },
      { sentence: "They ___ (move) to London in 2010.", answer: "moved", options: ["moved", "had moved", "were moving"], explanation: "A simple past fact — Past Simple." },
    ],
  },
];
