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
import { passiveVoice } from "./passiveVoice";
import { reportedSpeech } from "./reportedSpeech";
import { questionsAuxiliaries } from "./questionsAuxiliaries";
import { pronounsPossessives } from "./pronounsPossessives";
import { adjectivesAdverbs } from "./adjectivesAdverbs";
import { conjunctionsLinking } from "./conjunctionsLinking";
import { verbPatterns } from "./verbPatterns";
import { relativeClauses } from "./relativeClauses";
import { advancedStructures } from "./advancedStructures";
import { modalsOfDeduction } from "./modalsOfDeduction";
import { wishIfOnly } from "./wishIfOnly";
import { tooEnough } from "./tooEnough";
import { indefinitePronouns } from "./indefinitePronouns";
import { makeLetHelp } from "./makeLetHelp";
import { passiveReporting } from "./passiveReporting";
import { bothEitherNeither } from "./bothEitherNeither";
import { negativeQuestions } from "./negativeQuestions";
import { reportedCommands } from "./reportedCommands";
import { relativePrepositions } from "./relativePrepositions";
import { participleClauses } from "./participleClauses";
import { pastModals } from "./pastModals";
import { phrasalVerbsDepth } from "./phrasalVerbsDepth";
import { soSuchThat } from "./soSuchThat";
import { reportingVerbPatterns } from "./reportingVerbPatterns";
import { collectiveNouns } from "./collectiveNouns";
import { likeVsAs } from "./likeVsAs";
import { thereIsAre } from "./thereIsAre";
import { eachEveryAllWhole } from "./eachEveryAllWhole";
import { usedToWould } from "./usedToWould";
import { edIngAdjectives } from "./edIngAdjectives";
import { duringWhileFor } from "./duringWhileFor";
import { eachOtherOneAnother } from "./eachOtherOneAnother";
import { nominalRelativeWhat } from "./nominalRelativeWhat";
import { asLongAsProvidedInCase } from "./asLongAsProvidedInCase";
import { indirectPassiveTwoObjects } from "./indirectPassiveTwoObjects";
import { prepositionsInWhQuestions } from "./prepositionsInWhQuestions";
import { subjunctiveMood } from "./subjunctiveMood";
import { soNotSubstitution } from "./soNotSubstitution";
import { theMoreTheMore } from "./theMoreTheMore";
import { purposeClauses } from "./purposeClauses";
import { neednHaveDidntNeedTo } from "./neednHaveDidntNeedTo";
import { compoundNouns } from "./compoundNouns";
import { oneOnesSubstitute } from "./oneOnesSubstitute";
import { invertedConditionals } from "./invertedConditionals";

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
  passiveVoice,
  reportedSpeech,
  questionsAuxiliaries,
  pronounsPossessives,
  adjectivesAdverbs,
  conjunctionsLinking,
  verbPatterns,
  relativeClauses,
  advancedStructures,
  modalsOfDeduction,
  wishIfOnly,
  tooEnough,
  indefinitePronouns,
  makeLetHelp,
  passiveReporting,
  bothEitherNeither,
  negativeQuestions,
  reportedCommands,
  relativePrepositions,
  participleClauses,
  pastModals,
  phrasalVerbsDepth,
  soSuchThat,
  reportingVerbPatterns,
  collectiveNouns,
  likeVsAs,
  thereIsAre,
  eachEveryAllWhole,
  usedToWould,
  edIngAdjectives,
  duringWhileFor,
  eachOtherOneAnother,
  nominalRelativeWhat,
  asLongAsProvidedInCase,
  indirectPassiveTwoObjects,
  prepositionsInWhQuestions,
  subjunctiveMood,
  soNotSubstitution,
  theMoreTheMore,
  purposeClauses,
  neednHaveDidntNeedTo,
  compoundNouns,
  oneOnesSubstitute,
  invertedConditionals,
];

export const getTopic = (slug: string) => topics.find((t) => t.slug === slug);
export const getTopicsForSection = (sectionSlug: string) => topics.filter((t) => t.sectionSlug === sectionSlug);
