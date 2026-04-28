'use client';

import { Coins, MessageSquareWarning, UserMinus } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { FadeIn } from '../ui/FadeIn';

const worries = [
  {
    icon: MessageSquareWarning,
    text: 'RA企業とのコミュニケーションが希薄で求人の詳細がわからない',
  },
  {
    icon: UserMinus,
    text: 'CA人員しか確保しておらず求人開拓ができていない',
  },
  {
    icon: Coins,
    text: '求人媒体の月額費用が重く、成果が出ない月も固定費がかかる',
  },
];

export function Worries() {
  return (
    <section id="worries" className="relative py-24 md:py-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-1/2 h-[400px] w-[500px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Pain Points"
          title={
            <>
              こんな
              <span className="gradient-text">お悩み</span>
              はありませんか？
            </>
          }
        />

        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-3 md:gap-6">
          {worries.map((w, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="group relative h-full rounded-2xl border border-white/8 bg-ink-card/80 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40">
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      'radial-gradient(400px circle at 50% 0%, rgba(0,194,255,0.08), transparent 60%)',
                  }}
                />
                <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent">
                  <w.icon className="size-6" strokeWidth={1.5} />
                </div>
                <div className="font-display mb-3 text-xs uppercase tracking-[0.25em] text-muted">
                  Worry {String(i + 1).padStart(2, '0')}
                </div>
                <p className="text-base leading-relaxed text-white md:text-lg">
                  {w.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-12 text-center md:mt-16">
          <p className="font-display text-balance text-base text-muted md:text-lg">
            <span className="gradient-text font-bold">ZEROGRA RA ALLIANCE</span>
            <span>が、その課題をまとめて解決します。</span>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
