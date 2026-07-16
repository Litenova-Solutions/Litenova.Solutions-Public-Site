import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { ExternalLinkIcon } from '@/components/ui/Icons';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <span className="hidden sm:inline">Engineering Standards v1</span>
          <span className="sm:hidden">Standards v1</span>
        </>
      ),
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
