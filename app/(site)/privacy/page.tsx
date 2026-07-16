import Link from 'next/link';
import { PageHero } from '@/components/marketing/PageHero';
import { PageJsonLd } from '@/components/marketing/PageJsonLd';
import { createPageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site';

const description =
  'How Litenova Solutions handles personal data when you visit this website or contact the company.';

export const metadata = createPageMetadata({
  title: 'Privacy',
  description,
  path: '/privacy',
});

const sections = [
  {
    title: 'Data controller',
    content: (
      <>
        <p>
          {siteConfig.legalName}, registered with the Dutch Chamber of Commerce
          under KVK number {siteConfig.chamberOfCommerceNumber}, is the data
          controller for the processing described here.
        </p>
        <p>
          Questions and requests can be sent to{' '}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or by
          post to {siteConfig.address.street}, {siteConfig.address.postalCode}{' '}
          {siteConfig.address.city}, {siteConfig.address.country}.
        </p>
      </>
    ),
  },
  {
    title: 'Information we process',
    content: (
      <>
        <p>
          This website has no account system, advertising, analytics tracker,
          newsletter form, or contact form. We do not set optional cookies.
          The hosting platform may process technical request data, such as an IP
          address, user agent, requested URL, timestamp, and security events, to
          deliver and protect the website.
        </p>
        <p>
          If you contact us by email, phone, or another channel, we process the
          details you provide and the resulting correspondence so we can answer
          your request, discuss a possible engagement, or manage an existing
          business relationship.
        </p>
      </>
    ),
  },
  {
    title: 'Purposes and legal bases',
    content: (
      <ul>
        <li>
          Website delivery, reliability, and security are based on our
          legitimate interests in publishing and protecting this service.
        </li>
        <li>
          Enquiries and proposal discussions are processed to take steps at
          your request before entering into a contract, or under our legitimate
          interest in responding to business communications.
        </li>
        <li>
          Client and supplier records are processed to perform contracts and
          meet applicable legal, tax, and accounting duties.
        </li>
      </ul>
    ),
  },
  {
    title: 'Service providers and international processing',
    content: (
      <p>
        The website is hosted by Vercel. Vercel may use infrastructure and
        subprocessors in several countries. Where required, transfers outside
        the European Economic Area are covered by appropriate safeguards. See
        the{' '}
        <a href="https://vercel.com/legal/privacy-notice">Vercel Privacy Notice</a>{' '}
        and <a href="https://vercel.com/legal/dpa">Vercel Data Processing Addendum</a>{' '}
        for details. We may also use communication, administration, and
        professional service providers when necessary for the purposes above.
        We do not sell personal data.
      </p>
    ),
  },
  {
    title: 'Retention',
    content: (
      <p>
        We keep personal data only as long as needed for the stated purpose and
        any applicable legal obligation. General enquiries are reviewed and
        removed when they are no longer relevant. Contract, invoice, and tax
        records are retained for the periods required by Dutch law. Security
        logs are retained according to the hosting provider&apos;s operational
        retention settings.
      </p>
    ),
  },
  {
    title: 'Your rights',
    content: (
      <p>
        Subject to the conditions in the General Data Protection Regulation,
        you may request access, correction, deletion, restriction, data
        portability, or object to processing. You may also withdraw consent
        where consent is the basis. Contact us to make a request. You can lodge
        a complaint with the{' '}
        <a href="https://www.autoriteitpersoonsgegevens.nl/en/node/4316">
          Dutch Data Protection Authority
        </a>
        . You can read the{' '}
        <a href="https://eur-lex.europa.eu/eli/reg/2016/679/oj">
          General Data Protection Regulation
        </a>{' '}
        on EUR-Lex.
      </p>
    ),
  },
] as const;

export default function PrivacyPage() {
  return (
    <>
      <PageJsonLd
        name="Privacy"
        description={description}
        path="/privacy"
        type="WebPage"
      />
      <main id="main-content" tabIndex={-1} className="pt-16">
        <PageHero
          eyebrow="Legal"
          title="Privacy"
          description={description}
        />

        <div className="section bg-litenova-dark">
          <article className="legal-content section-container max-w-3xl">
            <p className="text-sm text-gray-400">Last updated: 16 July 2026</p>
            {sections.map((section) => (
              <section key={section.title} aria-labelledby={`privacy-${section.title.toLowerCase().replaceAll(' ', '-')}`}>
                <h2 id={`privacy-${section.title.toLowerCase().replaceAll(' ', '-')}`}>
                  {section.title}
                </h2>
                <div>{section.content}</div>
              </section>
            ))}
            <p>
              Material changes will be published on this page with a revised
              date. For website access needs, see our{' '}
              <Link href="/accessibility">accessibility statement</Link>.
            </p>
          </article>
        </div>
      </main>
    </>
  );
}
