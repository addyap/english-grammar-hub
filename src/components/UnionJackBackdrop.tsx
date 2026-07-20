interface UnionJackBackdropProps {
  className?: string;
}

/**
 * A hand-drawn Union Jack for the homepage hero. It used to be redrawn in
 * the site's own tokens at 9% opacity, which read as faint texture rather
 * than as a flag — so it now uses the real navy/red/white (via --flag-*),
 * at a strength you can actually see. Readability is handled in HomePage,
 * which paints a --background scrim over the middle of the hero: the vivid
 * colour lives at the edges, the text sits on flat background.
 *
 * The diagonals keep a slight bow — same wobbly-quadratic-bezier trick as
 * the chalk underline in Wordmark.tsx — while the cross bars stay
 * ruler-straight, like something sketched quickly but carefully.
 */
const UnionJackBackdrop = ({ className = "" }: UnionJackBackdropProps) => (
  <svg
    viewBox="0 0 200 100"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
    className={className}
  >
    <rect x="0" y="0" width="200" height="100" className="fill-flag-blue" />

    {/* St Andrew's cross — broad white diagonals, gently bowed */}
    <path d="M 0 0 Q 100 45 200 100" className="stroke-flag-white" strokeWidth="22" fill="none" />
    <path d="M 200 0 Q 100 55 0 100" className="stroke-flag-white" strokeWidth="22" fill="none" />

    {/* St Patrick's cross — narrower red diagonals, offset for a counterchanged feel */}
    <path d="M 0 -7 Q 100 41 200 93" className="stroke-flag-red" strokeWidth="9" fill="none" />
    <path d="M 200 7 Q 100 61 0 107" className="stroke-flag-red" strokeWidth="9" fill="none" />

    {/* St George's cross — white fimbriation, ruler-straight */}
    <rect x="0" y="38" width="200" height="24" className="fill-flag-white" />
    <rect x="88" y="0" width="24" height="100" className="fill-flag-white" />

    {/* St George's cross — red cross */}
    <rect x="0" y="44" width="200" height="12" className="fill-flag-red" />
    <rect x="94" y="0" width="12" height="100" className="fill-flag-red" />
  </svg>
);

export default UnionJackBackdrop;
