'use client';

import { useState } from 'react';
import Image from 'next/image';

type Props = {
  name: string;
  logo: string;
};

// White-card logo tile (160×80). Logos render at their original brand
// colours and fill the inner area via w-full/h-full + object-contain so
// each mark feels balanced regardless of intrinsic aspect.
//
// SVG paths render through a plain <img> because next/image's optimizer
// handles SVG inconsistently. Both branches share an onError handler
// that swaps to a centered text label so the card never reads as a
// blank white block.
export function CompanyCard({ name, logo }: Props) {
  const [errored, setErrored] = useState(false);
  const isSvg = logo.toLowerCase().endsWith('.svg');

  const imgClass = 'h-full w-full object-contain';

  return (
    <div className="group relative flex h-[80px] w-[160px] items-center justify-center rounded-xl border border-white/20 bg-white p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-glow-soft">
      {errored ? (
        <span className="text-balance text-center text-xs font-medium text-slate-700">
          {name}
        </span>
      ) : isSvg ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logo}
          alt={name}
          loading="lazy"
          onError={() => setErrored(true)}
          className={imgClass}
        />
      ) : (
        <Image
          src={logo}
          alt={name}
          width={160}
          height={80}
          sizes="160px"
          onError={() => setErrored(true)}
          className={imgClass}
        />
      )}
    </div>
  );
}
