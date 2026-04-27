import Image from 'next/image';

type Props = {
  size?: number;
  className?: string;
  priority?: boolean;
};

// Vector logo (transparent background, white "ZEROG"/"ALLIANCE" + brand
// gradient on "RA"). Authored as an SVG so it renders crisply on dark
// backgrounds without needing mix-blend tricks or chip wrappers.
export function Logo({ size = 140, className = '', priority = false }: Props) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo.svg"
        alt="ZEROGRA RA ALLIANCE"
        fill
        priority={priority}
        sizes={`${size}px`}
        className="object-contain"
      />
    </div>
  );
}
