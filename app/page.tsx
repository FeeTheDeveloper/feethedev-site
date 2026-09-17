import { BusinessPresenceSection } from '@/components/BusinessPresenceSection';
import { CtaSection } from '@/components/CtaSection';
import { Hero } from '@/components/Hero';
import { OwnerSection } from '@/components/OwnerSection';
import { PartnershipSection } from '@/components/PartnershipSection';

export default function Home() {
  return (
    <main id="main-content" className="relative min-h-screen overflow-hidden">
      <div className="absolute left-[-6rem] top-10 h-48 w-48 rounded-full bg-redglow/20 blur-3xl" />
      <div className="absolute right-[-4rem] top-28 h-56 w-56 rounded-full bg-greenglow/15 blur-3xl" />
      <Hero />
      <BusinessPresenceSection />
      <PartnershipSection />
      <OwnerSection />
      <CtaSection />
    </main>
  );
}
