import { Link, useParams } from "react-router-dom";
import { sections } from "@/data/sections";
import { topicsRegistry } from "@/data/topics/registry";
import { Badge } from "@/components/ui/badge";
import { useSeo } from "@/hooks/useSeo";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

const SectionPage = () => {
  const { sectionSlug } = useParams<{ sectionSlug: string }>();
  const section = sections.find((s) => s.slug === sectionSlug);
  const topics = topicsRegistry.filter((t) => t.sectionSlug === sectionSlug);

  useSeo({
    title: section?.title ?? "Section",
    description: section?.description ?? "English grammar explained in your language.",
    path: `/section/${sectionSlug ?? ""}`,
    jsonLd: section
      ? buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: section.title, path: `/section/${section.slug}` },
        ])
      : undefined,
  });

  if (!section) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
        <p>Section not found.</p>
        <Link to="/" className="text-primary underline">Back home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
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
              className="flex items-center justify-between gap-2 p-4 rounded-lg border border-border bg-card hover:border-primary transition-colors"
            >
              <span className="font-medium">{topic.title}</span>
              <Badge variant="outline" className="shrink-0 whitespace-nowrap">{topic.level}</Badge>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionPage;
