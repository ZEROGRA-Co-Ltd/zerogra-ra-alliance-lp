'use client';

import { SectionHeader } from '../ui/SectionHeader';
import { FadeIn } from '../ui/FadeIn';
import { CompanyCard } from '../ui/CompanyCard';
import { companies, strengthDomains } from '@/src/data/companies';

export function Companies() {
  return (
    <section id="companies" className="relative py-24 md:py-32">
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Companies"
          title={
            <>
              <span className="gradient-text">推薦可能求人</span>
              の主な企業
            </>
          }
          description="ZEROGRAが直接開拓・コンタクトしている企業群です。"
        />

        <FadeIn delay={0.1} className="mt-14 md:mt-20">
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {companies.map((c) => (
              <CompanyCard key={c.slug} name={c.name} slug={c.slug} />
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-14 md:mt-16">
          <div className="border-gradient relative flex flex-col items-center gap-5 overflow-hidden rounded-3xl bg-ink-card/60 p-7 text-center backdrop-blur md:flex-row md:justify-between md:p-8 md:text-left">
            <div>
              <div className="font-display text-xs uppercase tracking-[0.3em] text-accent">
                Strength Domains
              </div>
              <h3 className="mt-2 text-lg font-bold md:text-xl">
                ZEROGRAが特に強みを発揮する3領域
              </h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2.5 md:gap-3">
              {strengthDomains.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-accent/40 bg-gradient-to-br from-accent/15 to-primary/10 px-4 py-1.5 text-sm font-medium text-white shadow-glow-soft md:px-5 md:py-2"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
