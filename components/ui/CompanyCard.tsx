'use client';

import { useState } from 'react';

type Props = {
  name: string;
  slug: string;
};

// Tries to load /logos/{slug}.png; on 404 / decode error, swaps to a
// text-only card so the grid stays intact regardless of which assets
// have been supplied yet.
export function CompanyCard({ name, slug }: Props) {
  const [errored, setErrored] = useState(false);

  return (
    <div className="group relative flex aspect-[3/2] items-center justify-center rounded-xl border border-white/8 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-white/[0.05]">
      {errored ? (
        <span className="text-balance text-center text-sm font-medium text-muted md:text-base">
          {name}
        </span>
      ) : (
        // Plain <img> (not next/image) so we get a real onError event and
        // can degrade gracefully when the file isn't yet uploaded.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/logos/${slug}.png`}
          alt={name}
          loading="lazy"
          onError={() => setErrored(true)}
          className="max-h-[60%] max-w-[80%] object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100"
        />
      )}
    </div>
  );
}
