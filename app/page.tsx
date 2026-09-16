import { BusinessPresenceSection } from '@/components/BusinessPresenceSection';
import { CtaSection } from '@/components/CtaSection';
import { DesignOptionsSection } from '@/components/DesignOptionsSection';
import { Hero } from '@/components/Hero';
import { PackagesSection } from '@/components/PackagesSection';
import { PartnershipSection } from '@/components/PartnershipSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { ServicesSection } from '@/components/ServicesSection';
import { VeteranOwnedVerificationSection } from '@/components/sections/veteran-owned-verification-section';
import { AddOnsTeaserSection } from '@/components/sections/addons-teaser-section';
import { DataIntelligenceSection } from '@/components/data-intelligence/DataIntelligenceSection';
import { CertificationsSection } from '@/components/certifications/CertificationsSection';
import { ProgramsTeaserSection } from '@/components/sections/programs-teaser-section';
import { GitHubProofSection } from '@/components/social-proof/GitHubProofSection';

export default function Home() {
  return (
    <main id="main-content" className="relative min-h-screen overflow-hidden">
      <div className="absolute left-[-6rem] top-10 h-48 w-48 rounded-full bg-redglow/20 blur-3xl" />
      <div className="absolute right-[-4rem] top-28 h-56 w-56 rounded-full bg-greenglow/15 blur-3xl" />
      <Hero />
      <BusinessPresenceSection />
      <PartnershipSection />
      <ServicesSection />
      <AddOnsTeaserSection />
      <DataIntelligenceSection />
      <PackagesSection />
      <CertificationsSection />
      <ProgramsTeaserSection />
      <VeteranOwnedVerificationSection />
      <DesignOptionsSection />
      <PortfolioSection />
      <GitHubProofSection />
      <CtaSection />
    </main>
  );
}
