'use client';

import { motion } from 'framer-motion';
import { Logo } from '../ui/Logo';
import { CtaButton } from '../ui/CtaButton';

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pb-20 pt-32 md:pb-32 md:pt-40"
    >
      {/* particle / network grid background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute inset-0 bg-grid-faint [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
        <div className="particle-bg" />
        <NetworkGraphic />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-5 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative"
        >
          <div className="absolute -inset-10 -z-10 rounded-full bg-primary/20 blur-3xl" />
          <Logo size={220} priority />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-accent-soft"
        >
          <span className="size-1.5 rounded-full bg-brand-green animate-pulseGlow" />
          ZEROGRA × Career Agent Alliance
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-balance text-4xl font-bold leading-[1.15] md:text-6xl lg:text-7xl"
        >
          ハイレベルなRA組織を、
          <br className="hidden sm:block" />
          <span className="gradient-text">アライアンス</span>で実現。
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="max-w-2xl text-balance text-base leading-relaxed text-muted md:text-lg"
        >
          エージェントの成約率と利益率を最大化する、
          <br className="hidden sm:block" />
          共存・共栄のパートナー制度。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-2 flex flex-wrap items-center justify-center gap-4"
        >
          <CtaButton size="lg">日程を調整する</CtaButton>
          <CtaButton variant="ghost" size="lg" href="#challenges">
            詳細を見る
          </CtaButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 grid w-full grid-cols-3 gap-2 md:gap-6"
        >
          {[
            { v: '7,000+', l: '良質求人DB' },
            { v: '90%', l: '最大還元率' },
            { v: '10%', l: '目標決定率' },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-4 backdrop-blur"
            >
              <div className="font-display text-2xl font-bold text-white md:text-3xl">
                {s.v}
              </div>
              <div className="mt-1 text-[10px] tracking-wider text-muted md:text-xs">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function NetworkGraphic() {
  // SVG-based subtle network/constellation lines
  const nodes = [
    { x: 12, y: 18 },
    { x: 28, y: 30 },
    { x: 48, y: 14 },
    { x: 68, y: 28 },
    { x: 86, y: 18 },
    { x: 18, y: 60 },
    { x: 38, y: 70 },
    { x: 58, y: 62 },
    { x: 78, y: 74 },
    { x: 92, y: 58 },
  ];
  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [0, 5],
    [1, 6],
    [3, 7],
    [4, 9],
    [5, 6],
    [6, 7],
    [7, 8],
    [8, 9],
    [2, 6],
    [3, 8],
  ];

  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.35]"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#00c2ff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0.15" />
        </linearGradient>
        <radialGradient id="nodeGrad">
          <stop offset="0%" stopColor="#00c2ff" />
          <stop offset="100%" stopColor="#00c2ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="url(#lineGrad)"
          strokeWidth="0.15"
        />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="2.4" fill="url(#nodeGrad)" />
          <circle cx={n.x} cy={n.y} r="0.45" fill="#7dd3fc" />
        </g>
      ))}
    </svg>
  );
}
