import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0a0f1e',
          deep: '#060a17',
          card: '#0f152a',
        },
        primary: {
          DEFAULT: '#2563EB',
          light: '#3b82f6',
        },
        accent: {
          DEFAULT: '#00c2ff',
          soft: '#7dd3fc',
        },
        brand: {
          green: '#3ecf8e',
          teal: '#2bb5a0',
        },
        muted: '#94a3b8',
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)', 'var(--font-inter)', 'sans-serif'],
        display: ['var(--font-inter)', 'var(--font-noto-sans-jp)', 'sans-serif'],
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.06) 1px, transparent 1px)',
        'radial-glow':
          'radial-gradient(circle at 50% 0%, rgba(37,99,235,0.35), transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 60px rgba(0,194,255,0.25), 0 0 120px rgba(37,99,235,0.18)',
        'glow-soft': '0 0 40px rgba(0,194,255,0.18)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%,100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        drift: {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(20px, -10px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        'marquee-ltr': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'marquee-rtl': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        drift: 'drift 14s ease-in-out infinite',
        'marquee-ltr': 'marquee-ltr 40s linear infinite',
        'marquee-rtl': 'marquee-rtl 40s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
