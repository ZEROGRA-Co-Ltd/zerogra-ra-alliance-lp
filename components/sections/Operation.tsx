'use client';

import { Slack, Sparkles, Mail } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { FadeIn } from '../ui/FadeIn';

const items = [
  {
    icon: Slack,
    title: 'Slack専用チャンネル',
    desc: '1社1チャンネルで、RAとリアルタイムに相談可能。情報の埋もれない、密度の高いコミュニケーション基盤。',
    badge: 'Real-time',
  },
  {
    icon: Sparkles,
    title: 'AIマッチングによる求人選定システム',
    desc: '候補者プロフィールから「今、受かりやすい求人」を自動レコメンド。マッチング精度を継続的に高めます。',
    badge: 'Coming Soon',
  },
  {
    icon: Mail,
    title: 'キュレーションレター',
    desc: '候補者層に合わせたHOT案件を定期発信。市場のトレンドと共に「いま動かすべき求人」を共有します。',
    badge: 'Weekly',
  },
];

export function Operation() {
  return (
    <section id="operation" className="relative py-24 md:py-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-0 h-[500px] w-[500px] rounded-full bg-brand-green/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Operation"
          title={
            <>
              ハイレベルなRA組織を
              <br className="hidden md:block" />
              <span className="gradient-text">自社で構える必要がありません。</span>
            </>
          }
          description="ZEROGRAのオペレーション基盤を、そのまま自社のRA組織として活用できます。"
        />

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-3">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="group relative flex h-full flex-col rounded-2xl border border-white/8 bg-ink-card/70 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40">
                <div className="flex items-center justify-between">
                  <div className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-accent shadow-glow-soft">
                    <item.icon className="size-6" strokeWidth={1.5} />
                  </div>
                  <span
                    className={`font-display rounded-full border px-3 py-1 text-[10px] uppercase tracking-widest ${
                      item.badge === 'Coming Soon'
                        ? 'border-brand-green/40 bg-brand-green/10 text-brand-green'
                        : 'border-white/10 bg-white/[0.04] text-muted'
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold md:text-2xl">{item.title}</h3>
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
