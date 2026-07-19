import { Link, useLocation } from "react-router-dom";
import Wordmark from "@/components/Wordmark";
import ThemeToggle from "@/components/ThemeToggle";

const SiteHeader = () => {
  const { pathname } = useLocation();

  // The homepage hero already leads with the full-size wordmark — a second
  // one in the header is pure repetition and costs a lot of mobile viewport.
  if (pathname === "/") return null;

  return (
    <header className="border-b border-border bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4">
        <Link to="/" aria-label="Grammatica home">
          <Wordmark size="sm" />
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary whitespace-nowrap">
            Resources
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
