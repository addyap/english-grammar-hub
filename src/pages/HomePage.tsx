import { Link } from "react-router-dom";
import { sections } from "@/data/sections";
import { topicsRegistry } from "@/data/topics/registry";
import { LANGUAGES } from "@/data/types";
import { Badge } from "@/components/ui/badge";
import Wordmark from "@/components/Wordmark";

const EXERCISES_PER_TOPIC = 2;

const HomePage = () => {
  const languageCount = LANGUAGES.length;
  const topicCount = topicsRegistry.length;
  const exerciseCount = topicCount * EXERCISES_PER_TOPIC;
  const firstSection = sections[0];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <header className="mb-12 text-center">
        <Wordmark size="lg" className="mb-6" />
        <h1 className="font-serif italic text-xl sm:text-2xl text-foreground max-w-xl mx-auto mb-2">
          English grammar, in your language
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Clear rules explained in French, Spanish, Portuguese, Italian, German, Russian, Arabic and
          Mandarin Chinese, with self-correcting exercises.
        </p>

        <div className="flex justify-center gap-3 mb-8">
          <div className="bg-card border border-border rounded-lg px-5 py-3 min-w-[92px]">
            <p className="text-2xl font-bold text-secondary">{languageCount}</p>
            <p className="text-xs text-muted-foreground">languages</p>
          </div>
          <div className="bg-card border border-border rounded-lg px-5 py-3 min-w-[92px]">
            <p className="text-2xl font-bold text-secondary">{topicCount}</p>
            <p className="text-xs text-muted-foreground">topics</p>
          </div>
          <div className="bg-card border border-border rounded-lg px-5 py-3 min-w-[92px]">
            <p className="text-2xl font-bold text-secondary">{exerciseCount}</p>
            <p className="text-xs text-muted-foreground">exercises</p>
          </div>
        </div>

        {firstSection && (
          <Link
            to={`/section/${firstSection.slug}`}
            className="inline-block bg-primary text-primary-foreground font-bold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Start with {firstSection.title} →
          </Link>
        )}
      </header>

      <div className="grid sm:grid-cols-2 gap-4">
        {sections.map((section) => {
          const topics = topicsRegistry.filter((t) => t.sectionSlug === section.slug);
          return (
            <Link
              key={section.slug}
              to={`/section/${section.slug}`}
              className="p-5 rounded-lg border border-border bg-card hover:border-primary transition-colors"
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <h2 className="font-display font-bold">{section.title}</h2>
                {topics.length > 0 ? (
                  <Badge className="shrink-0 whitespace-nowrap">{topics.length} topic{topics.length > 1 ? "s" : ""}</Badge>
                ) : (
                  <Badge variant="outline" className="shrink-0 whitespace-nowrap">Coming soon</Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{section.description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
