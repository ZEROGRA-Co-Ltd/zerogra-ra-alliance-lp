'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { CtaButton } from './ui/CtaButton';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/5 bg-ink/70 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <a
          href="#top"
          aria-label="ZEROGRA RA ALLIANCE"
          className="flex items-center"
        >
          <Image
            src="/logo.png"
            alt="ZEROGRA RA ALLIANCE"
            width={160}
            height={90}
            priority
            className="h-auto"
          />
        </a>
        <CtaButton size="sm" className="hidden sm:inline-flex">
          無料で相談する
        </CtaButton>
        <CtaButton size="sm" className="sm:hidden">
          相談する
        </CtaButton>
      </div>
    </header>
  );
}
