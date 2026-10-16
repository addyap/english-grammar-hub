import { useEffect } from "react";
import { SITE_URL, formatTitle } from "@/lib/seo";

interface SeoOptions {
  title: string;
  description: string;
  path: string;
  jsonLd?: object;
}

function setMetaTag(attr: "name" | "property", key: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

const JSON_LD_ID = "route-json-ld";

/**
 * Syncs document title, meta description, OG/Twitter tags, canonical link,
 * and one JSON-LD script per route. scripts/prerender-heads.ts bakes the
 * same title, description and canonical into each indexable route's HTML at
 * build time; this keeps them right on client-side navigation, and covers
 * routes that aren't prerendered (exercises, 404).
 */
export function useSeo({ title, description, path, jsonLd }: SeoOptions) {
  const jsonLdString = jsonLd ? JSON.stringify(jsonLd) : undefined;

  useEffect(() => {
    document.title = formatTitle(title);

    setMetaTag("name", "description", description);
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", `${SITE_URL}${path}`);
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}${path}`;

    let script = document.getElementById(JSON_LD_ID) as HTMLScriptElement | null;
    if (jsonLdString) {
      if (!script) {
        script = document.createElement("script");
        script.id = JSON_LD_ID;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = jsonLdString;
    } else {
      script?.remove();
    }
  }, [title, description, path, jsonLdString]);
}
