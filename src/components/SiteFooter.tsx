import { Link } from "react-router-dom";

const SiteFooter = () => (
  <footer className="border-t border-border mt-12">
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
