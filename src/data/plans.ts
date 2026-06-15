export type PlanId = 'free' | 'basic' | 'pro' | 'executive';

export type Plan = {
  id: PlanId;
  name: string;
  tagline: string;
  monthlyFee: string;
  feeNote: string;
  rebate: string;
  rebateNote: string;
  startRank: string;
  contract: string;
  features: string[];
  target: string;
  badges?: string[];
  highlighted?: boolean;
  minContractNote?: string;
};

export const plans: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    tagline: '完全成果報酬',
    monthlyFee: '¥0',
    feeNote: '完全成果報酬',
    rebate: '75〜85%',
    rebateNote: '上限Gold＝85%止まり',
    startRank: 'Standard',
    contract: '縛りなし',
    features: [
      '5,000求人へのアクセス',
      'ランク制度（半期評価・昇格あり）',
    ],
    target: '紹介事業スタート期・まず試したいCA企業',
  },
  {
    id: 'basic',
    name: 'Basic',
    tagline: '月額固定＋成果報酬',
    monthlyFee: '¥120,000',
    feeNote: '月額固定＋成果報酬',
    rebate: '85〜90%',
    rebateNote: 'Platinum到達可能',
    startRank: 'Gold 即時',
    contract: '縛りなし',
    features: [
      '5,000求人へのアクセス',
      'Goldランク即時スタート',
      'AIマッチングシステム（無料）',
      '求人選定サポート',
      '書類添削',
      '企業開拓リクエスト',
    ],
    target: '成約率を本格的に上げたい小〜中規模CA企業',
    badges: ['MOST POPULAR'],
    highlighted: true,
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: '月額固定＋成果報酬',
    monthlyFee: '¥300,000',
    feeNote: '月額固定＋成果報酬',
    rebate: '90%',
    rebateNote: '固定',
    startRank: 'Platinum 即時',
    contract: '最低6ヶ月',
    features: [
      '5,000求人へのアクセス',
      'Platinumランク即時スタート',
      'AIマッチングシステム（無料）',
      '求人選定サポート',
      '書類添削',
      '企業開拓リクエスト',
      '面接対策（各候補者1回、RA担当者が実施）',
      '月次事業相談MTG × 月4回（週次・各1時間）',
    ],
    target: '大手・中堅企業の紹介事業新規立ち上げ部門',
    minContractNote: '※最低6ヶ月契約',
  },
  {
    id: 'executive',
    name: 'Executive',
    tagline: '月額固定＋成果報酬',
    monthlyFee: '¥500,000',
    feeNote: '月額固定＋成果報酬',
    rebate: '95%',
    rebateNote: '固定',
    startRank: 'Platinum 即時',
    contract: '最低6ヶ月・上限5社限定',
    features: [
      '5,000求人へのアクセス',
      'Platinumランク即時スタート',
      'AIマッチングシステム（無料）',
      '求人選定サポート',
      '書類添削',
      '企業開拓リクエスト',
      '面接対策（各候補者1回、RA担当者が実施）',
      '月次事業相談MTG × 月4回（週次・各1時間）',
    ],
    target: '大手・中堅企業の紹介事業新規立ち上げ部門（上限5社）',
    badges: ['上限5社', '最低6ヶ月'],
    minContractNote: '※最低6ヶ月契約',
  },
];
