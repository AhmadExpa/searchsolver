import { BrainCircuit, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Reveal } from './ScrollFX';
import { portfolioAsset } from './siteData';

const proofPoints = [
  {
    icon: ShieldCheck,
    title: 'Clear proof',
    body: 'We keep the section factual and focused on real outputs until approved quotes are ready to publish.',
  },
  {
    icon: BrainCircuit,
    title: 'Faster planning',
    body: 'AI-assisted research, hooks, captions and optimisation help the team move faster without flattening the work.',
  },
  {
    icon: CheckCircle2,
    title: 'Tight delivery',
    body: 'Strategy, content production, posting, reporting and optional paid campaign planning are laid out upfront.',
  },
];

/* ------------------------------------------------------------------
   Proof section — factual work markers, not testimonial quotes.
------------------------------------------------------------------ */
export default function Testimonials() {
  return (
    <section id="proof" className="relative overflow-hidden bg-ink py-20 sm:py-28 text-white scroll-mt-24">
      <div className="absolute inset-y-0 left-0 hidden w-px bg-white/10 lg:block" aria-hidden />
      <div className="absolute inset-y-0 right-[18%] hidden w-px bg-white/10 lg:block" aria-hidden />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal direction="right">
          <p className="text-sm font-semibold text-brand-gold uppercase tracking-[0.18em]">
            Built for momentum
          </p>
          <h2 className="mt-3 font-display font-bold text-4xl sm:text-5xl tracking-normal leading-tight">
            AI-driven production, planning and delivery with a live creative rhythm.
          </h2>
          <p className="mt-5 max-w-xl text-zinc-300 leading-relaxed">
            Clear signals, visible momentum and the practical things a client needs to trust before the
            first campaign goes live.
          </p>

          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {proofPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <Reveal key={point.title}>
                  <article className="group grid gap-4 py-6 sm:grid-cols-[3.5rem_1fr]">
                    <span className="flex h-11 w-11 items-center justify-center bg-white text-ink transition-colors group-hover:bg-brand-gold">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-xs text-brand-gold">0{i + 1}</span>
                        <h3 className="font-display font-bold text-xl tracking-normal">{point.title}</h3>
                      </div>
                      <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{point.body}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Reveal>

        <Reveal direction="left" className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/10 shadow-soft-lg">
          <img
            src={portfolioAsset('banners/software-development.webp')}
            alt="Software development service creative."
            loading="eager"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/10" />
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
            <p className="font-display text-2xl font-black uppercase leading-tight text-white tracking-wider">
              Faster planning only matters when the final output still feels crafted.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
