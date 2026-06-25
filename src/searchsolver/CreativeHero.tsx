import { type ReactNode, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function CreativeHero({
  eyebrow,
  title,
  subtitle,
  children,
  rightElement,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: ReactNode;
  children?: ReactNode;
  rightElement?: ReactNode;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const copyY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const motionStyle = (style: object) => (reduced ? undefined : style);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-screen overflow-hidden bg-black text-white flex items-center pt-24 pb-16"
    >
      {/* Background Studio Camera Image */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1920&q=80"
          alt="Professional production camera in studio"
          style={motionStyle({ y: bgY, scale: bgScale })}
          className="absolute inset-0 h-[110%] w-full object-cover opacity-35"
        />
        {/* Scrim overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-12 md:mt-20">
        <motion.div
          style={motionStyle({ y: copyY, opacity: copyOpacity })}
          className="grid gap-12 lg:grid-cols-12 items-center"
        >
          {/* Left Column: Eyebrow + Large Title + CTA */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-sm font-semibold tracking-[0.25em] text-brand-yellow uppercase mb-6 pl-1 border-l-2 border-brand-yellow">
              {eyebrow}
            </span>

            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-white uppercase select-none max-w-2xl">
              {title}
            </h1>

            {/* Subtitle descriptions for extra context */}
            <p className="mt-8 text-sm sm:text-base text-zinc-300 max-w-xl leading-relaxed font-medium">
              {subtitle}
            </p>

            {children && (
              <div className="mt-10">
                {children}
              </div>
            )}
          </div>

          {/* Right Column: custom video/media or Statement Paragraph */}
          <div className="lg:col-span-5 lg:pl-12 w-full flex items-center justify-start lg:justify-end">
            {rightElement ? (
              rightElement
            ) : (
              <div className="border-l border-white/20 pl-8 py-4 max-w-md">
                <p className="font-display font-black text-white text-base sm:text-lg md:text-xl tracking-[0.1em] leading-relaxed uppercase">
                  WE CREATE POWERFUL, INNOVATIVE, FUN, AND MEMORABLE CONTENT.
                </p>
                <p className="mt-4 text-xs font-semibold tracking-widest text-zinc-400 uppercase">
                  Est. 2026 · Markadeo Media House
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-[9px] uppercase tracking-[0.3em] font-bold">Scroll down</span>
        <ArrowDown className="h-4 w-4 animate-scroll-cue text-brand-yellow" />
      </div>
    </section>
  );
}
