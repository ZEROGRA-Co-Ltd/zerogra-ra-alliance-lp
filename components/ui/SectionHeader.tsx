'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
}: Props) {
  const alignCls = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`flex flex-col gap-4 ${alignCls}`}
    >
      {eyebrow && (
        <span className="font-display inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-accent">
          <span className="size-1.5 rounded-full bg-accent animate-pulseGlow" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance text-3xl font-bold leading-tight md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-3xl text-base text-muted md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
