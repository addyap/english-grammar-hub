import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CONTRAST_PAIRS } from "@/data/contrastExercises";
import { loadTopic } from "@/data/topics/lazy";
import type { GrammarTopicContent } from "@/data/types";
import ContrastExerciseEngine from "@/components/ContrastExerciseEngine";
import { useSeo } from "@/hooks/useSeo";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

const ContrastExercisePage = () => {
  const { pairSlug } = useParams<{ pairSlug: string }>();
  const pair = CONTRAST_PAIRS.find((p) => p.slug === pairSlug);

  const [topicA, setTopicA] = useState<GrammarTopicContent | null | undefined>(undefined);
  const [topicB, setTopicB] = useState<GrammarTopicContent | null | undefined>(undefined);

  useEffect(() => {
    if (!pair) return;
    setTopicA(undefined);
    setTopicB(undefined);
    loadTopic(pair.topicASlug).then((t) => setTopicA(t ?? null));
    if (pair.topicBSlug === pair.topicASlug) {
      setTopicB(null);
    } else {
      loadTopic(pair.topicBSlug).then((t) => setTopicB(t ?? null));
    }
  }, [pair]);

  useSeo({
    title: pair?.title ?? "Contrast Practice",
    description: pair?.description ?? "English grammar explained in your language.",
    path: `/contrast-practice/${pairSlug ?? ""}`,
    jsonLd: pair
      ? buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Contrast Practice", path: "/contrast-practice" },
          { name: pair.title, path: `/contrast-practice/${pair.slug}` },
        ])
      : undefined,
  });

  if (!pair) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
        <p>Contrast exercise not found.</p>
        <Link to="/contrast-practice" className="text-link underline">Back to Contrast Practice</Link>
      </div>
    );
  }

  if (topicA === undefined || topicB === undefined) {
    return <div className="px-4 py-6 sm:px-6 sm:py-8" />;
  }

  if (!topicA) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
        <p>Reference topic not found.</p>
        <Link to="/contrast-practice" className="text-link underline">Back to Contrast Practice</Link>
      </div>
    );
  }

  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8">
      <Link to="/contrast-practice" className="block max-w-2xl mx-auto text-sm text-muted-foreground hover:text-primary mb-2">
        ← Contrast Practice
      </Link>
      <p className="max-w-2xl mx-auto text-sm text-muted-foreground mb-4">{pair.description}</p>
      <ContrastExerciseEngine
        title={pair.title}
        questions={pair.questions}
        topicA={topicA}
        topicB={topicB}
        storageKey={`eghc:${pair.slug}`}
      />
    </div>
  );
};

export default ContrastExercisePage;
