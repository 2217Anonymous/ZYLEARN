import React, { useMemo, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { DemoWatermark } from '@/components/ui/DemoWatermark';

const CODE_SNIPPETS = [
  'const zylearn = await bootstrap({ ai: true, mentors: true });',
  'export async function trainModel(dataset: Tensor[]) {',
  '  const pipeline = new RAGPipeline({ embeddings: "openai" });',
  '  return pipeline.query(prompt, { topK: 8 });',
  '}',
  'interface CareerPath { skill: string; projects: number; hired: boolean }',
  'npm run build && deploy --env production',
  'SELECT * FROM learners WHERE placement_rate >= 0.98;',
  'git commit -m "feat: ship fullstack portfolio"',
  'docker compose up -d redis vector-db api',
  'const agents = createAgents(["tutor", "reviewer", "coach"]);',
  'while (learning) { ship(); iterate(); grow(); }',
  'type Stack = "React" | "Node" | "Python" | "LLM" | "Cloud";',
  'console.log("Welcome to Zylearn — AI Learning Platform");',
  'huggingface.load("zylearn/career-coach-v2");',
  'await prisma.user.update({ data: { certified: true } });',
  'curl -X POST /api/enroll -d \'{"track":"ai-llm"}\'',
  'framer.animate(hero, { opacity: 1, y: 0 });',
  'export default function Hero() { return <Platform />; }',
  'const score = await evaluateSkills(learner.id);',
];

type Variant = 'light' | 'dark';

const CodeRow: React.FC<{
  lines: string[];
  reverse?: boolean;
  duration?: number;
  rowIndex: number;
  variant: Variant;
}> = ({ lines, reverse = false, duration = 220, rowIndex, variant }) => {
  const sequence = useMemo(() => [...lines, ...lines, ...lines], [lines]);
  const muted = variant === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(30,30,30,0.08)';
  const accent = variant === 'dark' ? 'rgba(36,185,188,0.18)' : 'rgba(8,147,150,0.2)';

  return (
    <div className="relative w-full overflow-hidden py-1.5 sm:py-2">
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap will-change-transform"
        animate={{ x: reverse ? ['-33.333%', '0%'] : ['0%', '-33.333%'] }}
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      >
        {sequence.map((line, i) => (
          <span
            key={`${rowIndex}-${i}`}
            className="font-mono text-[10px] sm:text-[11px] md:text-xs leading-relaxed shrink-0"
            style={{
              color: (i + rowIndex) % 4 === 0 ? accent : muted,
              letterSpacing: '0.02em',
            }}
          >
            <span className="opacity-35 mr-2">{String((i % lines.length) + 1).padStart(2, '0')}</span>
            {line}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export const CodeWatermark: React.FC<{ variant?: Variant; rows?: number }> = ({
  variant = 'light',
  rows = 18,
}) => {
  const rowData = useMemo(() => {
    return Array.from({ length: rows }, (_, row) => {
      const rotated = [
        ...CODE_SNIPPETS.slice(row % CODE_SNIPPETS.length),
        ...CODE_SNIPPETS.slice(0, row % CODE_SNIPPETS.length),
      ];
      return rotated;
    });
  }, [rows]);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] flex h-full w-full flex-col justify-between overflow-hidden py-2"
      aria-hidden
    >
      {rowData.map((lines, i) => (
        <CodeRow
          key={i}
          rowIndex={i}
          lines={lines}
          reverse={i % 2 === 1}
          duration={200 + (i % 5) * 40}
          variant={variant}
        />
      ))}
    </div>
  );
};

export const TitleWatermark: React.FC<{
  variant?: Variant;
  lines?: [string, string?, string?];
  /** center (default) or pinned to top of section */
  position?: 'center' | 'top';
  /** scroll down → LTR, scroll up → RTL */
  scrollMove?: boolean;
}> = ({
  variant = 'light',
  lines = ['THE NEXT GEN', 'AI LEARNING', 'ZYLEARN'],
  position = 'center',
  scrollMove = false,
}) => {
  const [l1, l2, l3] = lines;
  const single = !l2 && !l3;
  const c1 = variant === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(42,42,46,0.07)';
  const c2 = variant === 'dark' ? 'rgba(229,57,53,0.12)' : 'rgba(229,57,53,0.08)';
  const c3 = variant === 'dark' ? 'rgba(245,197,24,0.14)' : 'rgba(245,197,24,0.12)';

  const isTop = position === 'top';
  const [xVw, setXVw] = useState(0);
  const lastY = useRef(0);
  const xRef = useRef(0);
  const raf = useRef(0);

  useEffect(() => {
    if (!scrollMove) return;
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      lastY.current = y;
      if (delta === 0) return;

      // down → left to right (+x), up → right to left (−x)
      const next = Math.max(-35, Math.min(35, xRef.current + delta * 0.1));
      xRef.current = next;
      cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => setXVw(xRef.current));
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf.current);
    };
  }, [scrollMove]);

  return (
    <div
      className={`pointer-events-none absolute inset-x-0 z-[2] overflow-hidden ${
        isTop ? 'top-0 pt-6 sm:pt-8 lg:pt-10' : 'inset-0 flex items-center justify-center'
      }`}
      aria-hidden
    >
      <div
        className={`select-none w-max max-w-none will-change-transform ${
          isTop || single ? 'text-left px-4 sm:px-6 lg:px-8' : 'text-center px-4 w-full'
        }`}
        style={
          scrollMove
            ? {
                transform: `translate3d(${xVw}vw, 0, 0)`,
                transition: 'transform 0.1s linear',
              }
            : undefined
        }
      >
        <p
          className={`font-black uppercase leading-[0.9] whitespace-nowrap ${
            single ? 'tracking-[-0.03em]' : 'tracking-[-0.04em] leading-[0.88]'
          }`}
          style={{
            fontSize: single
              ? 'clamp(1.75rem, 7.5vw, 5.5rem)'
              : 'clamp(2rem, 9vw, 7rem)',
            color: c1,
          }}
        >
          {l1}
        </p>
        {!single && l2 && (
          <p
            className="mt-1 font-black uppercase tracking-[-0.03em] leading-[0.9] whitespace-nowrap"
            style={{ fontSize: 'clamp(1.25rem, 5vw, 3.5rem)', color: c2 }}
          >
            {l2}
          </p>
        )}
        {!single && l3 && (
          <p
            className="mt-2 font-black uppercase tracking-[0.28em] leading-[0.9] whitespace-nowrap"
            style={{ fontSize: 'clamp(1rem, 3.2vw, 2.25rem)', color: c3 }}
          >
            {l3}
          </p>
        )}
      </div>
    </div>
  );
};

interface SectionShellProps {
  children: React.ReactNode;
  variant?: Variant;
  /** Title watermark lines */
  watermark?: [string, string?, string?];
  className?: string;
  id?: string;
  showCode?: boolean;
  showTitle?: boolean;
  titlePosition?: 'center' | 'top';
  /** Title watermark follows scroll direction (LTR down / RTL up) */
  titleScrollMove?: boolean;
  /** Giant watermark label — renders as "//LABEL" (e.g. TRACKS) */
  demoLabel?: string;
}

/** Site-wide section wrapper: light #ededed / dark #2a2a2e + watermarks */
export const SectionShell: React.FC<SectionShellProps> = ({
  children,
  variant = 'light',
  watermark = ['THE NEXT GEN', 'AI LEARNING', 'ZYLEARN'],
  className = '',
  id,
  showCode = true,
  showTitle = false,
  titlePosition = 'center',
  titleScrollMove = false,
  demoLabel,
}) => {
  const bg = variant === 'dark' ? 'bg-[#2a2a2e] text-white' : 'bg-[#ededed] text-[#2a2a2e]';

  // Code watermark only on light backgrounds — never on dark
  const codeEnabled = showCode && variant === 'light';

  return (
    <section id={id} className={`relative overflow-hidden ${bg} ${className}`}>
      {codeEnabled && <CodeWatermark variant="light" />}
      {demoLabel && <DemoWatermark label={demoLabel} variant={variant} />}
      {showTitle && (
        <TitleWatermark
          variant={variant}
          lines={watermark}
          position={titlePosition}
          scrollMove={titleScrollMove}
        />
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
};
