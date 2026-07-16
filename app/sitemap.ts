import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';
import { absoluteUrl, marketingRoutes } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const marketingPages: MetadataRoute.Sitemap = marketingRoutes.map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: path === '/' ? 'monthly' : 'yearly',
    priority: path === '/' ? 1 : 0.7,
  }));

  const standardsPages: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl('/Standards'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...source.getPages().map((page) => ({
      url: absoluteUrl(page.url),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
  ];

  return [...marketingPages, ...standardsPages];
}
