import Link from 'next/link';
import { ArrowRightIcon } from '@/components/ui/Icons';

const services = [
  {
    number: '01',
    title: 'Distributed systems delivery',
    description:
      'Design and implementation for .NET services that need clear boundaries, reliable persistence, observable behavior, and controlled rollout.',
  },
  {
    number: '02',
    title: 'Architecture and codebase review',
    description:
      'A focused review of system boundaries, data access, failure handling, delivery risks, and the evidence behind the current design.',
  },
  {
    number: '03',
    title: 'AI-assisted delivery enablement',
    description:
      'Repository context, specifications, quality gates, and review practices that make AI coding tools useful without surrendering engineering control.',
  },
] as const;

export function ApproachSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="section border-y border-litenova-border bg-litenova-surface"
    >
      <div className="section-container">
        <div className="section-heading">
          <p className="eyebrow">Where we contribute</p>
          <h2 id="services-title">Engineering work with a defined outcome</h2>
          <p>
            We take on bounded work where architecture, implementation, and
            operating evidence need one accountable owner.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="card card-glow">
              <p className="font-mono text-xs text-litenova-gold">
                {service.number}
              </p>
              <h3 className="mt-5 text-xl font-semibold text-gray-100">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-gray-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/services" className="text-link">
            Review services and engagement shape
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
