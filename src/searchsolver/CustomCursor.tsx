import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

/* ------------------------------------------------------------------
   CustomCursor — a bespoke gold reticle cursor.
   • A tiny solid dot tracks the pointer 1:1.
   • A larger reticle ring lags behind on a spring.
   • Over links/buttons the ring expands and brightens.
   Disabled on touch devices and when the native cursor is needed
   (inputs keep their caret). Pointer-events-none throughout.
------------------------------------------------------------------ */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [down, setDown] = useState(false);

  // Raw position for the dot
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  // Lagged spring position for the ring
  const ringX = useSpring(x, { stiffness: 350, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 350, damping: 28, mass: 0.6 });

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduced) return;

    setEnabled(true);
    document.documentElement.classList.add('has-custom-cursor');

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest('a, button, [role="button"], [data-cursor="hover"]'));
    };
    const downFn = () => setDown(true);
    const upFn = () => setDown(false);

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', over, { passive: true });
    window.addEventListener('mousedown', downFn);
    window.addEventListener('mouseup', upFn);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mousedown', downFn);
      window.removeEventListener('mouseup', upFn);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Reticle ring (lagged) */}
      <motion.div
        className="fixed top-0 left-0 z-[150] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className="relative flex items-center justify-center"
          animate={{
            width: hovering ? 56 : 34,
            height: hovering ? 56 : 34,
            opacity: hovering ? 1 : 0.7,
            scale: down ? 0.85 : 1,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          style={{ width: 34, height: 34 }}
        >
          <span className="absolute inset-0 rounded-full border border-brand-gold/70" />
          {/* Reticle ticks */}
          <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-px h-1.5 bg-brand-gold/70" />
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-px h-1.5 bg-brand-gold/70" />
          <span className="absolute -left-1 top-1/2 -translate-y-1/2 h-px w-1.5 bg-brand-gold/70" />
          <span className="absolute -right-1 top-1/2 -translate-y-1/2 h-px w-1.5 bg-brand-gold/70" />
        </motion.div>
      </motion.div>

      {/* Solid dot (1:1) */}
      <motion.div
        className="fixed top-0 left-0 z-[151] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ x, y }}
      >
        <motion.span
          className="block rounded-full bg-brand-gold"
          animate={{ width: hovering ? 5 : 6, height: hovering ? 5 : 6 }}
          style={{ width: 6, height: 6 }}
        />
      </motion.div>
    </>
  );
}
