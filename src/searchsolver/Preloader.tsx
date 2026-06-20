import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

/* ------------------------------------------------------------------
   Preloader — the cinematic "first two seconds".
   A branded reticle, a 0→100 counter, a filling hairline, then a
   black curtain splits and lifts to reveal the site beneath.
------------------------------------------------------------------ */
export default function Preloader({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  // Lock scroll while loading
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Count up, then trigger the reveal
  useEffect(() => {
    if (reduced) {
      // Skip the show for reduced-motion users
      const t = setTimeout(onDone, 200);
      return () => clearTimeout(t);
    }
    const duration = 1700;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 2.2);
      setProgress(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setExiting(true), 280);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced, onDone]);

  if (reduced) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[200] pointer-events-none"
      initial={false}
      onAnimationComplete={() => {
        if (exiting) onDone();
      }}
    >
      {/* Two-panel curtain that splits vertically on exit */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1/2 bg-[#070707] border-b border-brand-gold/10"
        animate={exiting ? { y: '-100%' } : { y: 0 }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: exiting ? 0.1 : 0 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#070707] border-t border-brand-gold/10"
        animate={exiting ? { y: '100%' } : { y: 0 }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: exiting ? 0.1 : 0 }}
      />

      {/* Centre content fades/scales out */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center"
        animate={exiting ? { opacity: 0, scale: 1.05 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {/* Brand mark — reticle frame with a drawing 'M' */}
        <div className="relative w-20 h-20 mb-6">
          <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-brand-gold" />
          <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-brand-gold" />
          <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-brand-gold" />
          <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-brand-gold" />
          <svg viewBox="0 0 24 24" className="w-full h-full p-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <motion.path
              d="M4 19 V5.5 L12 13 L20 5.5 V19"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
            />
            <circle cx="20" cy="5.5" r="1.9" fill="#F5B82E" stroke="none" />
          </svg>
        </div>

        <span className="font-display font-black uppercase tracking-[0.3em] text-white text-sm mb-5">
          Marka<span className="text-brand-gold">deo</span>
        </span>

        {/* Filling hairline + counter */}
        <div className="w-48 h-px bg-white/10 relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-brand-gold to-brand-gold-soft"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-3 flex items-center justify-between w-48 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
          <span>Calibrating</span>
          <span className="text-brand-gold tabular-nums">{progress}%</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
