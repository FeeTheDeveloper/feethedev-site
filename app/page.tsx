import { CtaSection } from '@/components/CtaSection';
import { DesignOptionsSection } from '@/components/DesignOptionsSection';
import { Hero } from '@/components/Hero';
import { PortfolioSection } from '@/components/PortfolioSection';
import { ServicesSection } from '@/components/ServicesSection';
import { VeteranOwnedVerificationSection } from '@/components/sections/veteran-owned-verification-section';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute left-[-6rem] top-10 h-48 w-48 rounded-full bg-redglow/20 blur-3xl" />
      <div className="absolute right-[-4rem] top-28 h-56 w-56 rounded-full bg-greenglow/15 blur-3xl" />
      <Hero />
      <VeteranOwnedVerificationSection />
      <ServicesSection />
      <DesignOptionsSection />
      <PortfolioSection />
      <CtaSection />
    </main>
  );
}
