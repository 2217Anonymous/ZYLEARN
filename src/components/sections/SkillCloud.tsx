import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';
import { SKILLS_DATA, SkillItem } from '@/data/skills';

export const SkillCloud: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);

  return (
    <section className="section-pad bg-cream-100 border-t border-cream-200">
      <div className="container-xl">

        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="label-sm text-ink-500/60 block mb-3">Tech &amp; Tools</span>
          <h2 className="display-md text-ink-950">
            Interactive{' '}
            <span className="text-amber-500">Skill Cloud</span>
          </h2>
          <p className="text-ink-500 text-sm mt-3">
            Hover over any skill to see its real-world application in production environments.
          </p>
        </div>

        {/* Skill Pills Container */}
        <div className="card-white p-8 sm:p-12 relative max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {SKILLS_DATA.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.02, duration: 0.3 }}
                whileHover={{ scale: 1.08, y: -2 }}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="relative cursor-pointer"
              >
                <div className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                  hoveredSkill?.name === skill.name
                    ? 'bg-ink-950 text-amber-400 border-ink-950 shadow-md'
                    : 'bg-cream-100 text-ink-800 border-cream-300 hover:border-ink-950'
                }`}>
                  {skill.name}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hover Detail Card */}
          <div className="min-h-[90px] mt-8 pt-6 border-t border-cream-200 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {hoveredSkill ? (
                <motion.div
                  key={hoveredSkill.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="bg-amber-100 border border-amber-200/80 rounded-2xl p-4 sm:px-6 text-center max-w-2xl"
                >
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="font-black text-ink-950 text-base">{hoveredSkill.name}</span>
                    <span className="tag tag-amber text-[9px]">{hoveredSkill.category}</span>
                  </div>
                  <p className="text-ink-700 text-xs sm:text-sm">{hoveredSkill.description}</p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 text-ink-500/60 text-xs sm:text-sm"
                >
                  <Info className="w-4 h-4 text-amber-500" />
                  <span>Hover over any tech pill above to view career context</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
