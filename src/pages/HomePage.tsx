import { Link } from "react-router-dom";
import { sections } from "@/data/sections";
import { topicsRegistry } from "@/data/topics/registry";
import { Badge } from "@/components/ui/badge";

const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <header className="mb-10 text-center">
        <h1 className="font-display text-2xl sm:text-3xl font-bold mb-3 text-foreground">
          Clear grammar rules, explained in your language.
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Self-correcting exercises help you practice what you just learned — in English.
        </p>
      </header>

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
    </div>
  );
};

export default HomePage;
