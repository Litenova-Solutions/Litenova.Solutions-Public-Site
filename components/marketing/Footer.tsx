import Link from 'next/link';
import { siteConfig } from '@/lib/site';

const quietLink = 'text-muted-foreground transition-colors hover:text-primary';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div className="md:col-span-2">
          <p className="font-semibold text-foreground">{siteConfig.name}</p>
          <address className="mt-3 text-sm leading-6 text-muted-foreground not-italic">
            {siteConfig.address.street}
            <br />
            {siteConfig.address.postalCode} {siteConfig.address.city},{' '}
            {siteConfig.address.country}
          </address>
          <p className="mt-2 text-sm text-muted-foreground">
            KVK {siteConfig.chamberOfCommerceNumber}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Links</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={`mailto:${siteConfig.email}`} className={quietLink}>
                {siteConfig.email}
              </a>
            </li>
            <li>
              <Link href="/Standards" className={quietLink}>
                Engineering Standards
              </Link>
            </li>
            <li>
              <a href={siteConfig.github} className={quietLink}>
                GitHub
              </a>
            </li>
            <li>
              <a href={siteConfig.linkedin} className={quietLink}>
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>&copy; 2026 {siteConfig.legalName}. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              href="/privacy"
              className="transition-colors hover:text-primary"
            >
              Privacy Notice
            </Link>
            <Link
              href="/accessibility"
              className="transition-colors hover:text-primary"
            >
              Accessibility
            </Link>
            <a
              href="/llms.txt"
              className="transition-colors hover:text-primary"
            >
              LLM Index
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
