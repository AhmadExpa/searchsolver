import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react';

/* ------------------------------------------------------------------
   Tilt — a mouse-driven 3D tilt wrapper.
   The child leans toward the cursor in 3D (rotateX/rotateY) with a
   springy return, plus an optional moving shine. Gives cards the
   tactile "3D" feel without any 3D library. Disabled for reduced
   motion / touch (falls back to a plain div).
------------------------------------------------------------------ */
export default function Tilt({
  children,
  className,
  max = 12,
  shine = true,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  shine?: boolean;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 180, damping: 18 });
  const sy = useSpring(py, { stiffness: 180, damping: 18 });

  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const rotateX = useTransform(sy, [0, 1], [max, -max]);

  // Glossy highlight follows the cursor and only fades in while hovering,
  // so there's no static streak sitting on the card at rest.
  const glossX = useTransform(sx, [0, 1], ['0%', '100%']);
  const glossY = useTransform(sy, [0, 1], ['0%', '100%']);
  const glow = useMotionValue(0);
  const glowSpring = useSpring(glow, { stiffness: 200, damping: 25 });

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const onEnter = () => glow.set(1);
  const reset = () => {
    px.set(0.5);
    py.set(0.5);
    glow.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={`perspective relative ${className ?? ''}`}
    >
      {children}
      {shine && (
        <motion.span
          aria-hidden
          style={{ left: glossX, top: glossY, opacity: glowSpring }}
          className="tilt-gloss pointer-events-none absolute w-2/3 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full"
        />
      )}
    </motion.div>
  );
}
