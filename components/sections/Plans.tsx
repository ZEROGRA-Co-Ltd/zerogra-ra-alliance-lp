'use client';

import { Check, Minus, Star, TrendingUp } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { FadeIn } from '../ui/FadeIn';
import { CtaButton } from '../ui/CtaButton';
import {
  plans,
  planFeatureRows,
  type Plan,
  type PlanId,
} from '@/src/data/plans';

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

        {/* Desktop (lg+): unified comparison grid table */}
        <FadeIn delay={0.1} className="mt-14 hidden lg:block lg:mt-20">
          <PlanComparisonTable />
        </FadeIn>

        {/* Mobile / tablet (<lg): stacked plan cards */}
        <div className="mt-14 grid items-stretch gap-6 md:mt-20 md:grid-cols-2 lg:hidden">
          {plans.map((plan, i) => (
            <FadeIn key={plan.id} delay={i * 0.08} className="h-full">
              <PlanCard plan={plan} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

const GRID_COLS =
  'grid-cols-[minmax(180px,1.1fr)_repeat(4,minmax(0,1fr))]';

function PlanComparisonTable() {
  return (
    <div
      role="table"
      aria-label="プラン比較表"
      className="overflow-hidden rounded-2xl border border-white/8 bg-ink-card/60 backdrop-blur"
    >
      {/* Header row — plan info (固定高さ) */}
      <div className={`grid ${GRID_COLS}`} role="row">
        <div className="border-b border-white/8 bg-white/[0.02] p-5" />
        {plans.map((plan) => (
          <PlanHeaderCell key={plan.id} plan={plan} />
        ))}
      </div>

      {/* Target row */}
      <ComparisonRow label="対象企業像">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`p-5 text-xs leading-relaxed text-white/85 ${cellBg(plan)}`}
            role="cell"
          >
            {plan.target}
          </div>
        ))}
      </ComparisonRow>

      {/* Feature rows */}
      {planFeatureRows.map((row) => (
        <ComparisonRow key={row.label} label={row.label}>
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`flex items-center justify-center p-5 ${cellBg(plan)}`}
              role="cell"
            >
              {row.values[plan.id as PlanId] ? (
                <Check
                  className="size-5 text-brand-green"
                  strokeWidth={2.5}
                  aria-label="対応"
                />
              ) : (
                <Minus
                  className="size-5 text-muted/40"
                  strokeWidth={2}
                  aria-label="非対応"
                />
              )}
            </div>
          ))}
        </ComparisonRow>
      ))}

      {/* Monthly goal row */}
      <ComparisonRow label="月間決定目標">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`flex items-center justify-center gap-2 p-5 ${cellBg(plan)}`}
            role="cell"
          >
            <TrendingUp
              className="size-4 shrink-0 text-accent"
              strokeWidth={2}
            />
            <span className="font-display text-sm font-bold text-white">
              {plan.monthlyGoal}
            </span>
          </div>
        ))}
      </ComparisonRow>

      {/* CTA row */}
      <div className={`grid ${GRID_COLS} border-t border-white/8`} role="row">
        <div className="bg-white/[0.02] p-5" />
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`p-5 ${cellBg(plan)}`}
            role="cell"
          >
            <CtaButton
              variant={plan.highlighted ? 'primary' : 'ghost'}
              className="w-full"
            >
              相談する
            </CtaButton>
            {plan.minContractNote && (
              <p className="mt-3 text-center text-[10px] text-muted/80">
                {plan.minContractNote}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ComparisonRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`grid ${GRID_COLS} border-t border-white/8`} role="row">
      <div
        className="flex items-center bg-white/[0.02] p-5 text-sm font-medium text-white/90"
        role="rowheader"
      >
        {label}
      </div>
      {children}
    </div>
  );
}

function cellBg(plan: Plan) {
  return plan.theme.cardBg;
}

function PlanHeaderCell({ plan }: { plan: Plan }) {
  const highlighted = plan.highlighted;
  return (
    <div
      className={`relative flex min-h-[200px] flex-col items-center justify-center border-b border-white/8 p-5 text-center ${plan.theme.cardBg}`}
      role="columnheader"
    >
      {highlighted && (
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-accent"
        />
      )}

      <div className="flex items-center justify-center gap-2">
        {highlighted && (
          <Star
            className="size-5 fill-yellow-400 text-yellow-400"
            strokeWidth={2}
            aria-label="おすすめ"
          />
        )}
        <h3 className="font-display text-xl font-bold tracking-wider text-white md:text-2xl">
          {plan.name}
        </h3>
      </div>

      <div className="mt-3 flex items-baseline justify-center gap-1">
        <span className="font-display text-2xl font-bold text-white md:text-3xl">
          {plan.monthlyFee}
        </span>
        <span className="text-[10px] text-muted">/ 月</span>
      </div>

      <div className="mt-2 text-[11px] leading-tight text-muted">
        {plan.feeFormat}
      </div>

      <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1">
        <span className="text-[9px] uppercase tracking-[0.15em] text-muted">
          Start
        </span>
        <span
          className={`font-display text-xs font-bold ${plan.startRankColor}`}
        >
          {plan.startRankLabel}
        </span>
      </div>
    </div>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const highlighted = plan.highlighted;

  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden rounded-2xl border-2 p-7 backdrop-blur transition-all duration-500 hover:-translate-y-1 md:p-8 ${plan.theme.cardBg} ${plan.theme.cardBorder} ${plan.theme.cardShadow ?? ''}`}
    >
      {/* Fixed header area — 200px min height */}
      <div className="flex min-h-[200px] flex-col">
        <div className="flex items-center gap-2">
          {highlighted && (
            <Star
              className="size-6 shrink-0 fill-yellow-400 text-yellow-400"
              strokeWidth={2}
              aria-label="おすすめ"
            />
          )}
          <h3 className="font-display text-2xl font-bold tracking-wider text-white md:text-3xl">
            {plan.name}
          </h3>
        </div>

        <div className="mt-4 flex items-baseline gap-2">
          <span className="font-display text-3xl font-bold text-white md:text-4xl">
            {plan.monthlyFee}
          </span>
          <span className="text-xs text-muted">/ 月</span>
        </div>

        <p className="mt-2 text-xs leading-tight text-muted">
          {plan.feeFormat}
        </p>

        <div className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
          <span className="text-[10px] uppercase tracking-[0.15em] text-muted">
            スタートランク
          </span>
          <span
            className={`font-display text-sm font-bold ${plan.startRankColor}`}
          >
            {plan.startRankLabel}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="mt-5 flex flex-1 flex-col">
        <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3">
          <p className="text-xs leading-relaxed text-white/85">{plan.target}</p>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-muted">
          {plan.targetDetail}
        </p>

        <ul className="mt-5 flex flex-1 flex-col gap-2 border-t border-white/8 pt-5">
          {planFeatureRows.map((row) => {
            const enabled = row.values[plan.id as PlanId];
            return (
              <li
                key={row.label}
                className={`flex items-start gap-2 text-sm leading-snug ${
                  enabled ? 'text-white/90' : 'text-muted/50'
                }`}
              >
                {enabled ? (
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-brand-green"
                    strokeWidth={2.5}
                  />
                ) : (
                  <Minus
                    className="mt-0.5 size-4 shrink-0 text-muted/40"
                    strokeWidth={2}
                  />
                )}
                <span>{row.label}</span>
              </li>
            );
          })}
        </ul>

        {plan.minContractNote && (
          <p className="mt-4 text-[11px] text-muted/80">
            {plan.minContractNote}
          </p>
        )}

        <div className="mt-5 flex items-center justify-between gap-3 rounded-xl border border-accent/20 bg-accent/[0.05] p-3">
          <div className="flex items-center gap-2">
            <TrendingUp
              className="size-4 shrink-0 text-accent"
              strokeWidth={2}
            />
            <span className="text-[11px] uppercase tracking-[0.15em] text-accent">
              月間決定目標
            </span>
          </div>
          <span className="font-display text-sm font-bold text-white md:text-base">
            {plan.monthlyGoal}
          </span>
        </div>

        <div className="mt-auto pt-6">
          <CtaButton
            variant={highlighted ? 'primary' : 'ghost'}
            className="w-full"
          >
            このプランで相談する
          </CtaButton>
        </div>
      </div>
    </div>
  );
}
