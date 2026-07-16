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
      "Typical time words: always, usually, often, every day, on Mondays.",
    ],
    fr: [
      "Le présent simple sert à exprimer les habitudes, les routines et les faits généralement vrais. Formation : I/you/we/they + verbe de base ; he/she/it + verbe + s.",
      "À la forme négative, on utilise don't/doesn't + verbe de base ; à la forme interrogative, Do/Does + sujet + verbe de base.",
      "Marqueurs de temps typiques : always, usually, often, every day, on Mondays.",
    ],
    es: [
      "El presente simple se usa para hábitos, rutinas y hechos generalmente ciertos. Forma: I/you/we/they + verbo base; he/she/it + verbo + s.",
      "En negativo se usa don't/doesn't + verbo base; en preguntas, Do/Does + sujeto + verbo base.",
      "Marcadores de tiempo típicos: always, usually, often, every day, on Mondays.",
    ],
    pt: [
      "O presente simples é usado para hábitos, rotinas e fatos geralmente verdadeiros. Forma: I/you/we/they + verbo base; he/she/it + verbo + s.",
      "Na negativa usa-se don't/doesn't + verbo base; nas perguntas, Do/Does + sujeito + verbo base.",
      "Marcadores de tempo típicos: always, usually, often, every day, on Mondays.",
    ],
    it: [
      "Il presente semplice si usa per abitudini, routine e fatti generalmente veri. Forma: I/you/we/they + verbo base; he/she/it + verbo + s.",
      "Alla forma negativa si usa don't/doesn't + verbo base; nelle domande, Do/Does + soggetto + verbo base.",
      "Indicatori di tempo tipici: always, usually, often, every day, on Mondays.",
    ],
    de: [
      "Das Present Simple wird für Gewohnheiten, Routinen und allgemein gültige Fakten verwendet. Form: I/you/we/they + Grundform; he/she/it + Verb + s.",
      "Verneinung mit don't/doesn't + Grundform; Fragen mit Do/Does + Subjekt + Grundform.",
      "Typische Zeitangaben: always, usually, often, every day, on Mondays.",
    ],
    ru: [
      "Present Simple используется для привычек, распорядка дня и фактов, которые обычно верны. Форма: I/you/we/they + глагол в базовой форме; he/she/it + глагол + s.",
      "Отрицание образуется с помощью don't/doesn't + базовая форма глагола; вопрос — Do/Does + подлежащее + базовая форма.",
      "Типичные слова-маркеры: always, usually, often, every day, on Mondays.",
    ],
    ar: [
      "يُستخدم المضارع البسيط (Present Simple) للتعبير عن العادات والروتين والحقائق الصحيحة عمومًا. الصيغة: I/you/we/they + الفعل الأساسي؛ he/she/it + الفعل + s.",
      "في النفي نستخدم don't/doesn't + الفعل الأساسي، وفي السؤال نستخدم Do/Does + الفاعل + الفعل الأساسي.",
      "كلمات زمنية شائعة: always، usually، often، every day، on Mondays.",
    ],
    zh: [
      "一般现在时用于表达习惯、日常规律和普遍事实。构成:I/you/we/they + 动词原形;he/she/it + 动词 + s。",
      "否定句用 don't/doesn't + 动词原形;疑问句用 Do/Does + 主语 + 动词原形。",
      "常见时间状语:always、usually、often、every day、on Mondays。",
    ],
  },
  exercises: [
    {
      title: "Statements",
      questions: [
        { sentence: "She ___ (work) in a bank.", answer: "works", explanation: "He/she/it adds -s in the present simple." },
        { sentence: "I ___ (not/like) coffee.", answer: "don't like", explanation: "Negative with I/you/we/they = don't + base verb." },
        { sentence: "He ___ (not/eat) meat.", answer: "doesn't eat", explanation: "Negative with he/she/it = doesn't + base verb." },
        { sentence: "We ___ (live) in Paris.", answer: "live", explanation: "I/you/we/they use the base verb, no -s." },
        { sentence: "The shop ___ (close) at 9pm.", answer: "closes", explanation: "The shop = it, so add -s." },
        { sentence: "My parents ___ (not/speak) English.", answer: "don't speak", explanation: "They = don't + base verb." },
        { sentence: "Water ___ (boil) at 100°C.", answer: "boils", explanation: "General scientific fact → present simple, -s for it." },
        { sentence: "I ___ (study) every evening.", answer: "study", explanation: "Habit/routine → present simple, base verb for I." },
        { sentence: "She ___ (have) two brothers.", answer: "has", explanation: "Have → has with he/she/it (irregular -s form)." },
        { sentence: "They ___ (not/work) on Sundays.", answer: "don't work", explanation: "They = don't + base verb." },
      ],
    },
    {
      title: "Questions & time words",
      questions: [
        { sentence: "___ you like tea?", answer: "Do", options: ["Do", "Does"], explanation: "You → Do + subject + base verb." },
        { sentence: "___ she work on Saturdays?", answer: "Does", options: ["Do", "Does"], explanation: "She → Does + subject + base verb." },
        { sentence: "What time ___ the train leave?", answer: "does", options: ["do", "does"], explanation: "The train = it → does." },
        { sentence: "I usually ___ (get up) at 7.", answer: "get up", explanation: "usually is a present simple time marker." },
        { sentence: "He never ___ (watch) TV.", answer: "watches", explanation: "never + he/she/it → still add -s: watches." },
        { sentence: "We ___ (go) to the gym every day.", answer: "go", explanation: "every day → present simple, base verb for we." },
        { sentence: "Do they ___ (live) here?", answer: "live", explanation: "After Do, use the base verb, not lives." },
        { sentence: "She doesn't ___ (drink) alcohol.", answer: "drink", explanation: "After doesn't, use the base verb." },
        { sentence: "My brother ___ (play) football on Mondays.", answer: "plays", explanation: "on Mondays + he → present simple, -s." },
        { sentence: "___ your sister speak Spanish?", answer: "Does", options: ["Do", "Does"], explanation: "Your sister = she → Does." },
      ],
    },
  ],
};
