'use client';

import { Crown, Flame, MapPin, Users2 } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { FadeIn } from '../ui/FadeIn';

const cards = [
  {
    icon: Crown,
    label: '高単価求人',
    items: ['M&A仲介', 'ビジネスコンサル', 'ハイクラス'],
    accent: 'from-brand-green/30 to-accent/20',
  },
  {
    icon: Flame,
    label: '市場人気求人',
    items: ['SaaS', '人材', 'AI', 'SNS', 'WEBマーケ'],
    accent: 'from-accent/30 to-primary/25',
  },
  {
    icon: MapPin,
    label: '希少ピンポイント求人',
    items: ['大阪地場メーカー', '北海道BPO', '地域密着型'],
    accent: 'from-primary/30 to-accent/20',
  },
  {
    icon: Users2,
    label: '大量決定求人',
    items: ['携帯販売', '施工管理', '未経験', '若手層'],
    accent: 'from-brand-teal/30 to-primary/25',
  },
];

const strengthBadges = ['M&A', '人材・HR', '未経験求人系'];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Portfolio"
          title={
            <>
              <span className="gradient-text">5,000求人</span>
              のポートフォリオ
            </>
          }
          description="幅広いレイヤー・業界をカバー。エージェントの強みに合わせた最適な求人提案が可能です。"
        />

        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, i) => (
            <FadeIn key={card.label} delay={i * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-ink-card/70 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40">
                <div
                  className={`absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b ${card.accent} opacity-30 blur-2xl transition-opacity duration-500 group-hover:opacity-60`}
                />
                <div className="mb-5 inline-flex size-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-accent">
                  <card.icon className="size-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold md:text-xl">{card.label}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {card.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} className="mt-14 md:mt-20">
          <div className="border-gradient relative flex flex-col items-center gap-5 overflow-hidden rounded-3xl bg-ink-card/60 p-8 text-center backdrop-blur md:flex-row md:justify-between md:text-left">
            <div>
              <div className="font-display text-xs uppercase tracking-[0.3em] text-accent">
                Strength Domains
              </div>
              <h3 className="mt-2 text-xl font-bold md:text-2xl">
                ZEROGRAが特に強みを発揮する3領域
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {strengthBadges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-accent/40 bg-gradient-to-br from-accent/15 to-primary/10 px-5 py-2 text-sm font-medium text-white shadow-glow-soft"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
