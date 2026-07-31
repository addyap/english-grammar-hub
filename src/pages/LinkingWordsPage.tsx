import { Link } from "react-router-dom";
import { LINKING_WORD_CATEGORIES } from "@/data/linkingWords";
import { useSeo } from "@/hooks/useSeo";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

const PAGE_DESCRIPTION =
  "A quick reference for English linking words — contrast, cause, result, addition, and discourse markers — grouped by function with one-line usage notes.";

const LinkingWordsPage = () => {
  useSeo({
    title: "Linking Words Reference",
    description: PAGE_DESCRIPTION,
    path: "/linking-words",
    jsonLd: buildBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "Linking Words Reference", path: "/linking-words" },
    ]),
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
      <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary">← Resources</Link>
      <h1 className="font-display text-2xl font-bold mt-2 mb-1">Linking Words Reference</h1>
      <p className="text-muted-foreground mb-8">
        The words that connect ideas, grouped by what job they do — not new content, just a quick place to look one up.
      </p>

      <div className="space-y-4">
        {LINKING_WORD_CATEGORIES.map((cat) => (
          <div key={cat.category} className="p-4 rounded-lg border border-border bg-card">
            <h2 className="font-semibold mb-1">{cat.category}</h2>
            <p className="text-sm text-muted-foreground mb-3">{cat.summary}</p>
            <ul className="list-disc list-outside pl-5 space-y-1.5">
              {cat.words.map((entry) => (
                <li key={entry.word} className="text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">{entry.word}</span> — {entry.note}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkingWordsPage;
