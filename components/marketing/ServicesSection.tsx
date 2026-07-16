import {
  CodeIcon,
  ConsultationIcon,
  EngineeringGraphIcon,
  ProductIcon,
  StewardshipIcon,
} from '@/components/ui/Icons';

const services = [
  {
    title: 'Software Products',
    description:
      'Design, operation, and maintenance of software products developed under the Litenova name.',
    icon: ProductIcon,
  },
  {
    title: 'Custom Software Development',
    description:
      'Design and implementation of applications, distributed services, integrations, and internal engineering tools.',
    icon: CodeIcon,
  },
  {
    title: 'Architecture and Codebase Consulting',
    description:
      'Technical assessment of system boundaries, persistence, failure handling, dependency structure, and migration constraints.',
    icon: ConsultationIcon,
  },
  {
    title: 'AI-Assisted Engineering',
    description:
      'Repository context, specifications, verification gates, and review practices for teams using coding agents.',
    icon: EngineeringGraphIcon,
  },
  {
    title: 'Technical Stewardship',
    description:
      'Ongoing maintenance, dependency management, release engineering, and architecture support for existing systems.',
    icon: StewardshipIcon,
  },
] as const;

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="section border-y border-litenova-border bg-litenova-surface"
    >
      <div className="section-container">
        <div className="section-heading">
          <h2 id="services-title">Services</h2>
          <p>
            Litenova develops its own products and provides engineering work for
            defined systems and codebases.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className={`card flex flex-col ${
                  index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'
                } ${index === 4 ? 'md:col-span-2' : ''}`}
              >
                <div className="flex size-11 items-center justify-center rounded-lg border border-litenova-gold/20 bg-litenova-gold/8 text-litenova-gold">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-100">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
