import { Link } from "react-router-dom";
import { GRAMMAR_DIFFERENCES, SPELLING_PATTERNS, VOCAB_PAIRS } from "@/data/britishVsAmerican";
import { useSeo } from "@/hooks/useSeo";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

const PAGE_DESCRIPTION =
  "British vs American English: real grammar differences (collective nouns, present perfect, have got), plus common spelling and vocabulary contrasts.";

const BritishVsAmericanPage = () => {
  useSeo({
    title: "British vs American English",
    description: PAGE_DESCRIPTION,
    path: "/british-vs-american",
    jsonLd: buildBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "British vs American English", path: "/british-vs-american" },
    ]),
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
      <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary">← Resources</Link>
      <h1 className="font-display text-2xl font-bold mt-2 mb-1">British vs American English</h1>
      <p className="text-muted-foreground mb-8">
        Both are correct — neither is "proper" English and the other a deviation. Here's what actually
        differs: real grammar first, then the spelling and vocabulary contrasts everyone notices.
      </p>

      <section className="mb-10">
        <h2 className="font-display font-bold mb-1">Grammar differences</h2>
        <p className="text-sm text-muted-foreground mb-4">
          The part that actually matters for how you build a sentence.
        </p>
        <div className="space-y-3">
          {GRAMMAR_DIFFERENCES.map((diff) => (
            <div key={diff.topic} className="p-4 rounded-lg border border-border bg-card">
              <h3 className="font-semibold mb-2">{diff.topic}</h3>
              <p className="text-sm mb-1">
                <span className="mr-1.5">🇬🇧</span>
                <span className="text-muted-foreground">{diff.british}</span>
              </p>
              <p className="text-sm">
                <span className="mr-1.5">🇺🇸</span>
                <span className="text-muted-foreground">{diff.american}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-display font-bold mb-1">Spelling</h2>
        <p className="text-sm text-muted-foreground mb-4">
          A handful of patterns account for almost every spelling difference.
        </p>
        <div className="space-y-4">
          {SPELLING_PATTERNS.map((group) => (
            <div key={group.pattern} className="p-4 rounded-lg border border-border bg-card">
              <h3 className="font-semibold mb-2">{group.pattern}</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
                {group.examples.map((ex) => (
                  <span key={ex.british}>
                    {ex.british} <span className="text-border">→</span> {ex.american}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display font-bold mb-1">Vocabulary</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Same idea, different everyday word.
        </p>
        <div className="p-4 rounded-lg border border-border bg-card overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="text-left text-muted-foreground border-b border-border">
                <th className="py-2 px-3 font-medium">🇬🇧 British</th>
                <th className="py-2 px-3 font-medium">🇺🇸 American</th>
              </tr>
            </thead>
            <tbody>
              {VOCAB_PAIRS.map((pair) => (
                <tr key={pair.british} className="border-b border-border last:border-0">
                  <td className="py-2 px-3 font-medium">{pair.british}</td>
                  <td className="py-2 px-3 text-muted-foreground">{pair.american}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default BritishVsAmericanPage;
