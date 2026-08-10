import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on desktop screens (>= 1024px)
    if (window.innerWidth < 1024) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Soft Ambient Cursor Glow */}
      <motion.div
        className="absolute rounded-full bg-cyan-500/15 blur-2xl pointer-events-none"
        animate={{
          x: mousePosition.x - 120,
          y: mousePosition.y - 120,
          scale: isHovered ? 1.4 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.5 }}
        style={{ width: 240, height: 240 }}
      />

      {/* Precise Pointer Ring */}
      <motion.div
        className="absolute rounded-full border border-cyan-400/60 pointer-events-none"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 16),
          y: mousePosition.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          backgroundColor: isHovered ? 'rgba(6, 182, 212, 0.15)' : 'transparent',
          borderColor: isHovered ? 'rgba(168, 85, 247, 0.8)' : 'rgba(6, 182, 212, 0.6)',
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 350 }}
      />

      {/* Central Dot */}
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-cyan-400 pointer-events-none glow-text-cyan"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400 }}
      />
    </div>
  );
};
