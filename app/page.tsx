import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { Challenges } from '@/components/sections/Challenges';
import { Solution } from '@/components/sections/Solution';
import { StrategicAdvantages } from '@/components/sections/StrategicAdvantages';
import { Portfolio } from '@/components/sections/Portfolio';
import { Operation } from '@/components/sections/Operation';
import { PartnerRank } from '@/components/sections/PartnerRank';
import { Booking } from '@/components/sections/Booking';

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden">
        <Hero />
        <Challenges />
        <Solution />
        <StrategicAdvantages />
        <Portfolio />
        <Operation />
        <PartnerRank />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
