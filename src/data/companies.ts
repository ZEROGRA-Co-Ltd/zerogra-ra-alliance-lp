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

export const strengthDomains = ['M&A', '人材・HR', '未経験求人系'];
