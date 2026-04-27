'use client';

import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

type Props = {
  href?: string;
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

export function CtaButton({
  href = '#booking',
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}: Props) {
  const sizeCls =
    size === 'lg'
      ? 'px-8 py-4 text-base'
      : size === 'sm'
      ? 'px-4 py-2 text-sm'
      : 'px-6 py-3 text-sm md:text-base';

  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300';

  if (variant === 'ghost') {
    return (
      <a
        href={href}
        className={`${base} ${sizeCls} border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-accent/50 ${className}`}
      >
        <span>{children}</span>
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </a>
    );
  }

  return (
    <a
      href={href}
      className={`${base} ${sizeCls} text-white shadow-glow ${className}`}
      style={{
        background:
          'linear-gradient(135deg, #2563EB 0%, #00c2ff 100%)',
      }}
    >
      <span className="relative z-10">{children}</span>
      <ArrowRight className="relative z-10 size-4 transition-transform group-hover:translate-x-0.5" />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(135deg, #00c2ff 0%, #3ecf8e 100%)',
        }}
      />
    </a>
  );
}
