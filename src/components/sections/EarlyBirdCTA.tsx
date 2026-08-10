import React, { useState } from 'react';
import { Zap, Phone, Mail, CheckCircle2, Send } from 'lucide-react';
import { ASSETS } from '@/data/assets';
import { CONTACT } from '@/data/contact';
import { SectionShell } from '@/components/ui/SectionShell';
import { MiniCodeScroll } from '@/components/ui/DemoWatermark';

interface EarlyBirdCTAProps {
  onJoinClick: () => void;
}

export const EarlyBirdCTA: React.FC<EarlyBirdCTAProps> = ({ onJoinClick }) => {
  const [registered, setRegistered] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <SectionShell variant="light" showTitle={false} demoLabel="ENROLL" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#2a2a2e] overflow-hidden">

          {/* Left — dark pitch */}
          <div className="lg:col-span-7 bg-[#2a2a2e] text-white p-8 sm:p-12 lg:p-14 space-y-7 relative overflow-hidden border border-[#F5C518]/30">
            <MiniCodeScroll className="right-3 top-3 bottom-3 w-[88px] opacity-50" />
            <div className="relative z-[1] space-y-7">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#F5C518]">
              <Zap className="w-3.5 h-3.5 fill-[#F5C518]" />
              Early Bird · Limited Seats
            </span>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-[0.95] uppercase">
              <span className="text-white">Join &amp; Be The Change.</span>
              <br />
              <span className="text-[#F5C518]">Book Your Spot.</span>
            </h2>

            <p className="text-white/55 text-base leading-relaxed max-w-lg">
              Practical training · Real projects · Career growth · Certificate included.
              <span className="block mt-2 text-[#F5C518] font-bold">Upgrade today. Lead tomorrow.</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {[
                'Offline & Online Workshops',
                'Lifetime Community Access',
                'ISO Verified Certificate',
                '1-on-1 Mentor Guidance',
              ].map((feat, i) => (
                <div key={feat} className="flex items-center gap-2.5 text-white/75">
                  <CheckCircle2
                    className="w-4 h-4 shrink-0"
                    style={{ color: i % 2 === 0 ? '#E53935' : '#F5C518' }}
                  />
                  {feat}
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#F5C518]" />
                {CONTACT.primaryPhoneDisplay}
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E53935]" />
                {CONTACT.email}
              </div>
            </div>
            </div>
          </div>

          {/* Right — light form */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 lg:p-12 space-y-6 text-[#2a2a2e] relative overflow-hidden border border-[#F5C518]/50">
            <MiniCodeScroll reverse className="right-2 top-2 bottom-2 w-[72px] opacity-50" />
            <div className="relative z-[1] space-y-6">
            <img src={ASSETS.logo} alt="Zylearn" className="h-10 w-auto object-contain" />

            <div className="pb-4 border-b border-[#2a2a2e]/10">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#E53935] mb-1">
                Enquiry &amp; Registration
              </p>
              <h3 className="font-black text-2xl tracking-tight">Register Instantly</h3>
            </div>

            {registered ? (
              <div className="py-8 space-y-3 text-center">
                <CheckCircle2 className="w-10 h-10 mx-auto text-[#E53935]" />
                <p className="font-bold text-lg">Spot Locked!</p>
                <p className="text-sm text-[#2a2a2e]/50">
                  Our counsellor will reach out via WhatsApp shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#2a2a2e]/45 block mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3.5 border-2 border-[#2a2a2e]/15 bg-[#ededed] text-sm outline-none focus:border-[#E53935] transition-colors"
                  />
                </div>
                <button type="submit" className="pink-btn w-full justify-center">
                  Lock Early Bird Seat <Send className="w-4 h-4" />
                </button>
              </form>
            )}

            <button
              type="button"
              onClick={onJoinClick}
              className="text-xs font-bold text-[#2a2a2e]/45 hover:text-[#E53935] transition-colors block mx-auto uppercase tracking-wider"
            >
              Fill Detailed Form →
            </button>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
};
