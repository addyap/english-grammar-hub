import type { ExplanationParagraph } from "../data/types";

/**
 * Deliberately relative imports only (no "@/" alias) — this module is
 * imported both by Vite-bundled React code and by scripts/generate-sitemap.ts
 * running under plain tsx, which doesn't resolve tsconfig path aliases.
 */

export const SITE_URL = "https://grammatica.antonyaddy.com";
export const SITE_NAME = "Grammatica";

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
      item: `${SITE_URL}${item.path}`,
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
