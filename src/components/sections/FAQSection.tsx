import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FAQS_DATA } from '@/data/faqs';
import { SectionShell } from '@/components/ui/SectionShell';

const YELLOW = '#F5C518';
const VISIBLE = 3;
const AUTO_MS = 4000;
const ITEM_H = 108; // approximate closed row height for scroll step

export const FAQSection: React.FC = () => {
  const faqs = FAQS_DATA;
  const [index, setIndex] = useState(0);
  const [openId, setOpenId] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);
  const hovering = useRef(false);

  const maxIndex = Math.max(0, faqs.length - VISIBLE);

  // Vertical auto-scroll: advance one row at a time
  useEffect(() => {
    if (paused || maxIndex === 0) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
      setOpenId(null);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, maxIndex]);

  // Pause while answer open; resume when closed if not hovering
  useEffect(() => {
    if (openId) setPaused(true);
    else if (!hovering.current) setPaused(false);
  }, [openId]);

  // Keep open item in view set when scrolling
  useEffect(() => {
    const visibleFaqs = faqs.slice(index, index + VISIBLE);
    if (openId && !visibleFaqs.some((f) => f.question === openId)) {
      setOpenId(null);
    }
  }, [index, faqs, openId]);

  return (
    <SectionShell
      variant="dark"
      showTitle={false}
      demoLabel="FAQ"
      className="py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          <div className="lg:col-span-4">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[#F5C518] mb-4">
              Support
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.05] uppercase">
              Got{' '}
              <span className="text-[#F5C518]">Questions?</span>
            </h2>
            <p className="mt-5 text-sm sm:text-base text-white/45 leading-relaxed max-w-sm">
              Quick answers about programs, workshops, certification, and career support at Zylearn.
            </p>
            <div className="mt-6 h-[2px] w-14" style={{ backgroundColor: YELLOW }} />

            {maxIndex > 0 && (
              <p className="mt-8 font-mono text-[11px] text-white/35 tabular-nums">
                Showing {String(index + 1).padStart(2, '0')}–{String(Math.min(index + VISIBLE, faqs.length)).padStart(2, '0')}
                <span className="text-white/20"> / </span>
                {String(faqs.length).padStart(2, '0')}
              </p>
            )}
          </div>

          <div
            className="lg:col-span-8"
            onMouseEnter={() => {
              hovering.current = true;
              setPaused(true);
            }}
            onMouseLeave={() => {
              hovering.current = false;
              if (!openId) setPaused(false);
            }}
          >
            <div
              className="relative overflow-hidden border border-white/10"
              style={{ height: openId ? 'auto' : ITEM_H * VISIBLE, minHeight: ITEM_H * VISIBLE }}
            >
              {!openId && (
                <>
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-5 bg-gradient-to-b from-[#2a2a2e] to-transparent" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-5 bg-gradient-to-t from-[#2a2a2e] to-transparent" />
                </>
              )}

              <motion.div
                className="will-change-transform"
                animate={{ y: openId ? 0 : -index * ITEM_H }}
                transition={{ type: 'spring', stiffness: 220, damping: 30, mass: 0.85 }}
              >
                {(openId ? faqs.slice(index, index + VISIBLE) : faqs).map((faq, i) => {
                  const realIndex = openId ? index + i : i;
                  const isOpen = openId === faq.question;
                  return (
                    <div
                      key={faq.question}
                      className={`border-b border-white/10 last:border-b-0 ${
                        isOpen ? 'bg-white/[0.04]' : 'bg-transparent'
                      }`}
                      style={openId ? undefined : { minHeight: ITEM_H }}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenId(isOpen ? null : faq.question)}
                        aria-expanded={isOpen}
                        className="w-full flex items-start justify-between gap-4 px-5 sm:px-6 py-5 text-left group"
                        style={openId ? undefined : { minHeight: ITEM_H }}
                      >
                        <div className="min-w-0 flex-1">
                          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/30 mb-2">
                            {String(realIndex + 1).padStart(2, '0')} · {faq.category}
                          </p>
                          <span
                            className={`font-bold text-sm sm:text-base leading-snug transition-colors line-clamp-2 ${
                              isOpen ? 'text-white' : 'text-white/80 group-hover:text-white'
                            }`}
                          >
                            {faq.question}
                          </span>
                        </div>
                        <span
                          className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border transition-colors ${
                            isOpen
                              ? 'bg-[#F5C518] border-[#F5C518] text-[#2a2a2e]'
                              : 'border-white/20 text-white/50 group-hover:border-[#F5C518] group-hover:text-[#F5C518]'
                          }`}
                        >
                          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 sm:px-6 pb-5 pt-0">
                              <div className="h-px w-full bg-white/10 mb-3" />
                              <p className="text-sm text-white/55 leading-relaxed max-w-2xl">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {maxIndex > 0 && (
              <div className="mt-5 flex justify-center">
                <div className="relative h-16 w-1 bg-white/10 overflow-hidden">
                  <motion.div
                    className="absolute left-0 right-0 bg-[#F5C518]"
                    animate={{
                      top: `${(index / Math.max(maxIndex, 1)) * (100 - 100 / (maxIndex + 1))}%`,
                      height: `${100 / (maxIndex + 1)}%`,
                    }}
                    transition={{ type: 'spring', stiffness: 260, damping: 32 }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionShell>
  );
};
