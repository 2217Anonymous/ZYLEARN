import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

interface CTASectionProps {
  onJoinClick?: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onJoinClick }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-24 bg-[#ededed]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#2a2a2e] border border-[#E53935] rounded-[28px] p-10 md:p-16 flex flex-col lg:flex-row items-center gap-10 relative overflow-hidden shadow-2xl text-white"
        >
          <div className="flex-1 text-center lg:text-left space-y-6 relative z-10">
            <span className="mega-badge inline-flex bg-[#E53935]/20 text-[#F5C518] border-[#E53935]">
              <Zap className="w-3.5 h-3.5 fill-[#F5C518]" />
              Limited Seats — Batch Starting Soon
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Your career in tech starts{' '}
              <span className="text-[#F5C518]">today.</span>
            </h2>

            <p className="text-white/70 text-base sm:text-lg max-w-xl leading-relaxed mx-auto lg:mx-0">
              Join thousands of students who transformed their careers with Zylearn. No prior experience needed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={onJoinClick} className="pink-btn">
                <Zap className="w-5 h-5 fill-white" />
                Book Your Spot Now
              </button>
              <button onClick={onJoinClick} className="outline-btn text-[#E53935] border-[#E53935] hover:bg-[#E53935] hover:border-[#E53935] hover:text-white">
                Talk to Counsellor <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
