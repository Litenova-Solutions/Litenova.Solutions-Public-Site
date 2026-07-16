import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Litenova Solutions',
    short_name: 'Litenova',
    description:
      'Software for distributed and edge environments, with tools and standards for AI-assisted software engineering.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    icons: [
      {
        src: '/logo.png',
        sizes: '500x500',
        type: 'image/png',
      },
      {
        src: '/logo-mark.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
