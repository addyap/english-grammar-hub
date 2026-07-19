import { useState } from "react";
import { Link } from "react-router-dom";
import { FALSE_FRIENDS_LISTS } from "@/data/falseFriends";
import type { LanguageCode } from "@/data/types";
import { useSeo } from "@/hooks/useSeo";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

const PAGE_DESCRIPTION =
  "False friends by language — words in French, Spanish, Portuguese, Italian, and German that look like English words but mean something else entirely.";

const FalseFriendsPage = () => {
  useSeo({
    title: "False Friends",
    description: PAGE_DESCRIPTION,
    path: "/false-friends",
    jsonLd: buildBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "False Friends", path: "/false-friends" },
    ]),
  });

  const [languageCode, setLanguageCode] = useState<LanguageCode>(FALSE_FRIENDS_LISTS[0].languageCode);
  const activeList = FALSE_FRIENDS_LISTS.find((l) => l.languageCode === languageCode) ?? FALSE_FRIENDS_LISTS[0];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
      <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary">← Resources</Link>
      <h1 className="font-display text-2xl font-bold mt-2 mb-1">False Friends</h1>
      <p className="text-muted-foreground mb-6">
        Words that look or sound like an English word but mean something completely different — the
        classic trap for speakers of these languages. Only covering languages where this is a real,
        well-documented pattern, not forcing it onto every language on this site.
      </p>

      <div className="flex flex-wrap gap-1.5 mb-6">
        {FALSE_FRIENDS_LISTS.map((list) => (
          <button
            key={list.languageCode}
            type="button"
            onClick={() => setLanguageCode(list.languageCode)}
            className={`px-3 py-2 sm:px-2.5 sm:py-1 text-sm sm:text-xs rounded-md transition ${
              list.languageCode === languageCode
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/70"
            }`}
          >
            {list.languageLabel}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {activeList.entries.map((entry) => (
          <div key={entry.word} className="p-4 rounded-lg border border-border bg-card">
            <h2 className="font-semibold mb-1 italic">{entry.word}</h2>
            <p className="text-sm text-muted-foreground">{entry.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FalseFriendsPage;
