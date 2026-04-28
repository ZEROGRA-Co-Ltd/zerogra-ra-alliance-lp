'use client';

import { Crown } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { FadeIn } from '../ui/FadeIn';
import { CtaButton } from '../ui/CtaButton';

type Tier = 'standard' | 'silver' | 'gold' | 'platinum';

type Rank = {
  name: string;
  condition: string;
  tier: Tier;
};

const ranks: Rank[] = [
  { name: 'STANDARD', condition: '初期登録', tier: 'standard' },
  { name: 'SILVER', condition: '実績に応じて昇格', tier: 'silver' },
  { name: 'GOLD', condition: '実績に応じて昇格', tier: 'gold' },
  { name: 'PLATINUM', condition: 'TOPランク', tier: 'platinum' },
];

const tierStyles: Record<
  Tier,
  { gradient: string; ring: string; nameClass: string }
> = {
  standard: {
    gradient: 'from-white/[0.04] via-white/[0.02] to-white/[0.01]',
    ring: 'border-white/10',
    nameClass: 'text-white/85',
  },
  silver: {
    gradient: 'from-slate-300/15 via-slate-400/10 to-slate-500/5',
    ring: 'border-slate-300/30',
    nameClass: 'text-slate-100',
  },
  gold: {
    gradient: 'from-amber-300/20 via-amber-400/12 to-amber-600/5',
    ring: 'border-amber-300/40',
    nameClass: 'text-amber-100',
  },
  platinum: {
    gradient: 'from-accent/30 via-primary/22 to-brand-green/15',
    ring: 'border-accent/60',
    nameClass: 'text-white',
  },
};

export function PartnerRank() {
  return (
    <section id="partner-rank" aria-label="パートナーランク制度" className="relative py-24 md:py-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/12 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Partner Rank"
          title={
            <>
              <span className="gradient-text">パートナーランク</span>
              制度
            </>
          }
          description="成果に応じて還元率が上がる、シンプルな4段階制度です。詳細は面談にてご説明します。"
        />

        <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-2 md:items-center md:gap-12">
          {/* Left column — narrative + CTA */}
          <FadeIn>
            <div className="flex h-full flex-col gap-6">
              <h3 className="text-balance text-2xl font-bold leading-tight md:text-3xl">
                成果をダイレクトに
                <span className="gradient-text">還元する仕組み</span>
              </h3>
              <p className="text-base leading-relaxed text-muted md:text-lg">
                半年ごとに実績を評価し、ランクに応じた還元率を適用。実績次第で
                <span className="text-white">2ランク以上の飛び級昇格</span>
                も可能です。
              </p>
              <ul className="flex flex-col gap-2 text-sm text-muted md:text-base">
                <li className="flex items-center gap-2">
                  <span className="inline-block size-1.5 rounded-full bg-gradient-to-br from-accent to-brand-green" />
                  半年ごとの実績ベースで判定
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block size-1.5 rounded-full bg-gradient-to-br from-accent to-brand-green" />
                  飛び級昇格にも対応
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block size-1.5 rounded-full bg-gradient-to-br from-accent to-brand-green" />
                  詳細条件は面談にてご案内
                </li>
              </ul>
              <div className="mt-2">
                <CtaButton size="lg">詳細を聞く</CtaButton>
              </div>
            </div>
          </FadeIn>

          {/* Right column — rank ladder */}
          <FadeIn delay={0.15}>
            <ol className="flex flex-col gap-3">
              {ranks.map((r, i) => {
                const style = tierStyles[r.tier];
                const isPlatinum = r.tier === 'platinum';
                return (
                  <li
                    key={r.name}
                    className={`relative overflow-hidden rounded-2xl border bg-gradient-to-r ${style.gradient} ${style.ring} ${
                      isPlatinum ? 'shadow-glow' : ''
                    } px-5 py-5 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 md:px-7 md:py-6`}
                  >
                    {isPlatinum && (
                      <div
                        aria-hidden
                        className="absolute inset-0 -z-10 bg-radial-glow opacity-50"
                      />
                    )}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span
                          className={`font-display text-xs uppercase tracking-[0.3em] ${
                            isPlatinum ? 'text-accent' : 'text-muted/80'
                          }`}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span
                          className={`font-display text-lg font-bold tracking-wider md:text-xl ${style.nameClass}`}
                        >
                          {r.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-xs md:text-sm ${
                            isPlatinum ? 'text-white/85' : 'text-muted'
                          }`}
                        >
                          {r.condition}
                        </span>
                        {isPlatinum && (
                          <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-accent/50 bg-ink-deep/70 text-accent">
                            <Crown className="size-3.5" strokeWidth={2} />
                          </span>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
