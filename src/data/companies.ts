import { Crown, Flame, MapPin, Users2, type LucideIcon } from 'lucide-react';

export type Company = {
  name: string;
  slug: string;
};

// Image asset path: /public/logos/{slug}.png
// If the file is missing, the CompanyCard component falls back to a
// text-only card automatically.
export const companies: Company[] = [
  { name: 'リージャス', slug: 'regus' },
  { name: 'セコム', slug: 'secom' },
  { name: 'ソニー損保', slug: 'sony-sonpo' },
  { name: 'TCB', slug: 'tcb' },
  { name: 'アスゼナ', slug: 'asuzena' },
  { name: 'TOKIUM', slug: 'tokium' },
  { name: 'Speee', slug: 'speee' },
  { name: 'Geekly', slug: 'geekly' },
  { name: 'リクルートスタッフィング', slug: 'recruit-staffing' },
  { name: 'Leverages', slug: 'leverages' },
  { name: 'ビザソ', slug: 'visaso' },
  { name: 'キーエンス', slug: 'keyence' },
  { name: 'Stockmark', slug: 'stockmark' },
  { name: 'CROP', slug: 'crop' },
  { name: 'MyVision', slug: 'myvision' },
  { name: 'インテグループ', slug: 'integroup' },
  { name: 'プロジェクトホールディングス', slug: 'project-holdings' },
  { name: 'コンナイト', slug: 'connaite' },
  { name: 'さすが屋', slug: 'sasugaya' },
  { name: 'メルカリ', slug: 'mercari' },
  { name: 'M&Aロイヤル', slug: 'ma-loyal' },
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
