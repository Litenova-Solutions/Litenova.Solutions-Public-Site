import { ContactSection } from '@/components/marketing/ContactSection';
import { Hero } from '@/components/marketing/Hero';
import { ProductsSection } from '@/components/marketing/ProjectsSection';
import { ServicesSection } from '@/components/marketing/ServicesSection';
import { StandardsSection } from '@/components/marketing/StandardsSection';
import { JsonLd } from '@/components/JsonLd';
import { createPageMetadata } from '@/lib/metadata';
import { projects } from '@/lib/projects';
import { absoluteUrl, siteConfig } from '@/lib/site';

export const metadata = createPageMetadata({
  title: 'Software Systems and Engineering Tools',
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
                contactType: 'general enquiries',
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
              url: absoluteUrl('/#services'),
              provider: { '@id': absoluteUrl('/#organization') },
              serviceType: [
                'Software products',
                'Custom software development',
                'Architecture and codebase consulting',
                'AI-assisted engineering',
                'Technical stewardship',
              ],
            },
            {
              '@type': 'ItemList',
              '@id': absoluteUrl('/#products'),
              name: 'Products',
              url: absoluteUrl('/#products'),
              numberOfItems: projects.length,
              itemListElement: projects.map((project, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                  '@type': 'SoftwareApplication',
                  name: project.name,
                  description: project.description,
                  url: project.website ?? project.repository,
                  codeRepository: project.repository,
                  applicationCategory:
                    project.category === 'Commercial Product'
                      ? 'BusinessApplication'
                      : 'DeveloperApplication',
                },
              })),
            },
          ],
        }}
      />
      <main id="main-content" tabIndex={-1} className="pt-16">
        <Hero />
        <ServicesSection />
        <StandardsSection />
        <ProductsSection />
        <ContactSection />
      </main>
    </>
  );
}
