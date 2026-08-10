import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Code2, Cloud, MapPin, Layers } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    name: 'AI & LLM',
    icon: Cpu,
    accent: '#E53935',
    desc: 'Prompt Engineering, RAG Pipelines, Autonomous AI Agents & Business Use Cases.',
    tags: ['GPT-4o', 'Claude', 'LangChain', 'Vector DB', 'Midjourney'],
  },
  {
    name: 'CRM Automation',
    icon: Database,
    accent: '#F5C518',
    desc: 'Automated Sales Funnels, Lead Management & Customer Retention Pipelines.',
    tags: ['HubSpot', 'Zoho CRM', 'Bitrix24', 'WhatsApp API', 'Zapier'],
  },
  {
    name: 'Front-End Development',
    icon: Code2,
    accent: '#E53935',
    desc: 'Modern User Interfaces, Responsive Web Design & Interactive Components.',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion'],
  },
  {
    name: 'Back-End & Cloud',
    icon: Cloud,
    accent: '#F5C518',
    desc: 'Production API Endpoints, Serverless Functions & Database Engineering.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'AWS'],
  },
  {
    name: 'Google Platforms',
    icon: MapPin,
    accent: '#E53935',
    desc: 'Google Business Profile Optimization, Local SEO Rank & Google Ads ROI.',
    tags: ['GMB Rank', 'Local Search', 'Google Ads', 'GA4 Analytics', 'Google Workspace'],
  },
];

export const SkillTechGrid: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#ededed] border-t border-[#2a2a2e]/08">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="mega-badge mb-3 inline-flex">
            <Layers className="w-3.5 h-3.5" /> Full Tech Spectrum
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#2a2a2e] tracking-tight">
            Core Technologies &amp; <span className="text-[#E53935]">Skill Areas</span>
          </h2>
          <p className="text-[#2a2a2e]/55 text-base mt-3 leading-relaxed">
            Every technology you master at Zylearn is aligned with real job descriptions and enterprise market needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((skill, idx) => {
            const Icon = skill.icon;
            const isYellow = skill.accent === '#F5C518';
            const iconColor = isYellow ? '#2a2a2e' : skill.accent;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className={`mega-card ${isYellow ? 'mega-card-yellow' : ''} p-7 group bg-white`}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-sm"
                  style={{
                    backgroundColor: isYellow ? '#F5C518' : skill.accent + '15',
                    border: `1px solid ${skill.accent}40`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: iconColor }} />
                </div>

                <h3 className="text-xl font-black text-[#2a2a2e] mb-2 group-hover:text-[#E53935] transition-colors">
                  {skill.name}
                </h3>
                <p className="text-sm text-[#2a2a2e]/55 leading-relaxed mb-6">{skill.desc}</p>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#ededed]">
                  {skill.tags.map((t, i) => (
                    <span key={i} className="text-[11px] font-mono bg-[#ededed] px-2.5 py-1 rounded-md text-[#2a2a2e]/70 border border-[#ededed]">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
