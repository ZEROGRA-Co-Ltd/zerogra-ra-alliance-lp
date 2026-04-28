'use client';

import Script from 'next/script';
import { SectionHeader } from '../ui/SectionHeader';
import { FadeIn } from '../ui/FadeIn';

declare global {
  interface Window {
    TimerexCalendar?: () => void;
  }
}

export function Booking() {
  return (
    <section id="booking" className="relative py-24 md:py-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Booking"
          title={
            <>
              まずは
              <span className="gradient-text">気軽にご相談</span>
              ください
            </>
          }
          description="選考支援から求人開拓まで、ZEROGRAが全力でサポートします。"
        />

        <FadeIn delay={0.15} className="mt-12 md:mt-16">
          <div className="border-gradient relative rounded-2xl bg-ink-card/80 p-3 backdrop-blur md:p-5">
            {/* Glow ring around the embed */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-px rounded-2xl"
              style={{
                boxShadow:
                  '0 0 80px rgba(0,194,255,0.18), 0 0 160px rgba(37,99,235,0.18)',
              }}
            />
            <div className="relative rounded-xl bg-white">
              {/* Official TimeRex embed: a placeholder <div> picked up by
                  the loader script below, which renders the calendar inline. */}
              <div
                id="timerex_calendar"
                data-url="https://timerex.net/s/sotakonno/49ea2234"
                style={{ minHeight: 800, borderRadius: '12px' }}
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.25} className="mt-10 text-center">
          <p className="text-sm text-muted">
            日程の都合が合わない場合や事前のご質問は、後日改めてご相談ください。
          </p>
        </FadeIn>
      </div>

      {/* TimeRex official loader. Initializes the widget by calling
          window.TimerexCalendar() once the script has loaded. */}
      <Script
        id="timerex_embed"
        src="https://asset.timerex.net/js/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && window.TimerexCalendar) {
            window.TimerexCalendar();
          }
        }}
      />
    </section>
  );
}
