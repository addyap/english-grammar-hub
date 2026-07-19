import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { IRREGULAR_VERB_GROUPS, type IrregularVerb } from "@/data/irregularVerbs";
import { useSeo } from "@/hooks/useSeo";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

const PAGE_DESCRIPTION =
  "Over 120 common English irregular verbs — base, past simple, and past participle — grouped by pattern, with a self-test mode.";

const VerbCell = ({
  value,
  testMode,
  revealKey,
  revealed,
  onReveal,
}: {
  value: string;
  testMode: boolean;
  revealKey: string;
  revealed: Set<string>;
  onReveal: (key: string) => void;
}) => {
  if (!testMode || revealed.has(revealKey)) {
    return <td className="py-2 px-3 text-muted-foreground">{value}</td>;
  }
  return (
    <td className="py-2 px-3">
      <button
        type="button"
        onClick={() => onReveal(revealKey)}
        className="text-primary text-sm font-semibold hover:underline"
        aria-label={`Reveal answer`}
      >
        ?
      </button>
    </td>
  );
};

const VerbTable = ({
  verbs,
  testMode,
  revealed,
  onReveal,
}: {
  verbs: IrregularVerb[];
  testMode: boolean;
  revealed: Set<string>;
  onReveal: (key: string) => void;
}) => (
  <table className="w-full text-sm border-collapse">
    <thead>
      <tr className="text-left text-muted-foreground border-b border-border">
        <th className="py-2 px-3 font-medium">Base</th>
        <th className="py-2 px-3 font-medium">Past simple</th>
        <th className="py-2 px-3 font-medium">Past participle</th>
      </tr>
    </thead>
    <tbody>
      {verbs.map((verb) => (
        <tr key={verb.base} className="border-b border-border last:border-0">
          <td className="py-2 px-3 font-medium">{verb.base}</td>
          <VerbCell
            value={verb.past}
            testMode={testMode}
            revealKey={`${verb.base}:past`}
            revealed={revealed}
            onReveal={onReveal}
          />
          <VerbCell
            value={verb.participle}
            testMode={testMode}
            revealKey={`${verb.base}:participle`}
            revealed={revealed}
            onReveal={onReveal}
          />
        </tr>
      ))}
    </tbody>
  </table>
);

const IrregularVerbsPage = () => {
  useSeo({
    title: "Irregular Verbs List",
    description: PAGE_DESCRIPTION,
    path: "/irregular-verbs",
    jsonLd: buildBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "Irregular Verbs List", path: "/irregular-verbs" },
    ]),
  });

  const [query, setQuery] = useState("");
  const [testMode, setTestMode] = useState(false);
  const [revealed, setRevealed] = useState<Set<string>>(new Set());

  const toggleReveal = (key: string) => {
    setRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const toggleTestMode = () => {
    setTestMode((prev) => !prev);
    setRevealed(new Set());
  };

  const normalizedQuery = query.trim().toLowerCase();
  const searchResults = useMemo(() => {
    if (!normalizedQuery) return [];
    return IRREGULAR_VERB_GROUPS.flatMap((g) => g.verbs).filter((v) =>
      v.base.toLowerCase().includes(normalizedQuery)
    );
  }, [normalizedQuery]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
      <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary">← Resources</Link>
      <h1 className="font-display text-2xl font-bold mt-2 mb-1">Irregular Verbs List</h1>
      <p className="text-muted-foreground mb-6">
        Over 120 verbs that don't follow the regular -ed pattern, grouped by which forms coincide —
        the way most teachers actually explain them.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
          <label htmlFor="verb-search" className="sr-only">Search verbs</label>
          <input
            id="verb-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search a verb — e.g. "go", "bring"…'
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-card text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <button
          type="button"
          onClick={toggleTestMode}
          className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
            testMode ? "bg-primary text-primary-foreground" : "bg-card border border-border hover:border-primary"
          }`}
        >
          {testMode ? "Test mode: on" : "Test yourself"}
        </button>
      </div>

      {normalizedQuery ? (
        searchResults.length === 0 ? (
          <p className="text-muted-foreground text-center">No verb matches "{query}".</p>
        ) : (
          <div className="p-4 rounded-lg border border-border bg-card overflow-x-auto">
            <VerbTable verbs={searchResults} testMode={testMode} revealed={revealed} onReveal={toggleReveal} />
          </div>
        )
      ) : (
        <div className="space-y-8">
          {IRREGULAR_VERB_GROUPS.map((group) => (
            <section key={group.title}>
              <h2 className="font-display font-bold mb-1">{group.title}</h2>
              <p className="text-sm text-muted-foreground mb-3">{group.description}</p>
              <div className="p-4 rounded-lg border border-border bg-card overflow-x-auto">
                <VerbTable verbs={group.verbs} testMode={testMode} revealed={revealed} onReveal={toggleReveal} />
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
};

export default IrregularVerbsPage;
