import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ASSETS } from '@/data/assets';
import { HeroDotWave } from '@/components/hero/HeroDotWave';
import { HeroWatermarks } from '@/components/hero/HeroWatermarks';

interface HeroProps {
  onJoinClick: () => void;
}

const C = {
  red: '#E53935',
};

const NAV_H = 120;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12 + i * 0.12,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const titleLine = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.1,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
  // After first entrance, never replay intro (avoids white/blank flash on scroll-back)
  const [introDone, setIntroDone] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setIntroDone(true), 1200);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section
      className="relative bg-[#ededed] overflow-hidden w-full h-screen isolate"
      style={{ height: '100dvh', minHeight: '100vh', width: '100%' }}
    >
      <div className="absolute inset-0 z-0 h-full w-full bg-[#ededed]">
        <div className="absolute inset-0 opacity-[0.28]">
          <HeroDotWave />
        </div>
        <HeroWatermarks />
      </div>

      <div className="relative z-10 grid grid-cols-1 grid-rows-[minmax(0,36%)_minmax(0,64%)] lg:grid-rows-none lg:grid-cols-2 h-full w-full min-h-0">

        {/* Hero copy */}
        <div
          className="relative flex flex-col justify-center items-start text-left bg-transparent px-6 sm:px-10 lg:px-12 xl:px-16 pb-8 lg:pb-14 order-2 lg:order-1 h-full min-h-0 overflow-hidden"
          style={{ paddingTop: `max(5.5rem, calc(${NAV_H}px + clamp(0.75rem, 3vh, 2.5rem)))` }}
        >
          <div
            className="pointer-events-none absolute left-6 sm:left-10 lg:left-12 xl:left-16 right-4 select-none z-0 overflow-hidden"
            style={{ top: `calc(${NAV_H}px + 0.25rem)` }}
            aria-hidden
          >
            <div className="relative inline-flex items-center">
              <div className="absolute -left-0.5 top-[16%] flex flex-col gap-1 rotate-[-18deg] origin-left">
                <span className="block h-0.5 sm:h-1 w-8 sm:w-11 bg-[#F5C518]/35" />
                <span className="block h-0.5 sm:h-1 w-8 sm:w-11 bg-[#F5C518]/35" />
              </div>
              <p
                className="font-black uppercase tracking-[-0.05em] leading-none whitespace-nowrap pl-1"
                style={{
                  fontSize: 'clamp(2rem, 7vw, 4.75rem)',
                  color: 'rgba(42,42,46,0.09)',
                }}
              >
                <span style={{ color: 'rgba(245,197,24,0.38)' }}>//</span>
                HOME
              </p>
            </div>
          </div>

          <div className="relative z-[1] max-w-2xl w-full space-y-7 sm:space-y-8">
            <motion.h1
              className="text-[#000000] leading-[1.05]"
              initial={introDone ? false : 'hidden'}
              animate="show"
            >
              <motion.span
                custom={0}
                variants={titleLine}
                className="block text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight mb-2"
              >
                AI Learning
              </motion.span>
              <motion.span
                custom={1}
                variants={titleLine}
                className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[4.75rem] font-black tracking-tight"
              >
                Build Your Future
              </motion.span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial={introDone ? false : 'hidden'}
              animate="show"
              className="text-[#555555] text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl"
            >
              Skills That Empower. Knowledge That Transforms. Practical AI, full-stack tech,
              and career-ready workshops — learn with mentors, ship real projects, get hired.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial={introDone ? false : 'hidden'}
              animate="show"
              className="pt-1 flex flex-col items-start gap-3"
            >
              <motion.button
                type="button"
                onClick={onJoinClick}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-12 py-4 rounded-full text-white text-sm sm:text-base font-bold tracking-wide shadow-[0_12px_28px_rgba(229,57,53,0.28)]"
                style={{ backgroundColor: C.red }}
              >
                Learn More
              </motion.button>

              <p className="text-sm text-[#666666]">
                Or{' '}
                <Link to="/programs" className="font-semibold text-black underline underline-offset-2 hover:text-[#E53935]">
                  explore all programs
                </Link>
              </p>
            </motion.div>
          </div>
        </div>

        <div className="relative order-1 lg:order-2 flex items-end justify-center bg-transparent h-full min-h-0 overflow-hidden pt-12 lg:pt-0">
          <motion.div
            className="relative z-10 flex h-[92%] lg:h-[96%] w-full items-end justify-center"
            initial={introDone ? false : { y: '28%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src={ASSETS.heroRobot}
              alt="Zylearn AI learning companion"
              animate={{ y: [0, -16, 0] }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: introDone ? 0 : 0.9,
              }}
              className="w-[min(100%,720px)] lg:w-[min(108%,780px)] xl:w-[min(115%,860px)] h-full max-h-full object-contain object-bottom select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(2,20,51,0.12)]"
              draggable={false}
              decoding="async"
              fetchPriority="high"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
