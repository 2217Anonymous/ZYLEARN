import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu, Rocket, BookOpen, Trophy, ArrowRight } from 'lucide-react';

const cards = [
  {
    icon: BookOpen,
    num: '01',
    title: 'Learn by Doing',
    desc: 'No boring lectures. Every topic comes with live code labs, real datasets, and mini-projects you build yourself.',
    color: 'bg-amber-400',
    textColor: 'text-ink-950',
    tag: 'Practical-First',
  },
  {
    icon: Cpu,
    num: '02',
    title: 'AI-Powered Curriculum',
    desc: 'Our syllabus is refreshed every quarter by industry mentors to reflect real job market demands and emerging tools.',
    color: 'bg-ink-950',
    textColor: 'text-cream-50',
    tag: 'Industry-Led',
  },
  {
    icon: Trophy,
    num: '03',
    title: 'Certifications That Matter',
    desc: 'Earn certificates verified by our industry partners. Share them on LinkedIn and let recruiters come to you.',
    color: 'bg-cream-200',
    textColor: 'text-ink-950',
    tag: 'Industry-Verified',
  },
  {
    icon: Rocket,
    num: '04',
    title: 'Career Support & Placement',
    desc: 'Resume reviews, mock interviews, and live job referrals from our 100+ hiring partners across India.',
    color: 'bg-ink-800',
    textColor: 'text-cream-50',
    tag: 'Placement Backed',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export const WhyZylearn: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-pad bg-cream-50">
      <div className="container-xl">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="label-sm text-ink-500/60 block mb-3">Why Choose Zylearn</span>
            <h2 className="display-md text-ink-950 max-w-xl">
              We don't just teach skills.{' '}
              <span className="accent-line">We build careers.</span>
            </h2>
          </div>
          <p className="text-ink-600 text-base leading-relaxed max-w-sm font-medium">
            Students who join Zylearn don't just get certificates — they get jobs. Here's how we do it differently.
          </p>
        </div>

        {/* Card grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.num}
                variants={item}
                className={`${c.color} rounded-2xl p-8 flex flex-col gap-6 group cursor-default transition-all hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    c.textColor === 'text-cream-50' ? 'bg-[#F7FAFB]' : 'bg-ink-950/10'
                  }`}>
                    <Icon className={`w-6 h-6 ${c.textColor}`} />
                  </div>
                  <span className={`label-sm ${c.textColor} opacity-30`}>{c.num}</span>
                </div>
                <div>
                  <span className={`tag text-[9px] mb-3 inline-block ${
                    c.textColor === 'text-cream-50' ? 'bg-[#F7FAFB] text-cream-50' : 'bg-ink-950/10 text-ink-950'
                  }`}>
                    {c.tag}
                  </span>
                  <h3 className={`text-xl font-black mb-3 tracking-tight ${c.textColor}`}>{c.title}</h3>
                  <p className={`text-sm leading-relaxed ${c.textColor} opacity-70`}>{c.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
