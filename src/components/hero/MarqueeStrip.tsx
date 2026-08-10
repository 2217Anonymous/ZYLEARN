import React from 'react';
import { motion } from 'framer-motion';

const items = [
  'AI Agents', 'Full Stack Dev', 'CRM Automation', 'No-Code Tools', 'Python',
  'ChatGPT API', 'Next.js', 'Cloud & DevOps', 'Data Analytics',
  'Digital Marketing', 'React', 'Node.js', 'SEO', 'Figma', 'LangChain',
  'AI Agents', 'Full Stack Dev', 'CRM Automation', 'No-Code Tools', 'Python',
  'ChatGPT API', 'Next.js', 'Cloud & DevOps', 'Data Analytics',
  'Digital Marketing', 'React', 'Node.js', 'SEO', 'Figma', 'LangChain',
];

export const MarqueeStrip: React.FC = () => {
  return (
    <div className="bg-ink-950 py-4 overflow-hidden border-y border-[#F7FAFB]">
      <div className="marquee-wrap">
        <div className="marquee-inner">
          {items.map((item, i) => (
            <React.Fragment key={i}>
              <span className="text-xs font-bold text-cream-200/50 tracking-widest uppercase whitespace-nowrap px-6">
                {item}
              </span>
              <span className="text-amber-500 text-xs">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
