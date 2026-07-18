import { Link, useLocation } from "react-router-dom";
import Wordmark from "@/components/Wordmark";

const SiteHeader = () => {
  const { pathname } = useLocation();

  // The homepage hero already leads with the full-size wordmark — a second
  // one in the header is pure repetition and costs a lot of mobile viewport.
  if (pathname === "/") return null;

  return (
    <header className="border-b border-border bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <Link to="/" aria-label="Grammatica home">
          <Wordmark size="sm" />
        </Link>
      </div>
    </header>
  );
};

export default SiteHeader;
