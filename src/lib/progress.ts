import { topicsRegistry } from "../data/topics/registry";
import type { CEFRLevel } from "../data/types";

export interface TopicProgress {
  slug: string;
  title: string;
  sectionSlug: string;
  level: CEFRLevel;
  /** [exercise 1 score, exercise 2 score] out of 10 each — null means not attempted. */
  scores: [number | null, number | null];
}

/**
 * Reads every "egh:<topicSlug>:<0|1>" key ExerciseEngine.tsx has ever
 * written (best score per exercise, 0-10) and joins it back to
 * topicsRegistry for title/section/level. Browser-only — call from a
 * useEffect, same pattern ExerciseEngine itself uses for reading its own
 * best score.
 */
export function readProgress(): TopicProgress[] {
  const bySlug = new Map<string, [number | null, number | null]>();

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key || !key.startsWith("egh:")) continue;
    const parts = key.split(":");
    if (parts.length !== 3) continue;
    const [, slug, idxStr] = parts;
    const idx = Number(idxStr);
    if (idx !== 0 && idx !== 1) continue;
    const score = Number(localStorage.getItem(key));
    if (Number.isNaN(score)) continue;
    const existing = bySlug.get(slug) ?? [null, null];
    existing[idx] = score;
    bySlug.set(slug, existing);
  }

  return topicsRegistry
    .filter((t) => bySlug.has(t.slug))
    .map((t) => ({
      slug: t.slug,
      title: t.title,
      sectionSlug: t.sectionSlug,
      level: t.level,
      scores: bySlug.get(t.slug)!,
    }));
}
