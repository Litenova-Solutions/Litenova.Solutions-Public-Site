import Link from 'next/link';
import { ArrowRightIcon, ExternalLinkIcon } from '@/components/ui/Icons';
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
          <p className="eyebrow">Products and open source</p>
          <h2 id="projects-title">The work is visible in running products and code</h2>
          <p>
            We build products for our own use and publish focused engineering
            tools where the source is useful to others.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.name} className="card card-glow flex flex-col">
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
                    Visit website
                    <ExternalLinkIcon className="size-4" />
                  </a>
                ) : null}
                {project.repository ? (
                  <a href={project.repository} className="text-link">
                    Source repository
                    <ExternalLinkIcon className="size-4" />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/open-source" className="text-link">
            Read about the portfolio
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
