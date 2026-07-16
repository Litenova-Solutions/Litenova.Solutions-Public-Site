import { ExternalLinkIcon } from '@/components/ui/Icons';
import { projects } from '@/lib/projects';

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="section dot-grid"
    >
      <div className="section-container">
        <div className="section-heading">
          <h2 id="projects-title">Products and Open Source</h2>
          <p>
            Litenova maintains one product and three public .NET engineering
            projects.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.name} className="card flex flex-col">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-litenova-gold">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-gray-100">
                    {project.name}
                  </h3>
                </div>
                <span className="rounded-full border border-litenova-border bg-black/20 px-3 py-1 text-xs text-gray-300">
                  {project.status}
                </span>
              </div>
              <p className="mt-5 flex-1 text-sm leading-7 text-gray-400">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                {project.website ? (
                  <a href={project.website} className="text-link">
                    Website
                    <ExternalLinkIcon className="size-4" />
                  </a>
                ) : null}
                {project.repository ? (
                  <a href={project.repository} className="text-link">
                    Source Repository
                    <ExternalLinkIcon className="size-4" />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
