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
 * ruler-straight like the Union Jack's cross bars.
 *
 * The stars are proper 5-point stars, tiled via a <pattern> so there's one
 * path to maintain rather than fifty. They used to be 4-point sparkles,
 * which was fine while the whole flag sat at 9% opacity and read as
 * texture; once the canton became a full-saturation blue field, sparkles
 * stopped looking like a stylistic choice and started looking like a
 * mistake. The count still isn't 50 and the rows aren't offset — this is a
 * hero backdrop, not a reference flag — but the shape is now right.
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
        {/* Tiled tighter than the old 5x3. The hero frame exposes only a band of
            the flag, and at the old spacing that band often fell between stars,
            leaving the canton reading as a plain blue block. Denser also sits
            closer to the real flag's star density. */}
        <pattern id={patternId} width="11" height="12.4" patternUnits="userSpaceOnUse">
          <path
            d="M 0 -3 L 0.73 -1.01 L 2.85 -0.93 L 1.19 0.39 L 1.76 2.43 L 0 1.25 L -1.76 2.43 L -1.19 0.39 L -2.85 -0.93 L -0.73 -1.01 Z"
            transform="translate(5.5,6.2)"
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
