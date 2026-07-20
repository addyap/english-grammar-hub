import { useId } from "react";

interface StarsAndStripesBackdropProps {
  className?: string;
}

const STRIPES = Array.from({ length: 13 }, (_, i) => i);
const STRIPE_HEIGHT = 100 / 13;
const CANTON_WIDTH = 80;
const CANTON_HEIGHT = STRIPE_HEIGHT * 7;

/**
 * Sibling to UnionJackBackdrop.tsx — same idea (real flag colours via the
 * --flag-* tokens, hand-drawn accent), different flag. Stripes stay
 * ruler-straight like the Union Jack's cross bars; the "sketched" character
 * lives in the canton's stars, drawn as small 4-point sparkles (not precise
 * 5-point/50-star geometry — this is a hero backdrop, not a reference flag)
 * tiled via a <pattern> so there's one path to maintain, not fifty.
 */
const StarsAndStripesBackdrop = ({ className = "" }: StarsAndStripesBackdropProps) => {
  const patternId = useId();

  return (
    <svg
      viewBox="0 0 200 100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <pattern id={patternId} width="15.5" height="17.9" patternUnits="userSpaceOnUse">
          <path
            d="M 0 -2.6 L 0.7 -0.7 L 2.6 0 L 0.7 0.7 L 0 2.6 L -0.7 0.7 L -2.6 0 L -0.7 -0.7 Z"
            transform="translate(7.75,9)"
            className="fill-flag-white"
          />
        </pattern>
      </defs>

      {STRIPES.map((i) => (
        <rect
          key={i}
          x="0"
          y={i * STRIPE_HEIGHT}
          width="200"
          height={STRIPE_HEIGHT}
          className={i % 2 === 0 ? "fill-flag-red" : "fill-flag-white"}
        />
      ))}

      <rect x="0" y="0" width={CANTON_WIDTH} height={CANTON_HEIGHT} className="fill-flag-blue" />
      <rect x="0" y="0" width={CANTON_WIDTH} height={CANTON_HEIGHT} fill={`url(#${patternId})`} />
    </svg>
  );
};

export default StarsAndStripesBackdrop;
