import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS_DATA } from '@/data/testimonials';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionShell } from '@/components/ui/SectionShell';
import { MiniCodeScroll } from '@/components/ui/DemoWatermark';

export const TestimonialsSlider: React.FC = () => {
  const items = TESTIMONIALS_DATA;
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const sync = () => {
      if (window.innerWidth < 768) setPerView(1);
      else if (window.innerWidth < 1024) setPerView(2);
      else setPerView(3);
    };
    sync();
    window.addEventListener('resize', sync);
    return () => window.removeEventListener('resize', sync);
  }, []);

  const maxIndex = Math.max(0, items.length - perView);
  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [maxIndex, index]);

  const pageCount = maxIndex + 1;
  const slidePct = 100 / perView;

  return (
    <SectionShell variant="light" showTitle={false} demoLabel="TESTIMONIALS" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-14 lg:mb-20 max-w-xl">
          <div className="flex gap-4">
            <span className="mt-1 w-[3px] self-stretch bg-[#F5C518] shrink-0" />
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#2a2a2e]/45 mb-2">
                Reviews
              </p>
              <div className="h-px w-10 bg-[#2a2a2e]/20 mb-4" />
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-[#2a2a2e] tracking-tight leading-[1.1] uppercase">
                Our Learners And{' '}
                <span className="text-[#F5C518]">Testimonials</span>
              </h2>
              <p className="mt-4 text-sm text-[#2a2a2e]/45 leading-relaxed max-w-md">
                Real outcomes from students, freshers, and founders who trained with Zylearn.
              </p>

              <div className="mt-8 flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  disabled={index === 0}
                  aria-label="Previous testimonials"
                  className="w-11 h-11 flex items-center justify-center border border-[#2a2a2e]/15 text-[#2a2a2e]/50 hover:border-[#F5C518] hover:text-[#2a2a2e] disabled:opacity-30 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  disabled={index >= maxIndex}
                  aria-label="Next testimonials"
                  className="w-11 h-11 flex items-center justify-center border border-[#2a2a2e]/15 text-[#2a2a2e]/50 hover:border-[#F5C518] hover:text-[#2a2a2e] disabled:opacity-30 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden pt-10 -mx-2">
          <motion.div
            className="flex"
            animate={{ x: `${-index * slidePct}%` }}
            transition={{ type: 'spring', stiffness: 280, damping: 32 }}
          >
            {items.map((t, i) => {
              const isFeatured =
                (perView === 3 && i === index + 1) ||
                (perView === 2 && i === index) ||
                (perView === 1 && i === index);

              return (
                <div
                  key={t.id}
                  className="relative shrink-0 px-3"
                  style={{ width: `${slidePct}%` }}
                >
                  <span className="absolute left-1/2 -translate-x-1/2 top-0 z-20 w-2 h-2 bg-[#F5C518]" />

                  {isFeatured && (
                    <div className="absolute left-1/2 -translate-x-1/2 -top-2 z-20">
                      <img
                        src={t.avatarUrl}
                        alt=""
                        className="w-16 h-16 rounded-full object-cover border-4 border-[#ededed] shadow-md"
                      />
                    </div>
                  )}

                  <div
                    className={`relative h-full min-h-[280px] bg-white border border-[#2a2a2e]/08 shadow-[0_8px_30px_rgba(42,42,46,0.06)] overflow-hidden pb-7 px-6 sm:px-7 ${
                      isFeatured ? 'pt-12' : 'pt-10'
                    }`}
                  >
                    <MiniCodeScroll reverse={i % 2 === 1} className="right-1 top-1 bottom-1 w-[56px] opacity-40" />

                    <span className="absolute top-5 left-5 font-serif text-5xl leading-none text-[#F5C518]/35 select-none" aria-hidden>
                      &ldquo;
                    </span>
                    <span className="absolute bottom-5 right-5 font-serif text-5xl leading-none text-[#F5C518]/35 select-none" aria-hidden>
                      &rdquo;
                    </span>

                    <div className="relative z-[1]">
                      <div className="flex gap-0.5 mb-4">
                        {[...Array(t.rating)].map((_, j) => (
                          <Star key={j} className="w-3.5 h-3.5 fill-[#F5C518] text-[#F5C518]" />
                        ))}
                      </div>

                      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#2a2a2e] mb-3">
                        {t.name} — <span className="text-[#2a2a2e]/45">Happy Learner</span>
                      </p>

                      <p className="text-[#2a2a2e]/50 text-[15px] leading-relaxed italic font-serif">
                        {t.content}
                      </p>

                      <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.18em] text-[#2a2a2e]/40">
                        Via Zylearn · {t.programTaken}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="mt-10 flex justify-center gap-2.5">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === index
                  ? 'bg-transparent border-2 border-[#F5C518] scale-110'
                  : 'bg-[#2a2a2e]/20 hover:bg-[#2a2a2e]/35'
              }`}
            />
          ))}
        </div>
      </div>
    </SectionShell>
  );
};
