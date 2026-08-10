import React from 'react';
import { CodeWatermark } from '@/components/ui/SectionShell';

/** Hero background: code rows + bottom-center brand watermark */
export const HeroWatermarks: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden" aria-hidden>
      <CodeWatermark variant="light" rows={22} />

      {/* Bottom center: ZYLEARN / AI FOR ALL */}
      <div className="absolute inset-x-0 bottom-4 sm:bottom-6 lg:bottom-8 z-[2] flex flex-col items-center justify-end text-center select-none px-4">
        <p
          className="font-black uppercase tracking-[-0.04em] leading-none whitespace-nowrap"
          style={{
            fontSize: 'clamp(2.5rem, 10vw, 7.5rem)',
            color: 'rgba(42,42,46,0.07)',
          }}
        >
          <span style={{ color: 'rgba(245,197,24,0.28)' }}>//</span>
          ZYLEARN
        </p>
        <p
          className="mt-1 sm:mt-2 font-black uppercase tracking-[0.28em] leading-none whitespace-nowrap"
          style={{
            fontSize: 'clamp(0.7rem, 2.2vw, 1.35rem)',
            color: 'rgba(229,57,53,0.14)',
          }}
        >
          AI FOR ALL
        </p>
      </div>
    </div>
  );
};
