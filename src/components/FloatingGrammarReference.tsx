import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import ExplanationParagraphs from "@/components/ExplanationParagraphs";
import { LANGUAGES, type LanguageCode } from "@/data/types";
import type { GrammarTopicContent } from "@/data/types";

interface FloatingGrammarReferenceProps {
  topic: GrammarTopicContent;
}

const detectDefaultLanguage = (topic: GrammarTopicContent): LanguageCode => {
  if (typeof navigator === "undefined") return "en";
  const browser = navigator.language.slice(0, 2).toLowerCase();
  return browser in topic.explanations ? (browser as LanguageCode) : "en";
};

/**
 * Grammar rule quick-reference that floats over an exercise. Renders inline
 * in the exercise's own header (not viewport-fixed) so it never overlaps
 * answer buttons on narrow viewports.
 */
const FloatingGrammarReference = ({ topic }: FloatingGrammarReferenceProps) => {
  const [lang, setLang] = useState<LanguageCode>(() => detectDefaultLanguage(topic));
  const meta = LANGUAGES.find((l) => l.code === lang)!;
  const paragraphs = topic.explanations[lang] ?? topic.explanations.en;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label={`Grammar reference: ${topic.title}`}
          className="flex items-center justify-center w-9 h-9 shrink-0 rounded-full bg-accent text-accent-foreground hover:brightness-95 transition"
        >
          <BookOpen className="w-4 h-4" />
        </button>
      </PopoverTrigger>
      <PopoverContent side="bottom" align="end" className="w-[calc(100vw-2rem)] sm:w-96 p-0 overflow-hidden">
        <div className="flex flex-wrap gap-1 p-3 border-b border-border">
          {LANGUAGES.filter((l) => l.code in topic.explanations || l.code === "en").map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => setLang(l.code)}
              className={`px-2 py-1 text-xs rounded-md transition ${
                l.code === lang ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/70"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
        <div className="max-h-[55vh] overflow-y-auto overscroll-contain">
          <div className="p-5" lang={lang} dir={meta.rtl ? "rtl" : "ltr"}>
            <h3 className="font-display text-base font-bold mb-3">{topic.title}</h3>
            <ExplanationParagraphs paragraphs={paragraphs} kinds={topic.paragraphKinds} size="sm" />
            <Link to={`/grammar/${topic.slug}`} className="inline-block mt-4 text-sm font-semibold text-link hover:text-secondary transition-colors">
              View full lesson →
            </Link>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FloatingGrammarReference;
