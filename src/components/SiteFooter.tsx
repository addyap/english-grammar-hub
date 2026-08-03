import { Link } from "react-router-dom";

const SiteFooter = () => (
  <footer className="border-t border-border mt-12">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
      <span>© {new Date().getFullYear()} Grammatica</span>
      <Link to="/mentions-legales" className="hover:text-primary transition-colors">
        Mentions légales
      </Link>
    </div>
  </footer>
);

export default SiteFooter;
