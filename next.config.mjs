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
            // Allow embedding the TimeRex booking widget (frame-src). Other
            // CSP directives are intentionally omitted so the browser falls
            // back to permissive defaults — adding them would tighten the
            // policy and could break Next.js / framer-motion. The TimeRex
            // loader script comes from asset.timerex.net but doesn't need a
            // script-src allowlist when no other script-src is set.
            key: 'Content-Security-Policy',
            value:
              "frame-src 'self' https://timerex.net https://*.timerex.net;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
