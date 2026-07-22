interface WordmarkProps {
  size?: "sm" | "lg";
  className?: string;
}

const SIZES: Record<NonNullable<WordmarkProps["size"]>, string> = {
  sm: "text-xl",
  lg: "text-4xl sm:text-5xl",
};

const ICON_SIZES: Record<NonNullable<WordmarkProps["size"]>, string> = {
  sm: "h-6 w-6",
  lg: "h-11 w-11 sm:h-14 sm:w-14",
};

/**
 * A speech bubble with a checkmark — "explained" (the bubble) plus "correct"
 * (the check), filled from --primary/--secondary so it stays theme-aware
 * without a separate dark variant. --success shares --primary's hue on
 * purpose (see index.css), so the checkmark here echoes the same green used
 * for every correct-answer state in the exercise engine.
 */
const MarkIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" aria-hidden="true" className={className}>
    <rect x="10" y="10" width="80" height="58" rx="18" fill="hsl(var(--primary))" />
    <polygon points="30,68 30,88 46,68" fill="hsl(var(--primary))" />
    <path
      d="M27 42 L44 58 L74 26"
      fill="none"
      stroke="hsl(var(--secondary))"
      strokeWidth="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Icon + "Grammatica" wordmark lockup — the site's only logo treatment.
 */
const Wordmark = ({ size = "lg", className = "" }: WordmarkProps) => (
  <span className={`inline-flex items-center gap-2 sm:gap-3 ${className}`}>
    <MarkIcon className={ICON_SIZES[size]} />
    <span className={`font-brand font-bold tracking-tight text-foreground ${SIZES[size]}`}>
      Grammatica
    </span>
  </span>
);

export default Wordmark;
