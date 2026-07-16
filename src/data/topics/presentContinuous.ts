import type { GrammarTopicContent } from "../types";

export const presentContinuous: GrammarTopicContent = {
  slug: "present-continuous",
  sectionSlug: "tenses",
  title: "Present Continuous",
  level: "A1",
  explanations: {
    en: [
      "Use the present continuous for actions happening right now, or temporary situations around the present.",
      "Form: am/is/are + verb-ing. Negatives add 'not'; questions swap the order of the subject and be.",
      "Typical time words: now, right now, at the moment, these days, currently.",
    ],
    fr: [
      "Le présent continu sert à décrire des actions en train de se dérouler maintenant, ou des situations temporaires autour du présent.",
      "Formation : am/is/are + verbe-ing. À la forme négative on ajoute « not » ; à la forme interrogative, on inverse le sujet et be.",
      "Marqueurs de temps typiques : now, right now, at the moment, these days, currently.",
    ],
    es: [
      "El presente continuo se usa para acciones que ocurren ahora mismo, o situaciones temporales alrededor del presente.",
      "Forma: am/is/are + verbo-ing. En negativo se añade 'not'; en preguntas se invierte el orden del sujeto y be.",
      "Marcadores de tiempo típicos: now, right now, at the moment, these days, currently.",
    ],
    pt: [
      "O presente contínuo é usado para ações que acontecem agora mesmo, ou situações temporárias em torno do presente.",
      "Forma: am/is/are + verbo-ing. Na negativa acrescenta-se 'not'; nas perguntas inverte-se a ordem do sujeito e do verbo be.",
      "Marcadores de tempo típicos: now, right now, at the moment, these days, currently.",
    ],
    it: [
      "Il present continuous si usa per azioni che stanno accadendo proprio ora, o situazioni temporanee intorno al presente.",
      "Forma: am/is/are + verbo-ing. Al negativo si aggiunge 'not'; nelle domande si invertono soggetto e be.",
      "Indicatori di tempo tipici: now, right now, at the moment, these days, currently.",
    ],
    de: [
      "Das Present Continuous wird für Handlungen verwendet, die gerade jetzt passieren, oder für vorübergehende Situationen um die Gegenwart.",
      "Form: am/is/are + Verb-ing. Verneinung mit 'not'; bei Fragen werden Subjekt und be vertauscht.",
      "Typische Zeitangaben: now, right now, at the moment, these days, currently.",
    ],
    ru: [
      "Present Continuous используется для действий, происходящих прямо сейчас, или временных ситуаций вокруг настоящего момента.",
      "Форма: am/is/are + глагол-ing. В отрицании добавляется 'not'; в вопросе местами меняются подлежащее и be.",
      "Типичные слова-маркеры: now, right now, at the moment, these days, currently.",
    ],
    ar: [
      "يُستخدم المضارع المستمر (Present Continuous) للتعبير عن أفعال تحدث الآن، أو مواقف مؤقتة حول الوقت الحاضر.",
      "الصيغة: am/is/are + الفعل + ing. في النفي نضيف 'not'، وفي السؤال يتم تبديل مكان الفاعل و be.",
      "كلمات زمنية شائعة: now، right now، at the moment، these days، currently.",
    ],
    zh: [
      "现在进行时用于表达此刻正在发生的动作,或围绕现在的临时状况。",
      "构成:am/is/are + 动词-ing。否定句加 'not';疑问句将主语和 be 动词互换位置。",
      "常见时间状语:now、right now、at the moment、these days、currently。",
    ],
  },
  exercises: [
    {
      title: "Statements",
      questions: [
        { sentence: "I ___ (write) an email now.", answer: "am writing", explanation: "now → present continuous; I → am + verb-ing." },
        { sentence: "She ___ (read) a book at the moment.", answer: "is reading", explanation: "at the moment → present continuous; she → is + verb-ing." },
        { sentence: "We ___ (not/work) today.", answer: "aren't working", accept: ["are not working"], explanation: "Negative: are + not + verb-ing." },
        { sentence: "They ___ (play) football right now.", answer: "are playing", explanation: "right now → present continuous; they → are + verb-ing." },
        { sentence: "He ___ (not/listen) to music.", answer: "isn't listening", accept: ["is not listening"], explanation: "Negative: is + not + verb-ing." },
        { sentence: "It ___ (rain) outside.", answer: "is raining", explanation: "Ongoing action now; it → is + verb-ing." },
        { sentence: "I ___ (stay) with my aunt this month.", answer: "am staying", explanation: "Temporary situation around now → present continuous." },
        { sentence: "You ___ (make) a lot of noise!", answer: "are making", explanation: "Right now, an annoying habit → present continuous; you → are + verb-ing." },
        { sentence: "The children ___ (sleep) at the moment.", answer: "are sleeping", explanation: "The children = they → are + verb-ing." },
        { sentence: "She ___ (study) harder these days.", answer: "is studying", explanation: "these days → temporary period → present continuous." },
      ],
    },
    {
      title: "Questions & mixed",
      questions: [
        { sentence: "___ you listening to me?", answer: "Are", options: ["Are", "Is"], explanation: "You → Are + subject + verb-ing." },
        { sentence: "___ he working today?", answer: "Is", options: ["Is", "Are"], explanation: "He → Is + subject + verb-ing." },
        { sentence: "What ___ you doing?", answer: "are", options: ["are", "is"], explanation: "You → are doing." },
        { sentence: "Why ___ she crying?", answer: "is", options: ["is", "are"], explanation: "She → is crying." },
        { sentence: "I ___ (not/watch) TV right now, I'm cooking.", answer: "am not watching", explanation: "Negative: am + not + verb-ing." },
        { sentence: "Look! The bus ___ (arrive).", answer: "is arriving", explanation: "Look! + now → present continuous." },
        { sentence: "We ___ (have) a great time on holiday.", answer: "are having", explanation: "Ongoing situation → present continuous; we → are + verb-ing." },
        { sentence: "___ they still waiting?", answer: "Are", options: ["Are", "Is"], explanation: "They → Are + subject + verb-ing." },
        { sentence: "He ___ (try) to fix the car at the moment.", answer: "is trying", explanation: "at the moment → present continuous; he → is + verb-ing." },
        { sentence: "I ___ (learn) Spanish this year.", answer: "am learning", explanation: "this year → ongoing temporary period → present continuous." },
      ],
    },
  ],
};
