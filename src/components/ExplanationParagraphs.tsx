import { AlertTriangle } from "lucide-react";
import type { ExplanationParagraph, ExplanationParagraphKind } from "@/data/types";

interface ExplanationParagraphsProps {
  paragraphs: ExplanationParagraph[];
  kinds: ExplanationParagraphKind[];
  size?: "default" | "sm";
}

/**
 * Renders a topic's explanation paragraphs, shared by TopicPage and
 * FloatingGrammarReference so the two never drift out of sync. Each
 * paragraph is either prose or a { intro, items } list, and "mistake"
 * paragraphs (either shape) get a highlighted callout.
 */
const ExplanationParagraphs = ({ paragraphs, kinds, size = "default" }: ExplanationParagraphsProps) => {
  const textSize = size === "sm" ? "text-sm" : "";

  return (
    <>
      {paragraphs.map((p, i) => {
        const isList = typeof p !== "string";
        const isMistake = kinds[i] === "mistake";

        const content = isList ? (
          <div>
            <p className={`text-foreground/90 leading-relaxed mb-1.5 ${textSize}`}>{p.intro}</p>
            <ul className={`list-disc pl-5 space-y-1 text-foreground/90 leading-relaxed ${textSize}`}>
              {p.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p className={`text-foreground/90 leading-relaxed ${textSize}`}>{p}</p>
        );

        if (isMistake) {
          return (
            <div
              key={i}
              className={`flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/5 ${
                size === "sm" ? "px-2.5 py-2" : "px-3 py-2.5"
              } mb-3 last:mb-0`}
            >
              <AlertTriangle className={`${size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"} text-destructive shrink-0 mt-0.5`} />
              <div className="flex-1">{content}</div>
            </div>
          );
        }

        return (
          <div key={i} className="mb-3 last:mb-0">
            {content}
          </div>
        );
      })}
    </>
  );
};

export default ExplanationParagraphs;
