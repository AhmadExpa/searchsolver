import { motion } from 'motion/react';
import { ArrowRight, Star, Instagram, MapPin, TrendingUp, Sparkles } from 'lucide-react';
import { CountUp, Stagger, RevealItem } from './ScrollFX';

/* ------------------------------------------------------------------
   Hero — light, modern, bento-led.
   A confident headline on the left; a cluster of rounded "product"
   cards on the right that preview what Markadeo actually does.
------------------------------------------------------------------ */
export default function Hero({ onOpenConsole }: { onOpenConsole: (tab: 'calculator' | 'auditor') => void }) {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20"
    >
      {/* Soft ambient blobs */}
      <div className="absolute -top-24 right-0 w-[480px] h-[480px] rounded-full bg-brand-gold/20 blur-[120px] pointer-events-none blob-drift" aria-hidden />
      <div className="absolute top-40 -left-32 w-[420px] h-[420px] rounded-full bg-brand-gold/10 blur-[120px] pointer-events-none" aria-hidden />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-6"
          >
            <span className="inline-flex items-center gap-2 bg-white border border-line rounded-full pl-1.5 pr-3.5 py-1.5 shadow-soft text-xs font-medium text-zinc-600">
              <span className="inline-flex items-center gap-0.5 bg-brand-gold-wash text-brand-gold-hover rounded-full px-2 py-0.5">
                <Star className="w-3 h-3 fill-current" />
                UK
              </span>
              Restaurant social &amp; local search, done for you
            </span>

            <h1 className="mt-6 font-display font-bold tracking-tight text-5xl sm:text-6xl lg:text-[4.25rem] leading-[1.02] text-ink">
              Fill more tables,
              <br />
              <span className="ink-draw">every single day.</span>
            </h1>

            <p className="mt-6 text-lg text-zinc-600 leading-relaxed max-w-xl">
              We run your daily social media, foodie reels and local search — so independent restaurants
              and high-street brands stay fully booked without lifting a finger. Fully managed, fully
              transparent.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenConsole('auditor')}
                className="group inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-hover text-ink font-semibold px-6 py-4 rounded-full transition-colors cursor-pointer shadow-gold"
                id="hero-cta-audit"
              >
                Run my free growth audit
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </motion.button>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenConsole('calculator')}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-canvas border border-line text-ink font-semibold px-6 py-4 rounded-full transition-colors cursor-pointer shadow-soft"
                id="hero-cta-roi"
              >
                Estimate revenue lift
              </motion.button>
            </div>

            {/* Honest trust row */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500">
              {['Daily managed content', 'Local search & maps', 'Rolling monthly · no lock-in'].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — bento preview cluster */}
          <Stagger amount={0.1} className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              {/* Big image card */}
              <RevealItem className="col-span-2 relative rounded-[1.5rem] overflow-hidden border border-line shadow-soft-lg bg-paper group">
                <img
                  src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80"
                  srcSet="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=70 600w, https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80 900w"
                  sizes="(max-width: 1023px) 92vw, 44vw"
                  alt="A beautifully plated, dramatically lit dish — the kind of daily content Markadeo creates for UK restaurants."
                  loading="eager"
                  fetchPriority="high"
                  referrerPolicy="no-referrer"
                  className="w-full h-56 sm:h-64 object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-white/90 backdrop-blur rounded-full px-3 py-1.5 text-xs font-semibold text-ink shadow-soft">
                  <Sparkles className="w-3.5 h-3.5 text-brand-gold-hover" />
                  Content we shoot &amp; post for you
                </div>
              </RevealItem>

              {/* Small stat card A */}
              <RevealItem className="rounded-[1.25rem] bg-paper border border-line p-5 shadow-soft lift">
                <div className="w-10 h-10 rounded-xl bg-brand-gold-wash flex items-center justify-center text-brand-gold-hover">
                  <Instagram className="w-5 h-5" />
                </div>
                <p className="mt-4 text-2xl font-display font-bold text-ink">Daily</p>
                <p className="text-sm text-zinc-500">reels, stories &amp; posts</p>
              </RevealItem>

              {/* Small stat card B */}
              <RevealItem className="rounded-[1.25rem] bg-ink text-white p-5 shadow-soft lift">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-gold">
                  <MapPin className="w-5 h-5" />
                </div>
                <p className="mt-4 text-2xl font-display font-bold">Top 3</p>
                <p className="text-sm text-zinc-400">local map ranking goal</p>
              </RevealItem>

              {/* Wide ROI preview card */}
              <RevealItem className="col-span-2 rounded-[1.25rem] bg-paper border border-line p-5 shadow-soft lift">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-zinc-500 flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-brand-gold-hover" />
                      Projected monthly revenue lift
                    </p>
                    <p className="mt-1 text-3xl font-display font-bold text-ink">
                      <CountUp to={12400} prefix="+£" duration={1800} />
                      <span className="text-base font-medium text-zinc-400">/mo</span>
                    </p>
                  </div>
                  <button
                    onClick={() => onOpenConsole('calculator')}
                    className="group text-sm font-semibold text-brand-gold-hover hover:text-ink transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Try it <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
                  </button>
                </div>
                <div className="mt-4 h-2 rounded-full bg-line overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '78%' }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 1.1, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="h-full rounded-full bg-gradient-to-r from-brand-gold to-brand-gold-hover"
                  />
                </div>
                <p className="mt-2 text-[11px] text-zinc-400">
                  Illustrative estimate using transparent UK benchmarks — not a guaranteed result.
                </p>
              </RevealItem>
            </div>
          </Stagger>
        </div>
      </div>
    </section>
  );
}
