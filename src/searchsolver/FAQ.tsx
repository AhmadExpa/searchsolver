import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Plus, HelpCircle, MessageCircle } from 'lucide-react';
import Tilt from './Tilt';
import { Reveal } from './ScrollFX';
import { faqs, waLink, DEFAULT_WA_MESSAGE } from './siteData';

/* ------------------------------------------------------------------
   FAQ — interactive 3D element (left) + accordion (right).
   The left panel uses the Tilt wrapper for a mouse-driven 3D lean,
   layered cards for depth, and floating accents — no 3D library.
------------------------------------------------------------------ */
export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-24 sm:py-32 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* ---- Left: interactive 3D element ---- */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal direction="right">
              <Tilt className="relative" max={14}>
                <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
                  {/* Offset depth layer */}
                  <div className="absolute inset-0 translate-x-4 translate-y-5 rounded-[2.5rem] bg-brand-yellow/70" />

                  {/* Main 3D panel */}
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                    className="relative rounded-[2.5rem] bg-brand-blue text-white p-10 sm:p-12 shadow-2xl overflow-hidden"
                  >
                    <div className="absolute -top-16 -right-12 w-52 h-52 rounded-full bg-white/10 blur-2xl pointer-events-none" />

                    <span className="relative inline-flex w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm items-center justify-center text-brand-yellow">
                      <HelpCircle className="w-8 h-8" />
                    </span>

                    <p className="relative mt-8 font-display font-black text-[6rem] sm:text-[7rem] leading-none text-white/90 select-none">
                      ?
                    </p>

                    <h3 className="relative mt-2 font-display font-black text-2xl sm:text-3xl uppercase tracking-wide leading-tight">
                      Still Got Questions?
                    </h3>
                    <p className="relative mt-3 text-sm text-blue-100/90 leading-relaxed font-medium">
                      We're happy to help. Reach out and we'll get back to you fast.
                    </p>

                    <a
                      href={waLink(DEFAULT_WA_MESSAGE)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative mt-7 inline-flex items-center gap-2 bg-brand-yellow hover:brightness-95 text-black font-bold tracking-widest text-xs uppercase px-6 py-3.5 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Ask Us Directly
                    </a>
                  </motion.div>

                  {/* Floating accent chip */}
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                    className="absolute -bottom-5 -left-5 w-16 h-16 rounded-2xl bg-brand-teal shadow-xl rotate-12 flex items-center justify-center"
                    style={{ transform: 'translateZ(40px)' }}
                  >
                    <span className="font-display font-black text-white text-2xl">!</span>
                  </motion.div>
                </div>
              </Tilt>
            </Reveal>
          </div>

          {/* ---- Right: accordion ---- */}
          <div className="lg:col-span-7">
            <Reveal className="mb-10">
              <span className="text-xs font-bold tracking-[0.2em] text-zinc-500 uppercase mb-3 block">
                Frequently Asked Questions
              </span>
              <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight text-ink uppercase leading-[1.05]">
                Got Questions? We've Got Answers.
              </h2>
            </Reveal>

            <div className="divide-y divide-zinc-200 border-t border-b border-zinc-200">
              {faqs.slice(0, 6).map((item, idx) => {
                const isOpen = open === idx;
                return (
                  <div key={item.q}>
                    <button
                      onClick={() => setOpen(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between gap-4 py-5 text-left group cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display font-bold text-base sm:text-lg text-ink uppercase tracking-wide group-hover:text-brand-blue transition-colors">
                        {item.q}
                      </span>
                      <Plus
                        className={`w-5 h-5 flex-shrink-0 text-brand-blue transition-transform duration-300 ${
                          isOpen ? 'rotate-45' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 pr-8 text-sm sm:text-base text-zinc-600 leading-relaxed font-medium">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
