import { Link } from "react-router-dom";
import Wordmark from "@/components/Wordmark";

const SiteHeader = () => (
  <header className="border-b border-border bg-background">
    <div className="max-w-4xl mx-auto px-6 py-4">
      <Link to="/" aria-label="Grammatica home">
        <Wordmark size="sm" />
      </Link>
    </div>
  </header>
);

export default SiteHeader;
