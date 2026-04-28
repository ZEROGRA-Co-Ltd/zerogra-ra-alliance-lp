export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: '現在他の求人媒体を利用していますが、併用できますか？',
    answer:
      'はい、可能です。本アライアンスは既存の求人データベースサービスとは競合しない企業間アライアンスです。',
  },
  {
    question: '初期費用や月額費用はかかりますか？',
    answer:
      '一切かかりません。完全成果報酬型のため、決定が発生した際のみ費用が生じます。',
  },
  {
    question: '契約締結までどのくらいの期間がかかりますか？',
    answer:
      '面談後、最短即日での契約締結が可能です。電子契約で完結します。',
  },
];
