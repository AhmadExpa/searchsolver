import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowUpRight, TrendingUp, Star, Eye, CalendarCheck } from 'lucide-react';

/* Smooth count-up hook (eases to target on mount) */
function useCountUp(target: number, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value;
}

/* The signature "Live Growth Console" — an animated, real-time-feeling analytics panel */
function LiveGrowthConsole() {
  const covers = useCountUp(185);
  const reach = useCountUp(28400);

  // A live "bookings today" number that keeps ticking up
  const [bookings, setBookings] = useState(112);
  useEffect(() => {
    const id = setInterval(() => {
      setBookings((b) => b + Math.floor(Math.random() * 3) + 1);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  // Rotating live campaign feed
  const feed = [
    { icon: Star, text: 'New 5★ review — Soho', tone: 'text-amber-400' },
    { icon: CalendarCheck, text: '+42 direct bookings today', tone: 'text-emerald-400' },
    { icon: Eye, text: 'Reel hit 28k views — Camden', tone: 'text-brand-gold' },
    { icon: TrendingUp, text: 'Mid-week covers up 23% w/w', tone: 'text-emerald-400' },
    { icon: Star, text: 'Maps 3-pack rank #1 — “best ramen”', tone: 'text-brand-gold' },
  ];
  const [feedIdx, setFeedIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setFeedIdx((i) => (i + 1) % feed.length), 2200);
    return () => clearInterval(id);
  }, [feed.length]);

  // Engagement bars (static seed heights, animated continuously)
  const bars = useRef([38, 52, 44, 66, 58, 78, 64, 86, 72, 92, 80, 96]).current;
  const Feed = feed[feedIdx];

  return (
    <div className="relative bg-brand-charcoal/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden">
      {/* Gold top hairline */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

      {/* Window chrome bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-black/20">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-gold/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <span className="ml-3 text-[9px] font-mono uppercase tracking-widest text-zinc-500">markadeo // growth_console</span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-widest text-brand-gold font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
          Live
        </span>
      </div>

      <div className="p-4 sm:p-5 space-y-4">
        {/* KPI row */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-black/30 border border-white/5 p-3">
            <span className="text-[8px] font-mono uppercase tracking-widest text-zinc-500 block">Covers Growth</span>
            <span className="text-xl sm:text-2xl font-display font-black text-brand-gold flex items-baseline gap-0.5 leading-none mt-1">
              +{Math.round(covers)}%
              <TrendingUp className="w-3.5 h-3.5" />
            </span>
          </div>
          <div className="bg-black/30 border border-white/5 p-3">
            <span className="text-[8px] font-mono uppercase tracking-widest text-zinc-500 block">Reels Reach</span>
            <span className="text-xl sm:text-2xl font-display font-black text-white leading-none mt-1 block">
              {(Math.round(reach) / 1000).toFixed(1)}k
            </span>
          </div>
          <div className="bg-black/30 border border-white/5 p-3">
            <span className="text-[8px] font-mono uppercase tracking-widest text-zinc-500 block">Bookings Today</span>
            <motion.span
              key={bookings}
              initial={{ opacity: 0.4, y: -3 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl sm:text-2xl font-display font-black text-emerald-400 leading-none mt-1 flex items-center gap-1"
            >
              {bookings}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.span>
          </div>
        </div>

        {/* Engagement chart */}
        <div className="bg-black/30 border border-white/5 p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-400 font-bold">Daily Engagement</span>
            <span className="text-[9px] font-mono uppercase tracking-widest text-emerald-400 font-bold">▲ trending</span>
          </div>
          <div className="flex items-end justify-between gap-1.5 h-24">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 bg-gradient-to-t from-brand-gold/30 to-brand-gold rounded-sm"
                style={{ minHeight: 4 }}
                animate={{ height: [`${h * 0.55}%`, `${h}%`, `${h * 0.72}%`] }}
                transition={{ duration: 2.4, repeat: Infinity, repeatType: 'reverse', delay: i * 0.09, ease: 'easeInOut' }}
              />
            ))}
          </div>
        </div>

        {/* Live campaign feed ticker */}
        <div className="bg-black/30 border border-white/5 px-4 py-3 flex items-center gap-3 overflow-hidden">
          <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 flex-shrink-0">Live feed</span>
          <div className="h-3 w-px bg-white/10 flex-shrink-0" />
          <AnimatePresence mode="wait">
            <motion.div
              key={feedIdx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 min-w-0"
            >
              <Feed.icon className={`w-3.5 h-3.5 flex-shrink-0 ${Feed.tone}`} />
              <span className="text-xs font-mono text-zinc-300 truncate">{Feed.text}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default function Hero({ onOpenConsole }: { onOpenConsole: (tab: 'calculator' | 'auditor') => void }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[95vh] flex items-center pt-24 pb-16 overflow-hidden bg-brand-dark"
    >
      {/* Background ambient glow elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full gold-ambient-glow filter blur-[60px]" />
        <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] rounded-full charcoal-ambient-glow filter blur-[80px]" />

        {/* Subtle grid pattern overlays */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full" id="hero-grid-container">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left" id="hero-left-content">
            {/* Audience Callout Tag */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-brand-charcoal border border-zinc-800 rounded-none px-4 py-2 mb-8 text-zinc-300 font-mono tracking-wider text-xs"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-brand-gold opacity-75"></span>
                <span className="relative inline-flex rounded-none h-2.5 w-2.5 bg-brand-gold"></span>
              </span>
              <span>
                <strong className="text-white uppercase">UK RESTAURANT FOCUS //</strong> RECLAIMING SALES & DAILY SOCIALS
              </span>
            </motion.div>

            {/* Display Typography Header */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-black text-5xl sm:text-7xl lg:text-[75px] xl:text-[88px] leading-[0.85] font-black uppercase tracking-tighter text-white mb-8"
            >
              Pack Your <br/>
              <span className="bg-gradient-to-r from-brand-gold to-brand-gold-soft bg-clip-text text-transparent">Restaurant</span>
            </motion.h1>

            {/* Professional sub-description */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-lg sm:text-xl text-zinc-400 max-w-xl mb-10 leading-relaxed font-light"
            >
              We manage social media accounts with daily postings, professional foodie reels, and proactive engagement. Custom-tailored to help independent restaurants and high-street brands rescue losing sales and multiply direct table bookings.
            </motion.p>

            {/* Practical Interactive Trigger CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12"
            >
              <button
                onClick={() => onOpenConsole('auditor')}
                className="inline-flex items-center justify-center gap-2.5 bg-brand-gold hover:bg-[#E0A516] text-black font-display font-black text-xs uppercase tracking-widest px-8 py-4 rounded-none shadow-[0_8px_30px_rgba(245,184,46,0.25)] transition-all duration-200 cursor-pointer"
                id="hero-cta-audit"
              >
                Launch Growth Console
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onOpenConsole('calculator')}
                className="inline-flex items-center justify-center gap-2 bg-brand-charcoal hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-display font-black text-xs uppercase tracking-widest px-8 py-4 rounded-none transition-all cursor-pointer"
                id="hero-cta-services"
              >
                Estimate Revenue Lift &rarr;
              </button>
            </motion.div>

            {/* Micro badges instead of simple status text */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/5 w-full"
            >
              <div>
                <span className="text-2xl font-display font-black text-white block">+185%</span>
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">Covers Growth Rate</span>
              </div>
              <div className="w-[1px] h-8 bg-zinc-800 hidden sm:block" />
              <div>
                <span className="text-2xl font-display font-black text-white block">365 Days</span>
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">Managed Campaigns</span>
              </div>
              <div className="w-[1px] h-8 bg-zinc-800 hidden sm:block" />
              <div>
                <span className="text-2xl font-display font-black text-white block">Zero Stress</span>
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">Turnkey Execution</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Visual Column — Signature Live Growth Console */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 w-full"
            id="hero-right-visual"
          >
            <LiveGrowthConsole />

            {/* Caption under the console */}
            <p className="mt-4 text-[10px] font-mono uppercase tracking-widest text-zinc-600 text-center">
              Illustrative live snapshot of a managed Markadeo account
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
