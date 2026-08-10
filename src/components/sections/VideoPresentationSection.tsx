import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { SectionShell } from '@/components/ui/SectionShell';
import { ASSETS } from '@/data/assets';

/** Swap this for Zylearn’s real YouTube video ID */
const YOUTUBE_VIDEO_ID = 'aqz-KE-bpKQ';
const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@zylearn';

interface VideoPresentationSectionProps {
  onJoinClick?: () => void;
}

export const VideoPresentationSection: React.FC<VideoPresentationSectionProps> = ({
  onJoinClick,
}) => {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPlaying(false);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [playing]);

  const openPopup = () => setPlaying(true);
  const closePopup = () => setPlaying(false);

  return (
    <SectionShell
      variant="dark"
      showTitle={false}
      demoLabel="VIDEO"
      className="py-24 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255,255,255,0.22) 1px, transparent 1px),
            repeating-linear-gradient(90deg, transparent, transparent calc(8.333% - 1px), rgba(255,255,255,0.06) calc(8.333% - 1px), rgba(255,255,255,0.06) 8.333%)
          `,
          backgroundSize: '48px 48px, 100% 100%',
        }}
      />

      <span
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 z-[2] w-1 h-8 sm:h-10 bg-[#F5C518]"
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1e] shadow-[0_0_0_1px_rgba(245,197,24,0.08)]">
              <img
                src={ASSETS.thinker}
                alt="Zylearn video presentation"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[#2a2a2e]/35" />

              <button
                type="button"
                onClick={openPopup}
                aria-label="Play video presentation"
                className="absolute inset-0 z-10 flex items-center justify-center group"
              >
                <span className="relative flex items-center justify-center">
                  <span className="absolute inset-0 scale-150 rounded-full bg-[#F5C518]/25 group-hover:bg-[#F5C518]/35 transition-colors" />
                  <span className="relative flex h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem] items-center justify-center rounded-full bg-[#F5C518] shadow-lg group-hover:scale-105 transition-transform">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-white ml-1" />
                  </span>
                </span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="relative lg:pl-2"
          >
            <span
              className="pointer-events-none absolute -right-2 top-4 hidden sm:block w-1 h-10 bg-[#F5C518]"
              aria-hidden
            />

            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-white uppercase tracking-[-0.02em] leading-[1.05]">
              Our Video Presentation
            </h2>
            <div className="mt-4 h-[2px] w-14 bg-[#F5C518]" />

            <p className="mt-6 text-sm sm:text-base text-white/55 leading-relaxed max-w-md">
              See how Zylearn turns skills into shipped projects and real career moves —
              mentors, tracks, and outcomes in one short walkthrough.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={openPopup}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#F5C518] text-white text-[11px] font-black uppercase tracking-[0.18em] hover:bg-[#e0b410] transition-colors"
              >
                Watch Video
              </button>
              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/25 text-white/80 text-[11px] font-black uppercase tracking-[0.18em] hover:border-[#F5C518] hover:text-white transition-colors"
              >
                Our YouTube Channel
              </a>
              {onJoinClick && (
                <button
                  type="button"
                  onClick={onJoinClick}
                  className="inline-flex items-center justify-center px-7 py-3.5 border border-white/25 text-white/80 text-[11px] font-black uppercase tracking-[0.18em] hover:border-[#F5C518] hover:text-white transition-colors"
                >
                  Join Zylearn
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {playing && (
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label="Zylearn video presentation"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 p-4 sm:p-8"
                onClick={closePopup}
              >
                <button
                  type="button"
                  aria-label="Close video"
                  className="absolute top-5 right-5 z-10 flex h-11 w-11 items-center justify-center border border-white/30 text-white hover:border-[#F5C518] hover:text-[#F5C518] transition-colors"
                  onClick={closePopup}
                >
                  <X className="w-5 h-5" />
                </button>

                <motion.div
                  initial={{ scale: 0.94, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.94, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="relative w-full max-w-5xl aspect-video overflow-hidden rounded-xl bg-black border border-white/10 shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <iframe
                    key={playing ? 'open' : 'closed'}
                    title="Zylearn video presentation"
                    src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </SectionShell>
  );
};
