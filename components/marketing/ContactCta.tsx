import Link from 'next/link';
import { ArrowRightIcon } from '@/components/ui/Icons';

interface ContactCtaProps {
  title: string;
  description: string;
}

export function ContactCta({ title, description }: ContactCtaProps) {
  return (
    <section aria-labelledby="contact-cta-title" className="section border-t border-litenova-border bg-litenova-surface">
      <div className="section-container">
        <div className="mx-auto max-w-3xl rounded-2xl border border-litenova-gold/20 bg-litenova-dark p-8 text-center sm:p-10">
          <h2
            id="contact-cta-title"
            className="text-3xl font-bold tracking-tight text-gray-100"
          >
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-400">
            {description}
          </p>
          <Link href="/contact" className="button button-primary mt-7">
            Discuss the work
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
