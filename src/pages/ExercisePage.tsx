import { Link, useParams } from "react-router-dom";
import { getTopic } from "@/data/topics";
import ExerciseEngine from "@/components/ExerciseEngine";

const ExercisePage = () => {
  const { topicSlug, exerciseIndex } = useParams<{ topicSlug: string; exerciseIndex: string }>();
  const topic = getTopic(topicSlug ?? "");
  const idx = Number(exerciseIndex) === 2 ? 1 : 0;
  const exercise = topic?.exercises[idx];

  if (!topic || !exercise) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-12">
        <p>Exercise not found.</p>
        <Link to="/" className="text-primary underline">Back home</Link>
      </div>
    );
  }

  return (
    <div className="px-6 py-8">
      <Link to={`/grammar/${topic.slug}`} className="block max-w-2xl mx-auto text-sm text-muted-foreground hover:text-primary mb-4">
        ← {topic.title}
      </Link>
      <ExerciseEngine topic={topic} exercise={exercise} storageKey={`egh:${topic.slug}:${idx}`} />
    </div>
  );
};

export default ExercisePage;
