'use client';

import { SectionHeader } from '../ui/SectionHeader';
import { FadeIn } from '../ui/FadeIn';
import { allianceSteps } from '@/src/data/steps';

export function Steps() {
  return (
    <section id="steps" className="relative py-24 md:py-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/3 h-[400px] w-[500px] rounded-full bg-brand-green/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Process"
          title={
            <>
              <span className="gradient-text">アライアンス締結</span>
              までの流れ
            </>
          }
          description="お問い合わせから推薦活動開始まで、最短即日で進められます。"
        />

        <div className="relative mt-14 md:mt-20">
          {/* connector line — desktop only */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[34px] hidden h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent md:block"
          />

          <ol className="grid gap-5 md:grid-cols-4 md:gap-6">
            {allianceSteps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.1}>
                <li className="relative flex h-full flex-col rounded-2xl border border-white/8 bg-ink-card/70 p-7 backdrop-blur transition-colors duration-500 hover:border-accent/40">
                  <div className="flex items-center gap-3">
                    <div className="relative inline-flex size-[68px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-accent/20 shadow-glow-soft">
                      <span className="absolute inset-1 rounded-full bg-ink-deep/80" />
                      <span className="font-display relative text-base font-bold uppercase tracking-widest text-accent">
                        {step.number}
                      </span>
                    </div>
                    <div className="font-display text-xs uppercase tracking-[0.25em] text-accent">
                      Step
                    </div>
                  </div>
                  <h3 className="mt-5 text-lg font-bold md:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                    {step.description}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
