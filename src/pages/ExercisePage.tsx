import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { loadTopic } from "@/data/topics/lazy";
import type { GrammarTopicContent } from "@/data/types";
import ExerciseEngine from "@/components/ExerciseEngine";

const ExercisePage = () => {
  const { topicSlug, exerciseIndex } = useParams<{ topicSlug: string; exerciseIndex: string }>();
  const [topic, setTopic] = useState<GrammarTopicContent | null | undefined>(undefined);
  const idx = Number(exerciseIndex) === 2 ? 1 : 0;

  useEffect(() => {
    setTopic(undefined);
    loadTopic(topicSlug ?? "").then((t) => setTopic(t ?? null));
  }, [topicSlug]);

  if (topic === undefined) {
    return <div className="px-4 py-6 sm:px-6 sm:py-8" />;
  }

  const exercise = topic?.exercises[idx];

  if (!topic || !exercise) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
        <p>Exercise not found.</p>
        <Link to="/" className="text-link underline">Back home</Link>
      </div>
    );
  }

  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8">
      <Link to={`/grammar/${topic.slug}`} className="block max-w-2xl mx-auto text-sm text-muted-foreground hover:text-primary mb-4">
        ← {topic.title}
      </Link>
      <ExerciseEngine topic={topic} exercise={exercise} storageKey={`egh:${topic.slug}:${idx}`} />
    </div>
  );
};

export default ExercisePage;
