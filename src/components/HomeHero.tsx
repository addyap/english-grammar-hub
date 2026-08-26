import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Wordmark from "@/components/Wordmark";
import ThemeToggle from "@/components/ThemeToggle";

interface HomeHeroProps {
  languageCount: number;
  topicCount: number;
  exerciseCount: number;
  firstSection?: { slug: string; title: string };
}

/**
 * "The Study Lamp" — the site's signature hero. The cursor is a warm lamp: it
 * moves the pool of light, parallaxes a field of grammar tokens, and tilts the
 * floating paper panel. Centre stage, one English sentence corrects itself
 * (red pen → green fix → gold check) while the reason for the fix cycles
 * through all eight native languages — the whole product promise in one glance.
 *
 * Motion styling lives in index.css (.hero-* classes); every keyframe fills
 * `forwards`, so the global prefers-reduced-motion guard there collapses the
 * hero straight to its final, corrected state. The cursor/scroll effects below
 * are also disabled when reduced motion is requested.
 */

// The reason the fix is correct, in the eight languages the site teaches in.
// `code` drives dir="rtl" for Arabic; `label` names the language on screen.
const REASONS: { code: string; label: string; text: string; rtl?: boolean }[] = [
  { code: "fr", label: "Français", text: "« She » est à la 3ᵉ personne : on emploie doesn’t." },
  { code: "es", label: "Español", text: "«She» es tercera persona: se usa doesn’t." },
  { code: "pt", label: "Português", text: "«She» é terceira pessoa: usa-se doesn’t." },
  { code: "it", label: "Italiano", text: "«She» è terza persona: si usa doesn’t." },
  { code: "de", label: "Deutsch", text: "„She“ ist 3. Person Singular – daher doesn’t." },
  { code: "ru", label: "Русский", text: "«She» — 3-е лицо, поэтому doesn’t." },
  { code: "ar", label: "العربية", text: "‏«She» ضمير الغائب المفرد، لذلك نستخدم doesn’t.", rtl: true },
  { code: "zh", label: "中文", text: "「She」是第三人称单数，所以要用 doesn’t。" },
];

// Grammar tokens adrift in the lamplight. `depth` (0..1) scales parallax + drift
// and `lit` sets resting opacity; both stay faint so the panel stays the star.
const TOKENS = [
  { t: "the", x: 8, y: 20, depth: 0.9, lit: 0.16, size: "text-2xl" },
  { t: "‑ed", x: 84, y: 16, depth: 1, lit: 0.2, size: "text-3xl" },
  { t: "will", x: 18, y: 74, depth: 0.7, lit: 0.14, size: "text-xl" },
  { t: "than", x: 90, y: 66, depth: 0.85, lit: 0.16, size: "text-2xl" },
  { t: "a / an", x: 6, y: 50, depth: 0.5, lit: 0.12, size: "text-base" },
  { t: "which", x: 78, y: 82, depth: 0.6, lit: 0.13, size: "text-lg" },
  { t: "'s", x: 26, y: 12, depth: 0.75, lit: 0.18, size: "text-2xl" },
  { t: "at · on · in", x: 70, y: 28, depth: 0.45, lit: 0.1, size: "text-sm" },
  { t: "have been", x: 12, y: 88, depth: 0.55, lit: 0.11, size: "text-base" },
  { t: "would", x: 92, y: 44, depth: 0.65, lit: 0.13, size: "text-lg" },
  { t: "these", x: 40, y: 90, depth: 0.4, lit: 0.1, size: "text-sm" },
  { t: "does", x: 58, y: 8, depth: 0.8, lit: 0.17, size: "text-xl" },
];

const HomeHero = ({ languageCount, topicCount, exerciseCount, firstSection }: HomeHeroProps) => {
  const lampRef = useRef<HTMLDivElement>(null);
  const [reasonIndex, setReasonIndex] = useState(0);

  const prefersReduced =
    typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  // Cursor drives the lamp: light position (--mx/--my), token parallax
  // (--px/--py) and panel tilt (--tilt-x/--tilt-y), all written to the root in
  // a rAF so pointermove never thrashes layout. Skipped under reduced motion.
  useEffect(() => {
    const el = lampRef.current;
    if (!el || prefersReduced) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rect = el.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width; // 0..1
        const ny = (e.clientY - rect.top) / rect.height; // 0..1
        el.style.setProperty("--mx", `${(nx * 100).toFixed(1)}%`);
        el.style.setProperty("--my", `${(ny * 100).toFixed(1)}%`);
        el.style.setProperty("--px", (nx * 2 - 1).toFixed(3));
        el.style.setProperty("--py", (ny * 2 - 1).toFixed(3));
        el.style.setProperty("--tilt-y", `${((nx * 2 - 1) * 5).toFixed(2)}deg`);
        el.style.setProperty("--tilt-x", `${((ny * 2 - 1) * -4).toFixed(2)}deg`);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [prefersReduced]);

  // First-scroll transition: the lamp dims and the panel recedes as the page
  // scrolls, so the example "files into" the section grid below.
  useEffect(() => {
    const el = lampRef.current;
    if (!el || prefersReduced) return;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const p = Math.min(1, window.scrollY / Math.max(1, el.offsetHeight));
        el.style.setProperty("--exit", p.toFixed(3));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [prefersReduced]);

  // Cycle the native-language reason once the correction has played out.
  useEffect(() => {
    if (prefersReduced) return;
    const id = window.setInterval(() => setReasonIndex((i) => (i + 1) % REASONS.length), 2800);
    return () => window.clearInterval(id);
  }, [prefersReduced]);

  const reason = REASONS[reasonIndex];

  return (
    <header
      ref={lampRef}
      className="hero-lamp relative mb-12 overflow-hidden rounded-2xl border border-border bg-background"
      style={
        {
          // Drives the first-scroll recede/dim (see inline transform + opacity).
          "--exit": 0,
        } as React.CSSProperties
      }
    >
      {/* Layer 1 (far): the warm key light + the room vignette. */}
      <div className="hero-glow pointer-events-none absolute inset-0" style={{ opacity: `calc(1 - var(--exit) * 0.85)` }} />
      <div className="hero-vignette pointer-events-none absolute inset-0" />

      {/* Layer 2 (mid): grammar tokens adrift in the lamplight. */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {TOKENS.map((tok, i) => (
          <span
            key={tok.t}
            className={`hero-token absolute font-serif italic text-primary ${tok.size}`}
            style={
              {
                left: `${tok.x}%`,
                top: `${tok.y}%`,
                "--depth": tok.depth,
                "--lit": tok.lit,
                animationDelay: `${0.3 + i * 0.06}s`,
              } as React.CSSProperties
            }
          >
            {tok.t}
          </span>
        ))}
      </div>

      <ThemeToggle className="absolute top-3 right-3 z-20 sm:top-4 sm:right-4" />

      {/* Layer 3 (near): the content, receding on first scroll. */}
      <div
        className="relative z-10 px-4 py-14 text-center sm:px-6 sm:py-20"
        style={{
          transform: "translateY(calc(var(--exit) * -40px))",
          opacity: "calc(1 - var(--exit))" as string,
        }}
      >
        <Wordmark size="lg" className="hero-fade-up mb-8" />

        {/* The floating paper panel — the self-correcting example. */}
        <div
          className="hero-panel ruled-paper relative mx-auto mb-8 max-w-2xl rounded-xl border border-border bg-card px-6 py-10 shadow-2xl sm:px-10"
          style={{ transform: "rotateX(var(--tilt-x)) rotateY(var(--tilt-y)) scale(calc(1 - var(--exit) * 0.06))" }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Example
          </p>
          <p className="font-serif text-2xl leading-snug text-foreground sm:text-4xl">
            She{" "}
            <span className="hero-correct">
              {/* Wrong + right stacked so the swap never shifts layout. */}
              <span className="hero-wrong" aria-hidden="true">don’t</span>
              <span className="hero-right">doesn’t</span>
              <span className="hero-pen" aria-hidden="true" />
              {/* Accessible text: what the sentence actually resolves to. */}
              <span className="sr-only">doesn’t</span>
            </span>{" "}
            like coffee{" "}
            <span className="hero-check" aria-hidden="true">✓</span>
          </p>

          <div className="mt-6 border-t border-border pt-5">
            <p
              key={reason.code}
              className="hero-reason text-base text-muted-foreground sm:text-lg"
              dir={reason.rtl ? "rtl" : "ltr"}
            >
              <span className="mr-2 rtl:ml-2 rtl:mr-0 inline-block rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-accent-foreground align-middle">
                {reason.label}
              </span>
              {reason.text}
            </p>
          </div>
        </div>

        <h1 className="hero-fade-up mx-auto mb-2 max-w-xl font-serif text-xl italic text-foreground sm:text-2xl" style={{ animationDelay: "0.15s" }}>
          English grammar, in your language
        </h1>
        <p className="hero-fade-up mx-auto mb-8 max-w-xl text-muted-foreground" style={{ animationDelay: "0.25s" }}>
          Clear rules explained in French, Spanish, Portuguese, Italian, German, Russian, Arabic and Mandarin
          Chinese, with self-correcting exercises.
        </p>

        <div className="hero-fade-up mb-8 flex justify-center gap-3" style={{ animationDelay: "0.35s" }}>
          {[
            { n: languageCount, label: "languages" },
            { n: topicCount, label: "topics" },
            { n: exerciseCount, label: "exercises" },
          ].map((s) => (
            <div key={s.label} className="min-w-[92px] rounded-lg border border-border bg-card px-5 py-3">
              <p className="text-2xl font-bold text-secondary">{s.n}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {firstSection && (
          <Link
            to={`/section/${firstSection.slug}`}
            className="hero-fade-up group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_hsl(var(--secondary)/0.7)]"
            style={{ animationDelay: "0.45s" }}
          >
            Start with {firstSection.title}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        )}

        <p className="hero-fade-up mt-4 flex flex-wrap justify-center gap-x-4 gap-y-1" style={{ animationDelay: "0.55s" }}>
          <Link to="/progress" className="text-sm text-muted-foreground underline underline-offset-2 hover:text-primary">
            Your progress →
          </Link>
          <Link to="/contrast-practice" className="text-sm text-muted-foreground underline underline-offset-2 hover:text-primary">
            Contrast practice →
          </Link>
          <Link to="/resources" className="text-sm text-muted-foreground underline underline-offset-2 hover:text-primary">
            More resources →
          </Link>
        </p>
      </div>
    </header>
  );
};

export default HomeHero;
