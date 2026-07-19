interface WordmarkProps {
  size?: "sm" | "lg";
  className?: string;
}

const SIZES: Record<NonNullable<WordmarkProps["size"]>, string> = {
  sm: "text-xl",
  lg: "text-4xl sm:text-5xl",
};

const ICON_SIZES: Record<NonNullable<WordmarkProps["size"]>, string> = {
  sm: "h-6 w-5",
  lg: "h-11 w-9 sm:h-14 sm:w-11",
};

/**
 * The "G" ring + crossbar + speech-bubble tail, filled from --primary/
 * --secondary so it stays theme-aware without a separate dark variant.
 */
const MarkIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 200 240" aria-hidden="true" className={className}>
    <path
      d="M159.89 116.05 A62 62 0 1 1 159.89 83.95"
      fill="none"
      stroke="hsl(var(--primary))"
      strokeWidth="34"
      strokeLinecap="butt"
    />
    <rect x="103" y="83" width="82" height="34" fill="hsl(var(--primary))" />
    <polygon
      points="56.53,111.65 23.69,120.45 74,223 22.2,86.28 55.68,92.19"
      fill="hsl(var(--primary))"
    />
    <polygon points="113.72,22.2 107.81,55.68 145.31,35.29" fill="hsl(var(--secondary))" />
    <polygon points="56.53,111.65 23.69,120.45 43.81,161.47" fill="hsl(var(--secondary))" />
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
