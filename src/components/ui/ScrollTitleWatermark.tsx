import React, { useEffect, useRef, useState } from 'react';

/**
 * Global title watermark:
 * scroll down → moves left → right
 * scroll up   → moves right → left
 */
export const ScrollTitleWatermark: React.FC = () => {
  const [xVw, setXVw] = useState(0);
  const lastY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);
  const xRef = useRef(0);
  const raf = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      lastY.current = y;
      if (delta === 0) return;

      // Accumulate: down increases x (LTR), up decreases x (RTL)
      const next = Math.max(-55, Math.min(55, xRef.current + delta * 0.08));
      xRef.current = next;

      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => setXVw(xRef.current));
    };

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
        className="text-center select-none will-change-transform"
        style={{
          transform: `translate3d(${xVw}vw, 0, 0)`,
          transition: 'transform 0.12s linear',
        }}
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
