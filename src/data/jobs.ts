import {
  BarChart3,
  Building2,
  HardHat,
  Heart,
  Monitor,
  Settings,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';

export type JobCategory =
  | 'saas'
  | 'office'
  | 'construction'
  | 'ma'
  | 'beauty'
  | 'consulting'
  | 'manufacturing';

export type Job = {
  id: string;
  position: string;
  commission: string;
  features: string[];
  category: JobCategory;
  icon: LucideIcon;
  /** Tailwind gradient classes applied as `bg-gradient-to-br {gradient}`. */
  gradient: string;
};

export const jobs: Job[] = [
  {
    id: 'saas-fs',
    position: '有名SaaS企業のフィールドセールス',
    commission: '理論年収の35%',
    features: ['営業経験1年以上', '日本を代表するサービス', '大量採用'],
    category: 'saas',
    icon: Monitor,
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    id: 'office-reception',
    position: '外資系シェアオフィスの受付スタッフ',
    commission: '理論年収の30%',
    features: ['専門経験不問', '全国に採用エリアあり', '面接1回で内定'],
    category: 'office',
    icon: Building2,
    gradient: 'from-slate-600 to-blue-500',
  },
  {
    id: 'construction-mgmt',
    position: '施工管理サポート',
    commission: '一律70万円',
    features: ['大量採用', '面接1回', '内定率80%以上'],
    category: 'construction',
    icon: HardHat,
    gradient: 'from-orange-600 to-amber-500',
  },
  {
    id: 'ma-advisor',
    position: 'M&Aアドバイザー',
    commission: '一律500万円',
    features: [
      '年収5,000万円以上を狙える',
      '未経験OK・金融経験不問',
      '営業経験1年以上',
    ],
    category: 'ma',
    icon: TrendingUp,
    gradient: 'from-emerald-600 to-teal-500',
  },
  {
    id: 'beauty-counselor',
    position: '大手クリニックの美容カウンセラー',
    commission: '一律50万円',
    features: ['全国で大量採用', '面接1回', '応募から内定まで成約率50%'],
    category: 'beauty',
    icon: Heart,
    gradient: 'from-pink-600 to-rose-500',
  },
  {
    id: 'consulting-ipo',
    position: 'IPOを狙うコンサルティングファーム',
    commission: '理論年収の100%',
    features: [
      '最低オファー800万円以上',
      'コンサル未経験OK',
      '年間200名採用',
    ],
    category: 'consulting',
    icon: BarChart3,
    gradient: 'from-violet-600 to-purple-500',
  },
  {
    id: 'manufacturing-operator',
    position: '年商500億メーカーの機械オペレーター',
    commission: '理論年収の35%',
    features: [
      '年齢・経験・学歴一切不問',
      '面接1回で即内定',
      '完全独占求人',
    ],
    category: 'manufacturing',
    icon: Settings,
    gradient: 'from-gray-600 to-slate-500',
  },
];
