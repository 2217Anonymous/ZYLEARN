import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, BookOpen, Code2, Award, Video, HeartHandshake, ArrowRight } from 'lucide-react';
import { SectionShell } from '@/components/ui/SectionShell';
import { MiniCodeScroll } from '@/components/ui/DemoWatermark';

const REASONS = [
  {
    title: 'Expert Mentors',
    desc: 'Learn directly from seasoned AI engineers, full-stack architects, and growth hackers with real tech company experience.',
    icon: Users,
  },
  {
    title: 'Industry Relevant Curriculum',
    desc: 'Continuously updated syllabus featuring LLM RAG pipelines, React 19, Google Ads, CRM tools, and AI workflows.',
    icon: BookOpen,
  },
  {
    title: 'Hands-on Projects',
    desc: 'Build capstone applications, live landing pages, custom chatbots, and marketing automations for your portfolio.',
    icon: Code2,
  },
  {
    title: 'Certificate of Completion',
    desc: 'Receive ISO-verified digital certificate and verifiable badge for LinkedIn, resume, and client proposals.',
    icon: Award,
  },
  {
    title: 'Offline & Online Workshops',
    desc: 'Flexibility to join live Zoom sessions online or attend in-person physical campus bootcamps and hackathons.',
    icon: Video,
  },
  {
    title: 'Lifetime Community Access',
    desc: 'Join our private community of alumni, hiring managers, and founders for lifetime peer support & job referrals.',
    icon: HeartHandshake,
  },
];

export const WhyChooseZylearn: React.FC = () => {
  const [active, setActive] = useState(0);
  const ActiveIcon = REASONS[active].icon;

  return (
    <SectionShell variant="dark" showTitle={false} demoLabel="WHY CHOOSE" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-[#F5C518] mb-6"
          >
            The Zylearn Advantage
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="lg:col-span-7 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-[-0.04em] leading-[0.9] uppercase"
            >
              Why Choose{' '}
              <span className="text-[#F5C518]">Zylearn</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="lg:col-span-5 text-white/45 text-base sm:text-lg leading-relaxed lg:pb-2 max-w-md lg:ml-auto"
            >
              We don&apos;t teach dry theory. We equip you with high-income practical skills for immediate career &amp; business impact.
            </motion.p>
          </div>

          <motion.div
            className="mt-10 h-px w-full origin-left"
            style={{
              background:
                'linear-gradient(90deg, #F5C518 0%, rgba(245,197,24,0.35) 45%, transparent 100%)',
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
          />
        </div>

        {/* Interactive split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10">

          {/* Reason list */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-white/10">
            {REASONS.map((r, idx) => {
              const isActive = active === idx;
              return (
                <button
                  key={r.title}
                  type="button"
                  onClick={() => setActive(idx)}
                  onMouseEnter={() => setActive(idx)}
                  className={`group relative w-full text-left flex items-center gap-4 px-5 sm:px-6 py-5 sm:py-6 transition-colors duration-300 border-b border-white/10 last:border-b-0 ${
                    isActive ? 'bg-white/[0.06]' : 'hover:bg-white/[0.03]'
                  }`}
                >
                  <span
                    className={`absolute left-0 top-0 bottom-0 w-[3px] bg-[#F5C518] transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  <span
                    className={`font-mono text-xs font-bold tabular-nums transition-colors duration-300 ${
                      isActive ? 'text-[#F5C518]' : 'text-white/30'
                    }`}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  <span
                    className={`flex-1 text-base sm:text-lg font-bold tracking-tight transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-white/45 group-hover:text-white/70'
                    }`}
                  >
                    {r.title}
                  </span>

                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-all duration-300 ${
                      isActive
                        ? 'text-[#F5C518] translate-x-0 opacity-100'
                        : 'text-white/20 -translate-x-1 opacity-0 group-hover:opacity-50'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-7 relative min-h-[280px] sm:min-h-[320px] flex flex-col justify-between p-8 sm:p-10 lg:p-12 overflow-hidden bg-[#2a2a2e] border border-[#F5C518]/40">
            <MiniCodeScroll className="right-3 top-3 bottom-3 w-[88px] opacity-80" />
            <span
              className="pointer-events-none absolute -right-2 -top-4 select-none font-black text-[10rem] sm:text-[14rem] leading-none tracking-tighter text-white/[0.03]"
              aria-hidden
            >
              {String(active + 1).padStart(2, '0')}
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 flex flex-col h-full"
              >
                <div
                  className="mb-8 flex h-14 w-14 items-center justify-center"
                  style={{
                    color: '#F5C518',
                    background: 'rgba(245,197,24,0.12)',
                    border: '1px solid rgba(245,197,24,0.28)',
                  }}
                >
                  <ActiveIcon className="h-7 w-7" strokeWidth={2} />
                </div>

                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-[#F5C518] mb-3">
                  Reason {String(active + 1).padStart(2, '0')} / 06
                </p>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.05] mb-5">
                  {REASONS[active].title}
                </h3>

                <p className="text-white/50 text-base sm:text-lg leading-relaxed max-w-lg">
                  {REASONS[active].desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* progress dots */}
            <div className="relative z-10 mt-10 flex gap-2">
              {REASONS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show reason ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-1 transition-all duration-300 ${
                    i === active ? 'w-8 bg-[#F5C518]' : 'w-3 bg-white/15 hover:bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
};
