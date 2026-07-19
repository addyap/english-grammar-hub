import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { CONFUSED_WORD_GROUPS } from "@/data/confusedWords";
import { useSeo } from "@/hooks/useSeo";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

const PAGE_DESCRIPTION =
  "Commonly confused English words — its/it's, affect/effect, then/than, and more — with a one-line rule for telling them apart.";

const ConfusedWordsPage = () => {
  useSeo({
    title: "Commonly Confused Words",
    description: PAGE_DESCRIPTION,
    path: "/confused-words",
    jsonLd: buildBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "Commonly Confused Words", path: "/confused-words" },
    ]),
  });

  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const results = useMemo(() => {
    if (!normalizedQuery) return CONFUSED_WORD_GROUPS;
    return CONFUSED_WORD_GROUPS.filter(
      (g) =>
        g.words.some((w) => w.toLowerCase().includes(normalizedQuery)) ||
        g.explanation.toLowerCase().includes(normalizedQuery)
    );
  }, [normalizedQuery]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
      <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary">← Resources</Link>
      <h1 className="font-display text-2xl font-bold mt-2 mb-1">Commonly Confused Words</h1>
      <p className="text-muted-foreground mb-6">
        Pairs (and a few trios) that sound alike, look alike, or just get mixed up — with a quick rule
        for keeping them straight.
      </p>

      <div className="relative mb-6">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
        <label htmlFor="word-search" className="sr-only">Search words</label>
        <input
          id="word-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search a word — e.g. "its", "affect"…'
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-card text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {results.length === 0 ? (
        <p className="text-muted-foreground text-center">No match for "{query}".</p>
      ) : (
        <div className="space-y-3">
          {results.map((group) => (
            <div key={group.words.join("-")} className="p-4 rounded-lg border border-border bg-card">
              <h2 className="font-semibold mb-1">{group.words.join(" / ")}</h2>
              <p className="text-sm text-muted-foreground">{group.explanation}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ConfusedWordsPage;
