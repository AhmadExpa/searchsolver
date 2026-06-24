import { BrainCircuit, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Reveal, Marker } from './ScrollFX';
import { clientBrands } from './siteData';

const proofPoints = [
  {
    icon: ShieldCheck,
    title: 'No fake reviews',
    body: 'The site only shows factual brand names and service proof points until real approved quotes are available.',
  },
  {
    icon: BrainCircuit,
    title: 'AI-driven workflow',
    body: 'Our team uses AI-assisted research, hooks, captions and optimisation to support stronger content production.',
  },
  {
    icon: CheckCircle2,
    title: 'Clear delivery',
    body: 'Strategy, content production, posting, reporting and optional paid campaign planning are presented upfront.',
  },
];

/* ------------------------------------------------------------------
   Proof section — factual work markers, not testimonial quotes.
------------------------------------------------------------------ */
export default function Testimonials() {
  return (
    <section id="proof" className="py-16 sm:py-24 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-10">
          <p className="text-sm font-semibold text-brand-gold-hover uppercase tracking-[0.18em]">
            Real work, no fake reviews
          </p>
          <h2 className="mt-2 font-display font-bold text-3xl sm:text-4xl tracking-tight text-ink">
            Brands we’ve <Marker>produced work for.</Marker>
          </h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {clientBrands.map((brand) => (
              <span key={brand} className="font-display font-bold text-lg sm:text-xl text-zinc-400">
                {brand}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {proofPoints.map((point) => {
            const Icon = point.icon;
            return (
              <Reveal key={point.title} className="h-full">
                <article className="h-full rounded-[1.5rem] bg-white border border-line p-6 shadow-soft lift">
                  <span className="w-12 h-12 rounded-xl bg-brand-gold-wash text-brand-gold-hover flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </span>
                  <h3 className="mt-5 font-display font-bold text-lg text-ink">{point.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{point.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
