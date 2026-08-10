import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

interface OnlineOfflineSplitProps {
  onJoinClick?: () => void;
}

export const OnlineOfflineSplit: React.FC<OnlineOfflineSplitProps> = ({ onJoinClick }) => {
  return (
    <section className="py-24 bg-[#ededed] relative overflow-hidden glass-mesh glass-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="mega-badge mb-3 inline-flex">
            Hybrid Flexibility
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#2a2a2e] tracking-tight">
            Online &amp; Offline <span className="text-[#E53935]">Workshops</span>
          </h2>
          <p className="text-[#2a2a2e]/55 text-base mt-3 leading-relaxed">
            Choose the format that fits your lifestyle. Transition between remote live sessions and hands-on campus bootcamps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

          {/* Online Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mega-card p-8 sm:p-10 flex flex-col justify-between bg-white"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E53935]/10 border border-[#E53935]/20 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-[#E53935]" />
              </div>

              <span className="mega-badge text-[11px] mb-3">100% Remote / Live</span>
              <h3 className="font-black text-[#2a2a2e] text-2xl mb-3">Online Interactive Learning</h3>
              <p className="text-[#2a2a2e]/55 text-sm leading-relaxed mb-6">
                Join live instructor-led Zoom classes from anywhere. Access recorded sessions, 24/7 Discord code-help channels, and interactive AI coding sandboxes.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Live interactive video lectures & Q&A',
                  'Recorded session vault with lifetime access',
                  'Direct 1-on-1 mentor code reviews',
                  'Flexible evening & weekend batch timings'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#2a2a2e]/70 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#E53935] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button onClick={onJoinClick} className="pink-btn w-full justify-center">
              Explore Online Batches <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Offline Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mega-card mega-card-yellow p-8 sm:p-10 flex flex-col justify-between bg-white"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F5C518]/20 border border-[#F5C518]/40 flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-[#E53935]" />
              </div>

              <span className="mega-badge-yellow text-[11px] mb-3">In-Person Campus</span>
              <h3 className="font-black text-[#2a2a2e] text-2xl mb-3">Offline Hybrid Bootcamps</h3>
              <p className="text-[#2a2a2e]/55 text-sm leading-relaxed mb-6">
                Immerse yourself in live campus bootcamps. Collaborate face-to-face with peers, hack together on real projects, and network with tech leaders.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Physical lab access with high-speed internet & hardware',
                  'In-person mock interviews & resume review sessions',
                  'Peer coding hackathons & networking meetups',
                  'Dedicated placement drive days at local tech hubs'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#2a2a2e]/70 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#E53935] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button onClick={onJoinClick} className="yellow-btn w-full justify-center">
              Find Campus Near Me <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
