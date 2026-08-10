import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Users } from 'lucide-react';
import { INSTRUCTORS_DATA, Instructor } from '@/data/instructors';

export const InstructorsSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden glass-mesh bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="mega-badge mb-4 inline-flex">
            <Users className="w-3.5 h-3.5" /> Industry Mentors
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#021433] tracking-tight">
            Learn From <span className="text-[#14519E]">The Best</span>
          </h2>
          <p className="text-[#021433]/55 text-base mt-4 leading-relaxed">
            Senior AI engineers, full-stack tech leads, and digital growth directors from top tech companies.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {INSTRUCTORS_DATA.map((inst: Instructor, idx: number) => (
            <motion.div
              key={inst.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="mega-card overflow-hidden group bg-white"
            >
              <div className="relative w-full aspect-square bg-[#F7FAFB] overflow-hidden">
                <img
                  src={inst.avatarUrl}
                  alt={inst.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#021433]/50 opacity-60" />
              </div>

              <div className="p-6">
                <h3 className="font-black text-[#021433] text-lg group-hover:text-[#14519E] transition-colors">{inst.name}</h3>
                <p className="text-xs text-[#14519E] font-mono font-bold mt-0.5">{inst.role}</p>
                <p className="text-[11px] text-[#021433]/55 font-mono mt-0.5">{inst.company}</p>
                <p className="text-xs text-[#021433]/55 mt-3 line-clamp-2">{inst.bio}</p>

                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[#F7FAFB] text-[#021433]/45">
                  {inst.socials?.linkedin && (
                    <a href={inst.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#14519E] transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {inst.socials?.twitter && (
                    <a href={inst.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-[#14519E] transition-colors">
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
