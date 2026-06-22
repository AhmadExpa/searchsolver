import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Reveal, Marker } from './ScrollFX';
import { testimonials, clientBrands } from './siteData';

/* ------------------------------------------------------------------
   Testimonials — an auto-rotating quote slider with manual controls.
   Placeholder quotes (clearly generic) until real ones are added.
------------------------------------------------------------------ */
export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const go = useCallback((dir: number) => setI((p) => (p + dir + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 5500);
    return () => clearInterval(t);
  }, [paused, go]);

  const t = testimonials[i];

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-10">
          <p className="text-sm font-semibold text-brand-gold-hover uppercase tracking-[0.18em]">
            In their words
          </p>
          <h2 className="mt-2 font-display font-bold text-3xl sm:text-4xl tracking-tight text-ink">
            Brands we’ve <Marker>helped grow.</Marker>
          </h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {clientBrands.map((b) => (
              <span key={b} className="font-display font-bold text-lg sm:text-xl text-zinc-400">
                {b}
              </span>
            ))}
          </div>
        </Reveal>

        <div
          className="relative rounded-[2rem] bg-white border border-line shadow-soft-lg p-8 sm:p-14 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <span className="absolute -top-2 left-6 sm:left-10 text-brand-gold/20">
            <Quote className="w-20 h-20 sm:w-28 sm:h-28 fill-current" />
          </span>

          <div className="relative min-h-[180px] sm:min-h-[160px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="text-center w-full"
              >
                <p className="font-display text-xl sm:text-2xl lg:text-[1.7rem] leading-snug text-ink tracking-tight">
                  “{t.quote}”
                </p>
                <footer className="mt-6">
                  <span className="block font-semibold text-ink">{t.name}</span>
                  <span className="block text-sm text-zinc-500">{t.role}</span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-zinc-600 hover:text-ink hover:border-brand-gold/50 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    idx === i ? 'w-7 bg-brand-gold' : 'w-2 bg-line hover:bg-zinc-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-zinc-600 hover:text-ink hover:border-brand-gold/50 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
