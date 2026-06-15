'use client';

import { Info } from 'lucide-react';

export function BpoBanner() {
  return (
    <section
      aria-label="サービス位置付け"
      className="relative bg-gradient-to-r from-blue-900 to-cyan-900 px-4 py-6"
    >
      <div className="mx-auto flex max-w-7xl items-start gap-4 md:items-center">
        <Info
          className="mt-0.5 size-6 shrink-0 text-white md:mt-0 md:size-7"
          strokeWidth={2}
          aria-hidden
        />
        <div className="flex-1 text-center md:text-left">
          <p className="text-balance text-sm font-bold leading-snug text-white md:text-base">
            ZEROGRA RA ALLIANCEは求人プラットフォームサービスではなく、RAのBPOサービス・アライアンスです。
          </p>
          <p className="mt-1.5 text-xs leading-relaxed text-white/70 md:text-sm">
            既存の求人データベースサービスとは競合しません。現在ご利用中のサービスと併用いただけます。
          </p>
        </div>
      </div>
    </section>
  );
}
