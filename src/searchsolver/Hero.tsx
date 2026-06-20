import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Utensils, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { Magnetic } from './ScrollFX';
import ParticleField from './ParticleField';

/* Honest trust chips — descriptors of what we do, never invented results. */
const trustChips = [
  { icon: Utensils, label: 'UK restaurant focus' },
  { icon: Sparkles, label: 'Daily managed content' },
  { icon: MapPin, label: 'Local search & maps' },
  { icon: ShieldCheck, label: 'Free AI growth audit' },
];

export default function Hero({ onOpenConsole }: { onOpenConsole: (tab: 'calculator' | 'auditor') => void }) {
  const sectionRef = useRef<HTMLElement>(null);

  /* Scroll-linked parallax + fade — content drifts up and softly fades,
     the hero image gently scales (Ken-Burns) as you scroll. */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const glowY2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="hero-section"
      className="relative min-h-[95vh] flex items-center pt-24 pb-16 overflow-hidden bg-brand-dark"
    >
      {/* Background ambient glow elements (parallax) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          style={{ y: glowY }}
          className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full gold-ambient-glow filter blur-[60px] mesh-drift"
        />
        <motion.div
          style={{ y: glowY2 }}
          className="absolute bottom-10 right-1/4 w-[600px] h-[600px] rounded-full charcoal-ambient-glow filter blur-[80px] mesh-drift"
        />

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Living gold constellation — reacts to the cursor */}
        <ParticleField className="absolute inset-0 w-full h-full opacity-80" />
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"
        id="hero-grid-container"
      >
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1" id="hero-left-content">
            {/* Audience callout */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-brand-charcoal border border-zinc-800 rounded-none px-4 py-2 mb-8 text-zinc-300 font-mono tracking-wider text-xs"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-brand-gold opacity-75"></span>
                <span className="relative inline-flex rounded-none h-2.5 w-2.5 bg-brand-gold"></span>
              </span>
              <span>
                <strong className="text-white uppercase">UK RESTAURANT GROWTH //</strong> SOCIAL & LOCAL SEARCH
              </span>
            </motion.div>

            {/* Display headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-black text-5xl sm:text-7xl lg:text-[75px] xl:text-[88px] leading-[0.85] uppercase tracking-tighter text-white mb-8"
            >
              Pack Your <br />
              <span className="gold-shimmer">Restaurant</span>
            </motion.h1>

            {/* Sub-description */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-lg sm:text-xl text-zinc-400 max-w-xl mb-10 leading-relaxed font-light"
            >
              We run your daily social media, foodie reels, and local search — so independent restaurants and high-street brands fill more tables without lifting a finger. Fully managed, fully transparent.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12"
            >
              <Magnetic strength={0.45} className="w-full sm:w-auto">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onOpenConsole('auditor')}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-brand-gold hover:bg-[#E0A516] text-black font-display font-black text-xs uppercase tracking-widest px-8 py-4 rounded-none shadow-[0_8px_30px_rgba(245,184,46,0.25)] transition-colors duration-200 cursor-pointer"
                  id="hero-cta-audit"
                >
                  Run My Free Growth Audit
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Magnetic>
              <Magnetic strength={0.4} className="w-full sm:w-auto">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onOpenConsole('calculator')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-charcoal hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-display font-black text-xs uppercase tracking-widest px-8 py-4 rounded-none transition-colors cursor-pointer"
                  id="hero-cta-services"
                >
                  Estimate Revenue Lift &rarr;
                </motion.button>
              </Magnetic>
            </motion.div>

            {/* Honest trust chips — no fabricated metrics */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-2.5 pt-6 border-t border-white/5 w-full"
            >
              {trustChips.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/10 px-3 py-2 text-[11px] font-mono uppercase tracking-wide text-zinc-300"
                >
                  <Icon className="w-3.5 h-3.5 text-brand-gold" />
                  {label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Hero Right Visual — cinematic brandable image */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 w-full order-1 lg:order-2"
            id="hero-right-visual"
          >
            <div className="relative group">
              {/* Gold top hairline frame accent */}
              <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent z-20" />

              <div className="relative overflow-hidden border border-white/10 shadow-2xl shadow-black/60 aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
                <motion.img
                  style={{ scale: imageScale, y: imageY }}
                  src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1200&q=85"
                  alt="A beautifully plated, dramatically lit gourmet dish — the kind of content Markadeo creates and posts daily for UK restaurants."
                  loading="eager"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center will-change-transform"
                />
                {/* Black → gold cinematic grade so text & badges stay legible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 via-transparent to-transparent mix-blend-overlay pointer-events-none" />

                {/* Floating honest label — what we do, not a fake stat */}
                <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 bg-black/55 backdrop-blur-sm border border-white/10 px-3 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-200">
                    Content we shoot & post for you
                  </span>
                </div>

                {/* Bottom caption band */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <p className="font-display font-black uppercase tracking-tight text-white text-lg leading-tight">
                    Scroll-stopping food.<br />
                    <span className="gold-gradient-text">Tables that fill themselves.</span>
                  </p>
                </div>
              </div>

              <p className="mt-4 text-[10px] font-mono uppercase tracking-widest text-zinc-600 text-center">
                Sample of the daily creative we manage — not a client result claim
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll-to-explore cue */}
      <motion.a
        href="#restaurant-authority-trust-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        style={{ opacity: contentOpacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-2 group"
        aria-label="Scroll to explore"
      >
        <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-zinc-600 group-hover:text-brand-gold transition-colors">
          Scroll to explore
        </span>
        <span className="w-6 h-9 rounded-full border border-zinc-700 group-hover:border-brand-gold/60 flex items-start justify-center p-1.5 transition-colors">
          <span className="w-1 h-1.5 rounded-full bg-brand-gold animate-scroll-cue" />
        </span>
      </motion.a>
    </section>
  );
}
