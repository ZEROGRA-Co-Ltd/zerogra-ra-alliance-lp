export type Step = {
  number: string;
  title: string;
  description: string;
};

export const allianceSteps: Step[] = [
  {
    number: '01',
    title: 'お問い合わせ',
    description: 'まずはお気軽にご連絡ください。',
  },
  {
    number: '02',
    title: 'オンライン面談',
    description: 'サービス内容・条件をご説明します。',
  },
  {
    number: '03',
    title: '契約締結',
    description: '電子契約で完結。最短即日対応可能です。',
  },
  {
    number: '04',
    title: '推薦活動開始',
    description: 'Slack招待・初回オリエン後、すぐに開始できます。',
  },
];
