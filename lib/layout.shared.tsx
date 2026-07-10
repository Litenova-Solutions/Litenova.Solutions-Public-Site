import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Engineering Standards',
    },
    links: [
      {
        text: '← litenova.solutions',
        url: '/',
        external: false,
      },
      {
        type: 'icon',
        url: 'https://github.com/Litenova-Solutions/Engineering-Standards',
        text: 'GitHub',
        label: 'GitHub',
        icon: 'github',
        external: true,
      },
    ],
  };
}
