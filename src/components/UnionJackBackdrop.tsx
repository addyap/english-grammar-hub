interface UnionJackBackdropProps {
  className?: string;
}

/**
 * A soft, hand-drawn reinterpretation of the Union Jack for the homepage
 * hero — not a literal navy/red/white flag (which would clash hard against
 * the site's warm cream/mustard/berry palette), but the same silhouette
 * (diagonal cross + centered cross, counterchanged) redrawn entirely in the
 * site's own HSL tokens, at low opacity, so it reads as a background
 * texture rather than a loud graphic. The diagonals get a slight bow —
 * same wobbly-quadratic-bezier trick as the chalk underline in
 * Wordmark.tsx — everything else (the cross bars) stays ruler-straight for
 * contrast, like something sketched quickly but carefully.
 */
const UnionJackBackdrop = ({ className = "" }: UnionJackBackdropProps) => (
  <svg
    viewBox="0 0 200 100"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
    className={className}
  >
    <rect x="0" y="0" width="200" height="100" className="fill-secondary" />

    {/* St Andrew's cross — broad cream diagonals, gently bowed */}
    <path d="M 0 0 Q 100 45 200 100" className="stroke-background" strokeWidth="22" fill="none" />
    <path d="M 200 0 Q 100 55 0 100" className="stroke-background" strokeWidth="22" fill="none" />

    {/* St Patrick's cross — narrower mustard diagonals, offset for a counterchanged feel */}
    <path d="M 0 -7 Q 100 41 200 93" className="stroke-primary" strokeWidth="9" fill="none" />
    <path d="M 200 7 Q 100 61 0 107" className="stroke-primary" strokeWidth="9" fill="none" />

    {/* St George's cross — cream fimbriation, ruler-straight */}
    <rect x="0" y="38" width="200" height="24" className="fill-background" />
    <rect x="88" y="0" width="24" height="100" className="fill-background" />

    {/* St George's cross — mustard cross */}
    <rect x="0" y="44" width="200" height="12" className="fill-primary" />
    <rect x="94" y="0" width="12" height="100" className="fill-primary" />
  </svg>
);

export default UnionJackBackdrop;
