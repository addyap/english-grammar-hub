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
        { sentence: "'I like tea,' she said. → She said she ___ (like) tea.", answer: "liked", options: ["liked", "was liking", "had liked"], explanation: "Present simple backshifts to past simple in reported speech.", explanationI18n: { fr: "Le present simple recule au past simple dans le discours rapporté.", es: "El present simple retrocede al past simple en el estilo indirecto.", pt: "O present simple recua para o past simple no discurso indireto.", it: "Il present simple arretra al past simple nel discorso indiretto.", de: "Present simple wird im berichteten Redestil zum past simple verschoben.", ru: "Present simple сдвигается в past simple в косвенной речи.", ar: "يتراجع present simple إلى past simple في الكلام المنقول.", zh: "在间接引语中,present simple 后移为 past simple。" } },
        { sentence: "'I am working,' he said. → He said he ___ (work).", answer: "was working", options: ["was working", "worked", "had been working"], explanation: "Present continuous backshifts to past continuous.", explanationI18n: { fr: "Le present continuous recule au past continuous.", es: "El present continuous retrocede al past continuous.", pt: "O present continuous recua para o past continuous.", it: "Il present continuous arretra al past continuous.", de: "Present continuous wird zum past continuous verschoben.", ru: "Present continuous сдвигается в past continuous.", ar: "يتراجع present continuous إلى past continuous.", zh: "present continuous 后移为 past continuous。" } },
        { sentence: "'I saw him,' she said. → She said she ___ (see) him.", answer: "had seen", options: ["had seen", "has seen", "was seeing"], explanation: "Past simple backshifts to past perfect.", explanationI18n: { fr: "Le past simple recule au past perfect.", es: "El past simple retrocede al past perfect.", pt: "O past simple recua para o past perfect.", it: "Il past simple arretra al past perfect.", de: "Past simple wird zum past perfect verschoben.", ru: "Past simple сдвигается в past perfect.", ar: "يتراجع past simple إلى past perfect.", zh: "past simple 后移为 past perfect。" } },
        { sentence: "'I will help you,' he said. → He said he ___ (help) me.", answer: "would help", options: ["would help", "will help", "helped"], explanation: "will backshifts to would.", explanationI18n: { fr: "will recule à would.", es: "will retrocede a would.", pt: "will recua para would.", it: "will arretra a would.", de: "will wird zu would verschoben.", ru: "will сдвигается в would.", ar: "يتراجع will إلى would.", zh: "will 后移为 would。" } },
        { sentence: "'I can swim,' she said. → She said she ___ (can/swim).", answer: "could swim", options: ["could swim", "should swim", "swam"], explanation: "can backshifts to could.", explanationI18n: { fr: "can recule à could.", es: "can retrocede a could.", pt: "can recua para could.", it: "can arretra a could.", de: "can wird zu could verschoben.", ru: "can сдвигается в could.", ar: "يتراجع can إلى could.", zh: "can 后移为 could。" } },
        { sentence: "'I must leave now,' he said. → He said he ___ (leave).", answer: "had to leave", options: ["had to leave", "musted leave", "would leave"], explanation: "must backshifts to had to — must has no past form of its own.", explanationI18n: { fr: "must recule à had to — must n'a pas de forme au passé propre.", es: "must retrocede a had to — must no tiene forma de pasado propia.", pt: "must recua para had to — must não tem forma de passado própria.", it: "must arretra a had to — must non ha una forma di passato propria.", de: "must wird zu had to verschoben — must hat keine eigene Vergangenheitsform.", ru: "must сдвигается в had to — у must нет собственной формы прошедшего времени.", ar: "يتراجع must إلى had to — ليس لـ must صيغة ماضٍ خاصة به.", zh: "must 后移为 had to——must 本身没有过去式形式。" } },
        { sentence: "'I am tired today,' she said. → She said she was tired ___.", answer: "that day", options: ["that day", "today", "this day"], explanation: "today shifts to that day in reported speech.", explanationI18n: { fr: "today devient that day dans le discours rapporté.", es: "today cambia a that day en el estilo indirecto.", pt: "today muda para that day no discurso indireto.", it: "today diventa that day nel discorso indiretto.", de: "today wird im berichteten Redestil zu that day.", ru: "today меняется на that day в косвенной речи.", ar: "يتحول today إلى that day في الكلام المنقول.", zh: "在间接引语中,today 变为 that day。" } },
        { sentence: "'I'll call you tomorrow,' he said. → He said he would call me ___.", answer: "the next day", options: ["the next day", "tomorrow", "the following today"], explanation: "tomorrow shifts to the next day.", explanationI18n: { fr: "tomorrow devient the next day.", es: "tomorrow cambia a the next day.", pt: "tomorrow muda para the next day.", it: "tomorrow diventa the next day.", de: "tomorrow wird zu the next day.", ru: "tomorrow меняется на the next day.", ar: "يتحول tomorrow إلى the next day.", zh: "tomorrow 变为 the next day。" } },
        { sentence: "'I saw her yesterday,' she said. → She said she had seen her ___.", answer: "the day before", options: ["the day before", "yesterday", "before yesterday"], explanation: "yesterday shifts to the day before.", explanationI18n: { fr: "yesterday devient the day before.", es: "yesterday cambia a the day before.", pt: "yesterday muda para the day before.", it: "yesterday diventa the day before.", de: "yesterday wird zu the day before.", ru: "yesterday меняется на the day before.", ar: "يتحول yesterday إلى the day before.", zh: "yesterday 变为 the day before。" } },
        { sentence: "'This is my book,' he said. → He said ___ was his book.", answer: "that", options: ["that", "this", "it"], explanation: "this shifts to that in reported speech.", explanationI18n: { fr: "this devient that dans le discours rapporté.", es: "this cambia a that en el estilo indirecto.", pt: "this muda para that no discurso indireto.", it: "this diventa that nel discorso indiretto.", de: "this wird im berichteten Redestil zu that.", ru: "this меняется на that в косвенной речи.", ar: "يتحول this إلى that في الكلام المنقول.", zh: "在间接引语中,this 变为 that。" } },
      ],
    },
    {
      title: "Reported Questions & Reporting Verbs",
      questions: [
        { sentence: "'Do you like tea?' she asked. → She asked ___ I liked tea.", answer: "if", options: ["if", "that", "what"], explanation: "Yes/no questions are reported with if or whether.", explanationI18n: { fr: "Les questions fermées se rapportent avec if ou whether.", es: "Las preguntas de sí/no se relatan con if o whether.", pt: "As perguntas de sim/não relatam-se com if ou whether.", it: "Le domande sì/no si riferiscono con if o whether.", de: "Ja/Nein-Fragen werden mit if oder whether wiedergegeben.", ru: "Общие вопросы передаются с помощью if или whether.", ar: "تُنقل أسئلة نعم/لا بـ if أو whether.", zh: "是/否疑问句用 if 或 whether 来转述。" } },
        { sentence: "'Where do you live?' he asked. → He asked where I ___.", answer: "lived", options: ["lived", "did live", "do live"], explanation: "Reported wh-questions use statement word order — no do.", explanationI18n: { fr: "Les questions en wh- rapportées suivent l'ordre de la phrase déclarative — pas de do.", es: "Las preguntas con wh- relatadas usan el orden de la oración afirmativa — sin do.", pt: "As perguntas com wh- relatadas usam a ordem da frase afirmativa — sem do.", it: "Le domande con wh- riferite seguono l'ordine della frase affermativa — niente do.", de: "Wiedergegebene wh-Fragen folgen der Aussagesatz-Wortstellung — kein do.", ru: "Переданные wh-вопросы имеют порядок слов утверждения — без do.", ar: "تتبع أسئلة wh- المنقولة ترتيب الجملة الخبرية — بلا do.", zh: "转述的 wh- 疑问句采用陈述句语序——不用 do。" } },
        { sentence: "'What time is it?' she asked. → She asked what time ___.", answer: "it was", options: ["it was", "was it", "it is"], explanation: "Statement word order: subject before verb, no auxiliary do.", explanationI18n: { fr: "Ordre de la phrase déclarative : sujet avant le verbe, sans l'auxiliaire do.", es: "Orden de oración afirmativa: sujeto antes del verbo, sin el auxiliar do.", pt: "Ordem de frase afirmativa: sujeito antes do verbo, sem o auxiliar do.", it: "Ordine della frase affermativa: soggetto prima del verbo, senza l'ausiliare do.", de: "Aussagesatz-Wortstellung: Subjekt vor dem Verb, kein Hilfsverb do.", ru: "Порядок слов утверждения: подлежащее перед глаголом, без вспомогательного do.", ar: "ترتيب الجملة الخبرية: الفاعل قبل الفعل، بلا الفعل المساعد do.", zh: "陈述句语序:主语在动词前,不用助动词 do。" } },
        { sentence: "He ___ (say/tell) me he was busy.", answer: "told", options: ["told", "said", "tells"], explanation: "tell takes a person object directly (tell + someone); say needs 'to' before a person, so 'said' alone before 'me' is wrong — and 'tells' is the wrong tense.", explanationI18n: { fr: "tell prend directement un complément de personne (tell + someone) ; say exige 'to' devant une personne, donc 'said' seul devant 'me' est incorrect — et 'tells' est au mauvais temps.", es: "tell lleva directamente un objeto de persona (tell + someone); say necesita 'to' antes de una persona, así que 'said' solo delante de 'me' es incorrecto — y 'tells' está en el tiempo equivocado.", pt: "tell leva diretamente um objeto de pessoa (tell + someone); say precisa de 'to' antes de uma pessoa, portanto 'said' sozinho antes de 'me' está errado — e 'tells' está no tempo errado.", it: "tell prende direttamente un complemento di persona (tell + someone); say richiede 'to' davanti a una persona, quindi 'said' da solo davanti a 'me' è sbagliato — e 'tells' è al tempo errato.", de: "tell nimmt direkt ein Personenobjekt (tell + someone); say braucht 'to' vor einer Person, daher ist 'said' allein vor 'me' falsch — und 'tells' hat die falsche Zeitform.", ru: "tell принимает дополнение-лицо напрямую (tell + someone); say требует 'to' перед лицом, поэтому 'said' само по себе перед 'me' неверно — а 'tells' в неправильном времени.", ar: "يأخذ tell مفعولاً به من شخص مباشرة (tell + someone)؛ ويحتاج say إلى 'to' قبل الشخص، فـ 'said' وحدها قبل 'me' خطأ — و 'tells' في الزمن الخطأ.", zh: "tell 直接带表示人的宾语(tell + someone);say 在人之前需要 'to',所以 'said' 单独放在 'me' 前是错的——而 'tells' 时态也不对。" } },
        { sentence: "She ___ (say/tell) that she was tired.", answer: "said", options: ["said", "told", "tells"], explanation: "say can be followed directly by that + clause; tell always needs a person object first (tell someone that...), so bare 'told' is wrong here — and 'tells' is the wrong tense.", explanationI18n: { fr: "say peut être suivi directement de that + proposition ; tell exige toujours d'abord un complément de personne (tell someone that...), donc 'told' seul est incorrect ici — et 'tells' est au mauvais temps.", es: "say puede ir seguido directamente de that + oración; tell siempre necesita primero un objeto de persona (tell someone that...), así que 'told' solo es incorrecto aquí — y 'tells' está en el tiempo equivocado.", pt: "say pode ser seguido diretamente de that + oração; tell precisa sempre primeiro de um objeto de pessoa (tell someone that...), portanto 'told' sozinho está errado aqui — e 'tells' está no tempo errado.", it: "say può essere seguito direttamente da that + proposizione; tell richiede sempre prima un complemento di persona (tell someone that...), quindi 'told' da solo è sbagliato qui — e 'tells' è al tempo errato.", de: "say kann direkt von that + Nebensatz gefolgt werden; tell braucht immer zuerst ein Personenobjekt (tell someone that...), daher ist 'told' allein hier falsch — und 'tells' hat die falsche Zeitform.", ru: "за say может напрямую следовать that + придаточное; tell всегда требует сначала дополнение-лицо (tell someone that...), поэтому 'told' само по себе здесь неверно — а 'tells' в неправильном времени.", ar: "يمكن أن يتبع say مباشرة that + جملة؛ أما tell فيحتاج دائمًا أولاً إلى مفعول به من شخص (tell someone that...)، فـ 'told' وحدها خطأ هنا — و 'tells' في الزمن الخطأ.", zh: "say 后面可以直接跟 that + 从句;tell 总是需要先有表示人的宾语(tell someone that...),所以这里单独的 'told' 是错的——而 'tells' 时态也不对。" } },
        { sentence: "He suggested ___ (go) to the cinema.", answer: "going", options: ["going", "to go", "go"], explanation: "suggest is followed by -ing (or that + subject), never to + infinitive.", explanationI18n: { fr: "suggest est suivi de -ing (ou de that + sujet), jamais de to + infinitif.", es: "suggest va seguido de -ing (o de that + sujeto), nunca de to + infinitivo.", pt: "suggest é seguido de -ing (ou de that + sujeito), nunca de to + infinitivo.", it: "suggest è seguito da -ing (o da that + soggetto), mai da to + infinito.", de: "Auf suggest folgt -ing (oder that + Subjekt), nie to + Infinitiv.", ru: "После suggest идёт -ing (или that + подлежащее), но никогда to + инфинитив.", ar: "يتبع suggest صيغة -ing (أو that + فاعل)، ولا يتبعه أبدًا to + مصدر.", zh: "suggest 后接 -ing(或 that + 主语),绝不接 to + 不定式。" } },
        { sentence: "She admitted that she ___ (be) wrong.", answer: "was", options: ["was", "is", "were"], explanation: "admit + that + subject + backshifted past tense.", explanationI18n: { fr: "admit + that + sujet + temps passé reculé.", es: "admit + that + sujeto + tiempo pasado retrocedido.", pt: "admit + that + sujeito + tempo passado recuado.", it: "admit + that + soggetto + tempo passato arretrato.", de: "admit + that + Subjekt + zurückverschobene Vergangenheitsform.", ru: "admit + that + подлежащее + сдвинутое прошедшее время.", ar: "admit + that + فاعل + زمن ماضٍ متراجع.", zh: "admit + that + 主语 + 后移的过去时。" } },
        { sentence: "'Why are you late?' he asked. → He asked why I ___ late.", answer: "was", options: ["was", "am", "were"], explanation: "Reported question: statement word order, present backshifts to past." },
        { sentence: "'Did you finish the report?' she asked. → She asked ___ I had finished the report.", answer: "if", options: ["if", "that", "when"], explanation: "Yes/no question reported with if/whether; past simple backshifts to past perfect." },
        { sentence: "He denied that he ___ (break) the window.", answer: "had broken", options: ["had broken", "broke", "has broken"], explanation: "deny + that + subject + backshifted past perfect (broke → had broken)." },
      ],
    },
  ],
};
