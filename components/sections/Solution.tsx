'use client';

import { Database, Handshake, TrendingUp } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { FadeIn } from '../ui/FadeIn';
import { ReactNode } from 'react';

type Item = {
  icon: typeof Database;
  title: string;
  description: ReactNode;
  highlights: string[];
};

const items: Item[] = [
  {
    icon: Database,
    title: '月額コストゼロで求人にアクセス',
    description: '6,000件以上の良質な求人DBを、固定費なしで利用できます。',
    highlights: ['月額費用 ¥0', '6,000+ 求人DB', '完全成果報酬'],
  },
  {
    icon: Handshake,
    title: 'プロのRAが選考を伴走',
    description:
      '企業ごとの面接傾向・対策をRAが直接サポート。決まる推薦を実現します。',
    highlights: ['企業別の選考対策', '社長の好みまで把握', '決定率を引き上げる'],
  },
  {
    icon: TrendingUp,
    title: '成果に応じた高還元率',
    description:
      '中抜きなし。採用企業との契約Feeベースで高い還元を実現します。',
    highlights: ['中間マージンなし', 'パートナーランク制度あり', '実績に応じて昇格可'],
  },
];

export function Solution() {
  return (
    <section id="solution" aria-label="ZEROGRA RA ALLIANCEで実現できること" className="relative py-24 md:py-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/12 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Solution"
          title={
            <>
              ZEROGRA RA ALLIANCEで
              <br className="hidden md:block" />
              <span className="gradient-text">実現できること</span>
            </>
          }
          description="3つの軸で、エージェントの収益体質と選考精度を底上げします。"
        />

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-3">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="border-gradient relative flex h-full flex-col overflow-hidden rounded-2xl bg-ink-card/70 p-7 backdrop-blur md:p-8">
                <div className="mb-6 inline-flex size-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 text-accent shadow-glow-soft">
                  <item.icon className="size-7" strokeWidth={1.5} />
                </div>
                <div className="font-display text-xs uppercase tracking-[0.3em] text-accent">
                  Feature {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-2 text-xl font-bold md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                  {item.description}
                </p>
                <ul className="mt-6 flex flex-col gap-2 border-t border-white/8 pt-5">
                  {item.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-sm text-white/90"
                    >
                      <span className="inline-block size-1.5 rounded-full bg-gradient-to-br from-accent to-brand-green" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-10 text-center">
          <p className="text-xs text-muted/80 md:text-sm">
            ※ パートナーランク制度の詳細（還元率・条件）は面談にてご案内します。
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
