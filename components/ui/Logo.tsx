import Image from 'next/image';

type Props = {
  className?: string;
  priority?: boolean;
};

// Intrinsic dimensions match the source asset (1082×610). Callers control
// rendered size via Tailwind width classes; height stays auto so the aspect
// ratio is preserved.
export function Logo({ className = '', priority = false }: Props) {
  return (
    <Image
      src="/logo.svg"
      alt="ZEROGRA RA ALLIANCE"
      width={1082}
      height={610}
      priority={priority}
      className={`h-auto w-full object-contain ${className}`}
    />
  );
}
