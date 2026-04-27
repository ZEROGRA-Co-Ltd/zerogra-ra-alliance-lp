'use client';

import { SectionHeader } from '../ui/SectionHeader';
import { FadeIn } from '../ui/FadeIn';
import { Crown } from 'lucide-react';

type Rank = {
  name: string;
  rate: string;
  condition: string;
  tier: 'standard' | 'silver' | 'gold' | 'platinum';
};

const ranks: Rank[] = [
  { name: 'STANDARD', rate: '75%', condition: '初期登録', tier: 'standard' },
  { name: 'SILVER', rate: '80%', condition: '500万円以上', tier: 'silver' },
  { name: 'GOLD', rate: '85%', condition: '1,000万円以上', tier: 'gold' },
  { name: 'PLATINUM', rate: '90%', condition: '2,000万円以上', tier: 'platinum' },
];

const tierStyle: Record<Rank['tier'], { gradient: string; ring: string; text: string }> = {
  standard: {
    gradient: 'from-white/[0.03] to-white/[0.02]',
    ring: 'border-white/10',
    text: 'text-white',
  },
  silver: {
    gradient: 'from-slate-300/10 to-slate-500/5',
    ring: 'border-slate-300/30',
    text: 'text-slate-100',
  },
  gold: {
    gradient: 'from-amber-300/15 to-amber-500/5',
    ring: 'border-amber-300/40',
    text: 'text-amber-100',
  },
  platinum: {
    gradient: 'from-accent/25 via-primary/20 to-brand-green/15',
    ring: 'border-accent/60',
    text: 'text-white',
  },
};

export function PartnerRank() {
  return (
    <section id="rank" className="relative py-24 md:py-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Partner Rank"
          title={
            <>
              成果をダイレクトに還元する
              <br className="hidden md:block" />
              <span className="gradient-text">ランク制度</span>
            </>
          }
          description="貢献度に応じて、還元率がしっかり伸びる。シンプルでフェアな評価設計です。"
        />

        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2 xl:grid-cols-4">
          {ranks.map((r, i) => {
            const style = tierStyle[r.tier];
            const isPlatinum = r.tier === 'platinum';
            return (
              <FadeIn key={r.name} delay={i * 0.08}>
                <div
                  className={`relative h-full overflow-hidden rounded-2xl border bg-gradient-to-b p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1 ${
                    style.ring
                  } ${style.gradient} ${
                    isPlatinum ? 'shadow-glow md:scale-[1.04]' : ''
                  }`}
                >
                  {isPlatinum && (
                    <>
                      <div className="absolute inset-0 -z-10 bg-radial-glow opacity-60" />
                      <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full border border-accent/40 bg-ink/50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-accent">
                        <Crown className="size-3" />
                        Top Tier
                      </span>
                    </>
                  )}

                  <div className={`font-display text-xs uppercase tracking-[0.3em] ${
                    isPlatinum ? 'text-accent' : 'text-muted'
                  }`}>
                    Rank {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className={`mt-3 font-display text-xl font-bold tracking-wider ${style.text}`}>
                    {r.name}
                  </div>

                  <div className="mt-8">
                    <div className="text-xs uppercase tracking-widest text-muted">
                      還元率
                    </div>
                    <div
                      className={`mt-1 font-display text-6xl font-bold leading-none ${
                        isPlatinum ? 'gradient-text' : style.text
                      }`}
                    >
                      {r.rate}
                    </div>
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-4">
                    <div className="text-[10px] uppercase tracking-widest text-muted">
                      昇格条件（半年累計）
                    </div>
                    <div className="mt-1 text-sm font-medium text-white/90">
                      {r.condition}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.3} className="mt-10 text-center">
          <p className="text-sm text-muted md:text-base">
            半年ごとに判定。実績に応じて
            <span className="text-accent"> 2ランク以上の飛び級昇格 </span>
            も可能です。
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
