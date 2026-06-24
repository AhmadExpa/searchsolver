import { type ReactNode } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { useRef } from 'react';
import ParticleField from './ParticleField';

/* ------------------------------------------------------------------
   VideoHero — full-bleed looping muted stock video with a readable
   scrim, parallax headline and a soft scroll cue. Prop-driven so it
   serves both the homepage and lighter page headers.

   Falls back to a ken-burns still under reduced-motion or if the
   video fails (poster always shown beneath).
------------------------------------------------------------------ */
export default function VideoHero({
  videoSrc,
  poster,
  eyebrow,
  title,
  subtitle,
  children,
  height = 'full',
  align = 'center',
}: {
  videoSrc: string;
  poster: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  height?: 'full' | 'tall' | 'short';
  align?: 'center' | 'left';
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const heights = {
    full: 'min-h-[92vh]',
    tall: 'min-h-[70vh]',
    short: 'min-h-[52vh]',
  };
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <section
      ref={ref}
      className={`relative isolate overflow-hidden ${heights[height]} flex ${alignment} justify-center`}
    >
      {/* Media layer */}
      <div className="absolute inset-0 -z-10">
        <img
          src={poster}
          alt=""
          aria-hidden
          referrerPolicy="no-referrer"
          className={`absolute inset-0 w-full h-full object-cover ${reduced ? 'ken-burns' : ''}`}
        />
        {!reduced && (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={poster}
            preload="metadata"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}
        <ParticleField className="absolute inset-0 opacity-70" />
        <div className="absolute inset-0 video-scrim" />
      </div>

      {/* Content */}
      <motion.div
        style={reduced ? undefined : { y, opacity }}
        className={`relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 flex flex-col ${align === 'center' ? 'items-center' : 'items-start'}`}
      >
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            {eyebrow}
          </motion.span>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-6 font-display font-bold tracking-tight text-white text-4xl sm:text-6xl lg:text-7xl leading-[1.02] drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={`mt-6 text-lg sm:text-xl text-zinc-100/90 leading-relaxed ${align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-9"
          >
            {children}
          </motion.div>
        )}
      </motion.div>

      {/* Scroll cue */}
      {height === 'full' && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="w-5 h-8 rounded-full border border-white/40 flex justify-center pt-1.5">
            <span className="w-1 h-1.5 rounded-full bg-brand-gold animate-scroll-cue" />
          </span>
        </div>
      )}
    </section>
  );
}
