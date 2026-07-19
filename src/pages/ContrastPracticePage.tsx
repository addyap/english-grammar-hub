import { Link } from "react-router-dom";
import { CONTRAST_PAIRS } from "@/data/contrastExercises";
import { useSeo } from "@/hooks/useSeo";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

const PAGE_DESCRIPTION =
  "Mixed exercises for the classic confusable tense pairs — Present Simple vs Continuous, Past Simple vs Present Perfect, and more — testing which one fits, not just how to conjugate it.";

const ContrastPracticePage = () => {
  useSeo({
    title: "Contrast Practice",
    description: PAGE_DESCRIPTION,
    path: "/contrast-practice",
    jsonLd: buildBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "Contrast Practice", path: "/contrast-practice" },
    ]),
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
      <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary">← Resources</Link>
      <h1 className="font-display text-2xl font-bold mt-2 mb-1">Contrast Practice</h1>
      <p className="text-muted-foreground mb-8">
        Every other exercise on this site tests one structure at a time — useful, but not the whole
        skill. These mix two easily-confused structures in the same exercise, so you have to decide
        which one fits, not just conjugate whichever one you've already been told to use.
      </p>

      <div className="space-y-3">
        {CONTRAST_PAIRS.map((pair) => (
          <Link
            key={pair.slug}
            to={`/contrast-practice/${pair.slug}`}
            className="block p-5 rounded-lg border border-border bg-card hover:border-primary transition-colors"
          >
            <h2 className="font-display font-bold mb-1">{pair.title}</h2>
            <p className="text-sm text-muted-foreground">{pair.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContrastPracticePage;
