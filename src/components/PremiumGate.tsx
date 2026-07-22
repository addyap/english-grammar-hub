import { Link } from "react-router-dom";
import { Lock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface PremiumGateProps {
  topicTitle: string;
  level: string;
  /** Where "Explore free topics" leads — the topic's section page. */
  backTo: string;
  backLabel: string;
}

/**
 * Upsell card shown in place of a premium topic's content for free users.
 * Never renders while MONETIZATION_ENABLED is false (see lib/entitlements.ts);
 * the CTA below is a placeholder to be wired to a real checkout at launch.
 */
const PremiumGate = ({ topicTitle, level, backTo, backLabel }: PremiumGateProps) => (
  <div className="max-w-2xl mx-auto px-4 py-8 sm:px-6 sm:py-12">
    <div className="p-8 rounded-lg border border-border bg-card text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/15">
        <Lock className="h-6 w-6 text-secondary" aria-hidden="true" />
      </div>
      <div className="flex items-center justify-center gap-2 mb-2">
        <h1 className="font-display text-xl font-bold">{topicTitle}</h1>
        <Badge variant="outline" className="shrink-0 whitespace-nowrap">{level}</Badge>
      </div>
      <p className="text-muted-foreground mb-6">
        This advanced topic is part of Grammatica Premium — full explanations in
        9 languages plus both self-correcting exercises.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        {/* TODO(launch): point at the real checkout before enabling monetization. */}
        <button
          type="button"
          className="px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition"
        >
          Upgrade to Premium
        </button>
        <Link
          to={backTo}
          className="px-5 py-3 rounded-lg bg-muted text-foreground font-semibold hover:bg-muted/70 transition"
        >
          {backLabel}
        </Link>
      </div>
    </div>
  </div>
);

export default PremiumGate;
