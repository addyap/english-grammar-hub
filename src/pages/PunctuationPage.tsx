import { Link } from "react-router-dom";
import { PUNCTUATION_RULES } from "@/data/punctuation";
import { useSeo } from "@/hooks/useSeo";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

const PAGE_DESCRIPTION =
  "A quick reference for English punctuation — commas, semicolons, colons, apostrophes, quotation marks, dashes, and end marks — with examples.";

const PunctuationPage = () => {
  useSeo({
    title: "Punctuation Guide",
    description: PAGE_DESCRIPTION,
    path: "/punctuation",
    jsonLd: buildBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "Punctuation Guide", path: "/punctuation" },
    ]),
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
      <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary">← Resources</Link>
      <h1 className="font-display text-2xl font-bold mt-2 mb-1">Punctuation Guide</h1>
      <p className="text-muted-foreground mb-8">
        The marks that hold a sentence together, one at a time.
      </p>

      <div className="space-y-4">
        {PUNCTUATION_RULES.map((rule) => (
          <div key={rule.mark} className="p-4 rounded-lg border border-border bg-card">
            <h2 className="font-semibold mb-1">{rule.mark}</h2>
            <p className="text-sm text-muted-foreground mb-3">{rule.summary}</p>
            <ul className="list-disc list-outside pl-5 space-y-1.5">
              {rule.points.map((point) => (
                <li key={point} className="text-sm text-muted-foreground">{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PunctuationPage;
