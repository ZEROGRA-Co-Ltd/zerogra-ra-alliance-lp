'use client';

import { Info } from 'lucide-react';

export function BpoBanner() {
  return (
    <div
      role="note"
      aria-label="サービス位置付け"
      className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-900 to-cyan-900 px-4 py-6"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center sm:flex-row sm:items-start sm:gap-4 sm:text-center">
        <Info
          className="size-6 shrink-0 text-white sm:mt-0.5"
          strokeWidth={2}
          aria-hidden
        />
        <div className="flex-1 text-center">
          <p className="text-balance text-sm font-bold leading-snug text-white md:text-base">
            ZEROGRA RA ALLIANCEは求人プラットフォームサービスではなく、RAのBPOサービス・アライアンスです。
          </p>
          <p className="mt-1.5 text-xs leading-relaxed text-white/70 md:text-sm">
            既存の求人データベースサービスとは競合しません。現在ご利用中のサービスと併用いただけます。
          </p>
        </div>
      </div>
    </div>
  );
}
