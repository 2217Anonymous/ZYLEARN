import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Zap, Sparkles, Terminal, Wrench, Briefcase, Activity, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';

interface AISkillNode {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  color: string;
  shortDesc: string;
  impact: string;
  tools: string[];
}

export const AIForAllDashboard: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('prompt-eng');

  const nodes: AISkillNode[] = [
    {
      id: 'ai-fund',
      title: 'AI Fundamentals',
      category: 'Foundation',
      icon: <Cpu className="w-5 h-5" />,
      color: '#F5C518',
      shortDesc: 'Understand neural tokens, transformer models, embeddings, and context limits.',
      impact: 'Build a solid mental model of how LLMs interpret and process data.',
      tools: ['Transformer Architecture', 'Tokenization', 'Vector Math', 'Python']
    },
    {
      id: 'prompt-eng',
      title: 'Prompt Engineering',
      category: 'Core Skill',
      icon: <Terminal className="w-5 h-5" />,
      color: '#3B82F6',
      shortDesc: 'Master zero-shot, few-shot, system persona design & chain-of-thought logic.',
      impact: 'Extract 10x higher quality code, copy, and analysis from any LLM.',
      tools: ['ChatGPT', 'Claude 3 Opus', 'System Prompting', 'JSON Mode']
    },
    {
      id: 'ai-auto',
      title: 'AI Automation',
      category: 'Workflows',
      icon: <Zap className="w-5 h-5" />,
      color: '#A855F7',
      shortDesc: 'Connect LLM APIs to Make.com, Zapier, Google Sheets, and Slack.',
      impact: 'Automate 80% of repetitive operational & lead response tasks.',
      tools: ['Make.com', 'Zapier', 'OpenAI API', 'Webhooks']
    },
    {
      id: 'ai-tools',
      title: 'AI Tools & Agents',
      category: 'Productivity',
      icon: <Wrench className="w-5 h-5" />,
      color: '#14B8A6',
      shortDesc: 'Deploy autonomous agents (LangChain, AutoGPT) that search & code.',
      impact: 'Build self-correcting agents capable of multi-step internet research.',
      tools: ['LangChain', 'Pinecone', 'AutoGPT', 'Midjourney']
    },
    {
      id: 'ai-biz',
      title: 'AI for Business',
      category: 'Strategy',
      icon: <Briefcase className="w-5 h-5" />,
      color: '#EAB308',
      shortDesc: 'Integrate AI into CRM, customer support bots, and sales funnels.',
      impact: 'Reduce support costs by 60% while speeding up customer resolution.',
      tools: ['Customer Service Bots', 'Sales Prospecting', 'CRM AI']
    },
    {
      id: 'ai-prod',
      title: 'AI Productivity',
      category: 'Personal Growth',
      icon: <Activity className="w-5 h-5" />,
      color: '#EC4899',
      shortDesc: 'Accelerate coding, writing, research, and data presentation 5x faster.',
      impact: 'Finish full days of work in 2 hours with AI copilot workflows.',
      tools: ['GitHub Copilot', 'Perplexity Pro', 'Notion AI', 'Gamma']
    }
  ];

  const activeNode = nodes.find(n => n.id === activeNodeId) || nodes[0];

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badgeText="EVERYONE'S AI ADVANTAGE"
          badgeVariant="cyan"
          title="AI IS NOT THE FUTURE."
          highlightText="IT'S YOUR NEXT SKILL."
          subtitle="Learn how AI can transform your career, business, and everyday work through practical implementation."
        />

        {/* Dashboard Frame */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Interactive AI Core & Nodes Graph */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center relative min-h-[380px] py-4">
              
              {/* Central AI Core */}
              <div className="w-28 h-28 rounded-full bg-[#14519E] p-1 shadow-[0_0_50px_rgba(6,182,212,0.5)] flex items-center justify-center z-20 mb-8 lg:mb-0">
                <div className="w-full h-full rounded-full bg-navy-950 flex flex-col items-center justify-center text-center p-2">
                  <Cpu className="w-8 h-8 text-cyan-400 animate-pulse" />
                  <span className="text-[10px] font-black text-[#021433] tracking-widest uppercase">
                    AI CORE
                  </span>
                </div>
              </div>

              {/* Surrounding Nodes Grid */}
              <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3 z-20">
                {nodes.map((node) => {
                  const isSelected = node.id === activeNodeId;
                  return (
                    <motion.button
                      key={node.id}
                      onClick={() => setActiveNodeId(node.id)}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-3.5 rounded-2xl border text-left transition-all flex items-center gap-3 cursor-pointer ${
                        isSelected
                          ? 'bg-navy-800 border-cyan-400 shadow-lg shadow-cyan-500/20'
                          : 'bg-[#F7FAFB] border-[#F7FAFB] hover:border-white/30 hover:bg-[#F7FAFB]'
                      }`}
                    >
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center text-white shrink-0"
                        style={{ backgroundColor: node.color }}
                      >
                        {node.icon}
                      </div>
                      <div>
                        <h4 className="text-xs font-extrabold text-[#021433] leading-tight">
                          {node.title}
                        </h4>
                        <span className="text-[10px] text-[#021433]/55 font-semibold block mt-0.5">
                          {node.category}
                        </span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

            </div>

            {/* Right Col: Live Skill Inspector Card */}
            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-6 sm:p-8 rounded-2xl border border-white/15 bg-navy-900/90 relative overflow-hidden"
                >
                  {/* Top Bar Glow */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ backgroundColor: activeNode.color }}
                  />

                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="cyan" icon={<Sparkles className="w-3 h-3 text-cyan-400" />}>
                      {activeNode.category}
                    </Badge>
                    <span className="text-xs font-bold text-[#021433]/55 uppercase tracking-widest">
                      ACTIVE NODE
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#021433] tracking-tight mb-2">
                    {activeNode.title}
                  </h3>

                  <p className="text-[#021433]/70 text-sm leading-relaxed mb-6 font-normal">
                    {activeNode.shortDesc}
                  </p>

                  {/* Career Impact Box */}
                  <div className="p-4 rounded-xl bg-[#F7FAFB] border border-[#F7FAFB] mb-6">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                      REAL-WORLD IMPACT:
                    </span>
                    <p className="text-xs text-[#021433] leading-normal">
                      {activeNode.impact}
                    </p>
                  </div>

                  {/* Key Tools */}
                  <div>
                    <span className="text-xs font-bold text-[#021433]/55 uppercase tracking-wider block mb-2">
                      TOOLS YOU WILL MASTER:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeNode.tools.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#F7FAFB] border border-[#F7FAFB] text-[#021433] flex items-center gap-1.5"
                        >
                          <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
