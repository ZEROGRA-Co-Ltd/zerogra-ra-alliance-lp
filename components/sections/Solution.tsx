'use client';

import { Database, Handshake, Lightbulb, TrendingUp } from 'lucide-react';
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
    title: '求職者人気の高い上質な求人にアクセス可能',
    description: '当社開拓の厳選した5,000件以上の良質な求人を紹介可能',
    highlights: ['月額費用 ¥0〜', '優良な5,000求人＋', '専用ページで簡単アクセス'],
  },
  {
    icon: Handshake,
    title: 'プロのRAが選考を伴走',
    description:
      '企業ごとの面接傾向・対策をRAが直接サポート。決まる選考を実現します。',
    highlights: ['企業別の選考対策情報の共有', '過去の決定傾向分析', '人的介入での企業プッシュ'],
  },
  {
    icon: TrendingUp,
    title: '成果に応じた高還元率',
    description:
      '採用企業との契約Feeベースで高い還元を実現します。',
    highlights: ['パートナーランク制度あり', '実績に応じて還元率UP', '企業開拓コスト"0"で高手数料確保'],
  },
  {
    icon: Lightbulb,
    title: '事業成長のアドバイザー',
    description:
      '事業計画から集客戦略、求人選定まで人材紹介事業のコンサルティングまで。',
    highlights: ['事業計画の壁打ち', '集客戦略相談', 'ターゲット設定'],
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
          description="貴社の外部RA集団として紹介事業の成長をお手伝いします。"
        />

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-2">
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
