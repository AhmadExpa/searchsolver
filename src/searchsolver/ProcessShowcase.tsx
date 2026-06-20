import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { ScanSearch, Clapperboard, Radar, CalendarCheck, ArrowRight } from 'lucide-react';

/* ------------------------------------------------------------------
   ProcessShowcase — the signature scroll hook.
   A tall section that PINS to the viewport while the four phases of
   the Markadeo growth engine slide past HORIZONTALLY, driven by the
   user's vertical scroll. Reduced-motion users get a clean vertical
   stack instead.
------------------------------------------------------------------ */
const phases = [
  {
    no: '01',
    key: 'audit',
    title: 'Diagnose',
    icon: ScanSearch,
    headline: 'We crawl your postcode like Google does.',
    body: 'A deep local-visibility audit maps where you rank for every high-intent search within your catchment — Maps 3-pack, organic, and the rival tables stealing your covers.',
    chips: ['Local 3-Pack Scan', 'Competitor Gap Map', 'Postcode Heatmap'],
    metric: { value: '48hr', label: 'Full diagnostic' },
  },
  {
    no: '02',
    key: 'create',
    title: 'Create',
    icon: Clapperboard,
    headline: 'Daily foodie reels that actually sell tables.',
    body: 'Scroll-stopping sizzle reels, plating sequences and behind-the-pass content, shot and posted for you every single day. No briefs, no stress — turnkey culinary creative.',
    chips: ['Daily Reels', 'Story Sequences', 'Menu Hero Shots'],
    metric: { value: '365', label: 'Days managed' },
  },
  {
    no: '03',
    key: 'amplify',
    title: 'Amplify',
    icon: Radar,
    headline: 'Geo-fenced reach to the people near your door.',
    body: 'We push your best content into feeds within a precise radius of your venue, then climb the local search rankings so you own the moment someone gets hungry nearby.',
    chips: ['Geo-Fenced Ads', 'Local SEO Climb', 'Influencer Collabs'],
    metric: { value: '3mi', label: 'Geo-fenced radius' },
  },
  {
    no: '04',
    key: 'convert',
    title: 'Convert',
    icon: CalendarCheck,
    headline: 'Direct bookings — bypass the aggregator tax.',
    body: 'Engagement becomes reservations through automated comment-to-booking sequences and a 24/7 AI reception, so you keep the margin instead of handing it to third-party platforms.',
    chips: ['Comment-to-Book', 'AI Reception', 'Zero Commission'],
    metric: { value: '0%', label: 'Aggregator commission' },
  },
];

function PhaseCard({ phase, index }: { phase: (typeof phases)[number]; index: number }) {
  const Icon = phase.icon;
  return (
    <div className="relative w-screen h-screen flex items-center px-6 sm:px-12 lg:px-24">
      {/* Giant ghost number in the background */}
      <span className="pointer-events-none select-none absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 font-display font-black text-[40vw] sm:text-[28vw] leading-none text-white/[0.03]">
        {phase.no}
      </span>

      <div className="relative z-10 max-w-2xl">
        <div className="flex items-center gap-4 mb-6">
          <span className="flex items-center justify-center w-12 h-12 border border-brand-gold/30 bg-brand-gold/5 text-brand-gold">
            <Icon className="w-6 h-6" />
          </span>
          <div className="font-mono text-[11px] uppercase tracking-[0.35em] text-zinc-500">
            Phase {phase.no} <span className="text-brand-gold">/</span> {phase.title}
          </div>
        </div>

        <h3 className="font-display font-black uppercase tracking-tighter text-4xl sm:text-5xl lg:text-6xl leading-[0.95] text-white mb-6">
          {phase.headline}
        </h3>

        <p className="font-sans text-zinc-400 font-light text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
          {phase.body}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {phase.chips.map((c) => (
            <span
              key={c}
              className="font-mono text-[10px] uppercase tracking-widest text-zinc-300 border border-white/10 bg-white/[0.02] px-3 py-1.5"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="inline-flex items-baseline gap-3 border-t border-white/10 pt-5">
          <span className="font-display font-black text-4xl sm:text-5xl gold-gradient-text leading-none">
            {phase.metric.value}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            {phase.metric.label}
          </span>
        </div>
      </div>

      {/* Connector arrow to the next phase */}
      {index < phases.length - 1 && (
        <div className="hidden lg:flex absolute right-10 bottom-16 items-center gap-2 text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
          Next <ArrowRight className="w-4 h-4 text-brand-gold/60" />
        </div>
      )}
    </div>
  );
}

export default function ProcessShowcase() {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // 4 panels → track is 400vw wide → translate from 0 to -75% (-300vw)
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);
  const barScale = useTransform(scrollYProgress, [0, 1], [0.25, 1]);

  /* ---- Reduced-motion / no-pin fallback: vertical stack ---- */
  if (reduced) {
    return (
      <section id="growth-engine" className="relative bg-[#070707] border-y border-white/5 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center mb-12">
          <span className="text-[11px] font-mono tracking-widest text-brand-gold uppercase px-3.5 py-1.5 bg-brand-gold/10 border border-brand-gold/30 inline-block mb-4 font-bold">
            THE GROWTH ENGINE
          </span>
          <h2 className="font-display font-black uppercase tracking-tighter text-4xl sm:text-5xl text-white">
            Four phases. <span className="gold-gradient-text">One full restaurant.</span>
          </h2>
        </div>
        <div className="space-y-4">
          {phases.map((p, i) => (
            <PhaseCard key={p.key} phase={p} index={i} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="growth-engine"
      className="relative bg-[#070707] border-y border-white/5"
      style={{ height: '420vh' }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        {/* Ambient glow that lives in the pinned frame */}
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] gold-ambient-glow blur-[80px] pointer-events-none mesh-drift" />

        {/* Sticky section label */}
        <div className="absolute top-8 left-6 sm:left-12 z-20 flex items-center gap-3">
          <span className="text-[11px] font-mono tracking-[0.35em] text-brand-gold uppercase font-bold">
            The Growth Engine
          </span>
          <span className="h-px w-16 bg-gradient-to-r from-brand-gold/60 to-transparent" />
          <span className="text-[10px] font-mono tracking-widest text-zinc-600 uppercase hidden sm:inline">
            Scroll to advance
          </span>
        </div>

        {/* The horizontally moving track */}
        <motion.div style={{ x }} className="flex" >
          {phases.map((p, i) => (
            <PhaseCard key={p.key} phase={p} index={i} />
          ))}
        </motion.div>

        {/* Bottom progress rail */}
        <div className="absolute bottom-8 left-6 right-6 sm:left-12 sm:right-12 z-20">
          <div className="flex items-center justify-between mb-2 font-mono text-[9px] uppercase tracking-widest text-zinc-600">
            <span>Diagnose</span>
            <span>Create</span>
            <span>Amplify</span>
            <span>Convert</span>
          </div>
          <div className="h-px w-full bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 w-full origin-left bg-gradient-to-r from-brand-gold to-brand-gold-soft"
              style={{ scaleX: barScale }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
