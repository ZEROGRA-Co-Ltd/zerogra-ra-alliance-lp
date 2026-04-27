'use client';

import { Coins, MessageSquareOff, TrendingDown } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { FadeIn } from '../ui/FadeIn';

const items = [
  {
    icon: Coins,
    title: '月額コストの重荷',
    desc: '成果が出ない月も20万円〜の固定費が発生。利益を圧迫し、採用活動の自由度を奪う。',
  },
  {
    icon: MessageSquareOff,
    title: '希薄なコミュニケーション',
    desc: '電話禁止・テキストのみで、本質的な情報交換ができず、企業ごとの選考対策が困難。',
  },
  {
    icon: TrendingDown,
    title: '低い決定率',
    desc: '業界水準は決定率約1%。母集団形成だけがゴールになり、収益化しにくい構造が常態化。',
  },
];

export function Challenges() {
  return (
    <section id="challenges" className="relative py-24 md:py-32">
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Challenges"
          title={
            <>
              既存の求人プラットフォームが抱える
              <br className="hidden md:block" />
              <span className="gradient-text">3つの課題</span>
            </>
          }
          description="従来モデルの限界が、エージェントの収益と成長を阻んでいます。"
        />

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-3">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="group relative h-full rounded-2xl border border-white/8 bg-ink-card/80 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40">
                <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(400px circle at 50% 0%, rgba(0,194,255,0.08), transparent 60%)' }} />
                <div className="mb-6 inline-flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent">
                  <item.icon className="size-6" strokeWidth={1.5} />
                </div>
                <div className="font-display mb-2 text-xs uppercase tracking-[0.25em] text-muted">
                  Issue {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-bold md:text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
