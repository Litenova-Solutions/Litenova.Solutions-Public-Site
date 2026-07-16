import Link from 'next/link';
import { siteConfig } from '@/lib/site';

const footerNavigation = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/open-source', label: 'Products and open source' },
  { href: '/Standards', label: 'Engineering Standards' },
  { href: '/contact', label: 'Contact' },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-litenova-border bg-litenova-dark">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-semibold text-gray-100">{siteConfig.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-gray-400">
            Independent software studio for distributed .NET systems,
            architecture work, and AI-assisted delivery.
          </p>
          <address className="mt-5 text-sm not-italic leading-6 text-gray-400">
            {siteConfig.address.street}
            <br />
            {siteConfig.address.postalCode} {siteConfig.address.city},{' '}
            {siteConfig.address.country}
          </address>
          <p className="mt-2 text-sm text-gray-400">
            KVK {siteConfig.chamberOfCommerceNumber}
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="text-sm font-semibold text-gray-100">Navigate</p>
          <ul className="mt-4 space-y-3 text-sm">
            {footerNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-gray-400 hover:text-litenova-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold text-gray-100">Connect</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-gray-400 hover:text-litenova-gold"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.github}
                className="text-gray-400 hover:text-litenova-gold"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={siteConfig.linkedin}
                className="text-gray-400 hover:text-litenova-gold"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-litenova-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs text-gray-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>&copy; 2026 {siteConfig.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy" className="hover:text-litenova-gold">
              Privacy
            </Link>
            <Link href="/accessibility" className="hover:text-litenova-gold">
              Accessibility
            </Link>
            <a href="/llms.txt" className="hover:text-litenova-gold">
              LLM index
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
