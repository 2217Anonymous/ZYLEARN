import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Code2, FolderKanban, Trophy } from 'lucide-react';
import { SectionShell } from '@/components/ui/SectionShell';
import { ASSETS } from '@/data/assets';

const YELLOW = '#F5C518';

interface StatsCounterSectionProps {
  onJoinClick?: () => void;
}

const STATS = [
  {
    value: 500,
    suffix: '+',
    label: 'Learners Trained',
    desc: 'Cohorts with live mentors and a community that stays after class.',
    icon: Users,
  },
  {
    value: 10740,
    suffix: '+',
    label: 'Lines of Code',
    desc: 'Real builds reviewed, iterated, and shipped into portfolios.',
    format: true,
    icon: Code2,
  },
  {
    value: 200,
    suffix: '+',
    label: 'Live Projects',
    desc: 'Client-ready work that shows skill — not just course completion.',
    icon: FolderKanban,
  },
  {
    value: 98,
    suffix: '%',
    label: 'Career Outcomes',
    desc: 'Jobs, internships, and offers hit by learners who finish strong.',
    icon: Trophy,
  },
];

const formatNum = (n: number, withComma?: boolean) => {
  if (withComma) return n.toLocaleString('en-IN');
  return String(n);
};

const StatValue: React.FC<{
  value: number;
  suffix: string;
  format?: boolean;
  active: boolean;
}> = ({ value, suffix, format, active }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(value * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return (
    <span className="tabular-nums">
      {formatNum(display, format)}
      {suffix}
    </span>
  );
};

export const StatsCounterSection: React.FC<StatsCounterSectionProps> = ({ onJoinClick }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <SectionShell
      variant="light"
      showTitle={false}
      demoLabel="PROOF"
      className="py-24 lg:py-32"
    >
      {/* Vertical grid lines */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent, transparent calc(12.5% - 1px), rgba(42,42,46,0.055) calc(12.5% - 1px), rgba(42,42,46,0.055) 12.5%)',
        }}
      />

      {/* Giant watermark */}
      <p
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 z-0 text-[clamp(5rem,18vw,14rem)] font-black uppercase tracking-tighter text-[#2a2a2e]/[0.04] select-none leading-none pr-2"
        aria-hidden
      >
        Proof
      </p>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">

          {/* Left — image composition */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 relative"
          >
            {/* Yellow // watermark accent */}
            <span
              className="pointer-events-none absolute -left-3 sm:-left-8 top-8 sm:top-12 text-[4rem] sm:text-[5.5rem] font-black leading-none select-none z-0"
              style={{ color: 'rgba(245,197,24,0.28)' }}
              aria-hidden
            >
              //
            </span>

            {/* Yellow accent bar behind image */}
            <div
              className="absolute left-0 top-10 bottom-10 w-[42%] -translate-x-3 sm:-translate-x-5 z-0"
              style={{ backgroundColor: YELLOW }}
              aria-hidden
            />

            {/* Image frame */}
            <div className="relative z-[1] ml-6 sm:ml-10 mr-2">
              {/* Name / brand bar */}
              <div className="absolute top-6 left-0 z-10 bg-[#2a2a2e] px-5 py-2">
                <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-white">
                  Zylearn.
                </p>
              </div>

              <div className="aspect-[3/4] max-h-[560px] overflow-hidden bg-[#e4e4e6] border border-[#2a2a2e]/08">
                <img
                  src={ASSETS.statsPortrait}
                  alt="Zylearn learner outcomes"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

          {/* Right — copy + 2×2 stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-7"
          >
            <p className="text-sm text-[#2a2a2e]/40 mb-4 leading-relaxed">
              Proof in numbers — skills that ship, careers that move.
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-black text-[#2a2a2e] tracking-tight leading-[1.08]">
              Skills Shipped.{' '}
              <span className="text-[#F5C518]">Careers Moved.</span>
            </h2>

            <p className="mt-5 text-sm sm:text-[15px] text-[#2a2a2e]/50 leading-relaxed max-w-xl">
              Live mentors, portfolio projects, and outcomes that hold up in interviews —
              not vanity metrics. Here&apos;s what Zylearn learners have already shipped.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-9">
              {STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex gap-4 items-start">
                    <div className="relative shrink-0 mt-0.5">
                      <span
                        className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-2.5 -z-0"
                        style={{ backgroundColor: YELLOW }}
                        aria-hidden
                      />
                      <Icon
                        className="relative z-[1] w-7 h-7 text-[#2a2a2e]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-[#2a2a2e] leading-snug">
                        <StatValue
                          value={stat.value}
                          suffix={stat.suffix}
                          format={stat.format}
                          active={inView}
                        />{' '}
                        {stat.label}
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-[13px] text-[#2a2a2e]/45 leading-relaxed">
                        {stat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={onJoinClick}
              className="mt-11 inline-flex items-center justify-center px-8 py-3.5 bg-[#F5C518] text-white text-[11px] font-black uppercase tracking-[0.18em] hover:bg-[#e0b410] transition-colors"
            >
              Join Zylearn
            </button>
          </motion.div>
        </div>
      </div>
    </SectionShell>
  );
};
