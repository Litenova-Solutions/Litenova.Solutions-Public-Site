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
        <div className="section-heading">
          <h2
            id="contact-title"
          >
            Contact
          </h2>
          <p>
            For software engineering enquiries, contact Litenova Solutions by
            email or phone. Communication is in English.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${siteConfig.email}`}
              className="button button-primary"
            >
              <MailIcon className="size-4" />
              {siteConfig.email}
            </a>
            <a href={siteConfig.phone.href} className="button button-quiet">
              <PhoneIcon className="size-4" />
              {siteConfig.phone.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
