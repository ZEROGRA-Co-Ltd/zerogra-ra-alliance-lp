export type PlanId = 'free' | 'basic' | 'pro' | 'executive';

export type PlanFeatureRow = {
  label: string;
  values: Record<PlanId, boolean>;
};

export const planFeatureRows: PlanFeatureRow[] = [
  {
    label: '5,000求人へのアクセス',
    values: { free: true, basic: true, pro: true, executive: true },
  },
  {
    label: 'ランク制度（半期評価・昇格あり）',
    values: { free: true, basic: true, pro: true, executive: true },
  },
  {
    label: 'AIマッチングシステム（無料）',
    values: { free: false, basic: true, pro: true, executive: true },
  },
  {
    label: '求人選定サポート',
    values: { free: false, basic: true, pro: true, executive: true },
  },
  {
    label: '書類添削',
    values: { free: false, basic: true, pro: true, executive: true },
  },
  {
    label: '企業開拓リクエスト',
    values: { free: false, basic: true, pro: true, executive: true },
  },
  {
    label: '面接対策（各候補者1回、RA担当者が実施）',
    values: { free: false, basic: false, pro: true, executive: true },
  },
  {
    label: '月次事業相談MTG × 月4回（週次・各1時間）',
    values: { free: false, basic: false, pro: true, executive: true },
  },
];

export type Plan = {
  id: PlanId;
  name: string;
  tagline: string;
  monthlyFee: string;
  feeNote: string;
  feeFormat: string;
  rebate: string;
  rebateNote: string;
  startRank: string;
  startRankLabel: string;
  startRankColor: string;
  contract: string;
  features: string[];
  target: string;
  targetDetail: string;
  monthlyGoal: string;
  badges?: string[];
  highlighted?: boolean;
  minContractNote?: string;
  theme: {
    cardBg: string;
    cardBorder: string;
    cardShadow?: string;
  };
};

export const plans: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    tagline: '完全成果報酬',
    monthlyFee: '¥0',
    feeNote: '完全成果報酬',
    feeFormat: '完全成果報酬',
    rebate: '75〜85%',
    rebateNote: '上限Gold＝85%止まり',
    startRank: 'Standard',
    startRankLabel: 'Standard',
    startRankColor: 'text-[#94a3b8]',
    contract: '縛りなし',
    features: [
      '5,000求人へのアクセス',
      'ランク制度（半期評価・昇格あり）',
    ],
    target: '人材紹介事業を立ち上げたばかりのスタート期の企業',
    targetDetail:
      '完全成果報酬（レベニューシェア）で優良な5,000求人にアクセス。ランク昇給制度あり。',
    monthlyGoal: '月1〜3名（目安）',
    theme: {
      cardBg: 'bg-white/[0.03]',
      cardBorder: 'border-slate-700',
    },
  },
  {
    id: 'basic',
    name: 'Basic',
    tagline: '月額固定＋成果報酬',
    monthlyFee: '¥120,000',
    feeNote: '月額固定＋成果報酬',
    feeFormat: '月額固定＋成果報酬',
    rebate: '85〜90%',
    rebateNote: 'Platinum到達可能',
    startRank: 'Gold 即時',
    startRankLabel: 'Gold',
    startRankColor: 'text-[#F59E0B]',
    contract: '縛りなし',
    features: [
      '5,000求人へのアクセス',
      'Goldランク即時スタート',
      'AIマッチングシステム(無料)',
      '求人選定サポート',
      '書類添削',
      '企業開拓リクエスト',
    ],
    target: '拡大フェーズに入っており、求人提案先を増やしたい企業',
    targetDetail:
      '初めからGoldランク（85%）で優良な5,000求人にアクセス。AIマッチングシステムや候補者ごとの求人選定をきめ細かにサポート。',
    monthlyGoal: '月4〜10名（目安）',
    highlighted: true,
    theme: {
      cardBg: 'bg-[rgba(37,99,235,0.15)]',
      cardBorder: 'border-cyan-400',
      cardShadow: 'shadow-[0_0_30px_rgba(0,194,255,0.2)]',
    },
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: '月額固定＋成果報酬',
    monthlyFee: '¥300,000',
    feeNote: '月額固定＋成果報酬',
    feeFormat: '月額固定＋成果報酬 / 最低6ヶ月',
    rebate: '90%',
    rebateNote: '固定',
    startRank: 'Platinum 即時',
    startRankLabel: 'Platinum',
    startRankColor: 'text-[#00c2ff]',
    contract: '最低6ヶ月',
    features: [
      '5,000求人へのアクセス',
      'Platinumランク即時スタート',
      'AIマッチングシステム(無料)',
      '求人選定サポート',
      '書類添削',
      '企業開拓リクエスト',
      '面接対策（各候補者1回、RA担当者が実施）',
      '月次事業相談MTG × 月4回（週次・各1時間）',
    ],
    target: '中小〜中堅企業での新規事業として人材紹介事業を立ち上げたい企業',
    targetDetail:
      '初めからPlatinumランク（90%）で優良な5,000求人にアクセス。AIマッチングシステムや求人選定サポートだけでなく、事業成長のための定期MTGや集客アドバイス等を含めたBPO＋コンサルティングプラン。',
    monthlyGoal: '月10名〜（目安）',
    minContractNote: '※最低6ヶ月契約',
    theme: {
      cardBg: 'bg-[rgba(139,92,246,0.1)]',
      cardBorder: 'border-purple-500',
    },
  },
  {
    id: 'executive',
    name: 'Executive',
    tagline: '月額固定＋成果報酬',
    monthlyFee: '¥500,000',
    feeNote: '月額固定＋成果報酬',
    feeFormat: '月額固定＋成果報酬 / 最低6ヶ月・上限5社',
    rebate: '95%',
    rebateNote: '固定',
    startRank: 'Platinum 即時',
    startRankLabel: 'Platinum+',
    startRankColor:
      'bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent',
    contract: '最低6ヶ月・上限5社限定',
    features: [
      '5,000求人へのアクセス',
      'Platinumランク即時スタート',
      'AIマッチングシステム(無料)',
      '求人選定サポート',
      '書類添削',
      '企業開拓リクエスト',
      '面接対策（各候補者1回、RA担当者が実施）',
      '月次事業相談MTG × 月4回（週次・各1時間）',
    ],
    target: '中堅〜準大手企業での新規事業として人材紹介事業を立ち上げたい企業',
    targetDetail:
      '初めからPlatinum+ランク（95%）で優良な5,000求人にアクセス。AIマッチングシステムや求人選定サポートだけでなく、事業成長のための定期MTGや集客アドバイス等を含めたBPO＋フルコンサルティングプラン。',
    monthlyGoal: '月15名〜（目安）',
    badges: ['上限5社', '最低6ヶ月'],
    minContractNote: '※最低6ヶ月契約',
    theme: {
      cardBg: 'bg-[rgba(245,158,11,0.1)]',
      cardBorder: 'border-amber-400',
    },
  },
];
