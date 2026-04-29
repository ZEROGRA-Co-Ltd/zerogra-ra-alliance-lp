import { Crown, Flame, MapPin, Users2, type LucideIcon } from 'lucide-react';

export type Company = {
  name: string;
  slug: string;
  /** Public asset path. Resolved via next/image. */
  logo: string;
};

// Logos live under /public/logos/ and are pre-renamed to match each
// company's slug (NN-{slug}.{ext}). Files are assigned in the order they
// were uploaded; if a company should be paired with a different file,
// just update the `logo` field below and rename the file accordingly.
export const companies: Company[] = [
  { name: 'リージャス', slug: 'regus', logo: '/logos/01-regus.webp' },
  { name: 'セコム', slug: 'secom', logo: '/logos/02-secom.png' },
  { name: 'ソニー損保', slug: 'sony-sonpo', logo: '/logos/03-sony-sonpo.jpg' },
  { name: 'TCB', slug: 'tcb', logo: '/logos/04-tcb.webp' },
  { name: 'アスゼナ', slug: 'asuzena', logo: '/logos/05-asuzena.jpg' },
  { name: 'TOKIUM', slug: 'tokium', logo: '/logos/06-tokium.jpg' },
  { name: 'Speee', slug: 'speee', logo: '/logos/07-speee.png' },
  { name: 'Geekly', slug: 'geekly', logo: '/logos/08-geekly.jpg' },
  {
    name: 'リクルートスタッフィング',
    slug: 'recruit-staffing',
    logo: '/logos/09-recruit-staffing.svg',
  },
  { name: 'Leverages', slug: 'leverages', logo: '/logos/10-leverages.png' },
  { name: 'ビザソ', slug: 'visaso', logo: '/logos/11-visaso.png' },
  { name: 'キーエンス', slug: 'keyence', logo: '/logos/12-keyence.jpg' },
  { name: 'Stockmark', slug: 'stockmark', logo: '/logos/13-stockmark.jpg' },
  { name: 'CROP', slug: 'crop', logo: '/logos/14-crop.png' },
  { name: 'MyVision', slug: 'myvision', logo: '/logos/15-myvision.png' },
  { name: 'インテグループ', slug: 'integroup', logo: '/logos/16-integroup.png' },
  {
    name: 'プロジェクトホールディングス',
    slug: 'project-holdings',
    logo: '/logos/17-project-holdings.png',
  },
  { name: 'コンナイト', slug: 'connaite', logo: '/logos/18-connaite.png' },
  { name: 'さすが屋', slug: 'sasugaya', logo: '/logos/19-sasugaya.png' },
  { name: 'メルカリ', slug: 'mercari', logo: '/logos/20-mercari.jpg' },
  { name: 'M&Aロイヤル', slug: 'ma-loyal', logo: '/logos/21-ma-loyal.png' },
];

export type PortfolioCategory = {
  label: string;
  description: string;
  icon: LucideIcon;
  /** Tailwind gradient class fragment used as `bg-gradient-to-br {accent}`. */
  accent: string;
};

export const portfolio: PortfolioCategory[] = [
  {
    label: '高単価求人',
    description: 'M&A仲介・ビジネスコンサルティング・ハイクラス層向け',
    icon: Crown,
    accent: 'from-amber-500/30 to-orange-500/15',
  },
  {
    label: '市場人気求人',
    description: 'SaaS / 人材 / AI / SNS / WEBマーケティング・成長産業',
    icon: Flame,
    accent: 'from-accent/30 to-primary/20',
  },
  {
    label: '希少ピンポイント求人',
    description: '大阪地場の中堅メーカー・北海道のBPO企業・地域密着型',
    icon: MapPin,
    accent: 'from-primary/30 to-violet-500/15',
  },
  {
    label: '大量決定求人',
    description:
      '携帯販売系 / 催事営業系・施工管理 / 一般事務・未経験・若手層',
    icon: Users2,
    accent: 'from-emerald-500/30 to-teal-500/15',
  },
];
