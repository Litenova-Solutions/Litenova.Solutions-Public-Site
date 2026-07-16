import { PageHero } from '@/components/marketing/PageHero';
import { PageJsonLd } from '@/components/marketing/PageJsonLd';
import { MailIcon, PhoneIcon } from '@/components/ui/Icons';
import { createPageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site';

const description =
  'Contact Litenova Solutions about distributed .NET delivery, architecture review, or AI-assisted engineering workflows.';

export const metadata = createPageMetadata({
  title: 'Contact',
  description,
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <PageJsonLd
        name="Contact Litenova Solutions"
        description={description}
        path="/contact"
        type="ContactPage"
      />
      <main id="main-content" tabIndex={-1} className="pt-16">
        <PageHero
          eyebrow="Contact"
          title="Start with the system and the required outcome"
          description={description}
        />

        <section aria-labelledby="contact-options-title" className="section bg-litenova-dark">
          <div className="section-container grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="card p-7 sm:p-8">
              <h2 id="contact-options-title" className="text-2xl font-semibold text-gray-100">
                Direct contact
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-gray-400">
                Communication is in English. Email is the best channel for
                architecture context, repository links, or a written scope.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={`mailto:${siteConfig.email}`} className="button button-primary">
                  <MailIcon className="size-4" />
                  {siteConfig.email}
                </a>
                <a href={siteConfig.phone.href} className="button button-secondary">
                  <PhoneIcon className="size-4" />
                  {siteConfig.phone.display}
                </a>
              </div>
              <address className="mt-8 border-t border-litenova-border pt-6 text-sm not-italic leading-7 text-gray-400">
                {siteConfig.legalName}
                <br />
                {siteConfig.address.street}
                <br />
                {siteConfig.address.postalCode} {siteConfig.address.city}
                <br />
                {siteConfig.address.country}
              </address>
            </div>

            <aside className="card bg-litenova-surface" aria-labelledby="message-title">
              <h2 id="message-title" className="text-xl font-semibold text-gray-100">
                A useful first message includes
              </h2>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-gray-300">
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-litenova-gold" />
                  The business capability or primary journey affected.
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-litenova-gold" />
                  The current architecture and relevant technology boundary.
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-litenova-gold" />
                  The constraint, incident pattern, or delivery risk to resolve.
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-litenova-gold" />
                  The evidence that would make the outcome acceptable.
                </li>
              </ul>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
