import Image from 'next/image';

type Props = {
  className?: string;
  priority?: boolean;
};

// Reads /public/logo.png. Intrinsic dimensions match the source asset
// (1082×610) so next/image preserves the aspect ratio automatically.
// Callers control rendered size via Tailwind width classes; height stays
// auto. The asset is supplied by the user; if missing the component
// degrades to next/image's default 404 placeholder.
export function Logo({ className = '', priority = false }: Props) {
  return (
    <Image
      src="/logo.png"
      alt="ZEROGRA RA ALLIANCE"
      width={1082}
      height={610}
      priority={priority}
      className={`h-auto w-full object-contain ${className}`}
    />
  );
}
