import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sections } from "@/data/sections";
import { topicsRegistry } from "@/data/topics/registry";
import { readProgress, type TopicProgress } from "@/lib/progress";
import { useSeo } from "@/hooks/useSeo";

const PAGE_DESCRIPTION = "Your saved exercise scores, stored locally in this browser — no account needed.";

const ScoreChip = ({ score }: { score: number | null }) => {
  if (score === null) {
    return <span className="text-xs text-muted-foreground border border-border rounded px-1.5 py-0.5">—</span>;
  }
  const good = score >= 8;
  return (
    <span
      className={`text-xs font-semibold rounded px-1.5 py-0.5 ${
        good ? "bg-success/15 text-success" : "bg-muted text-muted-foreground"
      }`}
    >
      {score}/10
    </span>
  );
};

const ProgressPage = () => {
  useSeo({
    title: "Your Progress",
    description: PAGE_DESCRIPTION,
    path: "/progress",
  });

  const [progress, setProgress] = useState<TopicProgress[] | null>(null);

  useEffect(() => {
    try {
      setProgress(readProgress());
    } catch {
      setProgress([]);
    }
  }, []);

  if (progress === null) {
    return <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 sm:py-12" />;
  }

  const totalTopics = topicsRegistry.length;
  const started = progress.length;
  const completed = progress.filter((p) => p.scores[0] !== null && p.scores[1] !== null).length;
  const attemptedExercises = progress.reduce((n, p) => n + p.scores.filter((s) => s !== null).length, 0);
  const totalCorrect = progress.reduce((sum, p) => sum + (p.scores[0] ?? 0) + (p.scores[1] ?? 0), 0);
  const accuracy = attemptedExercises > 0 ? Math.round((totalCorrect / (attemptedExercises * 10)) * 100) : null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
      <Link to="/" className="text-sm text-muted-foreground hover:text-primary">← Home</Link>
      <h1 className="font-display text-2xl font-bold mt-2 mb-1">Your Progress</h1>
      <p className="text-muted-foreground mb-8">
        Saved locally in this browser — no account, so it won't follow you to another device, and clearing
        your browser data clears it too.
      </p>

      {started === 0 ? (
        <div className="p-6 rounded-lg border border-border bg-card text-center">
          <p className="text-muted-foreground mb-4">You haven't completed any exercises yet.</p>
          <Link
            to="/"
            className="inline-block bg-primary text-primary-foreground font-bold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Start learning →
          </Link>
        </div>
      ) : (
        <>
          <div className="flex flex-wrap gap-3 mb-10">
            <div className="bg-card border border-border rounded-lg px-5 py-3 min-w-[100px]">
              <p className="text-2xl font-bold text-secondary">{started}/{totalTopics}</p>
              <p className="text-xs text-muted-foreground">topics started</p>
            </div>
            <div className="bg-card border border-border rounded-lg px-5 py-3 min-w-[100px]">
              <p className="text-2xl font-bold text-secondary">{completed}/{totalTopics}</p>
              <p className="text-xs text-muted-foreground">topics completed</p>
            </div>
            {accuracy !== null && (
              <div className="bg-card border border-border rounded-lg px-5 py-3 min-w-[100px]">
                <p className="text-2xl font-bold text-secondary">{accuracy}%</p>
                <p className="text-xs text-muted-foreground">overall accuracy</p>
              </div>
            )}
          </div>

          <div className="space-y-8">
            {sections.map((section) => {
              const sectionProgress = progress.filter((p) => p.sectionSlug === section.slug);
              if (sectionProgress.length === 0) return null;
              return (
                <section key={section.slug}>
                  <h2 className="font-display font-bold mb-3">{section.title}</h2>
                  <div className="space-y-2">
                    {sectionProgress.map((p) => (
                      <Link
                        key={p.slug}
                        to={`/grammar/${p.slug}`}
                        className="flex items-center justify-between gap-3 p-3 rounded-lg border border-border bg-card hover:border-primary transition-colors"
                      >
                        <span className="text-sm font-medium">{p.title}</span>
                        <span className="flex items-center gap-1.5 shrink-0">
                          <ScoreChip score={p.scores[0]} />
                          <ScoreChip score={p.scores[1]} />
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ProgressPage;
