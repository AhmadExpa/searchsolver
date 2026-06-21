import { motion } from 'motion/react';
import {
  Instagram, MapPin, Megaphone, CalendarCheck, PhoneCall, ArrowRight, Check,
  type LucideIcon,
} from 'lucide-react';
import { servicesData } from './servicesData';
import { Reveal, Marker } from './ScrollFX';

const iconMap: Record<string, LucideIcon> = {
  social: Instagram,
  'local-seo': MapPin,
  'campaign-ads': Megaphone,
  'booking-cro': CalendarCheck,
  'ai-voice-agent': PhoneCall,
};

export default function Services({ onOpenConsole }: { onOpenConsole: (tab: 'calculator' | 'auditor') => void }) {
  const [featured, ...rest] = servicesData;
  const FeaturedIcon = iconMap[featured.id];

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-y border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal direction="up" className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-brand-gold-hover uppercase tracking-wider">What we run for you</p>
          <h2 className="mt-2 font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink">
            One team for your whole <Marker>growth engine.</Marker>
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            From daily content to local search, paid ads, bookings and an always-on phone line — every
            channel that fills tables, managed in one place.
          </p>
        </Reveal>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 sm:gap-5">
          {/* Featured — large image card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="lg:col-span-3 lg:row-span-2 group relative rounded-[1.5rem] overflow-hidden border border-line bg-canvas shadow-soft lift flex flex-col"
          >
            <div className="relative h-52 sm:h-64 overflow-hidden">
              <img
                src={featured.image}
                alt={featured.imageAlt}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center text-brand-gold-hover shadow-soft">
                {FeaturedIcon && <FeaturedIcon className="w-5 h-5" />}
              </div>
            </div>
            <div className="p-6 sm:p-7 flex flex-col flex-1 bg-white">
              <h3 className="font-display font-bold text-xl text-ink tracking-tight">{featured.title}</h3>
              <p className="mt-2 text-zinc-600 leading-relaxed">{featured.description}</p>
              <ul className="mt-5 grid sm:grid-cols-2 gap-x-5 gap-y-2.5">
                {featured.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-zinc-700">
                    <Check className="w-4 h-4 text-brand-gold-hover mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-line flex items-center gap-2 text-sm font-medium text-ink">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                {featured.whatYouGet}
              </div>
            </div>
          </motion.div>

          {/* Remaining services — compact cards */}
          {rest.map((s, i) => {
            const Icon = iconMap[s.id];
            const dark = i === 0; // one dark card for bento contrast
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.05 * (i + 1), ease: 'easeOut' }}
                className={`lg:col-span-3 rounded-[1.5rem] border p-6 sm:p-7 shadow-soft lift ${
                  dark ? 'bg-ink text-white border-ink' : 'bg-white border-line'
                }`}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      dark ? 'bg-brand-gold text-ink' : 'bg-brand-gold-wash text-brand-gold-hover'
                    }`}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                  </span>
                  <div className="min-w-0">
                    <h3 className={`font-display font-bold text-lg tracking-tight ${dark ? 'text-white' : 'text-ink'}`}>
                      {s.title}
                    </h3>
                    <p className={`mt-2 text-sm leading-relaxed ${dark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                      {s.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.features.slice(0, 3).map((f) => (
                        <span
                          key={f}
                          className={`text-xs font-medium rounded-full px-3 py-1 ${
                            dark ? 'bg-white/10 text-zinc-200' : 'bg-canvas text-zinc-600 border border-line'
                          }`}
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <Reveal direction="up" className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-[1.5rem] bg-brand-gold-wash border border-brand-gold/30 p-6 sm:p-8">
          <div>
            <h3 className="font-display font-bold text-xl text-ink">Not sure where you're losing covers?</h3>
            <p className="mt-1 text-zinc-600">Run a free AI audit and see your exact gaps in 5 minutes.</p>
          </div>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onOpenConsole('auditor')}
            className="group inline-flex items-center gap-2 bg-ink text-white font-semibold px-6 py-3.5 rounded-full transition-colors hover:bg-black cursor-pointer whitespace-nowrap shadow-soft"
          >
            Run free audit
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </motion.button>
        </Reveal>
      </div>
    </section>
  );
}
