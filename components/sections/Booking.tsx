'use client';

import { useEffect, useState } from 'react';
import { SectionHeader } from '../ui/SectionHeader';
import { FadeIn } from '../ui/FadeIn';

export function Booking() {
  const [iframeHeight, setIframeHeight] = useState(700);

  useEffect(() => {
    const update = () => {
      setIframeHeight(window.innerWidth < 768 ? 900 : 700);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

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
              共に、
              <span className="gradient-text">エージェントの未来</span>
              を創る。
            </>
          }
          description="大量集客・低決定率・低手数料から脱却し、共に高決定率を目指しましょう。まずはお気軽にご相談ください。"
        />

        <FadeIn delay={0.15} className="mt-12 md:mt-16">
          <div className="border-gradient relative rounded-2xl bg-ink-card/80 p-3 backdrop-blur md:p-5">
            <div
              className="pointer-events-none absolute -inset-px rounded-2xl"
              style={{
                boxShadow:
                  '0 0 80px rgba(0,194,255,0.18), 0 0 160px rgba(37,99,235,0.18)',
              }}
              aria-hidden
            />
            <div className="overflow-hidden rounded-xl bg-white">
              <iframe
                src="https://timerex.net/s/sotakonno/49ea2234"
                width="100%"
                height={iframeHeight}
                frameBorder="0"
                title="ZEROGRA RA ALLIANCE — 日程調整"
                style={{ borderRadius: '12px', display: 'block' }}
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
    </section>
  );
}
