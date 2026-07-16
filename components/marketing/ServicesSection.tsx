const services = [
  {
    title: 'Distributed .NET Systems',
    description:
      'Architecture and implementation for services that require explicit boundaries, reliable persistence, observable behavior, and controlled deployment.',
  },
  {
    title: 'Architecture and Codebase Review',
    description:
      'Technical review of system boundaries, data access, failure handling, dependency structure, and delivery risks.',
  },
  {
    title: 'AI-Assisted Engineering',
    description:
      'Repository context, specifications, verification gates, and review practices for teams that use AI coding tools.',
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
          <h2 id="services-title">Engineering Services</h2>
          <p>
            Work is scoped around a defined system boundary, implementation
            requirement, or codebase review.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="card">
              <h3 className="text-lg font-semibold text-gray-100">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
