'use client';

import { Check, Sparkles } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { FadeIn } from '../ui/FadeIn';
import { CtaButton } from '../ui/CtaButton';
import { plans, type Plan } from '@/src/data/plans';

export function Plans() {
  return (
    <section
      id="plans"
      aria-label="プラン"
      className="relative py-24 md:py-32"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[600px] rounded-full bg-accent/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Plans"
          title={
            <>
              あなたのフェーズに合わせた
              <br className="hidden md:block" />
              <span className="gradient-text">プランを選択</span>
            </>
          }
          description="紹介事業のフェーズと目標に応じて、4つのプランから最適なものをお選びいただけます。"
        />

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <FadeIn key={plan.id} delay={i * 0.08}>
              <PlanCard plan={plan} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-10 text-center">
          <p className="text-xs text-muted/80 md:text-sm">
            ※ Platinum（90%）へ到達できるのはBasic以上のプラン加入者のみです。Freeプランの還元率上限はGold（85%）となります。
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const highlighted = plan.highlighted;

  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden rounded-2xl bg-ink-card/80 p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1 md:p-8 ${
        highlighted
          ? 'border-2 border-accent shadow-glow'
          : 'border border-white/8 hover:border-accent/40'
      }`}
    >
      {highlighted && (
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-radial-glow opacity-40"
        />
      )}

      {plan.badges && plan.badges.length > 0 && (
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {plan.badges.map((badge, idx) => (
            <span
              key={badge}
              className={`font-display inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] ${
                highlighted && idx === 0
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-glow-soft'
                  : 'border border-accent/40 bg-accent/10 text-accent'
              }`}
            >
              {highlighted && idx === 0 && (
                <Sparkles className="size-3" strokeWidth={2.5} />
              )}
              {badge}
            </span>
          ))}
        </div>
      )}

      <h3 className="font-display text-2xl font-bold tracking-wider text-white md:text-3xl">
        {plan.name}
      </h3>
      <p className="mt-1 text-xs text-muted md:text-sm">{plan.tagline}</p>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-display text-3xl font-bold text-white md:text-4xl">
          {plan.monthlyFee}
        </span>
        <span className="text-xs text-muted">/ 月</span>
      </div>

      <div className="mt-6 rounded-xl border border-white/8 bg-white/[0.02] p-4">
        <div className="text-[10px] uppercase tracking-[0.2em] text-accent">
          還元率
        </div>
        <div className="font-display mt-1 text-4xl font-bold text-white">
          {plan.rebate}
        </div>
        <div className="mt-1 text-xs text-muted">{plan.rebateNote}</div>
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-3 text-xs">
        <div>
          <dt className="text-muted/70">スタートランク</dt>
          <dd className="mt-1 font-medium text-white">{plan.startRank}</dd>
        </div>
        <div>
          <dt className="text-muted/70">契約期間</dt>
          <dd className="mt-1 font-medium text-white">{plan.contract}</dd>
        </div>
      </dl>

      <ul className="mt-6 flex flex-col gap-2 border-t border-white/8 pt-5">
        {plan.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-2 text-sm leading-snug text-white/90"
          >
            <Check
              className="mt-0.5 size-4 shrink-0 text-brand-green"
              strokeWidth={2.5}
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {plan.minContractNote && (
        <p className="mt-4 text-[11px] text-muted/80">{plan.minContractNote}</p>
      )}

      <div className="mt-6 border-t border-white/8 pt-5 text-xs leading-relaxed text-muted">
        <span className="text-muted/70">対象：</span>
        {plan.target}
      </div>

      <div className="mt-6 flex-1" />
      <div className="mt-6">
        <CtaButton
          variant={highlighted ? 'primary' : 'ghost'}
          className="w-full"
        >
          このプランで相談する
        </CtaButton>
      </div>
    </div>
  );
}
