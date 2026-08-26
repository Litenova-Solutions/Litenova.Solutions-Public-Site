export const siteConfig = {
  name: 'Litenova Solutions',
  legalName: 'Litenova Solutions',
  url: 'https://www.litenova.solutions',
  title: 'Litenova Solutions | Software Systems and Engineering Tools',
  description:
    'Litenova Solutions develops software for distributed and edge environments. The company also maintains tools and standards for AI-assisted software engineering.',
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

export const marketingRoutes = ['/', '/privacy', '/accessibility'] as const;

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString();
}
