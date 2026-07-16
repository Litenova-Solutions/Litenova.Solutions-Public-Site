import { ContactCta } from '@/components/marketing/ContactCta';
import { PageHero } from '@/components/marketing/PageHero';
import { PageJsonLd } from '@/components/marketing/PageJsonLd';
import { createPageMetadata } from '@/lib/metadata';

const description =
  'Engineering services for distributed .NET delivery, architecture and codebase review, and AI-assisted software development workflows.';

export const metadata = createPageMetadata({
  title: 'Software Engineering Services',
  description,
  path: '/services',
});

const services = [
  {
    title: 'Distributed .NET systems',
    summary:
      'A complete delivery slice for systems where throughput, failure handling, data ownership, and deployment safety matter.',
    includes: [
      'Bounded-context and capability boundaries',
      'ASP.NET Core APIs and background processing',
      'PostgreSQL and Marten persistence design',
      'Automated tests, diagnostics, and release evidence',
    ],
  },
  {
    title: 'Architecture and codebase review',
    summary:
      'A concrete review for an existing system that needs clearer risks, priorities, and a path to change.',
    includes: [
      'Dependency and ownership analysis',
      'Persistence, API, security, and failure-path review',
      'Build, test, and deployment evidence review',
      'Prioritized findings tied to specific code boundaries',
    ],
  },
  {
    title: 'AI-assisted delivery enablement',
    summary:
      'Repository and workflow changes that give coding agents the right context and keep verification in engineering control.',
    includes: [
      'Task-sized specifications and acceptance criteria',
      'Repository instructions and context load plans',
      'Automated lint, type, test, and browser gates',
      'Review practices for generated code and documentation',
    ],
  },
] as const;

const stages = [
  ['01', 'Frame', 'Define the observable outcome, current constraints, and evidence required for completion.'],
  ['02', 'Inspect', 'Read the system, reproduce the risk, and identify the narrowest boundary that owns the change.'],
  ['03', 'Deliver', 'Implement a complete slice with code, tests, documentation, deployment, and rollback impact.'],
  ['04', 'Handover', 'Leave the repository with repeatable commands, explicit decisions, and a reviewable result.'],
] as const;

export default function ServicesPage() {
  return (
    <>
      <PageJsonLd
        name="Software engineering services"
        description={description}
        path="/services"
      />
      <main id="main-content" tabIndex={-1} className="pt-16">
        <PageHero
          eyebrow="Services"
          title="Engineering work shaped around system risk"
          description={description}
        />

        <section aria-labelledby="service-list-title" className="section bg-litenova-dark">
          <div className="section-container">
            <h2 id="service-list-title" className="sr-only">
              Service areas
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.title} className="card flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-100">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-gray-400">
                    {service.summary}
                  </p>
                  <ul className="mt-6 space-y-3 border-t border-litenova-border pt-6 text-sm leading-6 text-gray-300">
                    {service.includes.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-litenova-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="engagement-title" className="section border-y border-litenova-border bg-litenova-surface">
          <div className="section-container">
            <div className="section-heading">
              <p className="eyebrow">Engagement shape</p>
              <h2 id="engagement-title">A reviewable path from problem to handover</h2>
              <p>
                Each stage produces an artifact or decision that can be checked
                before the next stage expands the work.
              </p>
            </div>
            <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {stages.map(([number, title, detail]) => (
                <li key={title} className="card">
                  <p className="font-mono text-xs text-litenova-gold">{number}</p>
                  <h3 className="mt-4 text-lg font-semibold text-gray-100">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-400">{detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <ContactCta
          title="Describe the required outcome"
          description="A useful first message names the system, the current failure or constraint, and what must be true when the work is complete."
        />
      </main>
    </>
  );
}
