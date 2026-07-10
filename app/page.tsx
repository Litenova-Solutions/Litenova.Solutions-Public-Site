import { buildMarketingMetadata } from '@/lib/marketing-metadata';
import { Header } from '@/components/marketing/Header';
import { Hero } from '@/components/marketing/Hero';
import { ApproachSection } from '@/components/marketing/ApproachSection';
import { AiSection } from '@/components/marketing/AiSection';
import { StandardsSection } from '@/components/marketing/StandardsSection';
import { ProjectsSection } from '@/components/marketing/ProjectsSection';
import { ContactSection } from '@/components/marketing/ContactSection';
import { Footer } from '@/components/marketing/Footer';
import { JsonLd } from '@/components/marketing/JsonLd';

export const metadata = buildMarketingMetadata();

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Header />
      <main className="pt-16">
        <Hero />
        <ApproachSection />
        <AiSection />
        <StandardsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
