import React, { useEffect, useRef } from 'react';

/**
 * Global title watermark:
 * scroll down → moves left → right
 * scroll up   → moves right → left
 *
 * Uses a DOM ref (no React setState on scroll) so Home/Hero do not re-render
 * while scrolling — that re-render was causing a white flash on the hero.
 */
export const ScrollTitleWatermark: React.FC = () => {
  const layerRef = useRef<HTMLDivElement>(null);
  const lastY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);
  const xRef = useRef(0);
  const raf = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const apply = () => {
      const el = layerRef.current;
      if (el) {
        el.style.transform = `translate3d(${xRef.current}vw, 0, 0)`;
      }
    };

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      lastY.current = y;
      if (delta === 0) return;

      xRef.current = Math.max(-55, Math.min(55, xRef.current + delta * 0.08));
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[5] flex items-center justify-center overflow-hidden"
      aria-hidden
    >
      <div
        ref={layerRef}
        className="text-center select-none will-change-transform"
        style={{ transform: 'translate3d(0, 0, 0)' }}
      >
        <p
          className="font-black uppercase tracking-[-0.04em] leading-[0.88] whitespace-nowrap"
          style={{
            fontSize: 'clamp(2.5rem, 12vw, 9rem)',
            color: 'rgba(42,42,46,0.07)',
          }}
        >
          THE NEXT GEN
        </p>
        <p
          className="mt-1 font-black uppercase tracking-[-0.03em] leading-[0.9] whitespace-nowrap"
          style={{
            fontSize: 'clamp(1.4rem, 5.5vw, 4rem)',
            color: 'rgba(229,57,53,0.09)',
          }}
        >
          AI LEARNING
        </p>
        <p
          className="mt-2 font-black uppercase tracking-[0.28em] leading-[0.9] whitespace-nowrap"
          style={{
            fontSize: 'clamp(1rem, 3.5vw, 2.5rem)',
            color: 'rgba(245,197,24,0.12)',
          }}
        >
          ZYLEARN
        </p>
      </div>
    </div>
  );
};
