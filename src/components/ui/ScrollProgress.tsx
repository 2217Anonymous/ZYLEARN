import React from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export const ScrollProgress: React.FC = () => {
  const completion = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none bg-navy-950/50">
      <div
        className="h-full bg-[#14519E] from-cyan-400 via-electric-500 to-purple-500 transition-all duration-150 ease-out shadow-[0_0_10px_rgba(6,182,212,0.8)]"
        style={{ width: `${completion}%` }}
      />
    </div>
  );
};
