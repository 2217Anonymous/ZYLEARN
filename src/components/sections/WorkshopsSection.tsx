import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Video } from 'lucide-react';
import { WORKSHOPS_DATA, Workshop } from '@/data/workshops';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export const WorkshopsSection: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const upcoming = WORKSHOPS_DATA.slice(0, 4);

  return (
    <section className="section-pad bg-ink-950">
      <div className="container-xl">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="label-sm text-cream-200/40 block mb-3">Upcoming Events</span>
            <h2 className="display-md text-cream-50 max-w-lg">
              Live workshops.{' '}
              <span className="text-amber-400">Real learning.</span>
            </h2>
          </div>
          <Link to="/workshops" className="btn btn-outline-white btn-sm self-start md:self-auto">
            All Workshops <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* List */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="flex flex-col gap-4"
        >
          {upcoming.map((ws: Workshop) => (
            <motion.div
              key={ws.id}
              variants={item}
              className="group bg-[#F7FAFB] hover:bg-white/8 border border-white/8 hover:border-amber-400/30 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-5 transition-all"
            >
              {/* Date / mode badge */}
              <div className="w-16 h-16 bg-amber-400 rounded-xl flex flex-col items-center justify-center flex-shrink-0 text-ink-950">
                <span className="text-xs font-bold uppercase leading-none">LIVE</span>
                <span className="text-sm font-black leading-none mt-1">WS</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="tag tag-amber text-[9px]">{ws.category}</span>
                  <span className="text-xs text-cream-200/50 flex items-center gap-1">
                    <Video className="w-3 h-3" /> {ws.mode}
                  </span>
                </div>
                <h3 className="font-bold text-cream-50 text-lg group-hover:text-amber-400 transition-colors">
                  {ws.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs text-cream-200/50 mt-2">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400" />
                    {ws.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    {ws.duration}
                  </span>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="flex sm:flex-col items-center sm:items-end justify-between gap-3 pt-4 sm:pt-0 border-t sm:border-t-0 border-[#F7FAFB] flex-shrink-0">
                <div className="text-left sm:text-right">
                  <span className="font-black text-amber-400 text-xl block">{ws.price}</span>
                  <span className="text-[11px] text-cream-200/40 line-through">{ws.originalPrice}</span>
                </div>
                <Link to="/workshops" className="btn btn-amber btn-sm">
                  Register Now
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
