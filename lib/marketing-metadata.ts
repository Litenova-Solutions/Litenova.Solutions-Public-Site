import type { Metadata } from 'next';

const siteUrl = 'https://litenova.solutions';
const description =
  'Litenova Solutions is an AI-driven software studio building high-throughput distributed systems in .NET. We develop our own products, contribute to open source, and publish the engineering standards we hold ourselves to.';

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Litenova Solutions',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Schiedamsedijk 58B',
    addressLocality: 'Rotterdam',
    postalCode: '3011 EG',
    addressCountry: 'NL',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@litenova.solutions',
    contactType: 'customer service',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://www.linkedin.com/company/litenova/',
    'https://github.com/Litenova-Solutions',
  ],
};

export function buildMarketingMetadata(): Metadata {
  const title = 'Litenova Solutions - AI-Driven Software Development';
  return {
    title,
    description,
    authors: [{ name: 'Litenova Solutions' }],
    robots: 'index, follow',
    alternates: { canonical: `${siteUrl}/` },
    openGraph: {
      type: 'website',
      url: `${siteUrl}/`,
      siteName: 'Litenova Solutions',
      title,
      description,
      images: [`${siteUrl}/logo.png`],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteUrl}/logo.png`],
    },
    other: {
      'theme-color': '#0a0a0a',
    },
  };
}
