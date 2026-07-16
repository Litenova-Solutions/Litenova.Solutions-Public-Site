import type { Metadata } from 'next';
import { absoluteUrl, siteConfig } from '@/lib/site';

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
}

export function createPageMetadata({
  title,
  description,
  path,
  type = 'website',
}: PageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type,
      url: canonical,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: absoluteUrl('/opengraph-image'),
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} logo and wordmark`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteUrl('/opengraph-image')],
    },
  };
}
