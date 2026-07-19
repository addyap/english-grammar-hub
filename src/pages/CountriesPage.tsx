import { Link } from "react-router-dom";
import { MAJORITY_ENGLISH_COUNTRIES, OFFICIAL_ENGLISH_COUNTRIES, type EnglishSpeakingCountry } from "@/data/countries";
import { useSeo } from "@/hooks/useSeo";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

const PAGE_DESCRIPTION =
  "Every country where English is a majority or official language, flag by flag — from the UK and US to Nigeria, India, Jamaica and beyond.";

const CountryGrid = ({ countries }: { countries: EnglishSpeakingCountry[] }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
    {countries.map((country) => (
      <div
        key={country.name}
        className="flex items-center gap-3 p-3 rounded-lg border border-border bg-card"
      >
        <span className="text-2xl leading-none" aria-hidden="true">{country.flag}</span>
        <span className="text-sm font-medium">{country.name}</span>
      </div>
    ))}
  </div>
);

const CountriesPage = () => {
  useSeo({
    title: "Where Is English Spoken?",
    description: PAGE_DESCRIPTION,
    path: "/countries",
    jsonLd: buildBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
      { name: "Where Is English Spoken?", path: "/countries" },
    ]),
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
      <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary">← Resources</Link>
      <h1 className="font-display text-2xl font-bold mt-2 mb-1">Where Is English Spoken?</h1>
      <p className="text-muted-foreground mb-8">
        English isn't owned by any one country — it's the majority language in some places and an
        official language, spoken alongside others, in many more.
      </p>

      <section className="mb-10">
        <h2 className="font-display font-bold mb-1">Where English is the majority language</h2>
        <p className="text-sm text-muted-foreground mb-4">
          English is the first language most people grow up speaking.
        </p>
        <CountryGrid countries={MAJORITY_ENGLISH_COUNTRIES} />
      </section>

      <section>
        <h2 className="font-display font-bold mb-1">Where English is an official language</h2>
        <p className="text-sm text-muted-foreground mb-4">
          English has official status — used in government, education, or business — alongside one or
          more other languages that most people speak at home.
        </p>
        <CountryGrid countries={OFFICIAL_ENGLISH_COUNTRIES} />
      </section>
    </div>
  );
};

export default CountriesPage;
