import { Mail, Phone } from 'lucide-react';
import {
  Section,
  SectionContainer,
  SectionHeading,
} from '@/components/marketing/Section';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/site';

export function ContactSection() {
  return (
    <Section
      id="contact"
      aria-labelledby="contact-title"
      className="border-t border-border bg-card"
    >
      <SectionContainer>
        <SectionHeading titleId="contact-title" title="Contact">
          For software engineering enquiries, contact Litenova Solutions by
          email or phone. Communication is in English.
        </SectionHeading>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button size="lg" render={<a href={`mailto:${siteConfig.email}`} />}>
            <Mail />
            {siteConfig.email}
          </Button>
          <Button
            size="lg"
            variant="outline"
            render={<a href={siteConfig.phone.href} />}
          >
            <Phone />
            {siteConfig.phone.display}
          </Button>
        </div>
      </SectionContainer>
    </Section>
  );
}
