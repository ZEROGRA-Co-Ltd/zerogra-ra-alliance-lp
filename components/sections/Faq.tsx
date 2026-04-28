'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { FadeIn } from '../ui/FadeIn';
import { faqItems } from '@/src/data/faq';

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute right-1/3 top-1/4 h-[400px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title={
            <>
              <span className="gradient-text">よくあるご質問</span>
            </>
          }
        />

        <FadeIn delay={0.1} className="mt-12 md:mt-16">
          <ul className="flex flex-col gap-3">
            {faqItems.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <li
                  key={i}
                  className={`overflow-hidden rounded-2xl border bg-ink-card/70 backdrop-blur transition-colors duration-300 ${
                    isOpen ? 'border-accent/50' : 'border-white/8 hover:border-white/20'
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-6"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="font-display text-sm font-bold text-accent md:text-base">
                        Q{i + 1}.
                      </span>
                      <span className="text-base font-medium text-white md:text-lg">
                        {item.question}
                      </span>
                    </span>
                    <span
                      className={`grid size-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-accent transition-transform duration-300 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    >
                      <Plus className="size-4" strokeWidth={2} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="flex items-baseline gap-3 px-5 pb-6 md:px-6">
                          <span className="font-display text-sm font-bold text-brand-green md:text-base">
                            A.
                          </span>
                          <p className="text-sm leading-relaxed text-muted md:text-base">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
