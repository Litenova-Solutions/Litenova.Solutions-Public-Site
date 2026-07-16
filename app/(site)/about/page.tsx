import Link from 'next/link';
import { ContactCta } from '@/components/marketing/ContactCta';
import { PageHero } from '@/components/marketing/PageHero';
import { PageJsonLd } from '@/components/marketing/PageJsonLd';
import { createPageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site';

const description =
  'Litenova Solutions is an independent Rotterdam software studio focused on distributed .NET systems, explicit engineering standards, and accountable delivery.';

export const metadata = createPageMetadata({
  title: 'About',
  description,
  path: '/about',
});

const principles = [
  {
    title: 'One accountable engineering boundary',
    description:
      'Architecture, implementation, verification, and operating impact are planned as one unit of work.',
  },
  {
    title: 'A standard clients can inspect',
    description:
      'The baseline for structure, security, testing, and release evidence is published as Engineering Standards v1.',
  },
  {
    title: 'Tools selected for the current requirement',
    description:
      'We prefer explicit system boundaries and proven components over extra layers introduced for hypothetical future needs.',
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageJsonLd
        name="About Litenova Solutions"
        description={description}
        path="/about"
        type="AboutPage"
      />
      <main id="main-content" tabIndex={-1} className="pt-16">
        <PageHero
          eyebrow="About Litenova Solutions"
          title="A software studio built around visible engineering decisions"
          description={description}
        />

        <section aria-labelledby="working-model-title" className="section bg-litenova-dark">
          <div className="section-container">
            <div className="section-heading">
              <p className="eyebrow">Working model</p>
              <h2 id="working-model-title">What defines an engagement</h2>
              <p>
                The work starts with the system outcome and ends with evidence
                that the result can be built, deployed, observed, and changed.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {principles.map((principle) => (
                <article key={principle.title} className="card">
                  <h3 className="text-lg font-semibold text-gray-100">
                    {principle.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="company-title" className="section border-t border-litenova-border bg-litenova-surface">
          <div className="section-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Company</p>
              <h2 id="company-title" className="mt-4 text-3xl font-bold text-gray-100">
                Based in Rotterdam, working in English
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-gray-300">
              <p>
                {siteConfig.legalName} is registered with the Dutch Chamber of
                Commerce under KVK number {siteConfig.chamberOfCommerceNumber}.
                The company address is {siteConfig.address.street},{' '}
                {siteConfig.address.postalCode} {siteConfig.address.city}.
              </p>
              <p>
                We build our own products, maintain open-source projects, and
                publish the engineering baseline used to review delivery work.
                The source is available through the{' '}
                <Link href="/open-source" className="text-litenova-gold underline underline-offset-4">
                  products and open-source portfolio
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <ContactCta
          title="Bring a bounded engineering problem"
          description="Share the system context, the required outcome, and the constraint that is blocking progress. We will respond in English."
        />
      </main>
    </>
  );
}
