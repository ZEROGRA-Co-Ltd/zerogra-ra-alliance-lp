'use client';

import { useState } from 'react';
import Image from 'next/image';

type Props = {
  name: string;
  logo: string;
};

// Renders the company logo at 120×60 (object-contain). SVGs go through a
// plain <img> because next/image's optimizer treats SVGs specially and
// some self-hosted setups silently 404 them; raster files use next/image
// for automatic format/size optimization. If either fails to load, we
// fall back to a centered text label so the card never reads as a blank
// gray block.
export function CompanyCard({ name, logo }: Props) {
  const [errored, setErrored] = useState(false);
  const isSvg = logo.toLowerCase().endsWith('.svg');

  const imgClass =
    'h-[60px] w-[120px] object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100';

  return (
    <div className="group relative flex aspect-[3/2] items-center justify-center rounded-xl border border-white/8 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-white/[0.05]">
      {errored ? (
        <span className="text-balance text-center text-sm font-medium text-muted">
          {name}
        </span>
      ) : isSvg ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logo}
          alt={name}
          width={120}
          height={60}
          loading="lazy"
          onError={() => setErrored(true)}
          className={imgClass}
        />
      ) : (
        <Image
          src={logo}
          alt={name}
          width={120}
          height={60}
          sizes="120px"
          onError={() => setErrored(true)}
          className={imgClass}
        />
      )}
    </div>
  );
}
