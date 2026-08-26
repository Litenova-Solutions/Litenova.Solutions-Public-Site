import { StandardsHero } from '@/components/standards/StandardsHero';
import { StandardsHomeBody } from '@/components/standards/StandardsHomeBody';
import { JsonLd } from '@/components/JsonLd';
import { createPageMetadata } from '@/lib/metadata';
import { absoluteUrl, siteConfig } from '@/lib/site';
import { standardsRepository, standardsTag, standardsVersion } from '@/lib/standards';

const description =
  'Engineering Standards v1 for one bounded-context ASP.NET Core, PostgreSQL, Marten, and optional Next.js application.';

export const metadata = createPageMetadata({
  title: 'Engineering Standards v1',
  description,
  path: '/Standards',
});

export default function StandardsHomePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Litenova Engineering Standards',
          description,
          url: absoluteUrl('/Standards'),
          version: standardsVersion,
          isPartOf: {
            '@type': 'WebSite',
            name: siteConfig.name,
            url: siteConfig.url,
          },
          mainEntity: {
            '@type': 'CreativeWork',
            name: `Engineering Standards ${standardsTag}`,
            url: `${standardsRepository}/tree/${standardsTag}`,
            license: `${standardsRepository}/blob/${standardsTag}/LICENSE`,
          },
        }}
      />
      <main
        id="main-content"
        tabIndex={-1}
        className="docs-main-area min-h-screen bg-background text-foreground"
      >
        <StandardsHero />
        <StandardsHomeBody />
      </main>
    </>
  );
}
