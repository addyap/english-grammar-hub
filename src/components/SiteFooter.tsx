import { Link } from "react-router-dom";

const SiteFooter = () => (
  <footer className="border-t border-border mt-12">
    {/* A human trainer, for learners who want more than self-study */}
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8">
      <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <h2 className="font-serif text-lg text-foreground">Prefer to learn with a real trainer?</h2>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            Antony Addy, the certified trainer behind Grammatica, runs English courses for professionals: one-to-one or for
            teams, remotely or in person.
          </p>
        </div>
        <a
          href="https://www.antonyaddy.com/contact?sujet=anglais"
          className="inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Talk to Antony →
        </a>
      </div>
    </div>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 text-xs text-muted-foreground">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span>© {new Date().getFullYear()} Grammatica</span>
        <Link to="/mentions-legales" className="hover:text-primary transition-colors">
          Mentions légales
        </Link>
      </div>
      <p className="mt-3">
        Part of{" "}
        <a
          href="https://www.antonyaddy.com/ressources-en-ligne"
          className="font-medium text-foreground hover:text-primary transition-colors"
        >
          Fluentory by Antony Addy
        </a>{" "}
        — free tools for grammar, listening, speaking and exam prep, built by a certified trainer.
      </p>
    </div>
  </footer>
);

export default SiteFooter;
