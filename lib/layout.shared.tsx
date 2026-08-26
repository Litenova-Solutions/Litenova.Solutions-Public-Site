import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { ExternalLink } from 'lucide-react';
import { standardsRepository, standardsTag } from '@/lib/standards';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <span className="hidden sm:inline">
            Engineering Standards {standardsTag}
          </span>
          <span className="sm:hidden">Standards {standardsTag}</span>
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
        url: standardsRepository,
        external: true,
        icon: <ExternalLink />,
      },
    ],
    themeSwitch: { enabled: false },
  };
}
