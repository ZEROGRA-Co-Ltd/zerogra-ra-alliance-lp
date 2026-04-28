'use client';

import { SectionHeader } from '../ui/SectionHeader';
import { FadeIn } from '../ui/FadeIn';
import { CompanyCard } from '../ui/CompanyCard';
import { companies, portfolio, type Company } from '@/src/data/companies';

// Split the company list across the two marquee rows so each row carries
// distinct logos. The track itself duplicates the row's items so the
// translateX loop reads as a seamless infinite scroll.
const half = Math.ceil(companies.length / 2);
const rowA = companies.slice(0, half);
const rowB = companies.slice(half);

export function Companies() {
  return (
    <section id="companies" aria-label="推薦可能求人の主な企業" className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Companies"
          title={
            <>
              <span className="gradient-text">推薦可能求人</span>
              の主な企業
            </>
          }
          description="ZEROGRAが直接開拓・コンタクトしている企業群です。"
        />

        <FadeIn delay={0.1} className="mt-14 md:mt-20">
          <div
            className="relative -mx-5 flex flex-col gap-4 overflow-hidden md:-mx-8 md:gap-6"
            // Side fade masks so logos appear/disappear gracefully at the edges
            style={{
              maskImage:
                'linear-gradient(to right, transparent 0, black 5%, black 95%, transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent 0, black 5%, black 95%, transparent 100%)',
            }}
          >
            <MarqueeRow items={rowA} direction="ltr" />
            <MarqueeRow items={rowB} direction="rtl" />
          </div>
        </FadeIn>

        {/* Portfolio: 6,000件以上の多様な求人ポートフォリオ */}
        <FadeIn delay={0.2} className="mt-20 md:mt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-display inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-accent">
              <span className="size-1.5 rounded-full bg-accent animate-pulseGlow" />
              Portfolio
            </span>
            <h3 className="mt-5 text-balance text-2xl font-bold leading-tight md:text-4xl">
              <span className="gradient-text">6,000件以上</span>
              の多様な求人ポートフォリオ
            </h3>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-6">
          {portfolio.map((p, i) => (
            <FadeIn key={p.label} delay={i * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-ink-card/70 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40 md:p-8">
                <div
                  aria-hidden
                  className={`absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b ${p.accent} opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-60`}
                />
                <div className="flex items-start gap-4">
                  <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent">
                    <p.icon className="size-6" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white md:text-xl">
                      {p.label}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                      {p.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: Company[];
  direction: 'ltr' | 'rtl';
}) {
  const animation =
    direction === 'ltr' ? 'animate-marquee-ltr' : 'animate-marquee-rtl';

  // Duplicate the items so a translateX of -50% wraps seamlessly back to 0%
  const doubled = [...items, ...items];

  return (
    <div
      className={`group flex w-max gap-3 ${animation} hover:[animation-play-state:paused] md:gap-4`}
    >
      {doubled.map((c, i) => (
        <div key={`${c.slug}-${i}`} className="w-[180px] shrink-0 md:w-[220px]">
          <CompanyCard name={c.name} slug={c.slug} />
        </div>
      ))}
    </div>
  );
}
