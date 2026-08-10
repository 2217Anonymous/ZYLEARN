import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Play, CheckCircle2, Copy, Sparkles, Layers, Sliders, Zap, Database } from 'lucide-react';

export const HeroSandbox: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'agent' | 'prompt' | 'crm' | 'stats'>('agent');
  const [promptText, setPromptText] = useState('Build a RAG AI Agent that answers customer support queries using Vector DB.');
  const [temperature, setTemperature] = useState(0.3);
  const [copied, setCopied] = useState(false);

  const sampleCode = `import { OpenAI } from 'openai';
import { Pinecone } from '@pinecone-database/pinecone';

// Initialize Zylearn AI Agent Core
const aiAgent = new ZylearnAgent({
  model: 'gpt-4o',
  temperature: ${temperature},
  vectorStore: new Pinecone({ index: 'support-docs' }),
});

export async function processQuery(userQuery: string) {
  const context = await aiAgent.vectorSearch(userQuery);
  const response = await aiAgent.generateWithRAG({
    query: userQuery,
    context: context.matches,
  });
  return response.stream();
}`;

  const copyCode = () => {
    navigator.clipboard.writeText(sampleCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-3xl bento-card p-4 sm:p-6 border border-[#F7FAFB] shadow-2xl relative overflow-hidden">
      
      {/* Top Cyber Window Header */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F7FAFB]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-[#089396]/80" />
          <span className="pill-mono text-[10px] text-[#021433]/55 ml-2">
            zylearn-sandbox-v2.6.exe
          </span>
        </div>

        <div className="flex items-center gap-1 bg-[#F7FAFB] p-1 rounded-xl border border-[#F7FAFB]">
          <button
            onClick={() => setActiveTab('agent')}
            className={`px-3 py-1 rounded-lg text-[11px] font-extrabold transition-all ${
              activeTab === 'agent'
                ? 'bg-[#14519E] text-navy-950 shadow-md'
                : 'text-[#021433]/55 hover:text-white'
            }`}
          >
            Code
          </button>
          <button
            onClick={() => setActiveTab('prompt')}
            className={`px-3 py-1 rounded-lg text-[11px] font-extrabold transition-all ${
              activeTab === 'prompt'
                ? 'bg-[#14519E] text-navy-950 shadow-md'
                : 'text-[#021433]/55 hover:text-white'
            }`}
          >
            Prompt
          </button>
          <button
            onClick={() => setActiveTab('crm')}
            className={`px-3 py-1 rounded-lg text-[11px] font-extrabold transition-all ${
              activeTab === 'crm'
                ? 'bg-[#14519E] text-white shadow-md'
                : 'text-[#021433]/55 hover:text-white'
            }`}
          >
            CRM
          </button>
        </div>
      </div>

      {/* Tab 1: Live Code Terminal */}
      <AnimatePresence mode="wait">
        {activeTab === 'agent' && (
          <motion.div
            key="agent"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between text-xs text-[#021433]/55 font-mono">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Terminal className="w-3.5 h-3.5" /> ai_agent_pipeline.ts
              </span>
              <button
                onClick={copyCode}
                className="flex items-center gap-1 text-[11px] hover:text-cyan-400 transition-colors"
              >
                {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>

            <div className="bg-navy-950/90 rounded-2xl p-4 border border-[#F7FAFB] font-mono text-xs text-[#021433] overflow-x-auto">
              <pre className="text-emerald-400/90 leading-relaxed font-mono">
                {sampleCode}
              </pre>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-[#089396]/10 border border-[#089396]/20 text-xs text-emerald-300">
              <span className="flex items-center gap-2 font-bold">
                <Cpu className="w-4 h-4 animate-pulse" /> Agent Output Stream: Ready (2.1ms latency)
              </span>
              <span className="pill-mono text-[10px] bg-emerald-400/20 px-2 py-0.5 rounded-full text-emerald-300">
                99.8% ACCURACY
              </span>
            </div>
          </motion.div>
        )}

        {/* Tab 2: Prompt Studio */}
        {activeTab === 'prompt' && (
          <motion.div
            key="prompt"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <div>
              <label className="pill-mono text-[#021433]/55 block mb-1">System Instruction Persona</label>
              <input
                type="text"
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                className="w-full glass-input px-3.5 py-2 text-xs rounded-xl text-white"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs text-[#021433]/70 mb-1 font-mono">
                <span>Model Temperature (Creativity):</span>
                <span className="text-cyan-400 font-bold">{temperature}</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={temperature}
                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            <div className="p-3.5 rounded-xl bg-navy-950 border border-[#F7FAFB] space-y-2">
              <span className="text-[11px] font-bold text-purple-400 uppercase tracking-wider block">
                SIMULATED AI RESPONSE GENERATED:
              </span>
              <p className="text-xs text-[#021433]/70 italic">
                "Hello! I am your AI assistant trained on Zylearn database docs. I found 3 relevant matches for your query."
              </p>
            </div>
          </motion.div>
        )}

        {/* Tab 3: CRM Funnel Flow */}
        {activeTab === 'crm' && (
          <motion.div
            key="crm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-3"
          >
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-bold">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <span>Lead Captured</span>
                <span className="block text-[10px] text-[#021433]/55 font-normal mt-1">Landing Form</span>
              </div>
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                <span>Auto WhatsApp</span>
                <span className="block text-[10px] text-[#021433]/55 font-normal mt-1">Make.com Trigger</span>
              </div>
              <div className="p-3 rounded-xl bg-[#089396]/10 border border-[#089396]/30 text-emerald-400">
                <span>Deal Closed</span>
                <span className="block text-[10px] text-[#021433]/55 font-normal mt-1">HubSpot Pipeline</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#F7FAFB] border border-[#F7FAFB] text-xs text-[#021433]/70 flex items-center justify-between">
              <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-yellow-400" /> Automation ROI:</span>
              <span className="font-bold text-emerald-400">+420% Lead Conversion Speed</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
