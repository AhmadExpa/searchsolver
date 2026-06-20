import { motion } from 'motion/react';
import {
  ScanSearch, Clapperboard, TrendingUp, ArrowRight, Check,
  Eye, Repeat, MapPin, Lock,
} from 'lucide-react';
import { Reveal } from './ScrollFX';

/* ------------------------------------------------------------------
   The Growth Playbook — honest, transparent positioning for a new
   agency with no published client numbers yet. Everything here is
   clearly framed as THE PLAN WE RUN, never as a past client result.
------------------------------------------------------------------ */
const playbook = [
  {
    no: '01',
    window: 'Weeks 1–2',
    title: 'Foundation',
    icon: ScanSearch,
    summary: 'We audit your local visibility, set up tracking, and build a content + search plan around your actual menu and catchment.',
    points: ['Local-visibility & competitor audit', 'Google Business Profile cleanup', 'Content calendar + shoot plan'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Restaurant interior during a planning and audit phase.',
  },
  {
    no: '02',
    window: 'Weeks 3–6',
    title: 'Momentum',
    icon: Clapperboard,
    summary: 'The daily engine switches on — reels, stories, community replies, and geo-fenced campaigns pointed at diners near your door.',
    points: ['Daily reels & stories live', 'Community management running', 'Geo-fenced local ad campaigns'],
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'A spread of beautifully styled dishes for daily content.',
  },
  {
    no: '03',
    window: 'Weeks 7–12',
    title: 'Compounding',
    icon: TrendingUp,
    summary: 'We tighten what works, climb local rankings, and convert engagement into direct bookings — reported to you transparently every month.',
    points: ['Local-search ranking climb', 'Comment-to-booking flows', 'Plain-English monthly reporting'],
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'An inviting set restaurant table ready for guests.',
  },
];

const principles = [
  { icon: Eye, title: 'Transparent', body: 'Real dashboards and plain-English reports. We never inflate a number to look good.' },
  { icon: Repeat, title: 'Daily execution', body: 'Consistency beats bursts. Your channels are worked every day, not once a month.' },
  { icon: MapPin, title: 'UK-local', body: 'Built around how British diners actually search and choose where to eat.' },
  { icon: Lock, title: 'No lock-in', body: 'Rolling monthly. Stay because it works, not because a contract traps you.' },
];

export default function CaseStudies({ onOpenConsole }: { onOpenConsole: (tab: 'calculator' | 'auditor') => void }) {
  return (
    <section id="case-studies" className="py-24 bg-brand-dark relative border-b border-zinc-900 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none gold-ambient-glow filter blur-[150px] opacity-15 bottom-0 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header — honest framing */}
        <Reveal direction="up" className="max-w-2xl text-left mb-16">
          <span className="text-[11px] font-mono tracking-widest text-[#F5B82E] uppercase px-3.5 py-1.5 bg-brand-gold/10 border border-[#F5B82E]/30 rounded-none inline-block mb-3 font-bold">
            TRANSPARENT BY DESIGN
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white mb-4 uppercase tracking-tighter">
            The plan we'd run for <span className="gold-shimmer">your restaurant.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400 font-light">
            We're a new, focused agency — so instead of dressing up other people's numbers, here's exactly how a first 90 days with Markadeo works. No smoke, no invented case studies.
          </p>
        </Reveal>

        {/* 90-day playbook timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {playbook.map((phase, i) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={phase.no}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
                className="group relative bg-[#141414] border border-white/5 hover:border-brand-gold/40 transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden"
              >
                {/* Phase image */}
                <div className="relative h-40 overflow-hidden border-b border-white/5">
                  <img
                    src={phase.image}
                    alt={phase.imageAlt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-65 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out select-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />
                  <span className="absolute top-3 right-3 font-display font-black text-5xl text-white/10 leading-none select-none">
                    {phase.no}
                  </span>
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 border border-brand-gold/30 bg-black/50 text-brand-gold">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-brand-gold font-bold">
                      {phase.window}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-black text-xl text-white uppercase tracking-tight mb-2 group-hover:text-brand-gold transition-colors">
                    {phase.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-4">
                    {phase.summary}
                  </p>
                  <ul className="space-y-2 mt-auto">
                    {phase.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-[11px] font-mono uppercase tracking-wide text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-brand-gold mt-0.5 flex-shrink-0" />
                        <span className="leading-snug">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-600 text-center mb-16">
          Illustrative engagement timeline — the plan we run, not a past client result
        </p>

        {/* Why Markadeo — principles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {principles.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} direction="up" delay={i * 0.08} className="bg-[#0D0D0D] border border-white/5 p-6">
                <Icon className="w-6 h-6 text-brand-gold mb-3" />
                <h4 className="font-display font-black text-sm text-white uppercase tracking-wide mb-1.5">{p.title}</h4>
                <p className="text-[11px] text-zinc-400 font-sans font-light leading-relaxed">{p.body}</p>
              </Reveal>
            );
          })}
        </div>

        {/* Founding-client offer band — turns "new agency" into a credible signal */}
        <Reveal direction="up" className="relative overflow-hidden border border-brand-gold/25 bg-gradient-to-br from-[#181206] via-[#141414] to-[#0A0A0A] p-8 sm:p-10">
          <div className="absolute top-0 left-0 w-10 h-px bg-brand-gold" />
          <div className="absolute top-0 left-0 w-px h-10 bg-brand-gold" />
          <div className="absolute bottom-0 right-0 w-10 h-px bg-brand-gold" />
          <div className="absolute bottom-0 right-0 w-px h-10 bg-brand-gold" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl text-left">
              <span className="text-[10px] font-mono tracking-widest text-brand-gold uppercase font-bold block mb-2">
                FOUNDING CLIENT PROGRAMME
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-3">
                Be one of our first restaurants.
              </h3>
              <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed mb-4">
                We're taking on a small first cohort of UK venues — with priority onboarding, transparent rolling-monthly pricing, and direct access to the people doing the work. In exchange, we go all-in to make you a case study worth talking about.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Priority onboarding', 'Rolling monthly · cancel anytime', 'Direct founder access', 'Honest reporting'].map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wide text-zinc-300 border border-white/10 bg-white/[0.02] px-2.5 py-1.5">
                    <Check className="w-3 h-3 text-brand-gold" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-shrink-0 w-full lg:w-auto">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenConsole('auditor')}
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-gold hover:bg-[#E0A516] text-black font-display font-black text-xs uppercase tracking-widest px-8 py-4 rounded-none shadow-[0_8px_30px_rgba(245,184,46,0.25)] transition-colors cursor-pointer"
              >
                Run My Free Growth Audit
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 text-center mt-3">
                See your gaps before you commit to anything
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
