import { useEffect, useRef } from 'react';

/* ------------------------------------------------------------------
   ParticleField — a living gold constellation rendered on <canvas>.
   Particles drift, link to nearby neighbours with hairlines, and
   lean toward the cursor. Sits behind hero content.

   Performance & a11y:
   • DPR-aware, sized to its parent via ResizeObserver.
   • Particle count scales with area (hard-capped).
   • Pauses when the tab is hidden.
   • Skips entirely under prefers-reduced-motion.
------------------------------------------------------------------ */
interface P {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function ParticleField({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canvas = canvasRef.current;
    if (!canvas || reduced) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const parent = canvas.parentElement!;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: P[] = [];
    const mouse = { x: -9999, y: -9999 };
    const LINK_DIST = 130;
    const MOUSE_DIST = 170;

    const seed = () => {
      const count = Math.min(90, Math.floor((width * height) / 16000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }));
    };

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        // Drift
        p.x += p.vx;
        p.y += p.vy;

        // Gentle attraction toward cursor
        const mdx = mouse.x - p.x;
        const mdy = mouse.y - p.y;
        const md = Math.hypot(mdx, mdy);
        if (md < MOUSE_DIST) {
          const f = (1 - md / MOUSE_DIST) * 0.04;
          p.vx += (mdx / (md || 1)) * f;
          p.vy += (mdy / (md || 1)) * f;
        }

        // Damping + wrap
        p.vx *= 0.99;
        p.vy *= 0.99;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Node
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(245, 184, 46, 0.55)';
        ctx.fill();
      }

      // Links
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK_DIST) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(245, 184, 46, ${(1 - d / LINK_DIST) * 0.16})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
        // Link to cursor
        const a = particles[i];
        const cdx = a.x - mouse.x;
        const cdy = a.y - mouse.y;
        const cd = Math.hypot(cdx, cdy);
        if (cd < MOUSE_DIST) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(255, 212, 102, ${(1 - cd / MOUSE_DIST) * 0.35})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        raf = requestAnimationFrame(draw);
      }
    };

    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    resize();
    raf = requestAnimationFrame(draw);

    window.addEventListener('mousemove', onMouse, { passive: true });
    window.addEventListener('mouseout', onLeave);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('mouseout', onLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
