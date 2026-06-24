import { BrainCircuit, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Reveal } from './ScrollFX';

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
    <section id="proof" className="py-16 sm:py-24 bg-brand-gold-wash/50 border-y border-brand-gold/20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-10">
          <p className="text-sm font-semibold text-brand-gold-hover uppercase tracking-[0.18em]">
            Built for momentum
          </p>
          <h2 className="mt-2 font-display font-bold text-3xl sm:text-4xl tracking-tight text-ink">
            AI-driven production, planning and delivery.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {proofPoints.map((point) => {
            const Icon = point.icon;
            return (
              <Reveal key={point.title} className="h-full">
                <article className="relative h-full overflow-hidden rounded-[1.5rem] bg-white border border-brand-gold/20 p-6 shadow-soft-lg lift">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-gold via-brand-gold-soft to-brand-gold-hover" />
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-ink text-brand-gold shadow-[0_10px_25px_-18px_rgba(11,11,12,0.8)]">
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
