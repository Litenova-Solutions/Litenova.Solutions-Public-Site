import { PageHero } from '@/components/marketing/PageHero';
import { PageJsonLd } from '@/components/marketing/PageJsonLd';
import { ExternalLinkIcon } from '@/components/ui/Icons';
import { createPageMetadata } from '@/lib/metadata';
import { projects } from '@/lib/projects';

const description =
  'Products and open-source projects from Litenova Solutions, including Entro.to, Fuse, LiteBus, and LitePress.';

export const metadata = createPageMetadata({
  title: 'Products and Open Source',
  description,
  path: '/open-source',
});

export default function OpenSourcePage() {
  return (
    <>
      <PageJsonLd
        name="Products and open source"
        description={description}
        path="/open-source"
        type="CollectionPage"
      />
      <main id="main-content" tabIndex={-1} className="pt-16">
        <PageHero
          eyebrow="Portfolio"
          title="Products we operate and tools we publish"
          description={description}
        />

        <section aria-labelledby="portfolio-title" className="section bg-litenova-dark">
          <div className="section-container">
            <h2 id="portfolio-title" className="sr-only">
              Project portfolio
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <article key={project.name} className="card card-glow flex flex-col">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="eyebrow">{project.category}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-gray-100">
                        {project.name}
                      </h3>
                    </div>
                    <span className="rounded-full border border-litenova-border bg-black/20 px-3 py-1 text-xs text-gray-300">
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-5 flex-1 text-base leading-7 text-gray-400">
                    {project.description}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3 border-t border-litenova-border pt-6">
                    {project.website ? (
                      <a href={project.website} className="button button-secondary">
                        Website
                        <ExternalLinkIcon className="size-4" />
                      </a>
                    ) : null}
                    {project.repository ? (
                      <a href={project.repository} className="button button-secondary">
                        Source repository
                        <ExternalLinkIcon className="size-4" />
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
