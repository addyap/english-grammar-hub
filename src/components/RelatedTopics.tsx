import { Link } from "react-router-dom";
import { topicsRegistry } from "@/data/topics/registry";
import { Badge } from "@/components/ui/badge";

interface RelatedTopicsProps {
  relatedSlugs: string[] | undefined;
}

/** Small "related topics" block shown on a topic page, linking to a curated few genuinely related topics. */
const RelatedTopics = ({ relatedSlugs }: RelatedTopicsProps) => {
  const related = (relatedSlugs ?? [])
    .map((slug) => topicsRegistry.find((t) => t.slug === slug))
    .filter((t): t is (typeof topicsRegistry)[number] => Boolean(t));

  if (related.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
        Related topics
      </h2>
      <div className="flex flex-wrap gap-2">
        {related.map((topic) => (
          <Link
            key={topic.slug}
            to={`/grammar/${topic.slug}`}
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors text-sm"
          >
            <span>{topic.title}</span>
            <Badge variant="stamp" className="shrink-0 whitespace-nowrap">{topic.level}</Badge>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedTopics;
