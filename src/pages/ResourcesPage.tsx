import { Link } from "react-router-dom";
import { useSeo } from "@/hooks/useSeo";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

const PAGE_DESCRIPTION =
  "Reference pages and mixed practice that don't fit the topic-by-topic curriculum: contrast exercises, where English is spoken, irregular verbs, British vs American English, confused words, false friends, and punctuation.";

const RESOURCES = [
  {
    slug: "contrast-practice",
    title: "Contrast Practice",
    description: "Mixed exercises for classic confusable pairs — Present Simple vs Continuous, Past Simple vs Present Perfect, and more.",
  },
  {
    slug: "countries",
    title: "Where Is English Spoken?",
    description: "43 countries where English is a majority or official language, flag by flag.",
  },
  {
    slug: "irregular-verbs",
    title: "Irregular Verbs List",
    description: "Nearly 150 verbs grouped by pattern, with translations and a self-test mode.",
  },
  {
    slug: "british-vs-american",
    title: "British vs American English",
    description: "Real grammar differences, plus the spelling and vocabulary everyone notices.",
  },
  {
    slug: "confused-words",
    title: "Commonly Confused Words",
    description: "its/it's, affect/effect, then/than, and more — with a one-line rule for each.",
  },
  {
    slug: "false-friends",
    title: "False Friends",
    description: "Words in French, Spanish, Portuguese, Italian, and German that trick English learners.",
  },
  {
    slug: "punctuation",
    title: "Punctuation Guide",
    description: "Commas, semicolons, colons, apostrophes, quotation marks, dashes, and end marks.",
  },
];

const ResourcesPage = () => {
  useSeo({
    title: "Resources",
    description: PAGE_DESCRIPTION,
    path: "/resources",
    jsonLd: buildBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
    ]),
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
      <Link to="/" className="text-sm text-muted-foreground hover:text-primary">← Home</Link>
      <h1 className="font-display text-2xl font-bold mt-2 mb-1">Resources</h1>
      <p className="text-muted-foreground mb-8">
        A few reference pages that don't fit neatly into a single grammar topic.
      </p>

      <div className="space-y-3">
        {RESOURCES.map((resource) => (
          <Link
            key={resource.slug}
            to={`/${resource.slug}`}
            className="block p-5 rounded-lg border border-border bg-card hover:border-primary transition-colors"
          >
            <h2 className="font-display font-bold mb-1">{resource.title}</h2>
            <p className="text-sm text-muted-foreground">{resource.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;
