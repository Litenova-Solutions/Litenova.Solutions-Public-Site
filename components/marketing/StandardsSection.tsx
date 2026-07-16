import Link from 'next/link';
import { ExternalLinkIcon, BookIcon } from '@/components/ui/Icons';
import { standardsTag } from '@/lib/standards';

export function StandardsSection() {
  return (
    <section
      id="standards"
      aria-labelledby="standards-section-title"
      className="section dot-grid"
    >
      <div className="section-container">
        <div className="section-heading">
          <p className="eyebrow">Version {standardsTag}</p>
          <h2
            id="standards-section-title"
          >
            Engineering Standards v1
          </h2>
          <p>
            The published baseline defines repository structure, .NET and
            Next.js conventions, testing requirements, security controls, and
            release evidence for one bounded-context application.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/Standards" className="button button-primary">
              <BookIcon className="size-4" />
              Read Engineering Standards
            </Link>
            <a
              href="https://github.com/Litenova-Solutions/Engineering-Standards/tree/v1.0.0"
              className="button button-quiet"
            >
              Source Repository
              <ExternalLinkIcon className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
