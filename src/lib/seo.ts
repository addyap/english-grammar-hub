import type { ExplanationParagraph } from "../data/types";

/**
 * Deliberately relative imports only (no "@/" alias) — this module is
 * imported both by Vite-bundled React code and by scripts/generate-sitemap.ts
 * running under plain tsx, which doesn't resolve tsconfig path aliases.
 */

// Served at www.antonyaddy.com/grammatica (the main site forwards here).
// BASE_PATH must match `base` in vite.config.ts.
export const BASE_PATH = "/grammatica";
export const SITE_URL = `https://www.antonyaddy.com${BASE_PATH}`;

/** Absolute URL for a route path. No trailing slash on the home page:
 *  www.antonyaddy.com strips it. */
export function pageUrl(path: string): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}
export const SITE_NAME = "Grammatica";

/** The <title> for a page: "Page | Grammatica", or just the site name. */
export function formatTitle(title: string): string {
  return title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
}

/** Collapses whitespace and truncates at a word boundary — keeps meta descriptions from cutting off mid-word or carrying newlines from source prose. */
export function toMetaDescription(text: string, maxLength = 155): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= maxLength) return clean;
  const truncated = clean.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : maxLength)}…`;
}

/** Flattens an explanation paragraph (plain prose or intro+list) into one line of text, for use as a meta description source. */
export function paragraphToPlainText(paragraph: ExplanationParagraph): string {
  if (typeof paragraph === "string") return paragraph;
  return `${paragraph.intro} ${paragraph.items.join(" ")}`;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  };
}

export function buildWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
}
