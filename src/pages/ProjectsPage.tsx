import React, { useState } from 'react';
import { PROJECTS_DATA, Project } from '@/data/projects';
import { Code2, Cpu, Globe, Database, Server, Smartphone, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionShell } from '@/components/ui/SectionShell';

interface ProjectsPageProps {
  onJoinClick: () => void;
}

const getProjectIcon = (name: string, accent: string) => {
  const cls = `w-7 h-7`;
  const style = { color: accent };
  switch (name) {
    case 'Bot': return <Cpu className={cls} style={style} />;
    case 'Globe': return <Globe className={cls} style={style} />;
    case 'Database': return <Database className={cls} style={style} />;
    case 'Server': return <Server className={cls} style={style} />;
    case 'Smartphone': return <Smartphone className={cls} style={style} />;
    default: return <Code2 className={cls} style={style} />;
  }
};

const ACCENTS = ['#E53935', '#F5C518', '#E53935', '#F5C518', '#E53935', '#F5C518'];

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onJoinClick }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = PROJECTS_DATA.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  );

  return (
    <div className="relative bg-[#ededed]">
      <SectionShell variant="light" showTitle={false} demoLabel="PROJECTS" className="pt-32 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl border border-[#2a2a2e]/10 bg-white p-8 sm:p-12 relative">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#E53935]" />
            <div className="absolute top-1.5 left-0 right-0 h-[3px] bg-[#F5C518]" />

            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[#E53935] mb-4 inline-flex items-center gap-2 mt-2">
              <Code2 className="w-3.5 h-3.5 text-[#F5C518]" /> Capstone Portfolio Building
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#2a2a2e] tracking-tight uppercase leading-[1.02]">
              Real-World Capstone{' '}
              <span className="text-[#F5C518]">Projects</span>
            </h1>

            <p className="text-[#2a2a2e]/50 text-base mt-4 max-w-2xl leading-relaxed">
              Build a resume &amp; GitHub portfolio worth hiring. Work on production-level LLM agents, full-stack web platforms, and automated CRM pipelines.
            </p>
          </div>
        </div>
      </SectionShell>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {['All', 'AI & Automation', 'Full Stack', 'CRM & Business', 'Data & Analytics'].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition-all border ${
                activeCategory === cat
                  ? 'bg-[#E53935] text-white border-[#E53935] shadow-[0_4px_15px_rgba(229,57,53,0.3)]'
                  : 'bg-white text-[#2a2a2e] border-[#2a2a2e]/15 hover:border-[#E53935]/40 hover:text-[#E53935]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((project: Project, idx: number) => {
            const accent = ACCENTS[idx % ACCENTS.length];
            const isYellow = accent === '#F5C518';
            const iconColor = isYellow ? '#2a2a2e' : accent;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={`mega-card ${isYellow ? 'mega-card-yellow' : ''} p-7 flex flex-col justify-between group bg-white`}
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-sm"
                    style={{
                      backgroundColor: isYellow ? '#F5C518' : `${accent}15`,
                      border: `1px solid ${accent}40`,
                    }}
                  >
                    {getProjectIcon(project.iconName, iconColor)}
                  </div>

                  <div className="flex gap-2 mb-4 flex-wrap">
                    <span
                      className="px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-bold"
                      style={{
                        backgroundColor: isYellow ? '#F5C51825' : `${accent}15`,
                        color: isYellow ? '#2a2a2e' : accent,
                        border: `1px solid ${accent}40`,
                      }}
                    >
                      {project.category}
                    </span>
                    <span className="bg-[#ededed] border border-[#2a2a2e]/08 px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-bold text-[#2a2a2e]/55">
                      {project.difficulty}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-[#2a2a2e] mb-2">{project.title}</h3>
                  <p className="text-sm text-[#2a2a2e]/55 leading-relaxed mb-5">{project.description}</p>

                  <div className="space-y-2 pt-4 border-t border-[#2a2a2e]/08 mb-5">
                    <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#E53935]">
                      Skills Mastered:
                    </p>
                    {project.skillsLearned.map((skill, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-[#2a2a2e]/55">
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 text-[#E53935]" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onJoinClick}
                  className="pink-btn text-xs w-full justify-center"
                >
                  Build In Program <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
