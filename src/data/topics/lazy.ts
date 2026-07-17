import type { GrammarTopicContent } from "../types";
import { topicsRegistry } from "./registry";

/**
 * Per-topic code splitting: Vite statically analyzes this glob and emits one
 * chunk per matched file, so a topic's explanations/exercises (9 languages
 * each) only download when its page is actually visited — not on first
 * paint, and not for every other topic in the app. index.ts/registry.ts are
 * excluded: index.ts eagerly imports every topic (that's the thing we're
 * avoiding) and is Node-only, used solely by scripts/validate.ts.
 */
const loaders = import.meta.glob<Record<string, unknown>>(["./*.ts", "!./index.ts", "!./registry.ts", "!./lazy.ts"]);

/** Dynamically loads one topic's full content by slug. Returns undefined if the slug isn't registered or the module has no matching export. */
export async function loadTopic(slug: string): Promise<GrammarTopicContent | undefined> {
  const entry = topicsRegistry.find((r) => r.slug === slug);
  if (!entry) return undefined;
  const load = loaders[`./${entry.file}.ts`];
  if (!load) return undefined;
  const mod = await load();
  const topic = Object.values(mod).find(
    (v): v is GrammarTopicContent => typeof v === "object" && v !== null && "slug" in v
  );
  if (import.meta.env.DEV && topic && topic.slug !== slug) {
    console.warn(`[lazy] registry file "${entry.file}" for slug "${slug}" resolved to a topic with slug "${topic.slug}" — check registry.ts.`);
  }
  return topic;
}
