import React from 'react';
import { CareerSection } from '@/components/sections/CareerSection';
import { CertificationSection } from '@/components/sections/CertificationSection';
import { TestimonialsSlider } from '@/components/sections/TestimonialsSlider';
import { CTASection } from '@/components/sections/CTASection';
import { SectionShell } from '@/components/ui/SectionShell';
import { Briefcase } from 'lucide-react';

interface CareerPageProps {
  onJoinClick?: () => void;
}

export const CareerPage: React.FC<CareerPageProps> = ({ onJoinClick }) => {
  return (
    <div className="relative bg-[#ededed]">
      <SectionShell variant="light" showTitle={false} demoLabel="CAREER" className="pt-32 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl border border-[#2a2a2e]/10 bg-white p-8 sm:p-12 relative">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#E53935]" />
            <div className="absolute top-1.5 left-0 right-0 h-[3px] bg-[#F5C518]" />

            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[#E53935] mb-4 inline-flex items-center gap-2 mt-2">
              <Briefcase className="w-3.5 h-3.5 text-[#F5C518]" /> Placement &amp; Growth
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#2a2a2e] tracking-tight uppercase leading-[1.02]">
              Launch Your{' '}
              <span className="text-[#F5C518]">Tech Career</span>
            </h1>

            <p className="text-[#2a2a2e]/50 text-base mt-4 max-w-2xl leading-relaxed">
              Portfolio builds, mock interviews, ISO credentials, and referral coaching — so skills turn into offers.
            </p>
          </div>
        </div>
      </SectionShell>

      <CareerSection onJoinClick={onJoinClick} />
      <CertificationSection onJoinClick={onJoinClick} />
      <TestimonialsSlider />
      <CTASection onJoinClick={onJoinClick} />
    </div>
  );
};
