import type { GrammarTopicContent } from "../types";
import { presentSimple } from "./presentSimple";
import { presentContinuous } from "./presentContinuous";
import { pastSimple } from "./pastSimple";
import { prepositionsOfTime } from "./prepositionsOfTime";
import { prepositionsOfPlace } from "./prepositionsOfPlace";
import { conditionals } from "./conditionals";

/**
 * Every built topic goes here. To add a new one: create a file next to these
 * following the GrammarTopicContent shape, then add it to this array.
 */
export const topics: GrammarTopicContent[] = [
  presentSimple,
  presentContinuous,
  pastSimple,
  prepositionsOfTime,
  prepositionsOfPlace,
  conditionals,
];

export const getTopic = (slug: string) => topics.find((t) => t.slug === slug);
export const getTopicsForSection = (sectionSlug: string) => topics.filter((t) => t.sectionSlug === sectionSlug);
