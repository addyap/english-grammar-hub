import { Link } from "react-router-dom";

const SiteFooter = () => (
  <footer className="border-t border-border mt-12">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
      <span>© {new Date().getFullYear()} Grammatica</span>
      <div className="flex flex-wrap items-center gap-4">
        <a
          href="https://www.antonyaddy.com/ressources-en-ligne"
          className="hover:text-primary transition-colors"
        >
          Fluentory by Antony Addy
        </a>
        <Link to="/mentions-legales" className="hover:text-primary transition-colors">
          Mentions légales
        </Link>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
