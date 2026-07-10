import type { ReactNode } from 'react';
import { RootProvider } from 'fumadocs-ui/provider/next';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './global.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider
          theme={{
            enabled: true,
            defaultTheme: 'dark',
            forcedTheme: 'dark',
          }}
          search={{
            options: {
              api: '/Standards/api/search',
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
