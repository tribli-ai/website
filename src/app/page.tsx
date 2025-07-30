'use client';

import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import TribliHeroSection from './components/TribliHeroSection';
import MessageSection from './components/MessageSection';
import WaitlistSection from './components/WaitlistSection';
import FollowSection from './components/FollowSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MarqueeSection />
      <TribliHeroSection />
      <MessageSection />
      <WaitlistSection />
      <FollowSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}