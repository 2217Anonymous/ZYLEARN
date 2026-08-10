import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Choose Your Program',
    desc: 'Browse AI, Full Stack, CRM, or Digital Marketing. Pick what fits your goal or start with our free orientation.',
  },
  {
    step: '02',
    title: 'Learn with Live Projects',
    desc: 'Work through structured modules, live coding sessions, and weekly assignments guided by industry experts.',
  },
  {
    step: '03',
    title: 'Build a Portfolio',
    desc: 'Complete 3+ capstone projects — AI apps, SaaS dashboards, automated CRMs — that recruiters love to see.',
  },
  {
    step: '04',
    title: 'Get Hired',
    desc: 'Attend our placement drives, connect with hiring partners, and land your first tech job with our support.',
  },
];

export const LearningJourney: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-pad bg-cream-50">
      <div className="container-xl">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="label-sm text-ink-500/60 block mb-3">How It Works</span>
          <h2 className="display-md text-ink-950">
            Your 4-step{' '}
            <span className="text-amber-500">learning journey</span>
          </h2>
        </div>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-cream-300 hidden md:block" />

          <div className="flex flex-col gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex gap-8 items-start"
              >
                {/* Circle marker */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-ink-950 flex items-center justify-center">
                  <span className="text-xs font-black text-amber-400">{s.step}</span>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8 border-b border-cream-200 last:border-b-0">
                  <h3 className="text-xl font-black text-ink-950 tracking-tight mb-2">{s.title}</h3>
                  <p className="text-ink-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
