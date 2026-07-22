import type { CEFRLevel } from "@/data/types";

/**
 * Dormant monetization layer. While MONETIZATION_ENABLED is false the whole
 * site behaves exactly as before — every access check short-circuits to true
 * and no premium UI renders anywhere. Flipping the flag to true is the launch
 * switch: premium-tier topics start showing <PremiumGate> to free users.
 *
 * Launch checklist (in order) before flipping the flag:
 *   1. Wire the PremiumGate CTA to a real checkout (Stripe Payment Link or
 *      similar) — it is a placeholder while dormant.
 *   2. Replace getUserPlan()'s localStorage stub with a real entitlement
 *      (localStorage alone is trivially editable — fine as a cache, not as
 *      the source of truth once money is involved).
 *   3. Revisit the sitemap/SEO story for gated topics (fully-gated pages
 *      shouldn't keep advertising crawlable content they no longer show).
 */
export const MONETIZATION_ENABLED = false;

export type Tier = "free" | "premium";
export type Plan = "free" | "premium";

/** Levels every visitor can always access once monetization is live. */
const FREE_LEVELS: readonly CEFRLevel[] = ["A1", "A2", "B1"];

/**
 * Per-slug overrides beat the level rule, so the free/paid split can be tuned
 * without touching topic files. Keep a few flagship advanced topics free as
 * tasters; force nothing premium yet.
 */
const ALWAYS_FREE_SLUGS: ReadonlySet<string> = new Set([
  "conditionals",
  "passive-voice",
  "reported-speech",
]);
const ALWAYS_PREMIUM_SLUGS: ReadonlySet<string> = new Set([]);

/** Which tier a topic belongs to. Default rule: A1–B1 free, B2+ premium. */
export const getTopicTier = (topic: { slug: string; level: CEFRLevel }): Tier => {
  if (ALWAYS_FREE_SLUGS.has(topic.slug)) return "free";
  if (ALWAYS_PREMIUM_SLUGS.has(topic.slug)) return "premium";
  return FREE_LEVELS.includes(topic.level) ? "free" : "premium";
};

const PLAN_STORAGE_KEY = "grammatica-plan";

/**
 * The visitor's current plan. Stubbed on localStorage so the future payment
 * flow has a seam to write to; see the launch checklist above before trusting
 * it for real gating.
 */
export const getUserPlan = (): Plan => {
  try {
    return localStorage.getItem(PLAN_STORAGE_KEY) === "premium" ? "premium" : "free";
  } catch {
    return "free";
  }
};

/** Single access check used by every gated surface (topic + exercise pages). */
export const hasTopicAccess = (topic: { slug: string; level: CEFRLevel }): boolean => {
  if (!MONETIZATION_ENABLED) return true;
  if (getTopicTier(topic) === "free") return true;
  return getUserPlan() === "premium";
};
