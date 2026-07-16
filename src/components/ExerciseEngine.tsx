import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";
import FloatingGrammarReference from "@/components/FloatingGrammarReference";
import type { Exercise, ExerciseQuestion, GrammarTopicContent } from "@/data/types";

interface ExerciseEngineProps {
  topic: GrammarTopicContent;
  exercise: Exercise;
  storageKey: string;
}

const normalize = (s: string) => s.toLowerCase().trim().replace(/['’]/g, "'").replace(/\s+/g, " ");

const isCorrect = (q: ExerciseQuestion, given: string) => normalize(given) === normalize(q.answer);

/**
 * Self-correcting, explained 10-question exercise: instant per-question
 * feedback with a one-line "why", a live score, and a best-score kept in
 * localStorage (no account needed).
 */
const ExerciseEngine = ({ topic, exercise, storageKey }: ExerciseEngineProps) => {
  const { questions } = exercise;

  if (import.meta.env.DEV) {
    if (questions.length !== 10) {
      console.warn(`[ExerciseEngine] "${exercise.title}" has ${questions.length} questions — the rule is exactly 10.`);
    }
    questions.forEach((q, i) => {
      if (!q.options.includes(q.answer)) {
        console.warn(`[ExerciseEngine] "${exercise.title}" question ${i + 1} options don't include the answer.`);
      }
    });
  }

  const [results, setResults] = useState<({ given: string; good: boolean } | undefined)[]>(() =>
    Array(questions.length).fill(undefined)
  );
  const [best, setBest] = useState<number | null>(null);
  const qRefs = useRef<(HTMLDivElement | null)[]>([]);

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
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between gap-3 bg-background py-3 border-b border-border mb-6">
        <div>
          <h2 className="font-display text-lg font-bold">{exercise.title}</h2>
          <p className="text-sm text-muted-foreground">
            {done}/{questions.length} answered · Score {score}/{questions.length}
            {best !== null && <> · Best {best}/{questions.length}</>}
          </p>
        </div>
        <FloatingGrammarReference topic={topic} />
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
                  {q.options.map((opt) => (
                    <Button key={opt} variant="outline" size="sm" onClick={() => answer(i, opt)}>
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

export default ExerciseEngine;
