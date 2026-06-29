import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Reveal, Marker } from './ScrollFX';
import { services } from './siteData';
import { iconMap } from './icons';

/* ------------------------------------------------------------------
   ServiceSlider — horizontal, numbered service carousel (the Trifid
   "6 numbered tiles" pattern). Native scroll-snap for buttery touch
   scrolling, with arrow controls that page by one card on desktop.
------------------------------------------------------------------ */
export default function ServiceSlider() {
  const trackRef = useRef<HTMLDivElement>(null);

  const page = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-card]');
    const amount = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: amount * dir, behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold text-brand-gold-hover uppercase tracking-[0.18em]">
              What we do
            </p>
            <h2 className="mt-2 font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink">
              One studio for your whole <Marker>content engine.</Marker>
            </h2>
            <p className="mt-4 text-lg text-zinc-600">
              From the first idea to the final post — creative, production, social and build,
              all under one roof.
            </p>
          </Reveal>

          <div className="flex items-center gap-3">
            <button
              onClick={() => page(-1)}
              aria-label="Previous services"
              className="w-12 h-12 rounded-full border border-line bg-white flex items-center justify-center text-zinc-600 hover:text-ink hover:border-brand-gold/60 transition-colors cursor-pointer shadow-soft"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => page(1)}
              aria-label="Next services"
              className="w-12 h-12 rounded-full border border-line bg-white flex items-center justify-center text-zinc-600 hover:text-ink hover:border-brand-gold/60 transition-colors cursor-pointer shadow-soft"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Track */}
      <div
        ref={trackRef}
        className="slider-x flex gap-5 overflow-x-auto px-4 sm:px-6 lg:px-[max(2rem,calc((100vw-80rem)/2+2rem))] pb-4"
      >
        {services.map((s, i) => {
          const Icon = iconMap[s.icon];
          return (
            <motion.article
              key={s.id}
              data-card
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="snap-card group relative flex-shrink-0 w-[80vw] sm:w-[380px] rounded-[1.75rem] overflow-hidden border border-line bg-white shadow-soft lift"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.imageAlt}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                <span className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center text-brand-gold-hover shadow-soft">
                  {Icon && <Icon className="w-5 h-5" />}
                </span>
                <span className="absolute bottom-3 right-4 font-display font-black text-5xl text-white/85 select-none leading-none">
                  {s.no}
                </span>
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="font-display font-bold text-xl text-ink tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{s.short}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.features.slice(0, 3).map((f) => (
                    <span key={f} className="text-[11px] font-medium text-zinc-600 bg-canvas border border-line rounded-full px-2.5 py-1">
                      {f}
                    </span>
                  ))}
                </div>
                <Link
                  to="/services"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-ink hover:text-brand-gold-hover transition-colors"
                >
                  Explore service
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
