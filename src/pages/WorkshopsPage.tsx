import React from 'react';
import { OnlineOfflineSplit } from '@/components/sections/OnlineOfflineSplit';
import { Video, MapPin, Instagram, TrendingUp, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionShell } from '@/components/ui/SectionShell';

interface WorkshopsPageProps {
  onJoinClick: () => void;
}

const WORKSHOP_LIST = [
  {
    title: 'Instagram Growth & Monetization',
    icon: Instagram,
    date: 'Saturday & Sunday',
    time: '6:00 PM - 8:30 PM IST',
    mode: 'Online Live Zoom',
    price: '₹499',
    badge: 'Creator Masterclass',
    accent: '#E53935',
    desc: 'Master viral Reels, algorithm hacks, content strategies, and turning followers into paying buyers.',
  },
  {
    title: 'Digital Marketing & SEO Mastery',
    icon: TrendingUp,
    date: 'Upcoming Weekend',
    time: '5:00 PM - 8:00 PM IST',
    mode: 'Online / Hybrid',
    price: '₹799',
    badge: 'High ROI Skill',
    accent: '#F5C518',
    desc: 'Learn Google Ads, Meta Ad Manager, technical SEO optimization, and data-driven marketing analytics.',
  },
  {
    title: 'Entrepreneurship & Startup Launch',
    icon: Rocket,
    date: 'Special Bootcamp',
    time: '10:00 AM - 4:00 PM IST',
    mode: 'In-Person Campus',
    price: '₹1,299',
    badge: 'Founder Edition',
    accent: '#E53935',
    desc: 'Validate startup ideas, draft pitch decks, set up business models, and scale using AI automation tools.',
  },
  {
    title: 'Google My Business Ranking',
    icon: MapPin,
    date: 'Live Interactive Workshop',
    time: '7:00 PM - 9:00 PM IST',
    mode: 'Online Live Zoom',
    price: '₹399',
    badge: 'Local Business Growth',
    accent: '#F5C518',
    desc: 'Create & optimize Google Business Profile, rank #1 in local map packs, and automate customer reviews.',
  },
];

export const WorkshopsPage: React.FC<WorkshopsPageProps> = ({ onJoinClick }) => {
  return (
    <div className="relative bg-[#ededed]">
      <SectionShell variant="light" showTitle={false} demoLabel="WORKSHOPS" className="pt-32 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl border border-[#2a2a2e]/10 bg-white p-8 sm:p-12 relative">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#E53935]" />
            <div className="absolute top-1.5 left-0 right-0 h-[3px] bg-[#F5C518]" />

            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[#E53935] mb-4 inline-flex items-center gap-2 mt-2">
              <Video className="w-3.5 h-3.5 text-[#F5C518]" /> Live Interactive Masterclasses
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#2a2a2e] tracking-tight uppercase leading-[1.02]">
              Live Workshops &amp;{' '}
              <span className="text-[#F5C518]">Classes</span>
            </h1>

            <p className="text-[#2a2a2e]/50 text-base mt-4 max-w-2xl leading-relaxed">
              Intensive hands-on workshops designed to deliver actionable skills in 2 to 4 hours. Learn directly from industry practitioners.
            </p>
          </div>
        </div>
      </SectionShell>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {WORKSHOP_LIST.map((ws, i) => {
            const Icon = ws.icon;
            const isYellow = ws.accent === '#F5C518';
            const iconColor = isYellow ? '#2a2a2e' : ws.accent;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`mega-card ${isYellow ? 'mega-card-yellow' : ''} p-8 flex flex-col justify-between group bg-white`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm"
                      style={{
                        backgroundColor: isYellow ? '#F5C518' : `${ws.accent}15`,
                        border: `1px solid ${ws.accent}40`,
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: iconColor }} />
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider"
                      style={{
                        backgroundColor: isYellow ? '#F5C51825' : `${ws.accent}15`,
                        color: isYellow ? '#2a2a2e' : ws.accent,
                        border: `1px solid ${ws.accent}40`,
                      }}
                    >
                      {ws.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-[#2a2a2e] mb-2">{ws.title}</h3>
                  <p className="text-sm text-[#2a2a2e]/55 leading-relaxed mb-6">{ws.desc}</p>

                  <div className="space-y-2 text-sm font-mono text-[#2a2a2e]/70 mb-6 bg-[#ededed] p-4 rounded-xl border border-[#2a2a2e]/08">
                    <p className="flex items-center justify-between gap-3">
                      <span className="text-[#2a2a2e]/45">Schedule:</span>
                      <strong className="text-[#2a2a2e] text-right">{ws.date} · {ws.time}</strong>
                    </p>
                    <p className="flex items-center justify-between gap-3">
                      <span className="text-[#2a2a2e]/45">Mode:</span>
                      <strong style={{ color: isYellow ? '#E53935' : iconColor }}>{ws.mode}</strong>
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#2a2a2e]/08 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono text-[#2a2a2e]/45 block font-bold">Workshop Fee</span>
                    <span className="text-2xl font-black font-mono text-[#E53935]">{ws.price}</span>
                  </div>
                  <button type="button" onClick={onJoinClick} className="pink-btn text-xs">
                    Book Workshop Slot
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <OnlineOfflineSplit onJoinClick={onJoinClick} />
    </div>
  );
};
