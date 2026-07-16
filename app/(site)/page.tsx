import { AiSection } from '@/components/marketing/AiSection';
import { ApproachSection } from '@/components/marketing/ApproachSection';
import { ContactSection } from '@/components/marketing/ContactSection';
import { Hero } from '@/components/marketing/Hero';
import { ProjectsSection } from '@/components/marketing/ProjectsSection';
import { StandardsSection } from '@/components/marketing/StandardsSection';
import { JsonLd } from '@/components/JsonLd';
import { createPageMetadata } from '@/lib/metadata';
import { absoluteUrl, siteConfig } from '@/lib/site';

export const metadata = createPageMetadata({
  title: 'Distributed .NET Systems and AI-Assisted Delivery',
  description: siteConfig.description,
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Organization',
              '@id': absoluteUrl('/#organization'),
              name: siteConfig.name,
              legalName: siteConfig.legalName,
              url: siteConfig.url,
              logo: absoluteUrl('/logo.png'),
              description: siteConfig.description,
              identifier: {
                '@type': 'PropertyValue',
                name: 'KVK number',
                value: siteConfig.chamberOfCommerceNumber,
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: siteConfig.address.street,
                postalCode: siteConfig.address.postalCode,
                addressLocality: siteConfig.address.city,
                addressCountry: siteConfig.address.countryCode,
              },
              contactPoint: {
                '@type': 'ContactPoint',
                email: siteConfig.email,
                telephone: siteConfig.phone.display,
                contactType: 'sales and general enquiries',
                availableLanguage: 'English',
              },
              sameAs: [siteConfig.github, siteConfig.linkedin],
            },
            {
              '@type': 'WebSite',
              '@id': absoluteUrl('/#website'),
              name: siteConfig.name,
              url: siteConfig.url,
              publisher: { '@id': absoluteUrl('/#organization') },
              inLanguage: 'en',
            },
            {
              '@type': 'ProfessionalService',
              '@id': absoluteUrl('/#services'),
              name: siteConfig.name,
              url: absoluteUrl('/services'),
              provider: { '@id': absoluteUrl('/#organization') },
              serviceType: [
                'Distributed systems engineering',
                'Software architecture review',
                'AI-assisted delivery enablement',
              ],
            },
          ],
        }}
      />
      <main id="main-content" tabIndex={-1} className="pt-16">
        <Hero />
        <ApproachSection />
        <AiSection />
        <StandardsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
