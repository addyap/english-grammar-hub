import type { GrammarTopicContent } from "../types";

export const presentSimple: GrammarTopicContent = {
  slug: "present-simple",
  sectionSlug: "tenses",
  title: "Present Simple",
  level: "A1",
  explanations: {
    en: [
      "Use the present simple for habits, routines, and facts that are generally true. Form: I/you/we/they + base verb; he/she/it + verb-s.",
      "Negatives use don't/doesn't + base verb, and questions use Do/Does + subject + base verb.",
      "Do and does are auxiliary verbs — they carry no meaning of their own and only appear in negatives and questions. The main verb stays in its base form after them: She doesn't play tennis, not She doesn't plays.",
      "Typical time words: always, usually, often, every day, on Mondays.",
    ],
    fr: [
      "Le présent simple sert à exprimer les habitudes, les routines et les faits généralement vrais. Formation : I/you/we/they + verbe de base ; he/she/it + verbe + s.",
      "À la forme négative, on utilise don't/doesn't + verbe de base ; à la forme interrogative, Do/Does + sujet + verbe de base.",
      "Do et does sont des auxiliaires : ils n'ont pas de sens propre et n'apparaissent que dans les négations et les questions. Le verbe principal reste à sa forme de base après eux : She doesn't play tennis, et non She doesn't plays.",
      "Marqueurs de temps typiques : always, usually, often, every day, on Mondays.",
    ],
    es: [
      "El presente simple se usa para hábitos, rutinas y hechos generalmente ciertos. Forma: I/you/we/they + verbo base; he/she/it + verbo + s.",
      "En negativo se usa don't/doesn't + verbo base; en preguntas, Do/Does + sujeto + verbo base.",
      "Do y does son verbos auxiliares: no tienen significado propio y solo aparecen en negaciones y preguntas. El verbo principal se queda en su forma base después de ellos: She doesn't play tennis, no She doesn't plays.",
      "Marcadores de tiempo típicos: always, usually, often, every day, on Mondays.",
    ],
    pt: [
      "O presente simples é usado para hábitos, rotinas e fatos geralmente verdadeiros. Forma: I/you/we/they + verbo base; he/she/it + verbo + s.",
      "Na negativa usa-se don't/doesn't + verbo base; nas perguntas, Do/Does + sujeito + verbo base.",
      "Do e does são verbos auxiliares: não têm significado próprio e só aparecem em negações e perguntas. O verbo principal permanece na forma base depois deles: She doesn't play tennis, e não She doesn't plays.",
      "Marcadores de tempo típicos: always, usually, often, every day, on Mondays.",
    ],
    it: [
      "Il presente semplice si usa per abitudini, routine e fatti generalmente veri. Forma: I/you/we/they + verbo base; he/she/it + verbo + s.",
      "Alla forma negativa si usa don't/doesn't + verbo base; nelle domande, Do/Does + soggetto + verbo base.",
      "Do e does sono verbi ausiliari: non hanno un significato proprio e compaiono solo nelle negazioni e nelle domande. Il verbo principale resta alla forma base dopo di loro: She doesn't play tennis, non She doesn't plays.",
      "Indicatori di tempo tipici: always, usually, often, every day, on Mondays.",
    ],
    de: [
      "Das Present Simple wird für Gewohnheiten, Routinen und allgemein gültige Fakten verwendet. Form: I/you/we/they + Grundform; he/she/it + Verb + s.",
      "Verneinung mit don't/doesn't + Grundform; Fragen mit Do/Does + Subjekt + Grundform.",
      "Do und does sind Hilfsverben — sie haben keine eigene Bedeutung und stehen nur in Verneinungen und Fragen. Das Hauptverb bleibt danach in der Grundform: She doesn't play tennis, nicht She doesn't plays.",
      "Typische Zeitangaben: always, usually, often, every day, on Mondays.",
    ],
    ru: [
      "Present Simple используется для привычек, распорядка дня и фактов, которые обычно верны. Форма: I/you/we/they + глагол в базовой форме; he/she/it + глагол + s.",
      "Отрицание образуется с помощью don't/doesn't + базовая форма глагола; вопрос — Do/Does + подлежащее + базовая форма.",
      "Do и does — вспомогательные глаголы: у них нет собственного значения, и они появляются только в отрицаниях и вопросах. Основной глагол после них остаётся в базовой форме: She doesn't play tennis, а не She doesn't plays.",
      "Типичные слова-маркеры: always, usually, often, every day, on Mondays.",
    ],
    ar: [
      "يُستخدم المضارع البسيط (Present Simple) للتعبير عن العادات والروتين والحقائق الصحيحة عمومًا. الصيغة: I/you/we/they + الفعل الأساسي؛ he/she/it + الفعل + s.",
      "في النفي نستخدم don't/doesn't + الفعل الأساسي، وفي السؤال نستخدم Do/Does + الفاعل + الفعل الأساسي.",
      "تُعتبر do و does أفعالاً مساعدة (auxiliary) لا معنى لها بذاتها، وتظهر فقط في النفي والسؤال. يبقى الفعل الأساسي في صيغته الأساسية بعدها: She doesn't play tennis، وليس She doesn't plays.",
      "كلمات زمنية شائعة: always، usually، often، every day، on Mondays.",
    ],
    zh: [
      "一般现在时用于表达习惯、日常规律和普遍事实。构成:I/you/we/they + 动词原形;he/she/it + 动词 + s。",
      "否定句用 don't/doesn't + 动词原形;疑问句用 Do/Does + 主语 + 动词原形。",
      "do 和 does 是助动词,本身没有意义,只出现在否定句和疑问句中。它们后面的主要动词保持原形:She doesn't play tennis,而不是 She doesn't plays。",
      "常见时间状语:always、usually、often、every day、on Mondays。",
    ],
  },
  exercises: [
    {
      title: "Affirmative & Negative",
      questions: [
        { sentence: "She ___ (work) in a bank.", answer: "works", options: ["work", "works", "working"], explanation: "He/she/it adds -s in the present simple." },
        { sentence: "I ___ (not/like) coffee.", answer: "don't like", options: ["don't like", "doesn't like", "not like"], explanation: "Negative with I/you/we/they = don't + base verb." },
        { sentence: "He ___ (not/eat) meat.", answer: "doesn't eat", options: ["don't eat", "doesn't eat", "not eats"], explanation: "Negative with he/she/it = doesn't + base verb." },
        { sentence: "We ___ (live) in Paris.", answer: "live", options: ["lives", "live", "living"], explanation: "I/you/we/they use the base verb, no -s." },
        { sentence: "The shop ___ (close) at 9pm.", answer: "closes", options: ["closing", "close", "closes"], explanation: "The shop = it, so add -s." },
        { sentence: "My parents ___ (not/speak) English.", answer: "don't speak", options: ["doesn't speak", "don't speak", "not speak"], explanation: "They = don't + base verb." },
        { sentence: "Water ___ (boil) at 100°C.", answer: "boils", options: ["boiled", "boil", "boils"], explanation: "General scientific fact → present simple, -s for it." },
        { sentence: "I ___ (study) every evening.", answer: "study", options: ["studying", "studies", "study"], explanation: "Habit/routine → present simple, base verb for I." },
        { sentence: "She ___ (have) two brothers.", answer: "has", options: ["haves", "have", "has"], explanation: "Have → has with he/she/it (irregular -s form)." },
        { sentence: "They ___ (not/work) on Sundays.", answer: "don't work", options: ["not work", "doesn't work", "don't work"], explanation: "They = don't + base verb." },
      ],
    },
    {
      title: "Questions & Time Words",
      questions: [
        { sentence: "___ you like tea?", answer: "Do", options: ["Does", "Do"], explanation: "You → Do + subject + base verb." },
        { sentence: "___ she work on Saturdays?", answer: "Does", options: ["Does", "Do"], explanation: "She → Does + subject + base verb." },
        { sentence: "What time ___ the train leave?", answer: "does", options: ["do", "does"], explanation: "The train = it → does." },
        { sentence: "I usually ___ (get up) at 7.", answer: "get up", options: ["gets up", "getting up", "get up"], explanation: "usually is a present simple time marker." },
        { sentence: "He never ___ (watch) TV.", answer: "watches", options: ["watch", "watching", "watches"], explanation: "never + he/she/it → still add -s: watches." },
        { sentence: "We ___ (go) to the gym every day.", answer: "go", options: ["goes", "going", "go"], explanation: "every day → present simple, base verb for we." },
        { sentence: "Do they ___ (live) here?", answer: "live", options: ["lives", "living", "live"], explanation: "After Do, use the base verb, not lives." },
        { sentence: "She doesn't ___ (drink) alcohol.", answer: "drink", options: ["drinks", "drank", "drink"], explanation: "After doesn't, use the base verb." },
        { sentence: "My brother ___ (play) football on Mondays.", answer: "plays", options: ["play", "playing", "plays"], explanation: "on Mondays + he → present simple, -s." },
        { sentence: "___ your sister speak Spanish?", answer: "Does", options: ["Do", "Does"], explanation: "Your sister = she → Does." },
      ],
    },
  ],
};
