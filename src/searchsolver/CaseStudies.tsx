import { motion } from 'motion/react';
import {
  ScanSearch, Clapperboard, TrendingUp, ArrowRight, Check,
  Eye, Repeat, MapPin, Lock, type LucideIcon,
} from 'lucide-react';
import { Reveal, Marker } from './ScrollFX';

/* ------------------------------------------------------------------
   The Growth Playbook — honest, transparent positioning for a new
   agency with no published client numbers yet. Everything here is
   clearly framed as THE PLAN WE RUN, never as a past client result.
------------------------------------------------------------------ */
const playbook: {
  no: string; window: string; title: string; icon: LucideIcon;
  summary: string; points: string[]; image: string; imageAlt: string;
}[] = [
  {
    no: '01',
    window: 'Weeks 1–2',
    title: 'Foundation',
    icon: ScanSearch,
    summary: 'We audit your local visibility, set up tracking, and build a content + search plan around your actual menu and catchment.',
    points: ['Local-visibility & competitor audit', 'Google Business Profile cleanup', 'Content calendar + shoot plan'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Restaurant interior during a planning and audit phase.',
  },
  {
    no: '02',
    window: 'Weeks 3–6',
    title: 'Momentum',
    icon: Clapperboard,
    summary: 'The daily engine switches on — reels, stories, community replies, and geo-fenced campaigns pointed at diners near your door.',
    points: ['Daily reels & stories live', 'Community management running', 'Geo-fenced local ad campaigns'],
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'A spread of beautifully styled dishes for daily content.',
  },
  {
    no: '03',
    window: 'Weeks 7–12',
    title: 'Compounding',
    icon: TrendingUp,
    summary: 'We tighten what works, climb local rankings, and convert engagement into direct bookings — reported transparently every month.',
    points: ['Local-search ranking climb', 'Comment-to-booking flows', 'Plain-English monthly reporting'],
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'An inviting set restaurant table ready for guests.',
  },
];

const principles: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Eye, title: 'Transparent', body: 'Real dashboards and plain-English reports. We never inflate a number to look good.' },
  { icon: Repeat, title: 'Daily execution', body: 'Consistency beats bursts. Your channels are worked every day, not once a month.' },
  { icon: MapPin, title: 'UK-local', body: 'Built around how British diners actually search and choose where to eat.' },
  { icon: Lock, title: 'No lock-in', body: 'Rolling monthly. Stay because it works, not because a contract traps you.' },
];

export default function CaseStudies({ onOpenConsole }: { onOpenConsole: (tab: 'calculator' | 'auditor') => void }) {
  return (
    <section id="case-studies" className="py-16 sm:py-24 bg-white border-y border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — honest framing */}
        <Reveal direction="up" className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-brand-gold-hover uppercase tracking-wider">Transparent by design</p>
          <h2 className="mt-2 font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink">
            The plan we'd run for <Marker>your restaurant.</Marker>
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            We're a new, focused agency — so instead of dressing up other people's numbers, here's
            exactly how a first 90 days with Markadeo works. No smoke, no invented case studies.
          </p>
        </Reveal>

        {/* 90-day playbook timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {playbook.map((phase, i) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={phase.no}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-70px' }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: 'easeOut' }}
                className="group rounded-[1.5rem] bg-canvas border border-line shadow-soft lift overflow-hidden flex flex-col"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={phase.image}
                    alt={phase.imageAlt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 bg-white/90 backdrop-blur rounded-full px-3 py-1.5 shadow-soft">
                    <span className="text-brand-gold-hover"><Icon className="w-4 h-4" /></span>
                    <span className="text-xs font-semibold text-ink">{phase.window}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1 bg-white">
                  <h3 className="font-display font-bold text-xl text-ink tracking-tight">{phase.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{phase.summary}</p>
                  <ul className="space-y-2 mt-auto pt-4">
                    {phase.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-zinc-700">
                        <Check className="w-4 h-4 text-brand-gold-hover mt-0.5 flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="text-xs text-zinc-400 text-center mt-5 mb-16">
          Illustrative engagement timeline — the plan we run, not a past client result.
        </p>

        {/* Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {principles.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} direction="up" delay={i * 0.08} className="rounded-2xl bg-canvas border border-line p-6 shadow-soft">
                <span className="w-10 h-10 rounded-xl bg-brand-gold-wash flex items-center justify-center text-brand-gold-hover">
                  <Icon className="w-5 h-5" />
                </span>
                <h4 className="mt-4 font-display font-bold text-base text-ink">{p.title}</h4>
                <p className="mt-1.5 text-sm text-zinc-600 leading-relaxed">{p.body}</p>
              </Reveal>
            );
          })}
        </div>

        {/* Founding-client offer band */}
        <Reveal direction="up" className="relative overflow-hidden rounded-[1.5rem] bg-ink text-white p-8 sm:p-10">
          <div className="absolute -top-16 -right-10 w-72 h-72 rounded-full bg-brand-gold/20 blur-[100px] pointer-events-none" aria-hidden />
          <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold text-brand-gold uppercase tracking-wider">Founding client programme</span>
              <h3 className="mt-2 font-display font-bold text-2xl sm:text-3xl tracking-tight">Be one of our first restaurants.</h3>
              <p className="mt-3 text-zinc-300 leading-relaxed">
                We're taking on a small first cohort of UK venues — with priority onboarding, transparent
                rolling-monthly pricing, and direct access to the people doing the work. In exchange, we go
                all-in to make you a case study worth talking about.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Priority onboarding', 'Rolling monthly · cancel anytime', 'Direct founder access', 'Honest reporting'].map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-200 bg-white/10 rounded-full px-3 py-1.5">
                    <Check className="w-3.5 h-3.5 text-brand-gold" />
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
                className="group w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-hover text-ink font-semibold px-7 py-4 rounded-full transition-colors cursor-pointer shadow-gold"
              >
                Run my free growth audit
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </motion.button>
              <p className="text-xs text-zinc-400 text-center mt-3">See your gaps before you commit to anything.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
