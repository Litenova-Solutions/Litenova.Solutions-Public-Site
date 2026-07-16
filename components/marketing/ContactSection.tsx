import Link from 'next/link';
import { MailIcon, PhoneIcon } from '@/components/ui/Icons';
import { siteConfig } from '@/lib/site';

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section border-t border-litenova-border bg-litenova-surface"
    >
      <div className="section-container">
        <div className="mx-auto max-w-3xl rounded-2xl border border-litenova-gold/20 bg-litenova-dark p-7 text-center shadow-2xl shadow-black/20 sm:p-10">
          <p className="eyebrow">Start with the engineering problem</p>
          <h2
            id="contact-title"
            className="mt-4 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl"
          >
            Tell us what the system must do
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400">
            Share the current architecture, the outcome you need, and the
            constraint that is making delivery difficult. Communication is in
            English.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${siteConfig.email}`}
              className="button button-primary"
            >
              <MailIcon className="size-4" />
              {siteConfig.email}
            </a>
            <a href={siteConfig.phone.href} className="button button-secondary">
              <PhoneIcon className="size-4" />
              {siteConfig.phone.display}
            </a>
          </div>
          <p className="mt-7 text-sm text-gray-400">
            Need more context first?{' '}
            <Link href="/services" className="text-litenova-gold underline underline-offset-4">
              Review the service scope
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
