import React from 'react';
import { ProgramsMegaGrid } from '@/components/sections/ProgramsMegaGrid';
import { SkillTechGrid } from '@/components/sections/SkillTechGrid';
import { Cpu } from 'lucide-react';
import { SectionShell } from '@/components/ui/SectionShell';

interface ProgramsPageProps {
  onJoinClick: () => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ onJoinClick }) => {
  return (
    <div className="relative bg-[#ededed]">
      <SectionShell variant="light" showTitle={false} demoLabel="PROGRAMS" className="pt-32 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl border border-[#2a2a2e]/10 bg-white p-8 sm:p-12 relative">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#E53935]" />
            <div className="absolute top-1.5 left-0 right-0 h-[3px] bg-[#F5C518]" />

            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[#E53935] mb-4 inline-flex items-center gap-2 mt-2">
              <Cpu className="w-3.5 h-3.5 text-[#F5C518]" /> Complete Curriculum Roadmap
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#2a2a2e] tracking-tight uppercase leading-[1.02]">
              Accelerate Your{' '}
              <span className="text-[#F5C518]">Career &amp; Skills</span>
            </h1>

            <p className="text-[#2a2a2e]/50 text-base mt-4 max-w-2xl leading-relaxed">
              Project-driven programs from fundamentals to production mastery — AI apps, full-stack builds, and CRM automations.
            </p>
          </div>
        </div>
      </SectionShell>

      <ProgramsMegaGrid onJoinClick={onJoinClick} />
      <SkillTechGrid />
    </div>
  );
};
