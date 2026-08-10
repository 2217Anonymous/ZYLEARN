import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail, Phone, MapPin, Instagram, Youtube, Linkedin,
  Facebook, ArrowUp, CheckCircle2, Zap,
} from 'lucide-react';

interface FooterProps {
  onJoinClick?: () => void;
}

const FEATURES = [
  'Offline & Online Workshops',
  'Lifetime Community Access',
  'ISO Verified Certificate',
  '1-on-1 Mentor Guidance',
];

export const Footer: React.FC<FooterProps> = ({ onJoinClick }) => {
  const [email, setEmail] = useState('');
  const [signedUp, setSignedUp] = useState(false);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSignedUp(true);
    setEmail('');
  };

  return (
    <footer className="relative z-20 bg-[#2a2a2e] text-white">
      {/* Top CTA bar */}
      <div className="border-b border-white/10 bg-[#323236]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="hidden sm:block h-px w-10 bg-[#F5C518] shrink-0" />
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-white/70">
              <Zap className="inline w-3.5 h-3.5 text-[#F5C518] mr-2 -mt-0.5" />
              Early Bird · Limited Seats
            </p>
          </div>
          <button
            type="button"
            onClick={onJoinClick}
            className="inline-flex items-center justify-center px-7 py-3.5 bg-[#F5C518] text-[#2a2a2e] text-[11px] font-black uppercase tracking-[0.18em] hover:bg-[#ffd84a] transition-colors shrink-0"
          >
            Register Instantly
          </button>
        </div>
      </div>

      {/* Main body */}
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1px),
            repeating-linear-gradient(90deg, transparent, transparent calc(8.333% - 1px), rgba(255,255,255,0.04) calc(8.333% - 1px), rgba(255,255,255,0.04) 8.333%)
          `,
          backgroundSize: '40px 40px, 100% 100%',
          backgroundColor: '#1f1f23',
        }}
      >
        {/* Vertical brand */}
        <p
          className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 hidden xl:block select-none font-black uppercase tracking-[0.35em] text-white/[0.06] origin-center -rotate-90 whitespace-nowrap"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', left: '-0.5rem' }}
          aria-hidden
        >
          Zylearn
        </p>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16 xl:pl-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24">

            {/* 01 — About / Early bird pitch */}
            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white mb-5">
                <span className="text-[#F5C518]">01.</span> About Us
              </h3>

              <h4 className="text-2xl sm:text-3xl font-black tracking-tight leading-[1.1] uppercase mb-4">
                <span className="text-white">Join &amp; Be The Change.</span>
                <br />
                <span className="text-[#F5C518]">Book Your Spot.</span>
              </h4>

              <p className="text-sm text-white/50 leading-relaxed max-w-md mb-2">
                Practical training · Real projects · Career growth · Certificate included.
              </p>
              <p className="text-sm font-bold text-[#F5C518] mb-7">
                Upgrade today. Lead tomorrow.
              </p>

              <ul className="space-y-2.5 mb-8">
                {FEATURES.map((feat, i) => (
                  <li key={feat} className="flex items-center gap-2.5 text-sm text-white/70">
                    <CheckCircle2
                      className="w-4 h-4 shrink-0"
                      style={{ color: i % 2 === 0 ? '#E53935' : '#F5C518' }}
                    />
                    {feat}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={onJoinClick}
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/35 text-white text-[11px] font-black uppercase tracking-[0.18em] hover:border-[#F5C518] hover:text-[#F5C518] transition-colors mb-8"
              >
                Register Instantly
              </button>

              <div className="flex items-center gap-2">
                {[
                  { Icon: Facebook, label: 'Facebook' },
                  { Icon: Instagram, label: 'Instagram' },
                  { Icon: Youtube, label: 'YouTube' },
                  { Icon: Linkedin, label: 'LinkedIn' },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-9 h-9 flex items-center justify-center border border-white/20 text-white/60 hover:border-[#F5C518] hover:text-[#F5C518] transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* 02 — Subscribe / Contacts */}
            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white mb-5">
                <span className="text-[#F5C518]">02.</span> Subscribe / Contacts
              </h3>

              <p className="text-sm text-white/50 leading-relaxed max-w-md mb-6">
                Get early-bird alerts, workshop schedules, and admissions updates in your inbox.
              </p>

              {signedUp ? (
                <p className="text-sm font-bold text-[#F5C518] mb-10">
                  You&apos;re on the list — we&apos;ll be in touch.
                </p>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-0 mb-10 max-w-lg border border-white/15"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 bg-[#2a2a2e] px-4 py-3.5 text-sm text-white placeholder:text-white/35 outline-none border-0"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 bg-[#F5C518] text-[#2a2a2e] text-[11px] font-black uppercase tracking-[0.16em] hover:bg-[#ffd84a] transition-colors shrink-0"
                  >
                    Sign Up
                  </button>
                </form>
              )}

              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm">
                  <Phone className="w-4 h-4 text-[#F5C518] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/35 mb-0.5">
                      Phone
                    </p>
                    <a href="tel:+919876543210" className="text-white/80 hover:text-[#F5C518] transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <Mail className="w-4 h-4 text-[#F5C518] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/35 mb-0.5">
                      Email
                    </p>
                    <a
                      href="mailto:admissions@zylearn.com"
                      className="text-white/80 hover:text-[#F5C518] transition-colors"
                    >
                      admissions@zylearn.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-[#F5C518] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/35 mb-0.5">
                      Address
                    </p>
                    <p className="text-white/80">Innovation Hub, Bengaluru</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/40">
                <Link to="/" className="hover:text-[#F5C518] transition-colors">Home</Link>
                <Link to="/about" className="hover:text-[#F5C518] transition-colors">About</Link>
                <Link to="/programs" className="hover:text-[#F5C518] transition-colors">Programs</Link>
                <Link to="/workshops" className="hover:text-[#F5C518] transition-colors">Workshops</Link>
                <Link to="/projects" className="hover:text-[#F5C518] transition-colors">Projects</Link>
                <Link to="/contact" className="hover:text-[#F5C518] transition-colors">Contact</Link>
                <Link to="/career" className="hover:text-[#F5C518] transition-colors">Career</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-[#2a2a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          <p className="text-[11px] text-white/40 uppercase tracking-wider">
            © Zylearn {new Date().getFullYear()} / All rights reserved.
          </p>
          <button
            type="button"
            onClick={scrollTop}
            aria-label="Back to top"
            className="w-9 h-9 flex items-center justify-center bg-[#F5C518] text-[#2a2a2e] hover:bg-[#ffd84a] transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
