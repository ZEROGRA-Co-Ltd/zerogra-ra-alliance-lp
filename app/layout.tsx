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

const SITE_URL = 'https://zerogra-ra-alliance-lp.vercel.app';
const TITLE = 'ZEROGRA RA ALLIANCE｜CA企業向け無料求人DBアライアンス';
const DESCRIPTION =
  '月額完全無料で6,000件以上の求人DBにアクセス。株式会社ZEROGRAが提供するCA企業向けRAアライアンス。求人開拓・選考伴走・高還元率を実現するパートナー制度です。';
const OG_DESCRIPTION =
  '月額完全無料で6,000件以上の求人DBにアクセス。求人開拓・選考伴走・高還元率を実現するCA企業向けRAパートナー制度。';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    '求人データベース 無料',
    'CA企業 求人DB',
    'RAアライアンス',
    '人材紹介 求人 無料',
    'エージェントプラットフォーム',
    '転職エージェント 求人開拓',
    'RA アウトソーシング',
    '人材エージェント 求人DB',
    'ZEROGRA RA ALLIANCE',
    '求人データベース CA',
    '人材紹介会社 求人 費用なし',
    'キャリアエージェント 求人',
  ],
  authors: [{ name: '株式会社ZEROGRA', url: 'https://zerogra-mars.com/' }],
  creator: '株式会社ZEROGRA',
  publisher: '株式会社ZEROGRA',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: SITE_URL,
    siteName: 'ZEROGRA RA ALLIANCE',
    title: TITLE,
    description: OG_DESCRIPTION,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ZEROGRA RA ALLIANCE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: '月額完全無料で6,000件以上の求人DBにアクセス。CA企業向けRAアライアンス。',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  // AI crawler hints
  other: {
    'application-name': 'ZEROGRA RA ALLIANCE',
    category: '人材紹介・求人データベース・RAアライアンス',
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0f1e',
  width: 'device-width',
  initialScale: 1,
};

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'ZEROGRA RA ALLIANCE',
  description:
    '月額完全無料で6,000件以上の求人DBにアクセスできるCA企業向けRAアライアンス。',
  url: SITE_URL,
  publisher: {
    '@type': 'Organization',
    name: '株式会社ZEROGRA',
    url: 'https://zerogra-mars.com/',
  },
  mainEntity: {
    '@type': 'Service',
    name: 'ZEROGRA RA ALLIANCE',
    description:
      'CA企業向け求人DBアライアンスサービス。月額無料・高還元率・RAによる選考伴走。',
    provider: {
      '@type': 'Organization',
      name: '株式会社ZEROGRA',
      url: 'https://zerogra-mars.com/',
    },
    areaServed: 'JP',
    serviceType: '求人データベースアライアンス',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJp.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
