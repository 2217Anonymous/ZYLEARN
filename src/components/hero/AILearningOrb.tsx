import React from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';
import { Cpu, Code, Database, Cloud, Globe, Bot, Layers, Zap } from 'lucide-react';

interface SkillNodeProps {
  label: string;
  icon: React.ReactNode;
  color: string;
  x: number;
  y: number;
  delay: number;
}

const SkillNode: React.FC<SkillNodeProps> = ({ label, icon, color, x, y, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.6, type: 'spring' }}
    style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
    className="absolute -translate-x-1/2 -translate-y-1/2 glass-card px-3 py-2 rounded-2xl flex items-center gap-2 border shadow-xl z-20 cursor-pointer group hover:scale-110 transition-transform"
  >
    <div
      className="w-8 h-8 rounded-xl flex items-center justify-center text-white shrink-0 shadow-md"
      style={{ backgroundColor: color }}
    >
      {icon}
    </div>
    <span className="text-xs font-extrabold text-[#021433] tracking-wide group-hover:text-cyan-400 transition-colors">
      {label}
    </span>
    {/* Pulse Dot */}
    <span
      className="w-2 h-2 rounded-full animate-ping"
      style={{ backgroundColor: color }}
    />
  </motion.div>
);

export const AILearningOrb: React.FC = () => {
  const { normalizedX, normalizedY } = useMousePosition();

  // Floating skill nodes around orb
  const nodes = [
    { label: 'AI Core', icon: <Cpu className="w-4 h-4" />, color: '#F5C518', x: -160, y: -110, delay: 0.2 },
    { label: 'LLM', icon: <Bot className="w-4 h-4" />, color: '#A855F7', x: 140, y: -130, delay: 0.3 },
    { label: 'Frontend', icon: <Code className="w-4 h-4" />, color: '#3B82F6', x: -180, y: 30, delay: 0.4 },
    { label: 'Backend', icon: <Layers className="w-4 h-4" />, color: '#14B8A6', x: 160, y: 40, delay: 0.5 },
    { label: 'Cloud', icon: <Cloud className="w-4 h-4" />, color: '#60A5FA', x: -110, y: 150, delay: 0.6 },
    { label: 'Database', icon: <Database className="w-4 h-4" />, color: '#22C55E', x: 100, y: 140, delay: 0.7 },
    { label: 'CRM Suite', icon: <Zap className="w-4 h-4" />, color: '#EAB308', x: 0, y: -190, delay: 0.8 },
    { label: 'Google SEO', icon: <Globe className="w-4 h-4" />, color: '#EC4899', x: 0, y: 195, delay: 0.9 },
  ];

  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
      
      {/* Parallax Container driven by mouse */}
      <motion.div
        animate={{
          rotateX: normalizedY * 15,
          rotateY: normalizedX * 15,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        className="relative w-full h-full flex items-center justify-center preserve-3d"
      >

        {/* Outer Orbit Rings */}
        <div className="absolute w-[360px] h-[360px] rounded-full border border-cyan-500/20 animate-spin-slow pointer-events-none border-dashed" />
        <div className="absolute w-[440px] h-[440px] rounded-full border border-purple-500/15 animate-spin-slow pointer-events-none border-dashed [animation-direction:reverse]" />

        {/* SVG Connecting Lines to Center */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
          <defs>
            <linearGradient id="lineGradCyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5C518" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {nodes.map((node, i) => (
            <line
              key={i}
              x1="50%"
              y1="50%"
              x2={`calc(50% + ${node.x}px)`}
              y2={`calc(50% + ${node.y}px)`}
              stroke="url(#lineGradCyan)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="opacity-60"
            />
          ))}
        </svg>

        {/* Central Glowing AI Holographic Core */}
        <motion.div
          animate={{ scale: [1, 1.06, 1], rotate: 360 }}
          transition={{
            scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
          }}
          className="relative w-36 h-36 rounded-full bg-[#14519E] p-1 shadow-[0_0_80px_rgba(6,182,212,0.6)] z-20 flex items-center justify-center"
        >
          <div className="w-full h-full rounded-full bg-navy-950/90 backdrop-blur-md flex flex-col items-center justify-center p-2 text-center border border-white/20">
            <Cpu className="w-10 h-10 text-cyan-400 animate-pulse mb-1" />
            <span className="text-[11px] font-extrabold text-[#021433] tracking-widest uppercase">
              ZYLEARN
            </span>
            <span className="text-[9px] font-bold text-cyan-400 tracking-wider">
              AI CORE
            </span>
          </div>
        </motion.div>

        {/* Floating Skill Nodes */}
        {nodes.map((node, idx) => (
          <SkillNode key={idx} {...node} />
        ))}

        {/* Ambient Core Radar Effect */}
        <div className="absolute w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl animate-pulse pointer-events-none" />

      </motion.div>
    </div>
  );
};
