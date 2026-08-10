import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, FileText, UserCheck, Code, Award, Users, ArrowRight, Zap } from 'lucide-react';

interface CareerSectionProps {
  onJoinClick?: () => void;
}

const CARDS = [
  { title: 'Portfolio Building', desc: 'Create a personal showcase website and GitHub repository with production-ready projects.', icon: Code, accent: '#E53935' },
  { title: 'Resume Roast & ATS Blueprint', desc: 'ATS-optimized resume blueprints highlighting technical projects and real practical skills.', icon: FileText, accent: '#F5C518' },
  { title: '1-on-1 Mock Interviews', desc: 'Technical interviews, live coding drills, system design, and behavioral coaching.', icon: UserCheck, accent: '#E53935' },
  { title: 'Live Client Briefs', desc: 'Collaborate in agile sprints on real client & startup capstone project briefs.', icon: Briefcase, accent: '#F5C518' },
  { title: 'ISO Verified Credentials', desc: 'Receive verifiable digital credentials to showcase on LinkedIn and client proposals.', icon: Award, accent: '#E53935' },
  { title: 'Placement Referrals', desc: 'Direct roadmap coaching and referral network into fast-growing tech companies.', icon: Users, accent: '#F5C518' },
];

export const CareerSection: React.FC<CareerSectionProps> = ({ onJoinClick }) => {
  return (
    <section className="py-24 bg-[#ededed] relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="mega-badge mb-5 inline-flex">
            <Zap className="w-3.5 h-3.5 fill-[#E53935]" /> End-to-End Career Support
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#2a2a2e] tracking-tight mb-4">
            Turn Skills Into <span className="text-[#E53935]">Career Growth</span>
          </h2>
          <p className="text-[#2a2a2e]/55 text-base leading-relaxed">
            We bridge the gap between academic theory and high-paying tech, freelance &amp; business opportunities.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            const isYellow = card.accent === '#F5C518';
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`mega-card ${isYellow ? 'mega-card-yellow' : ''} p-7 group`}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-sm"
                  style={{ backgroundColor: card.accent + '15', border: `1px solid ${card.accent}30` }}
                >
                  <Icon className="w-6 h-6" style={{ color: isYellow ? '#E53935' : card.accent }} />
                </div>
                <h3 className="text-lg font-black text-[#2a2a2e] mb-2">{card.title}</h3>
                <p className="text-sm text-[#2a2a2e]/55 leading-relaxed">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <button onClick={onJoinClick} className="pink-btn">
            Start Career Launchpad <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
