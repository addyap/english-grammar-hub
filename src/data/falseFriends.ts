import type { LanguageCode } from "./types";

export interface FalseFriend {
  word: string;
  explanation: string;
}

export interface FalseFriendsList {
  languageCode: LanguageCode;
  languageLabel: string;
  entries: FalseFriend[];
}

/**
 * Only languages where "false friend" is a real, well-documented category —
 * French/Spanish/Portuguese/Italian (Latin roots shared with English
 * vocabulary) and German (shared Germanic roots plus pseudo-anglicisms
 * like "Handy"). Deliberately doesn't force weak/fabricated lists for
 * Russian, Arabic, or Chinese, where lookalike-word confusion isn't a
 * natural category the way it is for these five — accuracy over false
 * parity across all 9 site languages.
 */
export const FALSE_FRIENDS_LISTS: FalseFriendsList[] = [
  {
    languageCode: "fr",
    languageLabel: "French",
    entries: [
      { word: "actuellement", explanation: "means 'currently/now' — not 'actually'. 'Actually' in French is en fait." },
      { word: "librairie", explanation: "means 'bookshop' — not 'library' (that's bibliothèque)." },
      { word: "assister (à)", explanation: "means 'to attend' — not 'to assist/help' (that's aider)." },
      { word: "attendre", explanation: "means 'to wait for' — not 'to attend' (that's assister à)." },
      { word: "demander", explanation: "means 'to ask' — not 'to demand' (that's exiger)." },
      { word: "sensible", explanation: "means 'sensitive' — not 'sensible/reasonable' (that's raisonnable)." },
      { word: "éventuellement", explanation: "means 'possibly' — not 'eventually' (that's finalement)." },
      { word: "rester", explanation: "means 'to stay/remain' — not 'to rest' (that's se reposer)." },
      { word: "blesser", explanation: "means 'to injure/hurt' — not 'to bless' (that's bénir)." },
      { word: "coin", explanation: "means 'corner' — not 'coin' (a piece of money, that's pièce)." },
      { word: "location", explanation: "means 'rental' — not 'a place' (that's emplacement)." },
      { word: "monnaie", explanation: "means 'change/coins' — not 'money' in general (that's argent)." },
      { word: "déception", explanation: "means 'disappointment' — not 'deception' (that's tromperie)." },
      { word: "ignorer", explanation: "means 'to not know / be unaware of' — not 'to deliberately ignore' (that's the closer sense, but often implies simple unawareness)." },
      { word: "pain", explanation: "means 'bread' — not physical pain (that's douleur)." },
    ],
  },
  {
    languageCode: "es",
    languageLabel: "Spanish",
    entries: [
      { word: "embarazada", explanation: "means 'pregnant' — not 'embarrassed' (that's avergonzada)." },
      { word: "éxito", explanation: "means 'success' — not 'exit' (that's salida)." },
      { word: "ropa", explanation: "means 'clothes' — not 'rope' (that's cuerda)." },
      { word: "sopa", explanation: "means 'soup' — not 'soap' (that's jabón)." },
      { word: "carpeta", explanation: "means 'folder' — not 'carpet' (that's alfombra)." },
      { word: "lectura", explanation: "means 'reading' — not 'a lecture/talk' (that's conferencia)." },
      { word: "realizar", explanation: "means 'to carry out/accomplish' — not 'to realize/become aware' (that's darse cuenta)." },
      { word: "actual", explanation: "means 'current/present' — not 'actual/real' (that's real or verdadero)." },
      { word: "sensible", explanation: "means 'sensitive' — not 'sensible/reasonable' (that's sensato)." },
      { word: "disgusto", explanation: "means 'annoyance/upset' — not 'disgust' (that's asco)." },
      { word: "constipado", explanation: "means 'having a cold' — not 'constipated' (that's estreñido)." },
      { word: "pretender", explanation: "means 'to intend/attempt' — not 'to pretend/fake' (that's fingir)." },
      { word: "introducir", explanation: "means 'to insert/bring in' — for introducing a person, use presentar." },
      { word: "fábrica", explanation: "means 'factory' — not 'fabric/cloth' (that's tela)." },
      { word: "largo", explanation: "means 'long' — not 'large/big' (that's grande)." },
    ],
  },
  {
    languageCode: "pt",
    languageLabel: "Portuguese",
    entries: [
      { word: "pretender", explanation: "means 'to intend' — not 'to pretend/fake' (that's fingir)." },
      { word: "assistir", explanation: "means 'to watch' (a film, a show) — not 'to assist/help' (that's ajudar)." },
      { word: "fábrica", explanation: "means 'factory' — not 'fabric/cloth' (that's tecido)." },
      { word: "costume", explanation: "means 'custom/habit' — not 'a costume/disguise' (that's fantasia)." },
      { word: "esquisito", explanation: "means 'weird/strange' — not 'exquisite' (that's requintado)." },
      { word: "livraria", explanation: "means 'bookshop' — not 'library' (that's biblioteca)." },
      { word: "parentes", explanation: "means 'relatives' — not 'parents' (that's pais)." },
      { word: "novela", explanation: "usually means a TV soap opera — for 'novel' (a book), use romance." },
      { word: "atual", explanation: "means 'current/present' — not 'actual/real' (that's real)." },
      { word: "realizar", explanation: "means 'to carry out/accomplish' — not 'to realize/become aware' (that's dar-se conta de)." },
      { word: "puxar", explanation: "means 'to pull' — the false friend is with the identically-spelled English word 'push', which means the opposite: empurrar." },
      { word: "constipado", explanation: "in European Portuguese means 'having a cold' — not 'constipated' (that's preso do intestino / obstipado)." },
    ],
  },
  {
    languageCode: "it",
    languageLabel: "Italian",
    entries: [
      { word: "parenti", explanation: "means 'relatives' — not 'parents' (that's genitori)." },
      { word: "libreria", explanation: "means 'bookshop' — not 'library' (that's biblioteca)." },
      { word: "assistere (a)", explanation: "means 'to attend/watch' — not 'to assist/help' (that's aiutare)." },
      { word: "attualmente", explanation: "means 'currently' — not 'actually' (that's in realtà)." },
      { word: "educato", explanation: "means 'polite/well-mannered' — not 'educated' (that's istruito)." },
      { word: "fattoria", explanation: "means 'farm' — not 'factory' (that's fabbrica)." },
      { word: "magazzino", explanation: "means 'warehouse/storage' — not 'magazine' (that's rivista)." },
      { word: "morbido", explanation: "means 'soft' — not 'morbid' (that's macabro)." },
      { word: "pretendere", explanation: "means 'to demand/expect' — not 'to pretend/fake' (that's fingere)." },
      { word: "sensibile", explanation: "means 'sensitive' — not 'sensible/reasonable' (that's ragionevole)." },
      { word: "camera", explanation: "means 'room/bedroom' — not a photo/video camera (that's macchina fotografica)." },
      { word: "confetti", explanation: "means sugared almonds thrown at weddings — the paper pieces thrown at parties are coriandoli." },
      { word: "eventualmente", explanation: "means 'possibly' — not 'eventually' (that's alla fine)." },
    ],
  },
  {
    languageCode: "de",
    languageLabel: "German",
    entries: [
      { word: "Gift", explanation: "means 'poison' — not 'gift/present' (that's Geschenk)." },
      { word: "bekommen", explanation: "means 'to receive/get' — not 'to become' (that's werden). Classic false-friend trap." },
      { word: "Rat", explanation: "means 'advice/council' — not the animal (a rat is Ratte)." },
      { word: "Chef", explanation: "means 'boss' — not a cook (that's Koch)." },
      { word: "also", explanation: "means 'so/thus/therefore' — not 'in addition' (that's auch)." },
      { word: "Handy", explanation: "means 'mobile phone' — not 'convenient/useful' (that's praktisch). A German-invented pseudo-anglicism." },
      { word: "Fabrik", explanation: "means 'factory' — not 'fabric/cloth' (that's Stoff)." },
      { word: "Kind", explanation: "means 'child' — not 'kind/nice' (that's nett)." },
      { word: "Art", explanation: "means 'type/kind/way' — not necessarily creative art (that's Kunst)." },
      { word: "Brief", explanation: "means 'letter' (mail) — not 'brief/short' (that's kurz)." },
      { word: "Note", explanation: "means 'grade/mark' at school — not a short written message (that's Notiz)." },
      { word: "eventuell", explanation: "means 'possibly' — not 'eventually' (that's schließlich)." },
      { word: "sensibel", explanation: "means 'sensitive' — not 'sensible/reasonable' (that's vernünftig)." },
    ],
  },
];
