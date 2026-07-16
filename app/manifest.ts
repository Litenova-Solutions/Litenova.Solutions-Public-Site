import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Litenova Solutions',
    short_name: 'Litenova',
    description:
      'Distributed .NET systems, engineering standards, and open-source tools.',
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
