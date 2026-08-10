import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, FolderGit2, Award, Briefcase, ShieldCheck } from 'lucide-react';

export const HeroStats: React.FC = () => {
  const stats = [
    {
      title: 'Hands-on Learning',
      subtitle: 'Build by coding live',
      icon: <Terminal className="w-5 h-5 text-cyan-400" />,
      glowColor: 'border-cyan-500/30',
    },
    {
      title: 'Real-world Projects',
      subtitle: 'Portfolio ready products',
      icon: <FolderGit2 className="w-5 h-5 text-purple-400" />,
      glowColor: 'border-purple-500/30',
    },
    {
      title: 'Expert Mentors',
      subtitle: 'Ex-Google & Amazon leads',
      icon: <Award className="w-5 h-5 text-yellow-400" />,
      glowColor: 'border-yellow-500/30',
    },
    {
      title: 'Career Ready',
      subtitle: 'Resume & mock interviews',
      icon: <Briefcase className="w-5 h-5 text-emerald-400" />,
      glowColor: 'border-[#089396]/30',
    },
    {
      title: 'Certification',
      subtitle: 'Industry recognized badge',
      icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
      glowColor: 'border-blue-500/30',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className={`glass-card p-4 rounded-2xl border ${stat.glowColor} glass-card-hover flex items-center gap-3`}
          >
            <div className="w-10 h-10 rounded-xl bg-[#F7FAFB] border border-[#F7FAFB] flex items-center justify-center shrink-0">
              {stat.icon}
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-extrabold text-[#021433] leading-tight">
                {stat.title}
              </h4>
              <p className="text-[11px] text-[#021433]/55 mt-0.5 font-normal line-clamp-1">
                {stat.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
