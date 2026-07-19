import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { sections } from "@/data/sections";
import { topicsRegistry } from "@/data/topics/registry";
import { LANGUAGES } from "@/data/types";
import { Badge } from "@/components/ui/badge";
import Wordmark from "@/components/Wordmark";
import UnionJackBackdrop from "@/components/UnionJackBackdrop";
import StarsAndStripesBackdrop from "@/components/StarsAndStripesBackdrop";
import { useSeo } from "@/hooks/useSeo";
import { buildWebsiteJsonLd } from "@/lib/seo";

const EXERCISES_PER_TOPIC = 2;
const HOME_DESCRIPTION =
  "Clear rules explained in French, Spanish, Portuguese, Italian, German, Russian, Arabic and Mandarin Chinese, with self-correcting exercises.";
const FLAG_BACKDROPS = [UnionJackBackdrop, StarsAndStripesBackdrop];

const HomePage = () => {
  const languageCount = LANGUAGES.length;
  const topicCount = topicsRegistry.length;
  const exerciseCount = topicCount * EXERCISES_PER_TOPIC;
  const firstSection = sections[0];
  const [query, setQuery] = useState("");
  // Picked once per page load, not per render — a little surprise for repeat visitors.
  const [FlagBackdrop] = useState(() => FLAG_BACKDROPS[Math.floor(Math.random() * FLAG_BACKDROPS.length)]);

  useSeo({
    title: "English grammar, in your language",
    description: HOME_DESCRIPTION,
    path: "/",
    jsonLd: buildWebsiteJsonLd(),
  });

  const normalizedQuery = query.trim().toLowerCase();
  const searchResults = useMemo(() => {
    if (!normalizedQuery) return [];
    return topicsRegistry.filter((t) => t.title.toLowerCase().includes(normalizedQuery));
  }, [normalizedQuery]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
      <header className="relative mb-12 text-center overflow-hidden rounded-2xl px-4 py-10 sm:py-14">
        <FlagBackdrop className="absolute inset-0 -z-10 w-[160%] h-[160%] -top-[30%] -left-[30%] rotate-[-8deg] opacity-[0.09]" />

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

        <p className="mt-4">
          <Link
            to="/countries"
            className="text-sm text-muted-foreground hover:text-primary underline underline-offset-2"
          >
            Where is English spoken? →
          </Link>
        </p>
      </header>

      <div className="relative max-w-md mx-auto mb-10">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
        <label htmlFor="topic-search" className="sr-only">Search topics</label>
        <input
          id="topic-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search topics — e.g. "passive", "conditionals"…'
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-card text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {normalizedQuery ? (
        <div className="space-y-3">
          {searchResults.length === 0 ? (
            <p className="text-muted-foreground text-center">No topics match "{query}".</p>
          ) : (
            searchResults.map((topic) => {
              const topicSection = sections.find((s) => s.slug === topic.sectionSlug);
              return (
                <Link
                  key={topic.slug}
                  to={`/grammar/${topic.slug}`}
                  className="flex items-center justify-between gap-2 p-4 rounded-lg border border-border bg-card hover:border-primary transition-colors"
                >
                  <span>
                    <span className="font-medium">{topic.title}</span>
                    {topicSection && (
                      <span className="text-sm text-muted-foreground ml-2">{topicSection.title}</span>
                    )}
                  </span>
                  <Badge variant="outline" className="shrink-0 whitespace-nowrap">{topic.level}</Badge>
                </Link>
              );
            })
          )}
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default HomePage;
