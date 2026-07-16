import { Link, useParams } from "react-router-dom";
import { sections } from "@/data/sections";
import { getTopicsForSection } from "@/data/topics";
import { Badge } from "@/components/ui/badge";

const SectionPage = () => {
  const { sectionSlug } = useParams<{ sectionSlug: string }>();
  const section = sections.find((s) => s.slug === sectionSlug);
  const topics = getTopicsForSection(sectionSlug ?? "");

  if (!section) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12">
        <p>Section not found.</p>
        <Link to="/" className="text-primary underline">Back home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <Link to="/" className="text-sm text-muted-foreground hover:text-primary">← All sections</Link>
      <h1 className="font-display text-2xl font-bold mt-2 mb-1">{section.title}</h1>
      <p className="text-muted-foreground mb-8">{section.description}</p>

      {topics.length === 0 ? (
        <p className="text-muted-foreground">Topics for this section are coming soon.</p>
      ) : (
        <div className="space-y-3">
          {topics.map((topic) => (
            <Link
              key={topic.slug}
              to={`/grammar/${topic.slug}`}
              className="flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:border-primary transition-colors"
            >
              <span className="font-medium">{topic.title}</span>
              <Badge variant="outline">{topic.level}</Badge>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionPage;
