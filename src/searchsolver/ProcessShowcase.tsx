import { motion } from 'motion/react';
import { ScanSearch, Clapperboard, Radar, CalendarCheck, type LucideIcon } from 'lucide-react';
import { Reveal, Marker } from './ScrollFX';

/* ------------------------------------------------------------------
   How it works — a clean, light four-step "growth engine".
   Numbered bento cards, no scroll-hijacking. Reads perfectly on
   mobile and desktop alike.
------------------------------------------------------------------ */
const phases: {
  no: string;
  title: string;
  icon: LucideIcon;
  headline: string;
  body: string;
  chips: string[];
  metric: { value: string; label: string };
}[] = [
  {
    no: '01',
    title: 'Diagnose',
    icon: ScanSearch,
    headline: 'We crawl your postcode like Google does.',
    body: 'A deep local-visibility audit maps where you rank for every high-intent search in your catchment — Maps 3-pack, organic, and the rivals stealing your covers.',
    chips: ['Local 3-pack scan', 'Competitor gap map', 'Postcode heatmap'],
    metric: { value: '48hr', label: 'Full diagnostic' },
  },
  {
    no: '02',
    title: 'Create',
    icon: Clapperboard,
    headline: 'Daily foodie reels that actually sell tables.',
    body: 'Scroll-stopping sizzle reels, plating sequences and behind-the-pass content, shot and posted for you every day. No briefs, no stress — turnkey culinary creative.',
    chips: ['Daily reels', 'Story sequences', 'Menu hero shots'],
    metric: { value: '365', label: 'Days managed' },
  },
  {
    no: '03',
    title: 'Amplify',
    icon: Radar,
    headline: 'Geo-fenced reach to the people near your door.',
    body: 'We push your best content into feeds within a precise radius of your venue, then climb local search so you own the moment someone nearby gets hungry.',
    chips: ['Geo-fenced ads', 'Local SEO climb', 'Influencer collabs'],
    metric: { value: '3mi', label: 'Geo-fenced radius' },
  },
  {
    no: '04',
    title: 'Convert',
    icon: CalendarCheck,
    headline: 'Direct bookings — bypass the aggregator tax.',
    body: 'Engagement becomes reservations through comment-to-booking flows and a 24/7 AI reception, so you keep the margin instead of handing it to third parties.',
    chips: ['Comment-to-book', 'AI reception', 'Zero commission'],
    metric: { value: '0%', label: 'Aggregator commission' },
  },
];

export default function ProcessShowcase() {
  return (
    <section id="growth-engine" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-brand-gold-hover uppercase tracking-wider">How it works</p>
          <h2 className="mt-2 font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink">
            Four phases. <Marker>One full restaurant.</Marker>
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            A simple, repeatable engine that turns hungry local searchers into booked tables — running
            every single day on your behalf.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {phases.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.no}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                className="relative rounded-[1.5rem] bg-white border border-line p-6 shadow-soft lift flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <span className="w-11 h-11 rounded-xl bg-brand-gold-wash flex items-center justify-center text-brand-gold-hover">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="font-display font-bold text-4xl text-line select-none leading-none">{p.no}</span>
                </div>

                <h3 className="mt-5 font-display font-bold text-lg text-ink tracking-tight">{p.title}</h3>
                <p className="mt-1 text-sm font-medium text-ink/80">{p.headline}</p>
                <p className="mt-3 text-sm text-zinc-600 leading-relaxed flex-1">{p.body}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.chips.map((c) => (
                    <span key={c} className="text-[11px] font-medium text-zinc-600 bg-canvas border border-line rounded-full px-2.5 py-1">
                      {c}
                    </span>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-line flex items-baseline gap-2">
                  <span className="font-display font-bold text-2xl gold-gradient-text leading-none">{p.metric.value}</span>
                  <span className="text-xs text-zinc-500">{p.metric.label}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
