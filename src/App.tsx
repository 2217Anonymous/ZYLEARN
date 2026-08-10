import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { ScrollTitleWatermark } from '@/components/ui/ScrollTitleWatermark';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, X, Zap } from 'lucide-react';

import { Home } from '@/pages/Home';
import { ProgramsPage } from '@/pages/ProgramsPage';
import { ProgramDetailPage } from '@/pages/ProgramDetailPage';
import { WorkshopsPage } from '@/pages/WorkshopsPage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { CareerPage } from '@/pages/CareerPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

// Join Modal — brand standard (dark / yellow / red)
interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TRACKS = [
  'AI & LLM Systems',
  'Full-Stack Product Build',
  'Data & Cloud Foundations',
  'CRM & Revenue Ops',
  'Instagram Growth Lab',
  'Performance Marketing Sprint',
  'Founder Launch Studio',
  'Local Rank & Maps',
];

const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    track: TRACKS[0],
  });

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSuccess(false);
      setForm({ name: '', email: '', phone: '', track: TRACKS[0] });
    }, 400);
  };

  const fieldClass =
    'w-full px-4 py-3.5 bg-[#ededed] border border-[#2a2a2e]/12 text-sm text-[#2a2a2e] outline-none focus:border-[#E53935] transition-colors placeholder:text-[#2a2a2e]/35';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-[#2a2a2e]/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="join-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-md bg-white overflow-hidden border border-[#2a2a2e]/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top accent */}
            <div className="h-1.5 w-full bg-[#E53935]" />
            <div className="h-[3px] w-full bg-[#F5C518]" />

            {/* Header */}
            <div className="flex items-start justify-between gap-4 px-6 sm:px-7 pt-6 pb-0">
              <div>
                <p className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#E53935] mb-3">
                  <Zap className="w-3 h-3 fill-[#F5C518] text-[#F5C518]" />
                  Early Bird · Limited Seats
                </p>
                <h2
                  id="join-modal-title"
                  className="font-black text-[#2a2a2e] text-2xl tracking-tight uppercase leading-tight"
                >
                  Book Your{' '}
                  <span className="text-[#F5C518]">Spot</span>
                </h2>
                <p className="text-[#2a2a2e]/50 text-sm mt-1.5">
                  Practical training · Real projects · Career growth.
                </p>
              </div>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close"
                className="w-9 h-9 flex items-center justify-center border border-[#2a2a2e]/15 text-[#2a2a2e]/45 hover:border-[#E53935] hover:text-[#E53935] transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="px-6 sm:px-7 py-6">
              {success ? (
                <div className="text-center py-4 space-y-4">
                  <div className="w-14 h-14 mx-auto flex items-center justify-center bg-[#E53935]/10 border border-[#E53935]/30">
                    <CheckCircle2 className="w-7 h-7 text-[#E53935]" />
                  </div>
                  <h3 className="font-black text-[#2a2a2e] text-xl uppercase tracking-tight">
                    Spot Locked
                  </h3>
                  <p className="text-[#2a2a2e]/55 text-sm leading-relaxed">
                    Our admissions team will WhatsApp you at{' '}
                    <strong className="text-[#E53935]">{form.phone}</strong> within 4 hours.
                  </p>
                  <button type="button" onClick={handleClose} className="pink-btn w-full justify-center">
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#2a2a2e]/40 block mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#2a2a2e]/40 block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#2a2a2e]/40 block mb-2">
                      Phone (WhatsApp)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#2a2a2e]/40 block mb-2">
                      Program Track
                    </label>
                    <select
                      value={form.track}
                      onChange={(e) => setForm({ ...form, track: e.target.value })}
                      className={`${fieldClass} appearance-none`}
                    >
                      {TRACKS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button type="submit" className="pink-btn w-full justify-center mt-1">
                    Lock My Early Bird Spot
                  </button>
                  <p className="text-[11px] text-[#2a2a2e]/40 text-center uppercase tracking-wider">
                    Free consultation · No spam
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export function App() {
  const [joinOpen, setJoinOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#ededed]">
        <ScrollTitleWatermark />
        <Navbar onJoinClick={() => setJoinOpen(true)} />
        <div className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home onJoinClick={() => setJoinOpen(true)} />} />
            <Route path="/programs" element={<ProgramsPage onJoinClick={() => setJoinOpen(true)} />} />
            <Route path="/programs/:slug" element={<ProgramDetailPage onJoinClick={() => setJoinOpen(true)} />} />
            <Route path="/workshops" element={<WorkshopsPage onJoinClick={() => setJoinOpen(true)} />} />
            <Route path="/projects" element={<ProjectsPage onJoinClick={() => setJoinOpen(true)} />} />
            <Route path="/career" element={<CareerPage onJoinClick={() => setJoinOpen(true)} />} />
            <Route path="/about" element={<AboutPage onJoinClick={() => setJoinOpen(true)} />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer onJoinClick={() => setJoinOpen(true)} />
        <WhatsAppFloat />
        <JoinModal isOpen={joinOpen} onClose={() => setJoinOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
