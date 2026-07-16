import { PageHero } from '@/components/marketing/PageHero';
import { PageJsonLd } from '@/components/marketing/PageJsonLd';
import { createPageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site';

const description =
  'The accessibility approach, current measures, and feedback channel for the Litenova Solutions website.';

export const metadata = createPageMetadata({
  title: 'Accessibility Statement',
  description,
  path: '/accessibility',
});

export default function AccessibilityPage() {
  return (
    <>
      <PageJsonLd
        name="Accessibility Statement"
        description={description}
        path="/accessibility"
        type="WebPage"
      />
      <main id="main-content" tabIndex={-1} className="pt-16">
        <PageHero
          eyebrow="Accessibility"
          title="Accessibility Statement"
          description={description}
        />

        <div className="section bg-litenova-dark">
          <article className="legal-content section-container max-w-3xl">
            <p className="text-sm text-gray-400">Last Reviewed: 16 July 2026</p>

            <section aria-labelledby="accessibility-target">
              <h2 id="accessibility-target">Our Target</h2>
              <p>
                We design and test this website against the Web Content
                Accessibility Guidelines 2.2 at level AA. This is an engineering
                target, not a claim of formal third-party certification. The{' '}
                <a href="https://www.w3.org/TR/WCAG22/">WCAG 2.2 standard</a> is
                published by the World Wide Web Consortium.
              </p>
            </section>

            <section aria-labelledby="accessibility-measures">
              <h2 id="accessibility-measures">Measures in Place</h2>
              <ul>
                <li>Semantic landmarks, headings, labels, and link text.</li>
                <li>A keyboard-accessible skip link and visible focus states.</li>
                <li>Responsive navigation that works with keyboard controls.</li>
                <li>Text and interface contrast reviewed for level AA targets.</li>
                <li>Reduced-motion support for people who request it.</li>
                <li>Automated accessibility checks on primary page journeys.</li>
                <li>Documentation search and navigation with accessible names.</li>
              </ul>
            </section>

            <section aria-labelledby="accessibility-limitations">
              <h2 id="accessibility-limitations">Known Limitations</h2>
              <p>
                No known issue currently prevents access to the main marketing
                content or Engineering Standards. Automated checks cannot find
                every barrier, so we also review representative pages with a
                keyboard and at mobile and desktop sizes. We will list confirmed
                unresolved limitations here with an expected resolution date.
              </p>
            </section>

            <section aria-labelledby="accessibility-feedback">
              <h2 id="accessibility-feedback">Report a Barrier</h2>
              <p>
                If any part of the website is difficult to use, email{' '}
                <a href={`mailto:${siteConfig.email}?subject=Website%20accessibility`}>
                  {siteConfig.email}
                </a>
                . Include the page address, what you were trying to do, and the
                browser or assistive technology involved if you can. You can
                also call <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a>.
                We will acknowledge the report and provide the information in an
                accessible alternative where possible.
              </p>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}
