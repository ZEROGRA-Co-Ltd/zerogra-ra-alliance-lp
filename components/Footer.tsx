import { Logo } from './ui/Logo';

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-ink-deep">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-10 md:flex-row md:items-center md:px-8">
        <div className="flex items-center gap-3">
          <Logo size={96} />
        </div>
        <p className="font-display text-xs tracking-wider text-muted">
          © 2026 ZEROGRA Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
