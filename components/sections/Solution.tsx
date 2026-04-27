'use client';

import { Database, Target, Handshake } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { FadeIn } from '../ui/FadeIn';

const items = [
  {
    icon: Database,
    title: '月額完全無料でアクセス',
    desc: '7,000件以上の良質な求人データベースへ、月額コストゼロでアクセス可能。固定費リスクのない参画モデル。',
  },
  {
    icon: Target,
    title: '選考通過率の劇的な向上',
    desc: 'RAとの密な対話により企業ごとの対策を徹底。「数を打つ」から「決まる推薦」へ、推薦精度をアップデート。',
  },
  {
    icon: Handshake,
    title: 'ダイレクトな連携で高還元',
    desc: 'ZEROGRAが直接開拓している求人のため中間マージンが発生せず、CA企業様へ高還元率を実現。',
  },
];

export function Solution() {
  return (
    <section id="solution" className="relative py-24 md:py-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Solution"
          title={
            <>
              ZEROGRAが提供する、
              <br className="hidden md:block" />
              <span className="gradient-text">新しいアライアンスの形</span>
            </>
          }
          description={
            <>
              <span className="block">
                既存プラットフォームを置き換えるのではなく、エージェントの収益体質を底上げする企業間アライアンスです。
              </span>
              <span className="mt-3 inline-block rounded-md border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted/90">
                ※本アライアンス契約は既存求人データベースサービスと競合するものではなく、企業間アライアンスです。
              </span>
            </>
          }
        />

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-3">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="border-gradient relative h-full overflow-hidden rounded-2xl bg-ink-card/70 p-7 backdrop-blur">
                <div className="mb-6 inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 text-accent shadow-glow-soft">
                  <item.icon className="size-6" strokeWidth={1.5} />
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
