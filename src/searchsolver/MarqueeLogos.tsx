import { Reveal } from './ScrollFX';
import { platformChips } from './siteData';

/* ------------------------------------------------------------------
   MarqueeLogos — generic platform/client ribbon. Two opposing rows
   of wordmark "logos" that scroll continuously (reuses .marquee-track
   + .marquee-mask). No fabricated client brands — these are the
   platforms we get brands established on.
------------------------------------------------------------------ */
export default function MarqueeLogos({
  heading = 'The platforms we get you established on',
}: {
  heading?: string;
}) {
  const row = [...platformChips, ...platformChips];

  return (
    <section className="py-14 sm:py-20 bg-white border-y border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-9">
          <p className="text-sm font-semibold text-brand-gold-hover uppercase tracking-[0.18em]">
            Where your audience already is
          </p>
          <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl tracking-tight text-ink">
            {heading}
          </h2>
        </Reveal>
      </div>

      <div className="marquee-mask overflow-hidden py-2">
        <div className="marquee-track gap-4">
          {row.map((label, i) => (
            <span
              key={`a-${label}-${i}`}
              className="inline-flex items-center whitespace-nowrap font-display font-bold text-2xl sm:text-3xl text-zinc-300 hover:text-ink transition-colors px-6"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
      <div className="marquee-mask overflow-hidden py-2">
        <div className="marquee-track gap-4" style={{ animationDirection: 'reverse' }}>
          {row.map((label, i) => (
            <span
              key={`b-${label}-${i}`}
              className="inline-flex items-center whitespace-nowrap font-display font-bold text-2xl sm:text-3xl text-stroke px-6"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
