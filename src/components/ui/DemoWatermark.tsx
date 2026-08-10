import React from 'react';
import { motion } from 'framer-motion';

type Variant = 'light' | 'dark';

/**
 * Giant section watermark: yellow "//" at the start + muted title.
 * Same look on every section via SectionShell demoLabel.
 */
export const DemoWatermark: React.FC<{
  label: string;
  variant?: Variant;
}> = ({ label, variant = 'dark' }) => {
  const text = label.toUpperCase().replace(/\s+/g, ' ').trim();
  const titleColor =
    variant === 'dark' ? 'rgba(255,255,255,0.045)' : 'rgba(42,42,46,0.05)';
  const slashColor =
    variant === 'dark' ? 'rgba(245,197,24,0.22)' : 'rgba(245,197,24,0.28)';
  const barColor =
    variant === 'dark' ? 'rgba(245,197,24,0.2)' : 'rgba(245,197,24,0.26)';

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      aria-hidden
    >
      <div className="absolute left-0 top-[18%] sm:top-[22%] w-full px-2 sm:px-4 select-none">
        <div className="relative inline-flex items-center max-w-full">
          {/* Yellow accent bars — begin of title */}
          <div className="absolute -left-1 sm:left-0 top-[14%] flex flex-col gap-1.5 sm:gap-2 rotate-[-18deg] origin-left z-[1]">
            <span className="block h-1 sm:h-1.5 w-10 sm:w-16" style={{ backgroundColor: barColor }} />
            <span className="block h-1 sm:h-1.5 w-10 sm:w-16" style={{ backgroundColor: barColor }} />
          </div>

          <p
            className="font-black uppercase tracking-[-0.06em] leading-none whitespace-nowrap pl-2 sm:pl-3"
            style={{
              fontSize: 'clamp(3rem, 14vw, 11rem)',
              color: titleColor,
            }}
          >
            <span style={{ color: slashColor }}>//</span>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

const MINI_LINES = [
  'const track = await enroll();',
  'pipeline.run({ rag: true });',
  'export const skill = "ship";',
  'while (learning) grow();',
  'deploy --prod --fast',
  'git commit -m "feat"',
  'npm run build',
  'select * from careers;',
];

/** Small yellow code column that scrolls up/down inside boxes */
export const MiniCodeScroll: React.FC<{
  reverse?: boolean;
  className?: string;
}> = ({ reverse = false, className = '' }) => {
  const lines = [...MINI_LINES, ...MINI_LINES];

  return (
    <div
      className={`pointer-events-none absolute overflow-hidden ${className}`}
      aria-hidden
    >
      <motion.div
        className="flex flex-col gap-1 will-change-transform"
        animate={{ y: reverse ? ['-40%', '0%'] : ['0%', '-40%'] }}
        transition={{ duration: 14, ease: 'linear', repeat: Infinity }}
      >
        {lines.map((line, i) => (
          <span
            key={`${line}-${i}`}
            className="font-mono text-[8px] sm:text-[9px] whitespace-nowrap leading-tight"
            style={{ color: 'rgba(245,197,24,0.55)' }}
          >
            {line}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
