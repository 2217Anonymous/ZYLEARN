import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Cpu, Database, Server, Smartphone, Globe } from 'lucide-react';
import { PROJECTS_DATA, Project } from '@/data/projects';

const CATEGORIES = ['All', 'AI & Automation', 'Full Stack', 'CRM & Business', 'Data & Analytics'];

const getProjectIcon = (name: string) => {
  switch (name) {
    case 'Bot': return <Cpu className="w-8 h-8 text-amber-500" />;
    case 'Globe': return <Globe className="w-8 h-8 text-amber-500" />;
    case 'Database': return <Database className="w-8 h-8 text-amber-500" />;
    case 'Server': return <Server className="w-8 h-8 text-amber-500" />;
    case 'Smartphone': return <Smartphone className="w-8 h-8 text-amber-500" />;
    default: return <Code className="w-8 h-8 text-amber-500" />;
  }
};

export const BuildProjects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = PROJECTS_DATA.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  );

  return (
    <section className="section-pad bg-cream-200">
      <div className="container-xl">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="label-sm text-ink-500/60 block mb-3">Capstone Projects</span>
            <h2 className="display-md text-ink-950">
              Build a portfolio{' '}
              <span className="text-amber-500">worth hiring.</span>
            </h2>
          </div>
          <Link to="/projects" className="btn btn-outline btn-sm self-start">
            All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`btn btn-sm ${activeCategory === cat ? 'btn-ink' : 'btn-outline'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="card-white p-5 flex flex-col gap-4"
              >
                {/* Visual block */}
                <div className="w-full h-28 rounded-xl bg-cream-100 border border-cream-300 flex items-center justify-center">
                  {getProjectIcon(project.iconName)}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    <span className="tag tag-ink text-[9px]">{project.category}</span>
                    <span className="tag tag-amber text-[9px]">{project.difficulty}</span>
                  </div>
                  <h3 className="font-bold text-ink-950 text-base leading-snug line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-ink-500 text-xs mt-1.5 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1 pt-3 border-t border-cream-200">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 bg-cream-200 text-ink-700 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
