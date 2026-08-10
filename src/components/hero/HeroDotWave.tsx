import React, { useEffect, useRef } from 'react';

/**
 * Full-screen running watermark: perspective 3D dot-wave field.
 * Covers 100% width × 100% height of the hero.
 */
export const HeroDotWave: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let t = 0;
    let running = true;

    // Denser grid so the field fills the full viewport
    const COLS = 72;
    const ROWS = 48;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const parent = canvas.parentElement;
      w = parent?.clientWidth || window.innerWidth;
      h = parent?.clientHeight || window.innerHeight;
      // Guard against 0-size while layout settles (common when scrolling back to hero)
      if (w < 2 || h < 2) return;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e: MouseEvent) => {
      mouse.current.tx = e.clientX / window.innerWidth;
      mouse.current.ty = e.clientY / window.innerHeight;
    };

    /** Project world point onto full-screen canvas */
    const project = (x: number, y: number, z: number) => {
      const fov = Math.max(w, h) * 0.72;
      const camY = -h * 0.02;
      const camZ = 180;
      const pz = z + camZ;
      const scale = fov / Math.max(36, pz);
      return {
        sx: w * 0.5 + x * scale,
        // Start higher so dots cover top → bottom (full height watermark)
        sy: h * 0.12 + (y + camY) * scale,
        s: Math.max(0.45, Math.min(2.8, scale * 0.078)),
      };
    };

    const draw = () => {
      if (!running) return;
      if (!reduceMotion) t += 0.014;

      mouse.current.x += (mouse.current.tx - mouse.current.x) * 0.05;
      mouse.current.y += (mouse.current.ty - mouse.current.y) * 0.05;

      if (w >= 2 && h >= 2) {
        ctx.clearRect(0, 0, w, h);

        const mx = (mouse.current.x - 0.5) * 56;
        const my = (mouse.current.y - 0.5) * 36;

        // World plane sized to span full viewport in perspective
        const spanX = Math.max(w, 900) * 0.95;
        const spanZ = Math.max(h, 700) * 0.72;

        for (let row = 0; row < ROWS; row++) {
          for (let col = 0; col < COLS; col++) {
            const u = col / (COLS - 1);
            const v = row / (ROWS - 1);

            const x = (u - 0.5) * spanX + mx * (0.12 + v * 0.4);
            const z = 8 + v * spanZ;

            const cx = u - 0.5;
            const ridge = Math.exp(-cx * cx * 6.5) * 48;
            const wave =
              Math.sin(u * 5.4 + t * 1.2) * 12 +
              Math.cos(v * 7.1 - t * 0.95) * 10 +
              Math.sin((u + v) * 9 + t * 0.75) * 6 +
              ridge * (0.5 + 0.5 * Math.sin(t * 0.6 + v * 2.4));

            const y = 40 - wave * (0.4 + v * 0.9) + my * v;
            const p = project(x, y, z);

            if (p.sy < -30 || p.sy > h + 30 || p.sx < -30 || p.sx > w + 30) continue;

            const depthFade = 1 - v * 0.5;
            const peakBoost = Math.max(0, (wave - 16) / 42);
            // Watermark opacity — soft, full-screen, always visible
            const alpha = (0.12 + depthFade * 0.38 + peakBoost * 0.18) * (0.45 + v * 0.55);

            const r = Math.round(110 + peakBoost * 25);
            const g = Math.round(125 + peakBoost * 45);
            const b = Math.round(140 + peakBoost * 50);

            ctx.beginPath();
            ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
            ctx.arc(p.sx, p.sy, p.s, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove, { passive: true });

    const parent = canvas.parentElement;
    const ro =
      typeof ResizeObserver !== 'undefined' && parent
        ? new ResizeObserver(() => resize())
        : null;
    if (parent && ro) ro.observe(parent);

    // When scrolling back to the hero, force a resize once it is visible again
    const io =
      typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver(
            (entries) => {
              for (const entry of entries) {
                if (entry.isIntersecting) {
                  resize();
                }
              }
            },
            { threshold: 0.05 }
          )
        : null;
    if (io) io.observe(canvas);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      ro?.disconnect();
      io?.disconnect();
    };
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden"
      aria-hidden
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block h-full w-full"
      />
    </div>
  );
};
