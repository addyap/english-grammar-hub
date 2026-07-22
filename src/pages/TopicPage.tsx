import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { loadTopic } from "@/data/topics/lazy";
import { sections } from "@/data/sections";
import { Badge } from "@/components/ui/badge";
import ExplanationParagraphs from "@/components/ExplanationParagraphs";
import { LANGUAGES, type LanguageCode, type GrammarTopicContent } from "@/data/types";
import { useSeo } from "@/hooks/useSeo";
import { buildBreadcrumbJsonLd, paragraphToPlainText, toMetaDescription } from "@/lib/seo";
import { hasTopicAccess } from "@/lib/entitlements";
import PremiumGate from "@/components/PremiumGate";

const TopicPage = () => {
  const { topicSlug } = useParams<{ topicSlug: string }>();
  const [topic, setTopic] = useState<GrammarTopicContent | null | undefined>(undefined);
  const [lang, setLang] = useState<LanguageCode>("en");

  useEffect(() => {
    setTopic(undefined);
    loadTopic(topicSlug ?? "").then((t) => setTopic(t ?? null));
  }, [topicSlug]);

  const section = topic ? sections.find((s) => s.slug === topic.sectionSlug) : undefined;

  useSeo({
    title: topic?.title ?? "Grammar topic",
    description: topic
      ? toMetaDescription(paragraphToPlainText(topic.explanations.en[0]))
      : "English grammar explained in your language.",
    path: `/grammar/${topicSlug ?? ""}`,
    jsonLd: topic
      ? buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: section?.title ?? "Section", path: `/section/${topic.sectionSlug}` },
          { name: topic.title, path: `/grammar/${topic.slug}` },
        ])
      : undefined,
  });

  if (topic === undefined) {
    return <div className="max-w-2xl mx-auto px-4 py-8 sm:px-6 sm:py-12" />;
  }

  if (!topic) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
        <p>Topic not found.</p>
        <Link to="/" className="text-link underline">Back home</Link>
      </div>
    );
  }

  if (!hasTopicAccess(topic)) {
    return (
      <PremiumGate
        topicTitle={topic.title}
        level={topic.level}
        backTo={`/section/${topic.sectionSlug}`}
        backLabel={`← ${section?.title ?? "Back to section"}`}
      />
    );
  }

  const meta = LANGUAGES.find((l) => l.code === lang)!;
  const paragraphs = topic.explanations[lang] ?? topic.explanations.en;

  if (import.meta.env.DEV && paragraphs.length !== topic.paragraphKinds.length) {
    console.warn(`[TopicPage] "${topic.slug}" (${lang}) has ${paragraphs.length} paragraphs but paragraphKinds has ${topic.paragraphKinds.length} — they must match 1:1.`);
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
      <Link to={`/section/${topic.sectionSlug}`} className="text-sm text-muted-foreground hover:text-primary">
        ← {section?.title ?? "Section"}
      </Link>

      <div className="flex items-center gap-3 mt-2 mb-6">
        <h1 className="font-display text-2xl font-bold">{topic.title}</h1>
        <Badge variant="outline" className="shrink-0 whitespace-nowrap">{topic.level}</Badge>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {LANGUAGES.filter((l) => l.code in topic.explanations || l.code === "en").map((l) => (
          <button
            key={l.code}
            type="button"
            onClick={() => setLang(l.code)}
            className={`px-3 py-2 sm:px-2.5 sm:py-1 text-sm sm:text-xs rounded-md transition ${
              l.code === lang ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/70"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>

      <div className="p-5 rounded-lg border border-border bg-card mb-8" lang={lang} dir={meta.rtl ? "rtl" : "ltr"}>
        <ExplanationParagraphs paragraphs={paragraphs} kinds={topic.paragraphKinds} />
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          to={`/grammar/${topic.slug}/exercise/1`}
          className="flex-1 text-center px-4 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition"
        >
          {topic.exercises[0].title}
        </Link>
        <Link
          to={`/grammar/${topic.slug}/exercise/2`}
          className="flex-1 text-center px-4 py-3 rounded-lg bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/90 transition"
        >
          {topic.exercises[1].title}
        </Link>
      </div>
    </div>
  );
};

export default TopicPage;
