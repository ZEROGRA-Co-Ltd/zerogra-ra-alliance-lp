import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { Companies } from '@/components/sections/Companies';
import { Worries } from '@/components/sections/Worries';
import { Solution } from '@/components/sections/Solution';
import { Steps } from '@/components/sections/Steps';
import { Faq } from '@/components/sections/Faq';
import { Booking } from '@/components/sections/Booking';

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden">
        <Hero />
        <Companies />
        <Worries />
        <Solution />
        <Steps />
        <Faq />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
