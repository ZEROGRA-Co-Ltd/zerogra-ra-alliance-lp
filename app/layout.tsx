import type { Metadata, Viewport } from 'next';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
});

export const metadata: Metadata = {
  title: 'ZEROGRA RA ALLIANCE — ハイレベルなRA組織を、アライアンスで実現。',
  description:
    'エージェントの成約率と利益率を最大化する、共存・共栄のパートナー制度。月額無料で6,000件以上の良質な求人DBへアクセス。',
  metadataBase: new URL('https://ra-alliance.zerogra.co.jp'),
  openGraph: {
    title: 'ZEROGRA RA ALLIANCE',
    description:
      'ハイレベルなRA組織を、アライアンスで実現。共存・共栄のパートナー制度。',
    type: 'website',
    locale: 'ja_JP',
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0f1e',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJp.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
