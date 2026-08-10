import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Award } from 'lucide-react';
import { PROGRAMS_DATA, Program } from '@/data/programs';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export const ExplorePrograms: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const featured = PROGRAMS_DATA.slice(0, 6);

  return (
    <section className="section-pad bg-cream-100">
      <div className="container-xl">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="label-sm text-ink-500/60 block mb-3">Programs &amp; Courses</span>
            <h2 className="display-md text-ink-950 max-w-lg">
              Everything you need to{' '}
              <span className="text-amber-500">get hired.</span>
            </h2>
          </div>
          <Link to="/programs" className="btn btn-outline btn-sm self-start md:self-auto">
            View All Programs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {featured.map((prog: Program) => (
            <motion.div key={prog.id} variants={item}>
              <Link to={`/programs/${prog.slug}`} className="card-white p-6 flex flex-col gap-5 h-full group">

                {/* Tags */}
                <div className="flex items-start justify-between">
                  <span className="tag tag-ink text-[10px]">
                    {prog.category}
                  </span>
                  <span className="tag tag-amber text-[9px]">
                    {prog.level}
                  </span>
                </div>

                {/* Title & Desc */}
                <div className="flex-1">
                  <h3 className="font-black text-ink-950 text-xl group-hover:text-amber-500 transition-colors">
                    {prog.title}
                  </h3>
                  <p className="text-ink-500 text-sm mt-2 line-clamp-2">
                    {prog.shortDescription}
                  </p>
                </div>

                {/* Details */}
                <div className="pt-4 border-t border-cream-200/80 flex items-center justify-between text-xs text-ink-500/70">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    {prog.duration}
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <Award className="w-3.5 h-3.5 text-ink-700" />
                    {prog.projectsCount} Projects
                  </span>
                </div>

                {/* CTA text */}
                <div className="flex items-center gap-2 font-bold text-xs text-ink-950 group-hover:translate-x-1 transition-transform">
                  Explore Track <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
