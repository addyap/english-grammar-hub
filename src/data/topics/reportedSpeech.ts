import type { GrammarTopicContent } from "../types";

export const reportedSpeech: GrammarTopicContent = {
  slug: "reported-speech",
  sectionSlug: "reported-speech",
  title: "Reported Speech",
  level: "B2",
  explanations: {
    en: [
      "Use reported speech to tell someone what another person said, without quoting their exact words in quotation marks. Direct speech: She said, 'I am tired.' Reported speech: She said (that) she was tired — the tense usually shifts back one step because you're reporting from a later point in time, even if what was said is still true now.",
      {
        intro: "When the reporting verb is in the past (said, told), the verb in the reported clause usually shifts back one tense — this is called backshift:",
        items: [
          "Present simple → past simple: 'I like tea' → She said she liked tea.",
          "Present continuous → past continuous: 'I am working' → He said he was working.",
          "Past simple → past perfect: 'I saw him' → She said she had seen him.",
          "will → would, can → could, must → had to: 'I will help' → He said he would help.",
          "Time and place words shift too: today → that day, tomorrow → the next day, yesterday → the day before, here → there, this → that.",
        ],
      },
      {
        intro: "Reported questions keep statement word order (no auxiliary do) and lose the question mark; reported statements need the right verb pattern:",
        items: [
          "Yes/no questions add if or whether: 'Do you like tea?' → She asked if I liked tea (not She asked did I like tea).",
          "Wh-questions keep the question word but use statement order: 'Where do you live?' → He asked where I lived (not where did I live).",
          "say never takes a direct object (no person); tell always needs one: She said (that) she was busy vs She told me (that) she was busy — not she said me or she told that.",
          "Other reporting verbs carry their own pattern: suggest + -ing or that: He suggested going out; explain/admit/deny + that: She admitted (that) she was wrong.",
        ],
      },
      "The most common mistake is keeping question word order (with do/does/did) inside a reported question: She asked what did I want is wrong — once a question is reported, it becomes a statement in word order, with the question word or if/whether simply attached to the front: She asked what I wanted. A second frequent error: using say with a direct object — he said me is always wrong; use tell (he told me) or simply drop the object (he said that...).",
      "Look for reporting verbs (said, told, asked, explained, wondered, suggested, admitted), the optional that after say/tell, if/whether introducing a reported yes/no question, and backshifted time words (that day, the day before, the next day) — signs that someone's exact words are being retold rather than quoted directly.",
    ],
    fr: [
      "Utilisez le discours indirect pour rapporter ce qu'une autre personne a dit, sans citer ses mots exacts entre guillemets. Discours direct : She said, 'I am tired.' Discours indirect : She said (that) she was tired — le temps recule généralement d'un cran, car vous rapportez les propos depuis un moment ultérieur, même si ce qui a été dit reste vrai maintenant.",
      {
        intro: "Quand le verbe introducteur est au passé (said, told), le verbe de la proposition rapportée recule généralement d'un temps :",
        items: [
          "Présent simple → prétérit : 'I like tea' → She said she liked tea.",
          "Présent progressif → prétérit progressif : 'I am working' → He said he was working.",
          "Prétérit → plus-que-parfait : 'I saw him' → She said she had seen him.",
          "will → would, can → could, must → had to : 'I will help' → He said he would help.",
          "Les expressions de temps et de lieu changent aussi : today → that day, tomorrow → the next day, yesterday → the day before, here → there, this → that.",
        ],
      },
      {
        intro: "Les questions rapportées suivent l'ordre d'une phrase affirmative (pas d'auxiliaire do) et perdent le point d'interrogation ; les propositions rapportées, elles, exigent la bonne construction verbale :",
        items: [
          "Les questions fermées ajoutent if ou whether : 'Do you like tea?' → She asked if I liked tea (et non She asked did I like tea).",
          "Les questions ouvertes gardent le mot interrogatif mais avec l'ordre affirmatif : 'Where do you live?' → He asked where I lived (et non where did I live).",
          "say ne prend jamais de complément de personne directement ; tell en exige toujours un : She said (that) she was busy contre She told me (that) she was busy — jamais she said me ni she told that.",
          "D'autres verbes introducteurs ont leur propre construction : suggest + -ing ou that : He suggested going out ; explain/admit/deny + that : She admitted (that) she was wrong.",
        ],
      },
      "L'erreur la plus fréquente est de garder l'ordre interrogatif (avec do/does/did) dans une question rapportée : She asked what did I want est incorrect — une fois rapportée, la question devient une affirmation dans l'ordre des mots, le mot interrogatif ou if/whether se plaçant simplement en tête : She asked what I wanted. Une autre erreur courante : employer say avec un complément de personne direct — he said me est toujours incorrect ; utilisez tell (he told me) ou omettez simplement le complément (he said that...).",
      "Repérez les verbes introducteurs (said, told, asked, explained, wondered, suggested, admitted), le that facultatif après say/tell, if/whether introduisant une question rapportée fermée, et les expressions de temps décalées (that day, the day before, the next day) — autant de signes que l'on rapporte les propos de quelqu'un plutôt que de les citer directement.",
    ],
    es: [
      "Usa el estilo indirecto para contar lo que dijo otra persona, sin citar sus palabras exactas entre comillas. Estilo directo: She said, 'I am tired.' Estilo indirecto: She said (that) she was tired —el tiempo verbal normalmente retrocede un paso, porque estás relatando lo dicho desde un momento posterior, aunque siga siendo cierto ahora.",
      {
        intro: "Cuando el verbo introductorio está en pasado (said, told), el verbo de la oración citada suele retroceder un tiempo:",
        items: [
          "Presente simple → pasado simple: 'I like tea' → She said she liked tea.",
          "Presente continuo → pasado continuo: 'I am working' → He said he was working.",
          "Pasado simple → pluscuamperfecto: 'I saw him' → She said she had seen him.",
          "will → would, can → could, must → had to: 'I will help' → He said he would help.",
          "Las expresiones de tiempo y lugar también cambian: today → that day, tomorrow → the next day, yesterday → the day before, here → there, this → that.",
        ],
      },
      {
        intro: "Las preguntas en estilo indirecto siguen el orden de una oración afirmativa (sin el auxiliar do) y pierden el signo de interrogación; las oraciones citadas necesitan la construcción verbal correcta:",
        items: [
          "Las preguntas de sí/no añaden if o whether: 'Do you like tea?' → She asked if I liked tea (no She asked did I like tea).",
          "Las preguntas con partícula interrogativa mantienen esa palabra pero con orden afirmativo: 'Where do you live?' → He asked where I lived (no where did I live).",
          "say nunca lleva un complemento de persona directo; tell siempre lo necesita: She said (that) she was busy frente a She told me (that) she was busy —nunca she said me ni she told that.",
          "Otros verbos introductorios tienen su propia construcción: suggest + -ing o that: He suggested going out; explain/admit/deny + that: She admitted (that) she was wrong.",
        ],
      },
      "El error más común es mantener el orden interrogativo (con do/does/did) dentro de una pregunta citada: She asked what did I want es incorrecto —una vez citada, la pregunta se convierte en una afirmación en el orden de las palabras, con la palabra interrogativa o if/whether simplemente al principio: She asked what I wanted. Otro error frecuente: usar say con un complemento de persona directo —he said me siempre es incorrecto; usa tell (he told me) u omite el complemento (he said that...).",
      "Fíjate en los verbos introductorios (said, told, asked, explained, wondered, suggested, admitted), el that opcional tras say/tell, if/whether al introducir una pregunta de sí/no citada, y las expresiones de tiempo desplazadas (that day, the day before, the next day) —señales de que se están relatando las palabras de alguien en lugar de citarlas directamente.",
    ],
    pt: [
      "Usa o discurso indireto para contar o que outra pessoa disse, sem citar as suas palavras exatas entre aspas. Discurso direto: She said, 'I am tired.' Discurso indireto: She said (that) she was tired — o tempo verbal normalmente recua um passo, porque estás a relatar o que foi dito a partir de um momento posterior, mesmo que continue a ser verdade agora.",
      {
        intro: "Quando o verbo introdutório está no passado (said, told), o verbo da oração citada costuma recuar um tempo:",
        items: [
          "Presente simples → passado simples: 'I like tea' → She said she liked tea.",
          "Presente contínuo → passado contínuo: 'I am working' → He said he was working.",
          "Passado simples → mais-que-perfeito: 'I saw him' → She said she had seen him.",
          "will → would, can → could, must → had to: 'I will help' → He said he would help.",
          "As expressões de tempo e lugar também mudam: today → that day, tomorrow → the next day, yesterday → the day before, here → there, this → that.",
        ],
      },
      {
        intro: "As perguntas em discurso indireto seguem a ordem de uma frase afirmativa (sem o auxiliar do) e perdem o ponto de interrogação; as orações citadas precisam da construção verbal correta:",
        items: [
          "As perguntas de sim/não acrescentam if ou whether: 'Do you like tea?' → She asked if I liked tea (e não She asked did I like tea).",
          "As perguntas com palavra interrogativa mantêm essa palavra mas com ordem afirmativa: 'Where do you live?' → He asked where I lived (e não where did I live).",
          "say nunca leva um complemento de pessoa direto; tell precisa sempre de um: She said (that) she was busy versus She told me (that) she was busy — nunca she said me nem she told that.",
          "Outros verbos introdutórios têm a sua própria construção: suggest + -ing ou that: He suggested going out; explain/admit/deny + that: She admitted (that) she was wrong.",
        ],
      },
      "O erro mais comum é manter a ordem interrogativa (com do/does/did) dentro de uma pergunta citada: She asked what did I want está errado — uma vez citada, a pergunta transforma-se numa afirmação na ordem das palavras, com a palavra interrogativa ou if/whether simplesmente à frente: She asked what I wanted. Outro erro frequente: usar say com um complemento de pessoa direto — he said me está sempre errado; usa tell (he told me) ou omite o complemento (he said that...).",
      "Repara nos verbos introdutórios (said, told, asked, explained, wondered, suggested, admitted), no that opcional depois de say/tell, no if/whether a introduzir uma pergunta de sim/não citada, e nas expressões de tempo deslocadas (that day, the day before, the next day) — sinais de que se está a relatar as palavras de alguém em vez de as citar diretamente.",
    ],
    it: [
      "Usa il discorso indiretto per riferire ciò che un'altra persona ha detto, senza citare le sue parole esatte tra virgolette. Discorso diretto: She said, 'I am tired.' Discorso indiretto: She said (that) she was tired — il tempo verbale generalmente arretra di un passo, perché stai riferendo quanto detto da un momento successivo, anche se è ancora vero adesso.",
      {
        intro: "Quando il verbo introduttivo è al passato (said, told), il verbo della frase riportata di solito arretra di un tempo:",
        items: [
          "Presente semplice → passato semplice: 'I like tea' → She said she liked tea.",
          "Presente progressivo → passato progressivo: 'I am working' → He said he was working.",
          "Passato semplice → trapassato prossimo: 'I saw him' → She said she had seen him.",
          "will → would, can → could, must → had to: 'I will help' → He said he would help.",
          "Cambiano anche le espressioni di tempo e luogo: today → that day, tomorrow → the next day, yesterday → the day before, here → there, this → that.",
        ],
      },
      {
        intro: "Le domande riportate seguono l'ordine di una frase affermativa (senza l'ausiliare do) e perdono il punto interrogativo; le frasi riportate richiedono invece la costruzione verbale corretta:",
        items: [
          "Le domande sì/no aggiungono if o whether: 'Do you like tea?' → She asked if I liked tea (non She asked did I like tea).",
          "Le domande con parola interrogativa mantengono quella parola ma con l'ordine affermativo: 'Where do you live?' → He asked where I lived (non where did I live).",
          "say non prende mai un complemento di persona diretto; tell ne richiede sempre uno: She said (that) she was busy contro She told me (that) she was busy — mai she said me né she told that.",
          "Altri verbi introduttivi hanno una propria costruzione: suggest + -ing o that: He suggested going out; explain/admit/deny + that: She admitted (that) she was wrong.",
        ],
      },
      "L'errore più comune è mantenere l'ordine interrogativo (con do/does/did) dentro una domanda riportata: She asked what did I want è sbagliato — una volta riportata, la domanda diventa un'affermazione nell'ordine delle parole, con la parola interrogativa o if/whether semplicemente all'inizio: She asked what I wanted. Un altro errore frequente: usare say con un complemento di persona diretto — he said me è sempre sbagliato; usa tell (he told me) oppure ometti il complemento (he said that...).",
      "Cerca i verbi introduttivi (said, told, asked, explained, wondered, suggested, admitted), il that facoltativo dopo say/tell, if/whether che introduce una domanda sì/no riportata, e le espressioni di tempo spostate (that day, the day before, the next day) — segnali che si stanno riferendo le parole di qualcuno invece di citarle direttamente.",
    ],
    de: [
      "Verwende die indirekte Rede, um wiederzugeben, was jemand anderes gesagt hat, ohne die genauen Worte in Anführungszeichen zu zitieren. Direkte Rede: She said, 'I am tired.' Indirekte Rede: She said (that) she was tired — die Zeitform rückt meist um eine Stufe zurück, weil du das Gesagte aus einem späteren Zeitpunkt berichtest, selbst wenn es jetzt noch stimmt.",
      {
        intro: "Steht das einleitende Verb in der Vergangenheit (said, told), rückt das Verb im berichteten Satz meist um eine Zeitform zurück:",
        items: [
          "Present Simple → Simple Past: 'I like tea' → She said she liked tea.",
          "Present Progressive → Past Progressive: 'I am working' → He said he was working.",
          "Simple Past → Past Perfect: 'I saw him' → She said she had seen him.",
          "will → would, can → could, must → had to: 'I will help' → He said he would help.",
          "Auch Zeit- und Ortsangaben ändern sich: today → that day, tomorrow → the next day, yesterday → the day before, here → there, this → that.",
        ],
      },
      {
        intro: "Berichtete Fragen folgen der Wortstellung eines Aussagesatzes (kein Hilfsverb do) und verlieren das Fragezeichen; berichtete Aussagen brauchen dagegen das richtige Verbmuster:",
        items: [
          "Ja/Nein-Fragen fügen if oder whether hinzu: 'Do you like tea?' → She asked if I liked tea (nicht She asked did I like tea).",
          "W-Fragen behalten das Fragewort, aber mit Aussagesatz-Wortstellung: 'Where do you live?' → He asked where I lived (nicht where did I live).",
          "say steht nie mit einem direkten Personalobjekt; tell braucht immer eines: She said (that) she was busy gegenüber She told me (that) she was busy — nie she said me oder she told that.",
          "Andere einleitende Verben haben ihr eigenes Muster: suggest + -ing oder that: He suggested going out; explain/admit/deny + that: She admitted (that) she was wrong.",
        ],
      },
      "Der häufigste Fehler ist, die Frage-Wortstellung (mit do/does/did) in einer berichteten Frage beizubehalten: She asked what did I want ist falsch — einmal berichtet, wird die Frage zu einem Aussagesatz in der Wortstellung, wobei das Fragewort oder if/whether einfach vorangestellt wird: She asked what I wanted. Ein weiterer häufiger Fehler: say mit einem direkten Personalobjekt zu verwenden — he said me ist immer falsch; benutze tell (he told me) oder lass das Objekt einfach weg (he said that...).",
      "Achte auf einleitende Verben (said, told, asked, explained, wondered, suggested, admitted), das optionale that nach say/tell, if/whether zur Einleitung einer berichteten Ja/Nein-Frage sowie verschobene Zeitangaben (that day, the day before, the next day) — Anzeichen dafür, dass jemandes Worte wiedergegeben statt direkt zitiert werden.",
    ],
    ru: [
      "Используйте косвенную речь, чтобы передать слова другого человека, не цитируя их дословно в кавычках. Прямая речь: She said, 'I am tired.' Косвенная речь: She said (that) she was tired — время обычно сдвигается на шаг назад, потому что вы пересказываете сказанное с более позднего момента, даже если это по-прежнему верно сейчас.",
      {
        intro: "Если глагол, вводящий речь, стоит в прошедшем времени (said, told), глагол в косвенной части обычно сдвигается на одно время назад:",
        items: [
          "Present Simple → Past Simple: 'I like tea' → She said she liked tea.",
          "Present Continuous → Past Continuous: 'I am working' → He said he was working.",
          "Past Simple → Past Perfect: 'I saw him' → She said she had seen him.",
          "will → would, can → could, must → had to: 'I will help' → He said he would help.",
          "Слова времени и места тоже меняются: today → that day, tomorrow → the next day, yesterday → the day before, here → there, this → that.",
        ],
      },
      {
        intro: "Косвенные вопросы имеют порядок слов утвердительного предложения (без вспомогательного do) и теряют вопросительный знак; косвенные утверждения требуют правильной конструкции глагола:",
        items: [
          "Общие вопросы добавляют if или whether: 'Do you like tea?' → She asked if I liked tea (а не She asked did I like tea).",
          "Специальные вопросы сохраняют вопросительное слово, но с прямым порядком слов: 'Where do you live?' → He asked where I lived (а не where did I live).",
          "say никогда не имеет прямого дополнения-лица; tell всегда его требует: She said (that) she was busy против She told me (that) she was busy — никогда she said me или she told that.",
          "У других вводных глаголов своя конструкция: suggest + -ing или that: He suggested going out; explain/admit/deny + that: She admitted (that) she was wrong.",
        ],
      },
      "Самая частая ошибка — сохранять вопросительный порядок слов (с do/does/did) в косвенном вопросе: She asked what did I want — неправильно; в косвенной речи вопрос становится утверждением по порядку слов, а вопросительное слово или if/whether просто ставится в начале: She asked what I wanted. Ещё одна распространённая ошибка — использовать say с прямым дополнением-лицом: he said me всегда неправильно; используйте tell (he told me) или просто опустите дополнение (he said that...).",
      "Обращайте внимание на вводные глаголы (said, told, asked, explained, wondered, suggested, admitted), необязательное that после say/tell, if/whether, вводящие косвенный общий вопрос, и сдвинутые обозначения времени (that day, the day before, the next day) — признаки того, что чьи-то слова пересказываются, а не цитируются напрямую.",
    ],
    ar: [
      "استخدم الكلام غير المباشر لنقل ما قاله شخص آخر، دون اقتباس كلماته الحرفية بين علامتي تنصيص. الكلام المباشر: She said, 'I am tired.' الكلام غير المباشر: She said (that) she was tired — يتراجع الزمن عادةً خطوة واحدة إلى الوراء لأنك تنقل الكلام من لحظة لاحقة، حتى لو كان ما قيل لا يزال صحيحًا الآن.",
      {
        intro: "عندما يكون فعل النقل في الماضي (said, told)، يتراجع فعل الجملة المنقولة عادةً زمنًا واحدًا إلى الوراء:",
        items: [
          "المضارع البسيط ← الماضي البسيط: 'I like tea' ← She said she liked tea.",
          "المضارع المستمر ← الماضي المستمر: 'I am working' ← He said he was working.",
          "الماضي البسيط ← الماضي التام: 'I saw him' ← She said she had seen him.",
          "will ← would، can ← could، must ← had to: 'I will help' ← He said he would help.",
          "تتغيّر أيضًا كلمات الزمان والمكان: today ← that day، tomorrow ← the next day، yesterday ← the day before، here ← there، this ← that.",
        ],
      },
      {
        intro: "الأسئلة المنقولة تأخذ ترتيب كلمات الجملة الخبرية (بلا فعل مساعد do) وتفقد علامة الاستفهام؛ أما الجمل المنقولة فتحتاج إلى التركيب الفعلي الصحيح:",
        items: [
          "أسئلة نعم/لا تضيف if أو whether: 'Do you like tea?' ← She asked if I liked tea (وليس She asked did I like tea).",
          "أسئلة أدوات الاستفهام تحتفظ بأداة السؤال لكن بترتيب الجملة الخبرية: 'Where do you live?' ← He asked where I lived (وليس where did I live).",
          "say لا يأخذ أبدًا مفعولاً به يدل على شخص مباشرة؛ tell يحتاج إليه دائمًا: She said (that) she was busy مقابل She told me (that) she was busy — أبدًا she said me ولا she told that.",
          "أفعال النقل الأخرى لها تركيبها الخاص: suggest + -ing أو that: He suggested going out؛ explain/admit/deny + that: She admitted (that) she was wrong.",
        ],
      },
      "أكثر الأخطاء شيوعًا هو الإبقاء على ترتيب كلمات السؤال (مع do/does/did) داخل سؤال منقول: She asked what did I want خطأ — فالسؤال بعد نقله يصبح جملة خبرية في ترتيب كلماته، وتوضع أداة السؤال أو if/whether في البداية فقط: She asked what I wanted. وخطأ شائع آخر: استخدام say مع مفعول به مباشر يدل على شخص — he said me خطأ دائمًا؛ استخدم tell (he told me) أو احذف المفعول به تمامًا (he said that...).",
      "ابحث عن أفعال النقل (said, told, asked, explained, wondered, suggested, admitted)، وكلمة that الاختيارية بعد say/tell، وif/whether لبدء سؤال نعم/لا منقول، وكلمات الزمن المُزاحة (that day, the day before, the next day) — علامات على أن كلام شخص ما يُنقل بدلاً من اقتباسه مباشرة.",
    ],
    zh: [
      "使用间接引语来转述别人说的话,而不用引号直接引用其原话。直接引语:She said, 'I am tired.' 间接引语:She said (that) she was tired——时态通常要往前推一步,因为你是从后来的某个时间点转述当时说的话,即使这句话现在仍然成立。",
      {
        intro: "当转述动词是过去式(said, told)时,被转述句子里的动词通常也要往前推一个时态:",
        items: [
          "一般现在时 → 一般过去时:'I like tea' → She said she liked tea。",
          "现在进行时 → 过去进行时:'I am working' → He said he was working。",
          "一般过去时 → 过去完成时:'I saw him' → She said she had seen him。",
          "will → would,can → could,must → had to:'I will help' → He said he would help。",
          "时间和地点状语也会相应改变:today → that day,tomorrow → the next day,yesterday → the day before,here → there,this → that。",
        ],
      },
      {
        intro: "间接疑问句使用陈述句语序(不用助动词 do),也不再用问号;被转述的陈述句则需要选对动词结构:",
        items: [
          "一般疑问句(是/否问句)要加上 if 或 whether:'Do you like tea?' → She asked if I liked tea(而不是 She asked did I like tea)。",
          "特殊疑问句保留疑问词,但改用陈述句语序:'Where do you live?' → He asked where I lived(而不是 where did I live)。",
          "say 后面从不直接跟人做宾语;tell 后面则必须跟一个人做宾语:She said (that) she was busy,而 She told me (that) she was busy——绝不说 she said me 或 she told that。",
          "其他转述动词各有自己的结构:suggest + -ing 或 that:He suggested going out;explain/admit/deny + that:She admitted (that) she was wrong。",
        ],
      },
      "最常见的错误是在间接疑问句里保留疑问句语序(带 do/does/did):She asked what did I want 是错的——问句一旦被转述,就变成陈述句语序,疑问词或 if/whether 只是放在句首:She asked what I wanted。另一个常见错误是:say 后面直接跟人做宾语——he said me 永远是错的;应该用 tell(he told me),或者干脆省略宾语(he said that...)。",
      "留意这些信号:转述动词(said, told, asked, explained, wondered, suggested, admitted)、say/tell 后可省略的 that、引导间接是/否问句的 if/whether,以及发生偏移的时间状语(that day, the day before, the next day)——这些都表明说话内容是被转述的,而不是直接引用的。",
    ],
  },
  paragraphKinds: ["use", "form", "form", "mistake", "markers"],
  exercises: [
    {
      title: "Backshift in Statements",
      questions: [
        { sentence: "'I like tea,' she said. → She said she ___ (like) tea.", answer: "liked", options: ["liked", "likes", "was liking"], explanation: "Present simple backshifts to past simple in reported speech." },
        { sentence: "'I am working,' he said. → He said he ___ (work).", answer: "was working", options: ["was working", "is working", "worked"], explanation: "Present continuous backshifts to past continuous." },
        { sentence: "'I saw him,' she said. → She said she ___ (see) him.", answer: "had seen", options: ["had seen", "saw", "has seen"], explanation: "Past simple backshifts to past perfect." },
        { sentence: "'I will help you,' he said. → He said he ___ (help) me.", answer: "would help", options: ["would help", "will help", "helped"], explanation: "will backshifts to would." },
        { sentence: "'I can swim,' she said. → She said she ___ (can/swim).", answer: "could swim", options: ["could swim", "can swim", "would swim"], explanation: "can backshifts to could." },
        { sentence: "'I must leave now,' he said. → He said he ___ (leave).", answer: "had to leave", options: ["had to leave", "must leave", "musted leave"], explanation: "must backshifts to had to — must has no past form of its own." },
        { sentence: "'I am tired today,' she said. → She said she was tired ___.", answer: "that day", options: ["that day", "today", "this day"], explanation: "today shifts to that day in reported speech." },
        { sentence: "'I'll call you tomorrow,' he said. → He said he would call me ___.", answer: "the next day", options: ["the next day", "tomorrow", "the following today"], explanation: "tomorrow shifts to the next day." },
        { sentence: "'I saw her yesterday,' she said. → She said she had seen her ___.", answer: "the day before", options: ["the day before", "yesterday", "before yesterday"], explanation: "yesterday shifts to the day before." },
        { sentence: "'This is my book,' he said. → He said ___ was his book.", answer: "that", options: ["that", "this", "it"], explanation: "this shifts to that in reported speech." },
      ],
    },
    {
      title: "Reported Questions & Reporting Verbs",
      questions: [
        { sentence: "'Do you like tea?' she asked. → She asked ___ I liked tea.", answer: "if", options: ["if", "that", "what"], explanation: "Yes/no questions are reported with if or whether." },
        { sentence: "'Where do you live?' he asked. → He asked where I ___.", answer: "lived", options: ["lived", "did live", "do live"], explanation: "Reported wh-questions use statement word order — no do." },
        { sentence: "'What time is it?' she asked. → She asked what time ___.", answer: "it was", options: ["it was", "was it", "it is"], explanation: "Statement word order: subject before verb, no auxiliary do." },
        { sentence: "He ___ (say/tell) me he was busy.", answer: "told", options: ["told", "said", "tells"], explanation: "tell takes a person object directly (tell + someone); say needs 'to' before a person, so 'said' alone before 'me' is wrong — and 'tells' is the wrong tense." },
        { sentence: "She ___ (say/tell) that she was tired.", answer: "said", options: ["said", "told", "tells"], explanation: "say can be followed directly by that + clause; tell always needs a person object first (tell someone that...), so bare 'told' is wrong here — and 'tells' is the wrong tense." },
        { sentence: "He suggested ___ (go) to the cinema.", answer: "going", options: ["going", "to go", "go"], explanation: "suggest is followed by -ing (or that + subject), never to + infinitive." },
        { sentence: "She admitted that she ___ (be) wrong.", answer: "was", options: ["was", "is", "were"], explanation: "admit + that + subject + backshifted past tense." },
        { sentence: "'Why are you late?' he asked. → He asked why I ___ late.", answer: "was", options: ["was", "am", "were"], explanation: "Reported question: statement word order, present backshifts to past." },
        { sentence: "'Did you finish the report?' she asked. → She asked ___ I had finished the report.", answer: "if", options: ["if", "that", "when"], explanation: "Yes/no question reported with if/whether; past simple backshifts to past perfect." },
        { sentence: "He denied that he ___ (break) the window.", answer: "had broken", options: ["had broken", "broke", "has broken"], explanation: "deny + that + subject + backshifted past perfect (broke → had broken)." },
      ],
    },
  ],
};
