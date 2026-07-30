import type { Metadata, Viewport } from 'next';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import Script from 'next/script';
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
const TITLE = 'ZEROGRA RA ALLIANCE｜CA企業向け RA BPOサービス・アライアンス';
const DESCRIPTION =
  '自社でRAを構えずに紹介事業を運営できる、CA企業向けの外部RA BPOサービス。ZEROGRAのRAチームが選考伴走・企業リレーションを提供し、高還元率を実現するパートナー制度です。';
const OG_DESCRIPTION =
  '自社RA不要。ZEROGRAのRAチームがCA企業の紹介事業をBPOで支援。選考伴走・高還元率を実現する外部RAアライアンス。';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'RA BPO',
    'RA アウトソーシング',
    '外部RA 人材紹介',
    'CA企業 RAサポート',
    'RAアライアンス',
    '人材紹介 RA組織',
    '転職エージェント RA外注',
    '選考伴走 人材紹介',
    'ZEROGRA RA ALLIANCE',
    '人材紹介会社 BPO',
    'キャリアエージェント RA',
    '紹介事業 外部委託',
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
    description: '自社RA不要。ZEROGRAのRAチームがCA企業の紹介事業をBPOで支援する外部RAアライアンス。',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  // AI crawler hints
  other: {
    'application-name': 'ZEROGRA RA ALLIANCE',
    category: '人材紹介・RA BPO・RAアウトソーシング・RAアライアンス',
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
    'CA企業向けの外部RA BPOサービス。自社でRA組織を持たずに紹介事業を運営できるアライアンス。',
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
      'CA企業向けRA BPO・アウトソーシングサービス。ZEROGRAのRAチームが選考伴走・企業リレーションを提供し、高還元率を実現。',
    provider: {
      '@type': 'Organization',
      name: '株式会社ZEROGRA',
      url: 'https://zerogra-mars.com/',
    },
    areaServed: 'JP',
    serviceType: 'RA BPO・RAアウトソーシング・RAアライアンス',
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-W56CNCMJT8"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-W56CNCMJT8');
        `}
      </Script>
    </html>
  );
}
