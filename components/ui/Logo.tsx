import Image from 'next/image';

type Props = {
  size?: number;
  className?: string;
  priority?: boolean;
  variant?: 'chip' | 'flat';
};

// The logo PNG is supplied with a white background. We wrap it in a light
// rounded container so the white background blends naturally inside the
// dark-themed page, instead of relying on mix-blend tricks which can
// distort the brand colors.
export function Logo({
  size = 140,
  className = '',
  priority = false,
  variant = 'chip',
}: Props) {
  const w = size;
  const h = Math.round(size * 0.32);

  if (variant === 'flat') {
    return (
      <div
        className={`relative inline-flex items-center justify-center ${className}`}
        style={{ width: w, height: h }}
      >
        <Image
          src="/logo.png"
          alt="ZEROGRA RA ALLIANCE"
          fill
          priority={priority}
          sizes={`${w}px`}
          className="object-contain"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-xl bg-white px-3 py-1.5 ring-1 ring-white/20 shadow-[0_0_24px_rgba(255,255,255,0.08)] ${className}`}
    >
      <div className="relative" style={{ width: w, height: h }}>
        <Image
          src="/logo.png"
          alt="ZEROGRA RA ALLIANCE"
          fill
          priority={priority}
          sizes={`${w}px`}
          className="object-contain"
        />
      </div>
    </div>
  );
}
