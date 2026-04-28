export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question:
      '現在他の求人データベースやプラットフォームを利用していますが、併用は可能ですか？',
    answer:
      '全く問題ありません。この取り組みは"アライアンス"であり、既存の求人データベースサービスと競合するものではございません。',
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
