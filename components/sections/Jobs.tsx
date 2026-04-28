'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { FadeIn } from '../ui/FadeIn';
import { jobs, type Job } from '@/src/data/jobs';

const CARD_WIDTH = 320;
const GAP = 24;

export function Jobs() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateNav = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateNav();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateNav, { passive: true });
    window.addEventListener('resize', updateNav);
    return () => {
      el.removeEventListener('scroll', updateNav);
      window.removeEventListener('resize', updateNav);
    };
  }, [updateNav]);

  const scroll = (dir: 'prev' | 'next') => {
    const el = trackRef.current;
    if (!el) return;
    const delta = (CARD_WIDTH + GAP) * (dir === 'next' ? 1 : -1);
    el.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <section id="jobs" aria-label="推薦可能な求人例" className="relative py-24 md:py-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-1/3 h-[400px] w-[600px] rounded-full bg-accent/10 blur-[140px]" />
        <div className="absolute left-1/4 bottom-1/3 h-[400px] w-[600px] rounded-full bg-primary/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            align="left"
            eyebrow="Jobs"
            title={
              <>
                推薦可能な
                <span className="gradient-text">求人例</span>
              </>
            }
            description="ZEROGRAが直接開拓した、CAが紹介しやすい厳選求人です。"
          />

          {/* Nav buttons (desktop right-aligned with header; mobile below) */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <NavButton
              direction="prev"
              disabled={!canPrev}
              onClick={() => scroll('prev')}
            />
            <NavButton
              direction="next"
              disabled={!canNext}
              onClick={() => scroll('next')}
            />
          </div>
        </div>

        <FadeIn delay={0.1} className="mt-10 md:mt-14">
          <div
            ref={trackRef}
            className="-mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 md:-mx-8 md:px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ scrollPaddingLeft: '1.25rem' }}
            aria-label="求人カルーセル"
          >
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
            {/* Trailing spacer so the last card can fully reach the snap-start */}
            <div aria-hidden className="w-2 shrink-0 md:w-6" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function NavButton({
  direction,
  disabled,
  onClick,
}: {
  direction: 'prev' | 'next';
  disabled?: boolean;
  onClick: () => void;
}) {
  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight;
  const label = direction === 'prev' ? '前の求人へ' : '次の求人へ';
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-all duration-300 enabled:hover:border-accent/50 enabled:hover:bg-white/[0.08] enabled:hover:text-accent disabled:opacity-30"
    >
      <Icon className="size-5" strokeWidth={2} />
    </button>
  );
}

function JobCard({ job }: { job: Job }) {
  const Icon = job.icon;
  const { amount, suffix } = splitCommission(job.commission);
  // "一律..." 表示は文字数が多いので一段サイズを落として収める
  const amountSize = amount.length > 5 ? 'text-2xl' : 'text-3xl';

  return (
    <article
      className="group relative flex w-[320px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-white/8 bg-ink-card/80 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow-soft"
    >
      {/* Image area: gradient + small top icon + large commission */}
      <div
        className={`relative flex h-[140px] flex-col bg-gradient-to-br ${job.gradient} px-5 py-4`}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(circle at 50% 100%, rgba(255,255,255,0.18), transparent 60%)',
          }}
        />
        <Icon
          className="relative size-6 self-start text-white/85 drop-shadow"
          strokeWidth={1.5}
        />
        <div className="relative mt-auto flex flex-col items-center text-center leading-none">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/75">
            紹介手数料
          </span>
          <span
            className={`font-display mt-1.5 ${amountSize} font-bold text-white drop-shadow`}
          >
            {amount}
          </span>
          {suffix && (
            <span className="mt-1 text-[10px] tracking-wide text-white/75">
              {suffix}
            </span>
          )}
        </div>
      </div>

      {/* Content area */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="text-balance text-base font-bold leading-snug text-white md:text-[17px]">
          {job.position}
        </h3>

        <ul className="flex flex-col gap-2 border-t border-white/8 pt-4">
          {job.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-sm leading-snug text-muted"
            >
              <Check
                className="mt-0.5 size-4 shrink-0 text-brand-green"
                strokeWidth={2.5}
              />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

// "理論年収のXX%" → headline { amount: "XX%", suffix: "理論年収比" }
// "一律XX万円" などはそのまま amount に乗せて suffix なし
function splitCommission(s: string): { amount: string; suffix: string | null } {
  const m = s.match(/^理論年収の(.+%)$/);
  if (m) return { amount: m[1], suffix: '理論年収比' };
  return { amount: s, suffix: null };
}
