import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Rocket, CheckCircle2 } from 'lucide-react';
import { SectionShell } from '@/components/ui/SectionShell';
import { MiniCodeScroll } from '@/components/ui/DemoWatermark';

const RED = '#E53935';
const YELLOW = '#F5C518';

const TARGET_AUDIENCE = [
  {
    title: 'College Students',
    subtitle: 'Commerce & Engineering',
    desc: 'Bypass legacy university syllabus. Learn production AI, modern web stacks, and marketing automation while studying.',
    icon: GraduationCap,
    benefits: ['Stand Out & Get Hired', 'Build Production Portfolio', 'Early Internship Access'],
    badge: 'Campus Ready',
    accent: RED,
  },
  {
    title: 'Freelancers & Creators',
    subtitle: 'Digital Services',
    desc: 'Offer AI, SEO, Instagram growth, and CRM setup services to global clients and command higher project rates.',
    icon: Briefcase,
    benefits: ['Start Your Side Hustle', 'Earn. Learn. Grow.', 'High Ticket Client Offers'],
    badge: 'Independence',
    accent: YELLOW,
  },
  {
    title: 'Entrepreneurs & Founders',
    subtitle: 'Business Owners',
    desc: 'Automate business leads with Google Business Profile, CRM work, Meta ads, and custom AI support bots.',
    icon: Rocket,
    benefits: ['Upgrade Your Skills', 'Build Your Future', 'Scale Business Revenue'],
    badge: 'Growth Engine',
    accent: RED,
  },
];

export const WhoItsForSection: React.FC = () => {
  return (
    <SectionShell variant="light" showTitle={false} demoLabel="AUDIENCE" className="pt-24 lg:pt-32 pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-[#E53935] mb-5">
              Tailored Pathways
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#2a2a2e] tracking-[-0.04em] leading-[0.95] uppercase">
              Who It&apos;s <span className="text-[#F5C518]">For</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-[#2a2a2e]/50 text-base leading-relaxed lg:text-right max-w-md lg:ml-auto">
            Built for ambitious minds ready to turn skills into career breakthroughs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:items-start border border-white/10 md:-mb-12">
          {TARGET_AUDIENCE.map((aud, idx) => {
            const Icon = aud.icon;
            const isCenter = idx === 1;
            return (
              <motion.div
                key={aud.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={`group relative px-7 pt-7 pb-7 lg:px-9 lg:pt-9 lg:pb-8 bg-[#2a2a2e] text-white overflow-hidden ${
                  idx > 0 ? 'md:border-l border-white/10 border-t md:border-t-0' : ''
                } ${
                  isCenter
                    ? 'z-10 md:-translate-y-12'
                    : ''
                }`}
              >
                <MiniCodeScroll reverse={idx % 2 === 1} className="right-2 top-2 bottom-2 w-[72px] opacity-45" />
                <div className="relative z-[1]">
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div
                    className="flex h-12 w-12 items-center justify-center"
                    style={{
                      color: aud.accent === YELLOW ? '#2a2a2e' : aud.accent,
                      backgroundColor: aud.accent === YELLOW ? YELLOW : `${RED}22`,
                      border: `1px solid ${aud.accent}`,
                    }}
                  >
                    <Icon className="w-6 h-6" strokeWidth={2} />
                  </div>
                  <span
                    className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-1 border"
                    style={{
                      color: aud.accent === YELLOW ? '#2a2a2e' : aud.accent,
                      borderColor: aud.accent,
                      backgroundColor: aud.accent === YELLOW ? YELLOW : `${RED}18`,
                    }}
                  >
                    {aud.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white tracking-tight mb-1">
                  {aud.title}
                </h3>
                <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#F5C518] mb-3">
                  {aud.subtitle}
                </p>
                <p className="text-sm text-white/50 leading-relaxed mb-5">
                  {aud.desc}
                </p>

                <ul className="space-y-2 pt-4 border-t border-white/15">
                  {aud.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2.5 text-sm text-white/70"
                    >
                      <CheckCircle2
                        className="w-4 h-4 shrink-0"
                        style={{ color: aud.accent }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
};
