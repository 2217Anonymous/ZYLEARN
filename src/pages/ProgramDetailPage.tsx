import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Award, ShieldCheck, Check } from 'lucide-react';
import { PROGRAMS_DATA } from '@/data/programs';
import { SectionShell } from '@/components/ui/SectionShell';

interface ProgramDetailPageProps {
  onJoinClick?: () => void;
}

export const ProgramDetailPage: React.FC<ProgramDetailPageProps> = ({ onJoinClick }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const program = PROGRAMS_DATA.find((p) => p.slug === slug || p.id === slug) || PROGRAMS_DATA[0];

  return (
    <div className="relative bg-[#ededed]">
      <SectionShell variant="light" showTitle={false} demoLabel="PROGRAM" className="pt-32 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#E53935] hover:underline mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Programs
          </button>

          <div className="border border-[#2a2a2e]/10 bg-white p-8 sm:p-12 relative">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#E53935]" />
            <div className="absolute top-1.5 left-0 right-0 h-[3px] bg-[#F5C518]" />

            <div className="flex flex-wrap items-center gap-2 mb-5 mt-2">
              <span className="mega-badge">{program.category}</span>
              <span className="mega-badge-yellow">{program.level}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-[#2a2a2e] tracking-tight uppercase leading-[1.05]">
              {program.title}
            </h1>

            <p className="text-[#2a2a2e]/50 text-base mt-4 max-w-3xl leading-relaxed">
              {program.fullDescription || program.shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-[#2a2a2e]/10 text-sm text-[#2a2a2e]/55 font-medium">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E53935]" /> Duration:{' '}
                <strong className="text-[#2a2a2e]">{program.duration}</strong>
              </span>
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#F5C518]" /> Capstones:{' '}
                <strong className="text-[#2a2a2e]">{program.projectsCount} Projects</strong>
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E53935]" /> Certificate:{' '}
                <strong className="text-[#2a2a2e]">ISO Verified</strong>
              </span>
            </div>

            <div className="mt-8">
              <button type="button" onClick={onJoinClick} className="pink-btn">
                {program.ctaText || 'Reserve Early Bird Seat'}
              </button>
            </div>
          </div>
        </div>
      </SectionShell>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-7">
            <div className="mega-card p-8 bg-white">
              <h3 className="text-2xl font-black text-[#2a2a2e] mb-6">What You Will Master</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {program.topics.map((topic, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                      style={{ backgroundColor: '#E5393515', border: '1px solid #E5393530' }}
                    >
                      <Check className="w-3.5 h-3.5 text-[#E53935]" />
                    </div>
                    <span className="text-[#2a2a2e]/70 text-sm font-medium">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {program.modules && program.modules.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-[#2a2a2e]">Curriculum Roadmap</h3>
                <div className="space-y-4">
                  {program.modules.map((mod, i) => (
                    <div key={i} className="mega-card p-6 flex flex-col sm:flex-row sm:items-start gap-4 bg-white">
                      <div
                        className="w-10 h-10 rounded-xl font-black text-base flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: i % 2 === 0 ? '#E53935' : '#F5C518',
                          color: i % 2 === 0 ? '#fff' : '#2a2a2e',
                        }}
                      >
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-4 mb-1">
                          <h4 className="font-bold text-[#2a2a2e] text-base">{mod.title}</h4>
                          <span className="text-[10px] font-mono text-[#2a2a2e] bg-[#F5C518]/25 border border-[#F5C518]/40 px-2.5 py-1 rounded-lg">
                            {mod.duration}
                          </span>
                        </div>
                        <p className="text-sm text-[#2a2a2e]/55 leading-relaxed">{mod.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mega-card p-8 bg-white">
              <h3 className="text-2xl font-black text-[#2a2a2e] mb-4">Tools &amp; Frameworks Covered</h3>
              <div className="flex flex-wrap gap-2">
                {program.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold"
                    style={{
                      backgroundColor: i % 2 === 0 ? '#E5393515' : '#F5C51825',
                      color: i % 2 === 0 ? '#E53935' : '#2a2a2e',
                      border: `1px solid ${i % 2 === 0 ? '#E5393530' : '#F5C51850'}`,
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="mega-card p-8 space-y-6 sticky top-28 bg-white border border-[#2a2a2e]/10">
              <h3 className="text-xl font-black text-[#2a2a2e]">Target Career Roles</h3>
              <div className="space-y-3">
                {program.careerRoles.map((role, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-sm font-medium text-[#2a2a2e]/70 p-3 bg-[#ededed] rounded-xl border border-[#2a2a2e]/08"
                  >
                    <Check className="w-4 h-4 text-[#E53935] flex-shrink-0" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#2a2a2e]/10 space-y-3">
                <button type="button" onClick={onJoinClick} className="pink-btn w-full justify-center">
                  Enroll In Cohort
                </button>
                <p className="text-xs text-[#2a2a2e]/45 text-center font-mono">Limited cohort seats left.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
