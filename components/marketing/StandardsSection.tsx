import Link from 'next/link';
import { BookOpen, ExternalLink } from 'lucide-react';
import {
  Section,
  SectionContainer,
  SectionHeading,
} from '@/components/marketing/Section';
import { Button } from '@/components/ui/button';
import { standardsRepository, standardsTag } from '@/lib/standards';

export function StandardsSection() {
  return (
    <Section
      id="standards"
      aria-labelledby="standards-section-title"
      className="dot-grid"
    >
      <SectionContainer>
        <SectionHeading
          titleId="standards-section-title"
          title={`Engineering Standards ${standardsTag}`}
          eyebrow="Published Baseline"
        >
          The published baseline defines workspace structure, .NET and Next.js
          conventions, controlled UI governance, testing requirements, security
          controls, and release evidence for one bounded-context application.
        </SectionHeading>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button size="lg" render={<Link href="/Standards" />}>
            <BookOpen />
            Read Engineering Standards
          </Button>
          <Button
            size="lg"
            variant="outline"
            render={
              <a
                href={`${standardsRepository}/tree/${standardsTag}`}
                rel="noopener noreferrer"
                target="_blank"
              />
            }
          >
            Source Repository
            <ExternalLink />
          </Button>
        </div>
      </SectionContainer>
    </Section>
  );
}
