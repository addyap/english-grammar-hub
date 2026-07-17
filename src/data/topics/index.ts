import type { GrammarTopicContent } from "../types";
import { verbBe } from "./verbBe";
import { wordOrder } from "./wordOrder";
import { pluralNouns } from "./pluralNouns";
import { demonstratives } from "./demonstratives";
import { articlesAThe } from "./articlesAThe";
import { zeroArticle } from "./zeroArticle";
import { someAny } from "./someAny";
import { quantifiers } from "./quantifiers";
import { presentSimple } from "./presentSimple";
import { presentContinuous } from "./presentContinuous";
import { pastSimple } from "./pastSimple";
import { pastContinuous } from "./pastContinuous";
import { presentPerfect } from "./presentPerfect";
import { presentPerfectContinuous } from "./presentPerfectContinuous";
import { pastPerfect } from "./pastPerfect";
import { pastPerfectContinuous } from "./pastPerfectContinuous";
import { futureWillGoingTo } from "./futureWillGoingTo";
import { futureContinuous } from "./futureContinuous";
import { futurePerfect } from "./futurePerfect";
import { prepositionsOfTime } from "./prepositionsOfTime";
import { prepositionsOfPlace } from "./prepositionsOfPlace";
import { prepositionsOfMovement } from "./prepositionsOfMovement";
import { dependentPrepositions } from "./dependentPrepositions";
import { conditionals } from "./conditionals";
import { modals } from "./modals";
import { possessiveS } from "./possessiveS";
import { countableUncountable } from "./countableUncountable";

/**
 * Every built topic goes here. To add a new one: create a file next to these
 * following the GrammarTopicContent shape, then add it to this array.
 */
export const topics: GrammarTopicContent[] = [
  wordOrder,
  verbBe,
  demonstratives,
  pluralNouns,
  articlesAThe,
  zeroArticle,
  someAny,
  quantifiers,
  presentSimple,
  presentContinuous,
  pastSimple,
  pastContinuous,
  presentPerfect,
  presentPerfectContinuous,
  pastPerfect,
  pastPerfectContinuous,
  futureWillGoingTo,
  futureContinuous,
  futurePerfect,
  prepositionsOfTime,
  prepositionsOfPlace,
  prepositionsOfMovement,
  dependentPrepositions,
  conditionals,
  modals,
  possessiveS,
  countableUncountable,
];

export const getTopic = (slug: string) => topics.find((t) => t.slug === slug);
export const getTopicsForSection = (sectionSlug: string) => topics.filter((t) => t.sectionSlug === sectionSlug);
