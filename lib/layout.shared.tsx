import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { ExternalLinkIcon } from '@/components/ui/Icons';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Engineering Standards v1',
      url: '/Standards',
    },
    links: [
      {
        text: 'Litenova Solutions',
        url: '/',
        active: 'none',
        external: false,
      },
      {
        type: 'icon',
        text: 'GitHub',
        label: 'GitHub',
        url: 'https://github.com/Litenova-Solutions/Engineering-Standards',
        external: true,
        icon: <ExternalLinkIcon />,
      },
    ],
    themeSwitch: { enabled: false },
  };
}
