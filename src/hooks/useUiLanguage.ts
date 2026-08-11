import { useEffect, useState } from "react";
import { LANGUAGES, type LanguageCode } from "@/data/types";

const KEY = "grammatica-lang";
const EVENT = "grammatica-lang-change";
const CODES = new Set(LANGUAGES.map((l) => l.code));

/** Read the persisted learner language, falling back to the browser language, then English. */
function readLang(): LanguageCode {
  try {
    const stored = localStorage.getItem(KEY);
    if (stored && CODES.has(stored as LanguageCode)) return stored as LanguageCode;
  } catch {
    /* localStorage unavailable — fall through */
  }
  const browser =
    typeof navigator !== "undefined" ? navigator.language.slice(0, 2).toLowerCase() : "en";
  return CODES.has(browser as LanguageCode) ? (browser as LanguageCode) : "en";
}

/**
 * Site-wide learner language, persisted in localStorage and kept in sync
 * across every component that uses this hook (via a window event, the same
 * pattern as the theme toggle). Used to show explanations in the learner's
 * own language on both topic and exercise pages.
 */
export function useUiLanguage(): [LanguageCode, (l: LanguageCode) => void] {
  const [lang, setLangState] = useState<LanguageCode>(readLang);

  useEffect(() => {
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<LanguageCode>).detail;
      if (detail && CODES.has(detail)) setLangState(detail);
    };
    window.addEventListener(EVENT, onChange);
    return () => window.removeEventListener(EVENT, onChange);
  }, []);

  const setLang = (l: LanguageCode) => {
    try {
      localStorage.setItem(KEY, l);
    } catch {
      /* ignore persistence failure */
    }
    setLangState(l);
    window.dispatchEvent(new CustomEvent(EVENT, { detail: l }));
  };

  return [lang, setLang];
}
