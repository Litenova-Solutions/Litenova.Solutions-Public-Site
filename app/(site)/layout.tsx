import type { ReactNode } from 'react';
import { Footer } from '@/components/marketing/Footer';
import { Header } from '@/components/marketing/Header';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-md focus:bg-primary focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-primary-foreground"
      >
        Skip to main content
      </a>
      <Header />
      {children}
      <Footer />
    </>
  );
}
