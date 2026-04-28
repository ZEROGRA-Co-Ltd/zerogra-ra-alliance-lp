type Props = {
  className?: string;
  /** Kept for API compatibility; HTML rendering doesn't need it. */
  priority?: boolean;
};

// Renders the wordmark in HTML using the Inter font that's loaded via
// next/font, with the brand cyan→teal→green gradient on the "RA" letters
// and white on the rest (so it sits on the dark theme without any
// mix-blend tricks). The container holds a fixed 1082:610 aspect ratio,
// and the font size scales with container width via cqw units — meaning
// callers only need to set a width and the layout stays correct.
export function Logo({ className = '' }: Props) {
  return (
    <div
      className={`relative w-full ${className}`}
      style={{
        aspectRatio: '1082 / 610',
        containerType: 'inline-size',
      }}
      role="img"
      aria-label="ZEROGRA RA ALLIANCE"
    >
      <div
        className="font-display absolute inset-0 flex flex-col items-center justify-center text-center font-black leading-[1.05]"
        style={{ fontSize: '17.5cqw', letterSpacing: '-0.045em' }}
      >
        <span className="block whitespace-nowrap">
          <span className="text-white">ZEROG</span>
          <span className="gradient-text-logo">RA</span>
        </span>
        <span className="block whitespace-nowrap">
          <span className="gradient-text-logo">RA</span>
          <span className="text-white">&nbsp;ALLIANCE</span>
        </span>
      </div>
    </div>
  );
}
