'use client';

import { Banknote, Users, Cpu } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { FadeIn } from '../ui/FadeIn';
import { ReactNode } from 'react';

type Item = {
  number: string;
  category: string;
  title: string;
  icon: typeof Banknote;
  description: string;
  highlight: ReactNode;
};

const items: Item[] = [
  {
    number: '01',
    category: 'PROFITABILITY',
    title: '圧倒的な収益性',
    icon: Banknote,
    description:
      '採用企業との契約Feeベースの報酬換算のため中抜きなし。エージェントが本来得るべき利益を、確実に手元に残す構造を提供します。',
    highlight: (
      <div className="flex items-baseline gap-2">
        <span className="font-display gradient-text text-5xl font-bold leading-none md:text-6xl">
          75%〜90%
        </span>
        <span className="text-base text-muted">還元</span>
      </div>
    ),
  },
  {
    number: '02',
    category: 'PARTNERSHIP',
    title: 'RAによる選考伴走',
    icon: Users,
    description:
      '企業背景・社長の好みまで熟知したプロのRAが面接対策を支援。候補者の魅力を最大化し、決定率を抜本的に引き上げます。',
    highlight: (
      <div className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-widest text-muted">
          既存プラットフォーム平均
        </span>
        <div className="flex items-center gap-3">
          <span className="font-display text-3xl font-bold text-muted line-through decoration-white/30">
            1%
          </span>
          <span className="text-accent">→</span>
          <span className="font-display gradient-text text-5xl font-bold">
            10%
          </span>
        </div>
        <span className="text-xs text-muted">へUP</span>
      </div>
    ),
  },
  {
    number: '03',
    category: 'TECHNOLOGY',
    title: 'AIマッチング機能の活用',
    icon: Cpu,
    description:
      '過去2万件の選考データに基づき「今、受かりやすい求人」をピックアップ。データドリブンな提案でミスマッチを防ぎます。',
    highlight: (
      <div className="flex flex-col gap-1">
        <span className="font-display gradient-text text-5xl font-bold leading-none">
          20,000件
        </span>
        <span className="text-xs uppercase tracking-widest text-muted">
          選考データを学習
        </span>
      </div>
    ),
  },
];

export function StrategicAdvantages() {
  return (
    <section id="advantages" className="relative py-24 md:py-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/3 h-[400px] w-[500px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute right-0 top-2/3 h-[400px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Strategic Advantages"
          title={
            <>
              パートナー企業様がZEROGRAと組む
              <br className="hidden md:block" />
              <span className="gradient-text">3つのメリット</span>
            </>
          }
        />

        <div className="mt-16 flex flex-col gap-6 md:mt-24">
          {items.map((item, i) => (
            <FadeIn key={item.number} delay={i * 0.06}>
              <div className="border-gradient relative grid grid-cols-1 gap-8 overflow-hidden rounded-3xl bg-ink-card/70 p-8 backdrop-blur md:grid-cols-12 md:p-12">
                <div className="md:col-span-7">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-6xl font-bold text-white/10 md:text-7xl">
                      {item.number}
                    </span>
                    <div>
                      <div className="font-display text-xs uppercase tracking-[0.3em] text-accent">
                        {item.category}
                      </div>
                      <h3 className="mt-1 text-2xl font-bold md:text-3xl">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <div className="mt-6 flex items-start gap-4">
                    <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-accent">
                      <item.icon className="size-5" strokeWidth={1.5} />
                    </div>
                    <p className="text-sm leading-relaxed text-muted md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center md:col-span-5 md:justify-end">
                  <div className="w-full rounded-2xl border border-white/8 bg-gradient-to-br from-white/[0.03] to-transparent p-6 md:p-8">
                    {item.highlight}
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
