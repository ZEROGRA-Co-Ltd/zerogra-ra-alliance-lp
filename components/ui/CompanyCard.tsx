import Image from 'next/image';

type Props = {
  name: string;
  logo: string;
};

// Renders the company logo via next/image. The `brightness-0 invert`
// filter knocks out colors and produces a clean white-on-dark mark, so
// every logo unifies visually inside the dark-themed marquee.
export function CompanyCard({ name, logo }: Props) {
  return (
    <div className="group relative flex aspect-[3/2] items-center justify-center rounded-xl border border-white/8 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-white/[0.05]">
      <Image
        src={logo}
        alt={name}
        width={120}
        height={60}
        className="h-[60px] w-[120px] object-contain opacity-70 brightness-0 invert transition-opacity duration-300 group-hover:opacity-100"
      />
    </div>
  );
}
