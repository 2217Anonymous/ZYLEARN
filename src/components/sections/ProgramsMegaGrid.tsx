import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu, Code2, Cloud, Database, Instagram, TrendingUp, Rocket,
  MapPin, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight,
  Pause, Play,
} from 'lucide-react';
import { SectionShell } from '@/components/ui/SectionShell';

const AUTO_MS = 5000;

interface ProgramsMegaGridProps {
  onJoinClick: () => void;
}

const RED = '#E53935';
const YELLOW = '#F5C518';

/** Unsplash hotlinks — themed per track (+ photographer credit) */
const unsplash = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const PROGRAMS = [
  {
    id: 'ai-llm',
    group: 'Tech' as const,
    title: 'AI & LLM Systems',
    blurb: 'Ship production AI — prompts, RAG, agents, and automation that businesses actually use.',
    icon: Cpu,
    weeks: '12 weeks',
    focus: 'Models · Agents · Automation',
    outcomes: [
      'Design prompt systems for GPT, Claude & Gemini',
      'Build RAG pipelines with vector search',
      'Automate workflows with AI tools & agents',
      'Ship a portfolio-ready AI product demo',
    ],
    stack: ['OpenAI', 'LangChain', 'Python', 'Pinecone'],
    image: unsplash('photo-1677442136019-21780ecad995'),
    thumb: unsplash('photo-1677442136019-21780ecad995', 480),
    credit: { name: 'Google DeepMind', url: 'https://unsplash.com/@googledeepmind' },
  },
  {
    id: 'fullstack',
    group: 'Tech' as const,
    title: 'Full-Stack Product Build',
    blurb: 'From pixel-perfect UI to APIs and deploy — one end-to-end product skillset.',
    icon: Code2,
    weeks: '16 weeks',
    focus: 'React · Node · Cloud',
    outcomes: [
      'Craft React + TypeScript interfaces fast',
      'Architect Node APIs with auth & databases',
      'Ship with CI/CD and cloud hosting',
      'Launch a full-stack app employers can click',
    ],
    stack: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
    image: unsplash('photo-1461749280684-dccba630e2f6'),
    thumb: unsplash('photo-1461749280684-dccba630e2f6', 480),
    credit: { name: 'Luca Bravo', url: 'https://unsplash.com/@lucabravo' },
  },
  {
    id: 'data-cloud',
    group: 'Tech' as const,
    title: 'Data & Cloud Foundations',
    blurb: 'Store, query, and scale data on modern cloud platforms without the enterprise fluff.',
    icon: Cloud,
    weeks: '10 weeks',
    focus: 'SQL · Pipelines · Cloud',
    outcomes: [
      'Model data and write sharp SQL',
      'Run pipelines on AWS / GCP basics',
      'Use containers for reliable deploys',
      'Build dashboards that tell a story',
    ],
    stack: ['AWS', 'SQL', 'Docker', 'Python'],
    image: unsplash('photo-1451187580459-43490279c0fa'),
    thumb: unsplash('photo-1451187580459-43490279c0fa', 480),
    credit: { name: 'NASA', url: 'https://unsplash.com/@nasa' },
  },
  {
    id: 'crm',
    group: 'Tech' as const,
    title: 'CRM & Revenue Ops',
    blurb: 'Turn leads into revenue with CRM systems, funnels, and chatbot-assisted sales flows.',
    icon: Database,
    weeks: '8 weeks',
    focus: 'Funnels · CRM · Ops',
    outcomes: [
      'Set up lead scoring and pipelines',
      'Automate follow-ups and nurture sequences',
      'Connect chatbots into CRM workflows',
      'Measure conversion with clear dashboards',
    ],
    stack: ['HubSpot', 'Zoho', 'Zapier', 'WhatsApp'],
    image: unsplash('photo-1556761175-b413da4baf72'),
    thumb: unsplash('photo-1556761175-b413da4baf72', 480),
    credit: { name: 'Austin Distel', url: 'https://unsplash.com/@austindistel' },
  },
  {
    id: 'instagram',
    group: 'Workshops' as const,
    title: 'Instagram Growth Lab',
    blurb: 'Content that gets seen — Reels, hooks, and monetization for creators and brands.',
    icon: Instagram,
    weeks: '4 weeks',
    focus: 'Reels · Brand · Monetize',
    outcomes: [
      'Plan content calendars that compound',
      'Edit Reels built for the algorithm',
      'Land brand collabs and paid offers',
      'Convert followers into clients',
    ],
    stack: ['CapCut', 'Canva', 'Meta Suite', 'Analytics'],
    image: unsplash('photo-1611162616305-c69b3fa7fbe0'),
    thumb: unsplash('photo-1611162616305-c69b3fa7fbe0', 480),
    credit: { name: 'Souvik Banerjee', url: 'https://unsplash.com/@shoobydoo' },
  },
  {
    id: 'digital-marketing',
    group: 'Workshops' as const,
    title: 'Performance Marketing Sprint',
    blurb: 'SEO, paid ads, and funnels that move numbers — not vanity metrics.',
    icon: TrendingUp,
    weeks: '6 weeks',
    focus: 'SEO · Ads · ROI',
    outcomes: [
      'Run Google & Meta campaigns with intent',
      'Write offers that convert on landing pages',
      'Track funnels with GA4 and clear KPIs',
      'Optimize spend toward real ROI',
    ],
    stack: ['Google Ads', 'Meta Ads', 'GA4', 'Semrush'],
    image: unsplash('photo-1460925895917-afdab827c52f'),
    thumb: unsplash('photo-1460925895917-afdab827c52f', 480),
    credit: { name: 'Carlos Muza', url: 'https://unsplash.com/@kmuza' },
  },
  {
    id: 'entrepreneur',
    group: 'Workshops' as const,
    title: 'Founder Launch Studio',
    blurb: 'Validate, position, and pitch — a practical startup playbook for first-time founders.',
    icon: Rocket,
    weeks: '6 weeks',
    focus: 'Validate · Pitch · Scale',
    outcomes: [
      'Validate ideas before you burn cash',
      'Shape brand positioning and GTM',
      'Build a pitch deck investors understand',
      'Use AI to run lean operations',
    ],
    stack: ['Notion', 'Stripe', 'Pitch', 'AI Tools'],
    image: unsplash('photo-1522071820081-009f0129c71c'),
    thumb: unsplash('photo-1522071820081-009f0129c71c', 480),
    credit: { name: 'Annie Spratt', url: 'https://unsplash.com/@anniespratt' },
  },
  {
    id: 'gmb',
    group: 'Workshops' as const,
    title: 'Local Rank & Maps',
    blurb: 'Own your neighborhood search — Google Business Profile optimized for footfall.',
    icon: MapPin,
    weeks: '3 weeks',
    focus: 'GMB · Reviews · Local SEO',
    outcomes: [
      'Optimize your Google Business Profile',
      'Rank higher on Maps and local search',
      'Systemize reviews and trust signals',
      'Drive more local leads every week',
    ],
    stack: ['GMB', 'Maps', 'Local SEO', 'Reviews'],
    image: unsplash('photo-1441986300917-64674bd600d8'),
    thumb: unsplash('photo-1441986300917-64674bd600d8', 480),
    credit: { name: 'Clark Street Mercantile', url: 'https://unsplash.com/@clarkstreetmercantile' },
  },
];

const FILTERS = ['All', 'Tech', 'Workshops'] as const;

export const ProgramsMegaGrid: React.FC<ProgramsMegaGridProps> = ({ onJoinClick }) => {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');
  const [activeId, setActiveId] = useState(PROGRAMS[0].id);
  const [autoPlay, setAutoPlay] = useState(true);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const stripRef = useRef<HTMLDivElement>(null);
  const tickRef = useRef<number | null>(null);
  const startRef = useRef(0);

  const list = PROGRAMS.filter((p) => filter === 'All' || p.group === filter);
  const activeIdx = Math.max(0, list.findIndex((p) => p.id === activeId));
  const active = list[activeIdx] ?? list[0];
  const ActiveIcon = active?.icon ?? Cpu;
  const accent = activeIdx % 2 === 0 ? YELLOW : RED;

  const selectTrack = useCallback((id: string) => {
    setActiveId(id);
    setProgress(0);
    startRef.current = performance.now();
  }, []);

  const go = useCallback(
    (dir: -1 | 1) => {
      if (!list.length) return;
      const next = list[(activeIdx + dir + list.length) % list.length];
      selectTrack(next.id);
    },
    [list, activeIdx, selectTrack],
  );

  const pickFilter = (f: (typeof FILTERS)[number]) => {
    setFilter(f);
    const next = PROGRAMS.find((p) => f === 'All' || p.group === f);
    if (next) selectTrack(next.id);
  };

  // Keep active in filtered list
  useEffect(() => {
    if (!list.some((p) => p.id === activeId) && list[0]) {
      selectTrack(list[0].id);
    }
  }, [list, activeId, selectTrack]);

  // Auto carousel timer (pauses on hover; resumes from same progress)
  useEffect(() => {
    if (!autoPlay || paused || list.length < 2) {
      if (tickRef.current) cancelAnimationFrame(tickRef.current);
      return;
    }

    const baseProgress = progress;
    const remaining = Math.max(0.05, 1 - baseProgress) * AUTO_MS;
    startRef.current = performance.now();

    const loop = (now: number) => {
      const elapsed = now - startRef.current;
      const pct = Math.min(1, baseProgress + (elapsed / remaining) * (1 - baseProgress));
      setProgress(pct);
      if (pct >= 1) {
        const next = list[(activeIdx + 1) % list.length];
        selectTrack(next.id);
        return;
      }
      tickRef.current = requestAnimationFrame(loop);
    };

    tickRef.current = requestAnimationFrame(loop);
    return () => {
      if (tickRef.current) cancelAnimationFrame(tickRef.current);
    };
    // progress intentionally omitted — only restart on slide / pause / autoPlay change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, paused, activeIdx, list, selectTrack]);

  // Center active thumb inside the strip only — never scroll the page (prevents jump to this section on load)
  const thumbScrollReady = useRef(false);
  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const card = strip.querySelector<HTMLElement>(`[data-track-id="${activeId}"]`);
    if (!card) return;

    // Skip first paint so landing stays on the hero
    if (!thumbScrollReady.current) {
      thumbScrollReady.current = true;
      return;
    }

    const target = card.offsetLeft - strip.clientWidth / 2 + card.offsetWidth / 2;
    strip.scrollTo({ left: Math.max(0, target), behavior: 'smooth' });
  }, [activeId]);

  return (
    <SectionShell variant="light" showTitle={false} demoLabel="TRACKS" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 lg:mb-12">
          <div className="max-w-xl">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[#2a2a2e]/40 mb-4">
              Curriculum
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2a2a2e] tracking-tight leading-[1.05] uppercase">
              Tracks That{' '}
              <span className="text-[#F5C518]">Ship Careers</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#2a2a2e]/45 leading-relaxed">
              Real paths. Real projects. Pick a track and see what you&apos;ll ship.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const on = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => pickFilter(f)}
                  className={`px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.16em] border transition-colors ${
                    on
                      ? 'bg-[#F5C518] text-[#2a2a2e] border-[#F5C518]'
                      : 'border-[#2a2a2e]/15 text-[#2a2a2e]/45 hover:border-[#F5C518] hover:text-[#2a2a2e]'
                  }`}
                >
                  {f === 'All' ? 'All Tracks' : f === 'Tech' ? 'AI & Tech' : 'Workshops'}
                </button>
              );
            })}
          </div>
        </div>

        <div
          className="relative mb-5 overflow-hidden border border-[#2a2a2e]/10 min-h-[480px] lg:min-h-[520px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
          }}
        >
          {/* Autoplay progress */}
          <div className="absolute top-0 left-0 right-0 z-20 h-[3px] bg-black/20">
            <div
              className="h-full bg-[#F5C518] origin-left transition-none"
              style={{
                transform: `scaleX(${autoPlay && !paused ? progress : 0})`,
              }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px] lg:min-h-[520px]">
            {/* Left — content stays put; animates L→R on change */}
            <div className="lg:col-span-6 xl:col-span-5 relative order-2 lg:order-1 bg-[#2a2a2e] text-white overflow-hidden min-h-[320px] lg:min-h-[520px]">
              <AnimatePresence initial={false}>
                {active && (
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, x: -56 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 flex flex-col justify-center p-7 sm:p-10 lg:p-12"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <span
                        className="flex h-12 w-12 items-center justify-center"
                        style={{
                          backgroundColor: accent === YELLOW ? YELLOW : RED,
                          color: accent === YELLOW ? '#2a2a2e' : '#fff',
                        }}
                      >
                        <ActiveIcon className="w-6 h-6" />
                      </span>
                      <div>
                        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
                          {String(activeIdx + 1).padStart(2, '0')} / {String(list.length).padStart(2, '0')}
                          <span className="text-[#F5C518]"> · {active.weeks}</span>
                        </p>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-white/40">
                          {active.group} · {active.focus}
                        </p>
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-[1.08] mb-3">
                      {active.title}
                    </h3>
                    <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-6">
                      {active.blurb}
                    </p>

                    <ul className="space-y-2.5 mb-7">
                      {active.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2.5 text-sm text-white/70">
                          <CheckCircle2
                            className="w-4 h-4 mt-0.5 shrink-0"
                            style={{ color: accent }}
                          />
                          {o}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {active.stack.map((s) => (
                        <span
                          key={s}
                          className="font-mono text-[11px] px-3 py-1.5 border border-white/15 text-white/55"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <button type="button" onClick={onJoinClick} className="pink-btn text-xs">
                        Enroll This Track <ArrowRight className="w-4 h-4" />
                      </button>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => go(-1)}
                          aria-label="Previous track"
                          className="w-11 h-11 flex items-center justify-center border border-white/20 text-white/55 hover:border-[#F5C518] hover:text-white transition-colors"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => go(1)}
                          aria-label="Next track"
                          className="w-11 h-11 flex items-center justify-center border border-white/20 text-white/55 hover:border-[#F5C518] hover:text-white transition-colors"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setAutoPlay((v) => !v);
                            setProgress(0);
                            startRef.current = performance.now();
                          }}
                          aria-label={autoPlay ? 'Pause autoplay' : 'Resume autoplay'}
                          className="w-11 h-11 flex items-center justify-center border border-white/20 text-white/55 hover:border-[#F5C518] hover:text-white transition-colors"
                        >
                          {autoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                        </button>
                      </div>
                    </div>

                    <p className="mt-6 text-[10px] text-white/30">
                      Photo:{' '}
                      <a
                        href={`${active.credit.url}?utm_source=zylearn&utm_medium=referral`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-white/55"
                      >
                        {active.credit.name}
                      </a>
                      {' · '}
                      <a
                        href="https://unsplash.com/?utm_source=zylearn&utm_medium=referral"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-white/55"
                      >
                        Unsplash
                      </a>
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right — images only slide */}
            <div className="lg:col-span-6 xl:col-span-7 relative order-1 lg:order-2 min-h-[240px] sm:min-h-[320px] lg:min-h-full overflow-hidden bg-[#1a1a1e]">
              <motion.div
                className="flex h-full min-h-[240px] sm:min-h-[320px] lg:absolute lg:inset-0 will-change-transform"
                animate={{ x: `${-activeIdx * 100}%` }}
                transition={{ type: 'spring', stiffness: 240, damping: 32, mass: 0.9 }}
              >
                {list.map((prog, idx) => {
                  const a = idx % 2 === 0 ? YELLOW : RED;
                  return (
                    <div
                      key={prog.id}
                      className="relative w-full shrink-0 h-full min-h-[240px] sm:min-h-[320px] lg:min-h-full"
                    >
                      <img
                        src={prog.image}
                        alt={prog.title}
                        className="absolute inset-0 h-full w-full object-cover"
                        draggable={false}
                      />
                      <span
                        className="absolute top-0 left-0 w-1.5 h-full"
                        style={{ backgroundColor: a }}
                        aria-hidden
                      />
                      <p
                        className="pointer-events-none absolute bottom-4 right-5 text-6xl sm:text-7xl font-black text-white/25 leading-none select-none"
                        aria-hidden
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </p>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>

        <div
          ref={stripRef}
          className="flex gap-3 overflow-x-auto pb-1 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {list.map((prog) => {
            const on = prog.id === active?.id;
            return (
              <button
                key={prog.id}
                type="button"
                data-track-id={prog.id}
                onClick={() => selectTrack(prog.id)}
                className={`snap-start shrink-0 w-[160px] sm:w-[180px] overflow-hidden text-left border-2 transition-all bg-white ${
                  on
                    ? 'border-[#F5C518]'
                    : 'border-[#2a2a2e]/10 hover:border-[#2a2a2e]/25'
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={prog.thumb}
                    alt=""
                    className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 ${
                      on ? 'scale-105' : ''
                    }`}
                  />
                  {on && (
                    <span className="absolute top-2 left-2 h-1.5 w-1.5 rounded-full bg-[#F5C518]" />
                  )}
                  {on && autoPlay && !paused && (
                    <span
                      className="absolute bottom-0 left-0 h-0.5 bg-[#F5C518] origin-left"
                      style={{ width: `${progress * 100}%` }}
                    />
                  )}
                </div>
                <div className="px-2.5 py-2.5">
                  <p className="font-mono text-[9px] font-bold uppercase tracking-wider mb-0.5 text-[#2a2a2e]/35">
                    {prog.weeks}
                  </p>
                  <p className="text-[12px] font-black leading-snug line-clamp-2 text-[#2a2a2e]">
                    {prog.title}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
};
