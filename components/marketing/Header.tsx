// Client boundary: the mobile navigation owns disclosure state.
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { CloseIcon, MenuIcon } from '@/components/ui/Icons';

const navigation = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/open-source', label: 'Products and open source' },
  { href: '/Standards', label: 'Standards' },
] as const;

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-litenova-gold/10 bg-litenova-dark/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center gap-2 rounded-md text-gray-100"
            aria-label="Litenova Solutions home"
          >
            <Image
              src="/logo-mark.svg"
              alt=""
              width={32}
              height={32}
              priority
            />
            <span className="text-sm font-semibold tracking-wide">
              Litenova Solutions
            </span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? 'page' : undefined}
                    className="inline-flex min-h-11 items-center rounded-md px-3 text-sm text-gray-300 transition-colors hover:bg-white/5 hover:text-litenova-gold aria-[current=page]:text-litenova-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:block">
            <Link href="/contact" className="button button-primary button-sm">
              Discuss a project
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md border border-litenova-border text-gray-100 transition hover:border-litenova-gold/40 hover:text-litenova-gold md:hidden"
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? (
              <CloseIcon className="size-5" />
            ) : (
              <MenuIcon className="size-5" />
            )}
          </button>
        </div>

        {isOpen ? (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="border-t border-litenova-border py-4 md:hidden"
          >
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? 'page' : undefined}
                    className="flex min-h-11 items-center rounded-md px-3 text-sm text-gray-200 hover:bg-white/5 hover:text-litenova-gold aria-[current=page]:bg-litenova-gold-dim aria-[current=page]:text-litenova-gold"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="button button-primary w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Discuss a project
                </Link>
              </li>
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
