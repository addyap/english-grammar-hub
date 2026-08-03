import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSeo } from "@/hooks/useSeo";

const NotFoundPage = () => {
  useSeo({
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist.",
    path: "/404",
  });

  // Search engines shouldn't index this route, but useSeo has no noindex
  // option and every other page wants to stay indexable — set it locally.
  useEffect(() => {
    const tag = document.createElement("meta");
    tag.name = "robots";
    tag.content = "noindex";
    document.head.appendChild(tag);
    return () => {
      tag.remove();
    };
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:py-24 text-center">
      <p className="font-display text-6xl font-bold text-primary mb-4">404</p>
      <h1 className="font-display text-2xl font-bold mb-2">Page not found</h1>
      <p className="text-muted-foreground mb-8">
        That page doesn't exist — it may have been moved, or the link might be out of date.
      </p>
      <Link
        to="/"
        className="inline-block rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
      >
        Back to home
      </Link>
    </div>
  );
};

export default NotFoundPage;
