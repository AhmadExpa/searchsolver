import { type ReactNode, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { MEDIA } from './siteData';

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
      className="relative isolate min-h-[100svh] overflow-hidden bg-black text-white flex items-center pt-20 pb-12"
    >
      {/* Background portfolio image */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.img
          src={MEDIA.homeHeroPoster}
          alt="Markadeo creative digital agency banner"
          loading="eager"
          decoding="async"
          style={motionStyle({ y: bgY, scale: bgScale })}
          className="absolute inset-0 h-[110%] w-full object-cover opacity-85 brightness-110 saturate-110"
        />
        {/* Scrim overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          style={motionStyle({ y: copyY, opacity: copyOpacity })}
          className={rightElement ? 'grid gap-12 lg:grid-cols-12 items-center' : ''}
        >
          {/* Content: Eyebrow + Large Title + CTA */}
          <div className={`flex flex-col items-start ${rightElement ? 'lg:col-span-7' : 'max-w-4xl'}`}>
            <span className="text-sm font-semibold tracking-[0.25em] text-brand-yellow uppercase mb-5 pl-1 border-l-2 border-brand-yellow">
              {eyebrow}
            </span>

            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95] text-white uppercase select-none">
              {title}
            </h1>

            {/* Subtitle descriptions for extra context */}
            <p className="mt-6 text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed font-medium">
              {subtitle}
            </p>

            {children && (
              <div className="mt-8">
                {children}
              </div>
            )}
          </div>

          {/* Optional right-hand media / statement (none on the homepage) */}
          {rightElement && (
            <div className="lg:col-span-5 lg:pl-12 w-full flex items-center justify-start lg:justify-end">
              {rightElement}
            </div>
          )}
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
