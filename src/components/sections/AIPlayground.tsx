import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Terminal, Play, Sparkles, CheckCircle2, Copy, Cpu, Zap, Code, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface PresetPrompt {
  id: string;
  title: string;
  category: string;
  prompt: string;
  output: string;
  badgeColor: 'cyan' | 'purple' | 'yellow' | 'green';
}

export const AIPlayground: React.FC = () => {
  const presets: PresetPrompt[] = [
    {
      id: 'rag-bot',
      title: 'Build AI RAG Support Agent',
      category: 'AI & LLM',
      badgeColor: 'cyan',
      prompt: 'Create a LangChain RAG pipeline using OpenAI GPT-4o and Pinecone vector store.',
      output: `// 🤖 Zylearn RAG Agent Blueprint
import { LangChain, VectorStore } from '@zylearn/ai-core';

export const agent = new LangChain.Agent({
  model: 'gpt-4o',
  vectorDB: new VectorStore.Pinecone({ index: 'kb-support' }),
  systemPrompt: 'Answer queries accurately with citations.',
});

// Run Vector Search & Stream Tokens
const response = await agent.query('How do I configure CRM webhooks?');
console.log('Streamed Response:', response.text);`
    },
    {
      id: 'fullstack-saas',
      title: 'Full Stack Next.js SaaS Route',
      category: 'Development',
      badgeColor: 'purple',
      prompt: 'Code a Next.js 14 Server Action with Prisma PostgreSQL database mutation.',
      output: `// ⚡ Next.js Server Action
'use server';

import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function createWorkspace(name: string) {
  const workspace = await db.workspace.create({
    data: { name, ownerId: 'usr_99' },
  });
  revalidatePath('/dashboard');
  return { success: true, workspace };
}`
    },
    {
      id: 'crm-flow',
      title: 'HubSpot & Make.com Automation',
      category: 'CRM Automation',
      badgeColor: 'yellow',
      prompt: 'Set up automated lead capture webhook from landing page to HubSpot deals.',
      output: `// 📊 Make.com Automation Flow
1. Webhook Listener (POST /api/leads)
2. Filter: If Lead Score > 75 -> Continue
3. HubSpot API: Create Deal in "Qualified Stage"
4. Send WhatsApp Notification to Sales Lead
5. Log Audit Telemetry to Google Sheets`
    },
    {
      id: 'seo-growth',
      title: 'Google Map Pack #1 Local SEO',
      category: 'Digital Growth',
      badgeColor: 'green',
      prompt: 'Generate automated local keyword map and review request trigger script.',
      output: `// 🚀 Google Local Map Pack SEO Blueprint
Keyword Target: "Best AI Training Center Bengaluru"
Local Citations: 45 NAP Verified Listings
Geotagged Images: 12 High-Res Photos Uploaded
Review Trigger: Send SMS + QR Code 24h Post Workshop
Target Outcome: Rank #1 in Local 3-Pack within 21 Days`
    }
  ];

  const [activePreset, setActivePreset] = useState<PresetPrompt>(presets[0]);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(activePreset.output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-obsidian relative overflow-hidden bg-dot-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badgeText="INTERACTIVE SKILL SIMULATOR"
          badgeVariant="cyan"
          title="TRY THE LIVE"
          highlightText="AI PLAYGROUND"
          subtitle="Click on any project blueprint below to test how Zylearn code and automation workflows execute in real-time."
        />

        {/* Playground Frame */}
        <div className="bento-card rounded-3xl p-6 sm:p-10 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Preset Selector Column */}
            <div className="lg:col-span-5 space-y-3">
              <span className="pill-mono text-cyan-400 block mb-2">
                SELECT A BLUEPRINT TO SIMULATE:
              </span>

              {presets.map((preset) => {
                const isSelected = preset.id === activePreset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => setActivePreset(preset)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-navy-800 border-cyan-400 shadow-lg shadow-cyan-500/20'
                        : 'bg-[#F7FAFB] border-[#F7FAFB] hover:border-white/30 hover:bg-[#F7FAFB]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-white ${
                        isSelected ? 'bg-cyan-500 text-navy-950 font-black' : 'bg-[#F7FAFB]'
                      }`}>
                        {preset.category === 'AI & LLM' && <Cpu className="w-4 h-4" />}
                        {preset.category === 'Development' && <Code className="w-4 h-4" />}
                        {preset.category === 'CRM Automation' && <Zap className="w-4 h-4" />}
                        {preset.category === 'Digital Growth' && <Sparkles className="w-4 h-4" />}
                      </div>
                      <div>
                        <h4 className="text-xs font-extrabold text-[#021433]">
                          {preset.title}
                        </h4>
                        <span className="text-[10px] text-[#021433]/55 font-semibold block">
                          {preset.category}
                        </span>
                      </div>
                    </div>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
                  </button>
                );
              })}
            </div>

            {/* Right: Live Interactive Terminal Output */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePreset.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="bg-navy-950/90 rounded-2xl p-6 border border-white/15 relative overflow-hidden font-mono"
                >
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F7FAFB] text-xs text-[#021433]/55">
                    <span className="flex items-center gap-2 text-cyan-400 font-bold">
                      <Terminal className="w-4 h-4" /> {activePreset.id}_blueprint.ts
                    </span>
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1 hover:text-white transition-colors text-[11px]"
                    >
                      {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      {copied ? 'Copied!' : 'Copy Code'}
                    </button>
                  </div>

                  <p className="text-xs text-[#021433]/55 mb-3 italic">
                    // Prompt Input: "{activePreset.prompt}"
                  </p>

                  <pre className="text-xs text-emerald-400 leading-relaxed overflow-x-auto font-mono bg-black/40 p-4 rounded-xl border border-white/5">
                    {activePreset.output}
                  </pre>

                  <div className="mt-4 flex items-center justify-between text-[11px] text-[#021433]/55 pt-2 border-t border-[#F7FAFB]">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                      <ShieldCheck className="w-4 h-4" /> Tested in Zylearn Live Production Cohorts
                    </span>
                    <span className="pill-mono text-cyan-400">
                      STATUS: 100% WORKING
                    </span>
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
