import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { Companies } from '@/components/sections/Companies';
import { Worries } from '@/components/sections/Worries';
import { Solution } from '@/components/sections/Solution';
import { Jobs } from '@/components/sections/Jobs';
import { PartnerRank } from '@/components/sections/PartnerRank';
import { Steps } from '@/components/sections/Steps';
import { Faq } from '@/components/sections/Faq';
import { Booking } from '@/components/sections/Booking';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '現在他の求人データベースやプラットフォームを利用していますが、併用は可能ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '全く問題ありません。この取り組みは"アライアンス"であり、既存の求人データベースサービスと競合するものではございません。',
      },
    },
    {
      '@type': 'Question',
      name: '初期費用や月額費用はかかりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '一切かかりません。完全成果報酬型のため、決定が発生した際のみ費用が生じます。',
      },
    },
    {
      '@type': 'Question',
      name: '契約締結までどのくらいの期間がかかりますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '面談後、最短即日での契約締結が可能です。電子契約で完結します。',
      },
    },
    {
      '@type': 'Question',
      name: 'RAアライアンスとは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RAアライアンスとは、CA（キャリアアドバイザー）企業がZEROGRAのRA（リクルーティングアドバイザー）リソースと求人DBを活用できるパートナー制度です。自社でRAを採用・育成することなく、高品質な求人へのアクセスと選考伴走を受けられます。',
      },
    },
    {
      '@type': 'Question',
      name: '立ち上げ期の人材紹介会社でも参加できますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい、むしろ立ち上げ期のCA企業様に最適なサービスです。求人開拓リソースがなくても、ZEROGRAのRAサポートと求人DBをそのまま活用して紹介活動を開始できます。',
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main className="relative overflow-hidden">
        <Hero />
        <Companies />
        <Worries />
        <Solution />
        <Jobs />
        <PartnerRank />
        <Steps />
        <Faq />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
