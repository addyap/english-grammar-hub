interface WordmarkProps {
  size?: "sm" | "lg";
  className?: string;
}

const SIZES: Record<NonNullable<WordmarkProps["size"]>, string> = {
  sm: "text-xl",
  lg: "text-4xl sm:text-5xl",
};

/**
 * "Grammatica" wordmark with a hand-drawn chalk-underline flourish — the
 * site's only logo treatment, no separate icon.
 */
const Wordmark = ({ size = "lg", className = "" }: WordmarkProps) => (
  <span className={`relative inline-block ${className}`}>
    <span className={`font-brand font-bold tracking-tight text-foreground ${SIZES[size]}`}>
      Grammatica
    </span>
    <svg
      viewBox="0 0 150 14"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="absolute left-0 -bottom-1 w-full h-[0.3em] text-secondary"
    >
      <path
        d="M4 6 Q 40 12 75 5 Q 105 -1 146 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  </span>
);

export default Wordmark;
