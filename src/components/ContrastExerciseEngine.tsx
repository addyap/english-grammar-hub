import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";
import FloatingGrammarReference from "@/components/FloatingGrammarReference";
import type { ContrastQuestion } from "@/data/contrastExercises";
import type { GrammarTopicContent } from "@/data/types";

interface ContrastExerciseEngineProps {
  title: string;
  questions: ContrastQuestion[];
  topicA: GrammarTopicContent;
  /** null when both sides of the contrast are the same topic (e.g. First vs Second Conditional) — avoids a duplicate reference button. */
  topicB: GrammarTopicContent | null;
  storageKey: string;
}

const normalize = (s: string) => s.toLowerCase().trim().replace(/['’]/g, "'").replace(/\s+/g, " ");

const isCorrect = (q: ContrastQuestion, given: string) => normalize(given) === normalize(q.answer);

/** Fisher-Yates shuffle — content data writes the answer first by convention, so option order must never be trusted as-is. */
const shuffled = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

/**
 * Same self-correcting/instant-feedback/best-score UX as ExerciseEngine.tsx,
 * kept as a separate component rather than generalizing that one — a
 * contrast exercise needs two reference topics instead of one, and
 * ExerciseEngine is load-bearing for all 100 existing topics, so it's safer
 * not to touch it for this. Progress here uses a separate "eghc:" (not
 * "egh:") localStorage prefix, so it doesn't show up in /progress, which
 * only reads "egh:<topicSlug>:<0|1>" keys matched against topicsRegistry —
 * contrast pairs aren't topics and have no registry entry to match.
 */
const ContrastExerciseEngine = ({ title, questions, topicA, topicB, storageKey }: ContrastExerciseEngineProps) => {
  const [results, setResults] = useState<({ given: string; good: boolean } | undefined)[]>(() =>
    Array(questions.length).fill(undefined)
  );
  const [best, setBest] = useState<number | null>(null);
  const [shuffleSeed, setShuffleSeed] = useState(0);
  const qRefs = useRef<(HTMLDivElement | null)[]>([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const shuffledOptions = useMemo(() => questions.map((q) => shuffled(q.options)), [questions, shuffleSeed]);

  const done = results.filter(Boolean).length;
  const score = results.filter((r) => r?.good).length;
  const finished = done === questions.length;

  useEffect(() => {
    try {
      const b = localStorage.getItem(storageKey);
      if (b !== null) setBest(Number(b));
    } catch {
      /* storage unavailable */
    }
  }, [storageKey]);

  useEffect(() => {
    if (!finished) return;
    try {
      const prev = Number(localStorage.getItem(storageKey) ?? -1);
      if (score > prev) {
        localStorage.setItem(storageKey, String(score));
        setBest(score);
      }
    } catch {
      /* storage unavailable */
    }
  }, [finished, score, storageKey]);

  const answer = (i: number, given: string) => {
    if (results[i]) return;
    const good = isCorrect(questions[i], given);
    setResults((r) => {
      const nr = [...r];
      nr[i] = { given, good };
      return nr;
    });
    window.setTimeout(() => {
      const nextIdx = questions.findIndex((_, j) => j > i && !results[j]);
      const el = qRefs.current[nextIdx];
      if (nextIdx !== -1 && el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 650);
  };

  const reset = () => {
    setResults(Array(questions.length).fill(undefined));
    setShuffleSeed((s) => s + 1);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="sticky top-0 z-10 flex items-center justify-between gap-3 bg-background py-3 border-b border-border mb-6">
        <div>
          <h2 className="font-display text-lg font-bold">{title}</h2>
          <p className="text-sm text-muted-foreground">
            {done}/{questions.length} answered · Score {score}/{questions.length}
            {best !== null && <> · Best {best}/{questions.length}</>}
          </p>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <FloatingGrammarReference topic={topicA} />
          {topicB && <FloatingGrammarReference topic={topicB} />}
        </div>
      </div>

      <div className="space-y-4">
        {questions.map((q, i) => {
          const result = results[i];
          return (
            <div
              key={i}
              ref={(el) => {
                qRefs.current[i] = el;
              }}
              className={`p-4 rounded-lg border transition ${
                result ? (result.good ? "border-success bg-success/5 animate-correct-pulse" : "border-destructive bg-destructive/5 animate-shake") : "border-border bg-card"
              }`}
            >
              <p className="text-sm text-muted-foreground mb-2">Question {i + 1}</p>
              <p className="font-medium mb-3">{q.sentence}</p>

              {!result && (
                <div className="flex flex-wrap gap-2">
                  {shuffledOptions[i].map((opt) => (
                    <Button
                      key={opt}
                      variant="outline"
                      size="sm"
                      onClick={() => answer(i, opt)}
                      className="h-auto min-h-11 sm:min-h-9 py-2 whitespace-normal text-left"
                    >
                      {opt}
                    </Button>
                  ))}
                </div>
              )}

              {result && (
                <div className="mt-2 flex items-start gap-2">
                  {result.good ? (
                    <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                  )}
                  <div className="text-sm">
                    {!result.good && (
                      <p className="text-muted-foreground">
                        You answered "{result.given}" — correct answer: <strong>{q.answer}</strong>
                      </p>
                    )}
                    <p className="text-foreground/80">{q.explanation}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {finished && (
        <div className="mt-8 text-center p-6 rounded-lg bg-accent">
          <p className="font-display text-xl font-bold mb-2">
            {score}/{questions.length} correct
          </p>
          <Button variant="outline" onClick={reset}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Try again
          </Button>
        </div>
      )}
    </div>
  );
};

export default ContrastExerciseEngine;
