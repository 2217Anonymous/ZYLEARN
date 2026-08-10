import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquare, Inbox, Cpu, Sparkles, Send,
  UserCheck, Database, RefreshCw,
} from 'lucide-react';
import { SectionShell } from '@/components/ui/SectionShell';
import { MiniCodeScroll } from '@/components/ui/DemoWatermark';

const RED = '#E53935';
const YELLOW = '#F5C518';

const WORKFLOW_STEPS = [
  { id: 1, title: 'User Message', desc: 'Query initiated via Web, WhatsApp, or App.', icon: MessageSquare },
  { id: 2, title: 'Message Received', desc: 'Secure payload parsing & authentication.', icon: Inbox },
  { id: 3, title: 'Process & Search', desc: 'Vector DB retrieval, RAG search & intent.', icon: Cpu },
  { id: 4, title: 'Generate Response', desc: 'LLM synthesis using brand knowledge.', icon: Sparkles },
  { id: 5, title: 'Send Response', desc: 'Streaming answer back to user with citations.', icon: Send },
  { id: 6, title: 'User Action', desc: 'User takes conversion, booking or lead action.', icon: UserCheck },
  { id: 7, title: 'Log & Learn', desc: 'Telemetry stored for analytics & fine-tuning.', icon: Database },
  { id: 8, title: 'Continuous Loop', desc: 'Self-improving AI loop for smarter business.', icon: RefreshCw },
];

const borderFor = (idx: number) => (idx % 2 === 0 ? RED : YELLOW);

export const ChatbotWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % WORKFLOW_STEPS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const activeStepData = WORKFLOW_STEPS[activeStep];
  const ActiveIcon = activeStepData.icon;
  const activeBorder = borderFor(activeStep);

  return (
    <SectionShell variant="dark" showTitle={false} demoLabel="WORKFLOW" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="mega-badge mb-4 inline-flex bg-white/10 text-[#F5C518] border-white/20">
            <Cpu className="w-3.5 h-3.5" /> AI Engine Architecture
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Chatbot <span className="text-[#F5C518]">Workflow Engine</span>
          </h2>
          <p className="text-white/55 text-base leading-relaxed">
            A simple flow that turns conversations into value.{' '}
            <span className="text-[#F5C518] font-bold">Happy users. Smarter conversations. Better businesses.</span>
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {WORKFLOW_STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            const border = borderFor(idx);

            return (
              <motion.div
                key={step.id}
                onClick={() => setActiveStep(idx)}
                whileHover={{ scale: 1.02 }}
                className="p-5 cursor-pointer transition-all duration-300 relative overflow-hidden bg-white rounded-2xl border-2"
                style={{
                  borderColor: border === YELLOW ? YELLOW : border,
                  boxShadow: isActive ? `0 10px 25px ${border}30` : 'none',
                  opacity: isActive ? 1 : 0.92,
                }}
              >
                <MiniCodeScroll reverse={idx % 2 === 1} className="right-1.5 top-1.5 bottom-1.5 w-[64px] opacity-65" />
                {isActive && (
                  <div
                    className="absolute top-0 left-0 right-0 h-1 rounded-t-[14px] z-[1]"
                    style={{ backgroundColor: border }}
                  />
                )}

                <div className="relative z-[1]">
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${border}14`,
                      border: `1px solid ${border}35`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: border }} />
                  </div>
                  <span
                    className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-lg border"
                    style={{
                      color: border,
                      borderColor: `${border}40`,
                      backgroundColor: `${border}12`,
                    }}
                  >
                    Step 0{step.id}
                  </span>
                </div>

                <h3 className="font-bold text-[#2a2a2e] text-sm mb-1">{step.title}</h3>
                <p className="text-xs text-[#2a2a2e]/55 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div
          className="relative overflow-hidden p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto bg-white rounded-2xl border-2"
          style={{
            borderColor: activeBorder,
            boxShadow: `0 15px 35px ${activeBorder}22`,
          }}
        >
          <MiniCodeScroll reverse className="right-2 top-2 bottom-2 w-[70px] opacity-55" />
          <div className="relative z-[1] flex items-center gap-5">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{
                backgroundColor: `${activeBorder}14`,
                border: `2px solid ${activeBorder}40`,
              }}
            >
              <ActiveIcon className="w-7 h-7" style={{ color: activeBorder }} />
            </div>
            <div>
              <span
                className="text-xs font-mono font-bold uppercase tracking-wider"
                style={{ color: activeBorder }}
              >
                Live Active Node
              </span>
              <h4 className="text-xl font-black text-[#2a2a2e]">{activeStepData.title}</h4>
              <p className="text-sm text-[#2a2a2e]/55 mt-1">{activeStepData.desc}</p>
            </div>
          </div>

          <div className="relative z-[1] flex items-center gap-3 flex-shrink-0">
            <span className="text-xs text-[#2a2a2e]/45 font-mono">Step {activeStep + 1} / 8</span>
            <div className="flex gap-1.5">
              {WORKFLOW_STEPS.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className="w-2.5 h-2.5 rounded-full cursor-pointer transition-all"
                  style={{
                    backgroundColor: i === activeStep ? borderFor(i) : '#2a2a2e25',
                    transform: i === activeStep ? 'scale(1.3)' : 'scale(1)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </SectionShell>
  );
};
