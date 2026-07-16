import { Link } from "react-router-dom";
import { sections } from "@/data/sections";
import { getTopicsForSection } from "@/data/topics";
import { Badge } from "@/components/ui/badge";

const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <header className="mb-10 text-center">
        <h1 className="font-display text-3xl sm:text-4xl font-bold mb-3">English Grammar Hub</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Clear grammar rules, explained in your language, with self-correcting exercises in English.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 gap-4">
        {sections.map((section) => {
          const topics = getTopicsForSection(section.slug);
          return (
            <Link
              key={section.slug}
              to={`/section/${section.slug}`}
              className="p-5 rounded-lg border border-border bg-card hover:border-primary transition-colors"
            >
              <div className="flex items-center justify-between mb-1">
                <h2 className="font-display font-bold">{section.title}</h2>
                {topics.length > 0 ? (
                  <Badge>{topics.length} topic{topics.length > 1 ? "s" : ""}</Badge>
                ) : (
                  <Badge variant="outline">Coming soon</Badge>
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
