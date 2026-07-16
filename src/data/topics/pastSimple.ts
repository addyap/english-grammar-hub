import type { GrammarTopicContent } from "../types";

export const pastSimple: GrammarTopicContent = {
  slug: "past-simple",
  sectionSlug: "tenses",
  title: "Past Simple",
  level: "A2",
  explanations: {
    en: [
      "Use the past simple for finished actions and events at a specific time in the past.",
      "Regular verbs add -ed; many common verbs are irregular (go → went, see → saw). Negatives use didn't + base verb; questions use Did + subject + base verb.",
      "Typical time words: yesterday, last week, in 2019, two days ago.",
    ],
    fr: [
      "Le past simple sert à exprimer des actions et événements terminés à un moment précis du passé.",
      "Les verbes réguliers ajoutent -ed ; de nombreux verbes courants sont irréguliers (go → went, see → saw). À la forme négative on utilise didn't + verbe de base ; à la forme interrogative, Did + sujet + verbe de base.",
      "Marqueurs de temps typiques : yesterday, last week, in 2019, two days ago.",
    ],
    es: [
      "El pasado simple se usa para acciones y eventos terminados en un momento específico del pasado.",
      "Los verbos regulares añaden -ed; muchos verbos comunes son irregulares (go → went, see → saw). En negativo se usa didn't + verbo base; en preguntas, Did + sujeto + verbo base.",
      "Marcadores de tiempo típicos: yesterday, last week, in 2019, two days ago.",
    ],
    pt: [
      "O passado simples é usado para ações e eventos terminados num momento específico do passado.",
      "Os verbos regulares recebem -ed; muitos verbos comuns são irregulares (go → went, see → saw). Na negativa usa-se didn't + verbo base; nas perguntas, Did + sujeito + verbo base.",
      "Marcadores de tempo típicos: yesterday, last week, in 2019, two days ago.",
    ],
    it: [
      "Il past simple si usa per azioni ed eventi conclusi in un momento preciso del passato.",
      "I verbi regolari aggiungono -ed; molti verbi comuni sono irregolari (go → went, see → saw). Al negativo si usa didn't + verbo base; nelle domande, Did + soggetto + verbo base.",
      "Indicatori di tempo tipici: yesterday, last week, in 2019, two days ago.",
    ],
    de: [
      "Das Past Simple wird für abgeschlossene Handlungen und Ereignisse zu einem bestimmten Zeitpunkt in der Vergangenheit verwendet.",
      "Regelmäßige Verben erhalten -ed; viele häufige Verben sind unregelmäßig (go → went, see → saw). Verneinung mit didn't + Grundform; Fragen mit Did + Subjekt + Grundform.",
      "Typische Zeitangaben: yesterday, last week, in 2019, two days ago.",
    ],
    ru: [
      "Past Simple используется для завершённых действий и событий в определённый момент в прошлом.",
      "Правильные глаголы добавляют -ed; многие частые глаголы неправильные (go → went, see → saw). Отрицание — didn't + базовая форма; вопрос — Did + подлежащее + базовая форма.",
      "Типичные слова-маркеры: yesterday, last week, in 2019, two days ago.",
    ],
    ar: [
      "يُستخدم الماضي البسيط (Past Simple) للتعبير عن أفعال وأحداث انتهت في وقت محدد في الماضي.",
      "الأفعال المنتظمة تضيف -ed، والعديد من الأفعال الشائعة غير منتظمة (go → went، see → saw). في النفي نستخدم didn't + الفعل الأساسي، وفي السؤال Did + الفاعل + الفعل الأساسي.",
      "كلمات زمنية شائعة: yesterday، last week، in 2019، two days ago.",
    ],
    zh: [
      "一般过去时用于表达在过去某个特定时间已经完成的动作或事件。",
      "规则动词加 -ed;许多常见动词是不规则的(go → went, see → saw)。否定句用 didn't + 动词原形;疑问句用 Did + 主语 + 动词原形。",
      "常见时间状语:yesterday、last week、in 2019、two days ago。",
    ],
  },
  exercises: [
    {
      title: "Statements",
      questions: [
        { sentence: "She ___ (work) late yesterday.", answer: "worked", explanation: "Regular verb + -ed for a finished past action." },
        { sentence: "They ___ (go) to Rome last summer.", answer: "went", explanation: "go is irregular: go → went." },
        { sentence: "I ___ (not/see) him yesterday.", answer: "didn't see", explanation: "Negative past simple: didn't + base verb." },
        { sentence: "We ___ (watch) a film last night.", answer: "watched", explanation: "Regular verb + -ed." },
        { sentence: "He ___ (not/finish) his homework.", answer: "didn't finish", explanation: "Negative: didn't + base verb." },
        { sentence: "She ___ (buy) a new car last month.", answer: "bought", explanation: "buy is irregular: buy → bought." },
        { sentence: "I ___ (live) in Berlin in 2015.", answer: "lived", explanation: "Regular verb ending in -e adds only -d." },
        { sentence: "They ___ (not/arrive) on time.", answer: "didn't arrive", explanation: "Negative: didn't + base verb." },
        { sentence: "He ___ (see) her two days ago.", answer: "saw", explanation: "see is irregular: see → saw." },
        { sentence: "We ___ (not/have) time to visit the museum.", answer: "didn't have", explanation: "Negative: didn't + base verb." },
      ],
    },
    {
      title: "Questions & mixed",
      questions: [
        { sentence: "___ you go to the party?", answer: "Did", options: ["Did", "Was"], explanation: "Question: Did + subject + base verb." },
        { sentence: "___ she call you yesterday?", answer: "Did", options: ["Did", "Does"], explanation: "Past question always uses Did, whatever the subject." },
        { sentence: "What time ___ the film start?", answer: "did", options: ["did", "does"], explanation: "Past → did, base verb start." },
        { sentence: "Where ___ they go on holiday?", answer: "did", options: ["did", "do"], explanation: "Past question → did." },
        { sentence: "I ___ (not/know) about the meeting.", answer: "didn't know", explanation: "Negative: didn't + base verb." },
        { sentence: "He ___ (leave) the office at 6pm.", answer: "left", explanation: "leave is irregular: leave → left." },
        { sentence: "Did you ___ (enjoy) the concert?", answer: "enjoy", explanation: "After Did, use the base verb." },
        { sentence: "She didn't ___ (want) to come.", answer: "want", explanation: "After didn't, use the base verb." },
        { sentence: "We ___ (take) the wrong train.", answer: "took", explanation: "take is irregular: take → took." },
        { sentence: "___ he pass the exam?", answer: "Did", options: ["Did", "Do"], explanation: "Past question → Did." },
      ],
    },
  ],
};
