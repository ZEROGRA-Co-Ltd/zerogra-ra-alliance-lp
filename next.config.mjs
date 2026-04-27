/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            // Explicitly allow embedding the TimeRex booking widget. Other
            // directives are intentionally omitted so the browser falls back
            // to its permissive defaults — we don't want to inadvertently
            // restrict Next.js, framer-motion, or analytics resources.
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://timerex.net;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
