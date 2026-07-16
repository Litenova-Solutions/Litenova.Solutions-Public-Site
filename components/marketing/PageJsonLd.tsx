import { JsonLd } from '@/components/JsonLd';
import { absoluteUrl, siteConfig } from '@/lib/site';

interface PageJsonLdProps {
  name: string;
  description: string;
  path: string;
  type?: 'AboutPage' | 'ContactPage' | 'CollectionPage' | 'WebPage';
}

export function PageJsonLd({
  name,
  description,
  path,
  type = 'WebPage',
}: PageJsonLdProps) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': type,
            name,
            description,
            url: absoluteUrl(path),
            isPartOf: {
              '@type': 'WebSite',
              name: siteConfig.name,
              url: siteConfig.url,
            },
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: siteConfig.url,
              },
              {
                '@type': 'ListItem',
                position: 2,
                name,
                item: absoluteUrl(path),
              },
            ],
          },
        ],
      }}
    />
  );
}
