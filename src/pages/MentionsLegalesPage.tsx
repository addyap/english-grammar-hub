import { Link } from "react-router-dom";
import { useSeo } from "@/hooks/useSeo";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

const PAGE_DESCRIPTION = "Legal notice, publisher identity, hosting, and data protection information for Grammatica.";

/**
 * French-language legal notice — required for any site published by a
 * French auto-entrepreneur under the LCEN, regardless of the site's own
 * content language. Content mirrors the pattern used across the rest of
 * this operator's site portfolio, tailored to what Grammatica actually
 * does: no accounts, no forms, no third-party API calls, no analytics —
 * the only persisted data is a theme preference and best exercise scores,
 * both stored locally in the visitor's own browser.
 */
const MentionsLegalesPage = () => {
  useSeo({
    title: "Mentions légales",
    description: PAGE_DESCRIPTION,
    path: "/mentions-legales",
    jsonLd: buildBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Mentions légales", path: "/mentions-legales" },
    ]),
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
      <Link to="/" className="text-sm text-muted-foreground hover:text-primary">← Home</Link>
      <h1 className="font-display text-2xl font-bold mt-2 mb-8">Mentions légales</h1>

      <div className="space-y-8 text-sm text-muted-foreground">
        <section>
          <h2 className="font-display text-base font-semibold text-foreground mb-2">Éditeur du site</h2>
          <p>Antony Addy — entrepreneur individuel</p>
          <p>Adresse : 135 rue Henri Vadon, Résidence des Arènes, 83600 Fréjus, France</p>
          <p>SIRET : 483 178 893 00028</p>
          <p>Contact : formations@antonyaddy.com</p>
        </section>

        <section>
          <h2 className="font-display text-base font-semibold text-foreground mb-2">Hébergement</h2>
          <p>Vercel Inc. — 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
          <p>vercel.com</p>
        </section>

        <section>
          <h2 className="font-display text-base font-semibold text-foreground mb-2">Protection des données personnelles</h2>
          <p className="mb-3">
            Grammatica ne comporte ni formulaire, ni compte utilisateur, ni suivi publicitaire ou statistique. Le
            site ne transmet aucune donnée à un serveur ou à un service tiers.
          </p>
          <p>
            Les seules données conservées — le thème clair/sombre choisi et le meilleur score obtenu à chaque
            exercice — sont stockées uniquement dans le navigateur du visiteur (via <code>localStorage</code>),
            jamais transmises, et peuvent être effacées à tout moment en vidant les données de site dans les
            réglages du navigateur.
          </p>
        </section>

        <section>
          <h2 className="font-display text-base font-semibold text-foreground mb-2">Cookies</h2>
          <p>
            Ce site n'utilise aucun cookie. Le stockage local du navigateur (<code>localStorage</code>) décrit
            ci-dessus n'est pas un cookie et n'est pas soumis au consentement cookies.
          </p>
        </section>

        <section>
          <h2 className="font-display text-base font-semibold text-foreground mb-2">Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu de ce site (textes, exercices, traductions, éléments graphiques) est la propriété
            exclusive d'Antony Addy, sauf mention contraire.
          </p>
        </section>
      </div>
    </div>
  );
};

export default MentionsLegalesPage;
