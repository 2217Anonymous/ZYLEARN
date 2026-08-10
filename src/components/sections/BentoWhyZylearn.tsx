import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Users, Rocket, Sparkles, CheckCircle2, GitBranch, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const BentoWhyZylearn: React.FC = () => {
  return (
    <section className="py-24 bg-obsidian relative overflow-hidden bg-dot-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badgeText="DIFFERENT BY DESIGN"
          badgeVariant="cyan"
          title="Not A Coaching Class."
          highlightText="A High-Tech Launchpad."
          subtitle="We scrapped boring lecture videos. Instead, you build real software, deploy live AI pipelines, and learn directly from top practitioners."
        />

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Item 1: Giant Featured Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="md:col-span-7 bento-card p-8 rounded-3xl border border-[#F7FAFB] hover:border-emerald-400/40 relative overflow-hidden flex flex-col justify-between group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Terminal className="w-48 h-48 text-emerald-400" />
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="pill-mono bg-[#089396]/10 text-emerald-400 border border-[#089396]/30 px-3 py-1 rounded-full">
                  01 • PRACTICAL ENGINE
                </span>
              </div>

              <h3 className="text-3xl font-extrabold text-[#021433] mb-3">
                Learn By Building Production Software
              </h3>

              <p className="text-[#021433]/70 text-sm sm:text-base leading-relaxed max-w-lg mb-6 font-normal">
                Instead of sitting through 100 hours of passive video lectures, you write clean code, configure vector databases, build AI agents, and deploy live full-stack SaaS applications.
              </p>
            </div>

            {/* Micro Live Code Visual */}
            <div className="bg-navy-950/90 rounded-2xl p-4 border border-[#F7FAFB] font-mono text-xs text-[#021433]/70 space-y-2">
              <div className="flex items-center justify-between text-[11px] text-[#021433]/55">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <GitBranch className="w-3.5 h-3.5" /> git commit -m "deploy live AI agent"
                </span>
                <span className="text-emerald-400 font-bold">SUCCESS 200 OK</span>
              </div>
              <p className="text-[#021433]/55 text-[11px]">
                $ npx zylearn-build --deploy production
              </p>
            </div>

          </motion.div>

          {/* Bento Item 2: Portfolio Proof Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="md:col-span-5 bento-card p-8 rounded-3xl border border-[#F7FAFB] hover:border-cyan-400/40 relative overflow-hidden flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="pill-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-3 py-1 rounded-full">
                  02 • PROOF OF WORK
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#021433] mb-3">
                GitHub Portfolio That Gets You Hired
              </h3>

              <p className="text-[#021433]/70 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                Build 4+ real products that prove your skills on GitHub & LinkedIn instead of sending empty resumes.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-300 space-y-2">
              <div className="flex items-center justify-between font-bold">
                <span>Verified Capstone Products</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
              <p className="text-[11px] text-[#021433]/70">
                RAG Support Bot • HubSpot CRM Portal • Next.js SaaS • Local SEO Engine
              </p>
            </div>
          </motion.div>

          {/* Bento Item 3: Expert Mentors (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="md:col-span-5 bento-card p-8 rounded-3xl border border-[#F7FAFB] hover:border-purple-400/40 relative overflow-hidden flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="pill-mono bg-purple-500/10 text-purple-400 border border-purple-500/30 px-3 py-1 rounded-full">
                  03 • INDUSTRY MENTORS
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#021433] mb-3">
                1-on-1 Code Reviews By Senior Leads
              </h3>

              <p className="text-[#021433]/70 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                Direct mentorship from developers and growth leads working at top tech firms, AI labs, and high-growth agencies.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <img className="w-9 h-9 rounded-full border-2 border-navy-950 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt="Mentor" />
                <img className="w-9 h-9 rounded-full border-2 border-navy-950 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" alt="Mentor" />
                <img className="w-9 h-9 rounded-full border-2 border-navy-950 object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80" alt="Mentor" />
              </div>
              <span className="text-xs font-bold text-[#021433]/70">
                15+ Ex-Google & Amazon Mentors
              </span>
            </div>
          </motion.div>

          {/* Bento Item 4: Career Readiness (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -6 }}
            className="md:col-span-7 bento-card p-8 rounded-3xl border border-[#F7FAFB] hover:border-yellow-400/40 relative overflow-hidden flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="pill-mono bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 px-3 py-1 rounded-full">
                  04 • CAREER ACCELERATION
                </span>
              </div>

              <h3 className="text-3xl font-extrabold text-[#021433] mb-3">
                Turn Skills Into High-Paying Career Opportunities
              </h3>

              <p className="text-[#021433]/70 text-sm sm:text-base leading-relaxed max-w-lg mb-6 font-normal">
                Master ATS resume keywords, clear 1-on-1 mock technical interviews, and access our partner network of hiring startups and tech enterprises.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-2xl bg-[#F7FAFB] border border-[#F7FAFB]">
                <span className="text-xl font-black text-emerald-400">94%</span>
                <span className="text-[10px] text-[#021433]/55 font-semibold block mt-0.5">Placement Rate</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#F7FAFB] border border-[#F7FAFB]">
                <span className="text-xl font-black text-cyan-400">2.8x</span>
                <span className="text-[10px] text-[#021433]/55 font-semibold block mt-0.5">Salary Surge</span>
              </div>
              <div className="p-3 rounded-2xl bg-[#F7FAFB] border border-[#F7FAFB]">
                <span className="text-xl font-black text-yellow-400">120+</span>
                <span className="text-[10px] text-[#021433]/55 font-semibold block mt-0.5">Hiring Partners</span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
