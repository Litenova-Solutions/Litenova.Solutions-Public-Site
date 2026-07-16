export const siteConfig = {
  name: 'Litenova Solutions',
  legalName: 'Litenova Solutions',
  url: 'https://www.litenova.solutions',
  title: 'Litenova Solutions | Distributed .NET Systems',
  description:
    'Litenova Solutions is an independent software studio in Rotterdam. We design and build distributed .NET systems, AI-assisted delivery workflows, and open-source tools.',
  email: 'info@litenova.solutions',
  phone: {
    display: '+31 6 42 53 52 14',
    href: 'tel:+31642535214',
  },
  address: {
    street: 'Schiedamsedijk 58B',
    postalCode: '3011 EG',
    city: 'Rotterdam',
    country: 'The Netherlands',
    countryCode: 'NL',
  },
  chamberOfCommerceNumber: '95043497',
  github: 'https://github.com/Litenova-Solutions',
  linkedin: 'https://www.linkedin.com/company/litenova/',
} as const;

export const marketingRoutes = [
  '/',
  '/about',
  '/services',
  '/open-source',
  '/contact',
  '/privacy',
  '/accessibility',
] as const;

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString();
}
