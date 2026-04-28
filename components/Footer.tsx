import { Logo } from './ui/Logo';

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink-deep">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex w-[120px] items-center">
          <Logo />
        </div>

        <div className="flex flex-col gap-2 text-xs tracking-wider text-muted md:items-end md:gap-1.5">
          <a
            href="https://zerogra-mars.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-sm text-white/85 transition-colors hover:text-accent"
          >
            株式会社ZEROGRA
          </a>
          <p className="font-display">
            © 2026 ZEROGRA Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
