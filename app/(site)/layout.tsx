import type { ReactNode } from 'react';
import { Footer } from '@/components/marketing/Footer';
import { Header } from '@/components/marketing/Header';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>
      <Header />
      {children}
      <Footer />
    </>
  );
}
