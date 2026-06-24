import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useScroll, useSpring, useTransform, useMotionValue, type Variants } from 'motion/react';
import { ArrowUp } from 'lucide-react';

/* ------------------------------------------------------------------
   ScrollProgress — slim gold bar that fills as the page scrolls.
   A subtle, premium "you're making progress" hook.
------------------------------------------------------------------ */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-brand-gold via-brand-gold-soft to-brand-gold shadow-[0_0_12px_rgba(245,184,46,0.7)]"
      aria-hidden
    />
  );
}

/* ------------------------------------------------------------------
   Reveal — scroll-triggered entrance. The core "hook" that makes
   every block animate into place as you scroll down.
------------------------------------------------------------------ */
type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 34 },
  down: { x: 0, y: -34 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.65,
  className,
  once = true,
  amount = 0.2,
  id,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
  id?: string;
}) {
  const { x, y } = offsets[direction];
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   Stagger — parent that staggers its <RevealItem> children.
------------------------------------------------------------------ */
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export function Stagger({
  children,
  className,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   Parallax — moves a layer at a different speed than the scroll,
   used for hero glows and accents to create depth.
------------------------------------------------------------------ */
export function Parallax({
  children,
  speed = 0.3,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 1000 * speed]);
  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   CountUp — eases a number up to its target when scrolled into view.
   Re-usable proof-point hook for stats.
------------------------------------------------------------------ */
export function CountUp({
  to,
  duration = 1800,
  prefix = '',
  suffix = '',
  decimals = 0,
  className,
}: {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, to, duration]);

  return (
    <motion.span
      className={className}
      onViewportEnter={() => setStarted(true)}
      viewport={{ once: true, amount: 0.6 }}
    >
      {prefix}
      {value.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </motion.span>
  );
}

/* ------------------------------------------------------------------
   BackToTop — floating gold button that fades in after scrolling.
------------------------------------------------------------------ */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      initial={false}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8, pointerEvents: visible ? 'auto' : 'none' }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -3 }}
      className="hidden sm:flex fixed bottom-6 right-6 z-[55] w-12 h-12 items-center justify-center bg-brand-gold text-black shadow-[0_10px_30px_rgba(245,184,46,0.35)] cursor-pointer"
    >
      <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
    </motion.button>
  );
}

/* ------------------------------------------------------------------
   Magnetic — child leans toward the cursor within a radius and
   springs back on leave. Gives buttons a tactile, alive feel.
------------------------------------------------------------------ */
export function Magnetic({
  children,
  strength = 0.4,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.5 });
  const y = useSpring(my, { stiffness: 220, damping: 18, mass: 0.5 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    mx.set((e.clientX - cx) * strength);
    my.set((e.clientY - cy) * strength);
  };
  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   SectionDivider — animated gold hairline that sweeps as a section
   change cue between blocks.
------------------------------------------------------------------ */
export function SectionDivider() {
  return (
    <div className="relative h-px w-full overflow-hidden bg-line" aria-hidden>
      <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-brand-gold/70 to-transparent animate-hairline" />
    </div>
  );
}

/* ------------------------------------------------------------------
   Marker — a gold highlight that "draws" behind a word as it scrolls
   into view. Transform-only (scaleX), so it stays smooth on mobile.
------------------------------------------------------------------ */
export function Marker({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={`relative inline-block ${className ?? ''}`}>
      <motion.span
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, delay: 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
        style={{ transformOrigin: 'left' }}
        className="absolute left-0 right-0 bottom-[0.05em] h-[0.42em] rounded-[3px] bg-brand-gold/55"
      />
      <span className="relative">{children}</span>
    </span>
  );
}
