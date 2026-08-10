import React from 'react';
import { Target, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { SectionShell } from '@/components/ui/SectionShell';

interface AboutPageProps {
  onJoinClick: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onJoinClick }) => {
  return (
    <div className="bg-[#ededed]">
      <SectionShell
        variant="light"
        showTitle={false}
        demoLabel="ABOUT"
        className="pt-32 pb-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="border-b border-[#2a2a2e]/10 pb-12 space-y-5 max-w-3xl">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[#E53935] inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F5C518]" /> Redefining Education
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#2a2a2e] tracking-tight uppercase leading-[0.95]">
              Who We Are &amp; <br />
              <span className="text-[#F5C518]">Our Mission</span>
            </h1>
            <p className="text-[#2a2a2e]/55 text-base mt-2 max-w-2xl leading-relaxed">
              Zylearn was founded with a singular mission: to eliminate outdated academic syllabus and equip college students, freshers, freelancers, and entrepreneurs with practical AI and modern tech skills.
            </p>
            <button type="button" onClick={onJoinClick} className="pink-btn text-xs mt-2">
              Join Zylearn
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-[#2a2a2e]/10 bg-white">
            {[
              {
                n: '01',
                icon: Target,
                title: 'Our Vision',
                body: 'Make cutting-edge AI and tech skills accessible to every student, fresher, developer, and business founder across the globe.',
                accent: '#E53935',
              },
              {
                n: '02',
                icon: ShieldCheck,
                title: 'Our Promise',
                body: 'Practical, mentor-led learning with real projects, verifiable credentials, and career outcomes — not empty certificates.',
                accent: '#F5C518',
              },
              {
                n: '03',
                icon: Heart,
                title: 'Our Community',
                body: 'A lifelong network of alumni, mentors, and founders who share opportunities, feedback, and growth.',
                accent: '#E53935',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`p-8 space-y-5 ${
                    idx > 0 ? 'md:border-l border-t md:border-t-0 border-[#2a2a2e]/10' : ''
                  }`}
                >
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#2a2a2e]/30">
                    {item.n}
                  </p>
                  <div
                    className="w-11 h-11 flex items-center justify-center border"
                    style={{
                      borderColor: item.accent,
                      backgroundColor: item.accent === '#F5C518' ? '#F5C518' : `${item.accent}18`,
                      color: item.accent === '#F5C518' ? '#2a2a2e' : item.accent,
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-black text-[#2a2a2e]">{item.title}</h3>
                  <p className="text-sm text-[#2a2a2e]/55 leading-relaxed">{item.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </SectionShell>
    </div>
  );
};
