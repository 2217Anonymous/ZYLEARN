import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, TrendingUp, Building2, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

interface TargetAudienceProps {
  onJoinClick?: () => void;
}

export const TargetAudience: React.FC<TargetAudienceProps> = ({ onJoinClick }) => {
  const audiences = [
    {
      title: 'COLLEGE STUDENTS',
      quote: '"Build future-ready skills while studying."',
      desc: 'Don’t wait until graduation to learn modern tech. Build production projects, gain AI proficiency, and stand out in campus placements.',
      icon: <GraduationCap className="w-8 h-8 text-cyan-400" />,
      border: 'hover:border-cyan-400',
    },
    {
      title: 'FRESHERS',
      quote: '"Become job-ready with practical experience."',
      desc: 'Replace resume gaps with a verified portfolio of real web apps, CRM automation setups, and digital marketing results.',
      icon: <Briefcase className="w-8 h-8 text-purple-400" />,
      border: 'hover:border-purple-400',
    },
    {
      title: 'WORKING PROFESSIONALS',
      quote: '"Upgrade your skills and stay ahead."',
      desc: 'Automate manual work using AI, master full-stack architectures, and command higher salary increments.',
      icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
      border: 'hover:border-emerald-400',
    },
    {
      title: 'ENTREPRENEURS',
      quote: '"Use technology and AI to grow your business."',
      desc: 'Scale customer acquisition with Google Local SEO, automate lead funnels with CRM, and build AI MVPs without high developer overhead.',
      icon: <Building2 className="w-8 h-8 text-yellow-400" />,
      border: 'hover:border-yellow-400',
    },
  ];

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badgeText="TAILORED LEARNING TRACKS"
          badgeVariant="cyan"
          title="WHO IS ZYLEAREN"
          highlightText="FOR?"
          subtitle="Whether you are in college, job hunting, advancing your career, or building a company—we have a path tailored for you."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {audiences.map((aud, idx) => (
            <motion.div
              key={aud.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`group glass-card p-8 rounded-3xl border border-[#F7FAFB] ${aud.border} glass-card-hover flex flex-col justify-between`}
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#F7FAFB] border border-[#F7FAFB] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {aud.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#021433] mb-2">
                  {aud.title}
                </h3>

                <p className="text-sm font-bold text-cyan-400 italic mb-4">
                  {aud.quote}
                </p>

                <p className="text-[#021433]/70 text-sm leading-relaxed font-normal">
                  {aud.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F7FAFB]">
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-0 text-xs font-bold text-cyan-400 hover:text-white group-hover:translate-x-1 transition-transform"
                  onClick={onJoinClick}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Join For {aud.title}
                </Button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
