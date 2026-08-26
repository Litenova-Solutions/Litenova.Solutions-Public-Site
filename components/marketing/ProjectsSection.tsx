import { ExternalLink } from 'lucide-react';
import {
  BrandTile,
  Section,
  SectionContainer,
  SectionHeading,
} from '@/components/marketing/Section';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { projects, type Project } from '@/lib/projects';

function ProductMark({ product }: { product: Project['slug'] }) {
  if (product === 'entro') {
    return (
      <svg
        aria-hidden="true"
        className="size-7"
        fill="currentColor"
        focusable="false"
        viewBox="60.5 43.1 133.9 133.9"
      >
        <path
          fillRule="evenodd"
          d="M71 52.79 69.78 54l.04 110 .43 3 4.75.34h105l4.76-.34.42-3 .02-107-.03-3-.74-1L71 52.79ZM74.26 58l.74-.72h105l.74.72-.02 104-.72.91H75l-.71-.91-.03-104ZM89 71.89 88.66 73l-.01 23 .35.68 1 .35 23.07-.03.77-1-.28-24-.56-.34-24 .23ZM118 71.97l-.27 28.03-.73.9H90l-1 .36-.34 1.74.34 15.27 3 .22.5-.49.03-12 .47-1.22 5.28.22.26 13 .46.48 2 .05 1.33-.53.01-12 .66-1.3h18l.57-.71-.01-31-.56-1.32-3 .29ZM126 71.75l-.47 1.25.01 23 .46.86 2 .17 1-.23.41-.8.01-23-.42-1.19-3-.06ZM134 71.7l-.58 1.3v11l.58 1.34 2 .03.97-.37.25-1 .02-11-.29-1-2.95-.3ZM142 71.67l-.58.33-.34 2-.01 22 .84 1 23 .05 1-.51.03-24.54-1-.34-23 .01ZM92.59 76l1.41-.46h15l1 .32.24 16.14-.36 1-15.88.31-1.25-.31-.16-17ZM144.81 76l1.19-.46 16 .1.43 1.36-.23 16-16.2.31-.89-.31-.39-1 .09-16ZM97 79.52l-.48.48.17 9 1.31.34 7.99-.34.21-9-1.2-.5-8 .02ZM149 79.74l-.31 1.26.32 8 7.99.34 1.31-.34.17-8-.48-1.46-9 .2ZM134 93.34l-.57.66-.03 14-.4.52-22 .16-.81 1.32.04 2 .77.56h21l1.31.44.11 34 .58.74 2 .04 1.22-.78V94l-1.22-.7-2 .04ZM142 100.89l-.9 1.11-.01 31 .91 1.28 2-.02.93.74.01 12 1.06.75 2 .02.64-.77v-16l-.64-.59-3-.34-.28-1.07.28-23.99 20-.29 1.25-.72v-2l-1.25-1.1-23-.01ZM153 108.89l-.37 1.11.15 16 3.22.37.49-1.37v-15l-.49-1.27-3 .16ZM163 108.71l-.57 1.29.01 37 .56.76 2 .02 1.26-.78v-37l-.4-1-2.86-.29ZM111 114.7l-.45.3-.33 2 .04 1 .74.53 6-.01.68.48.07 28 1.25.76 2-.02.56-.74-.22-32-10.34-.3ZM89 122.73l-.34 2.27v22l.34.5 24 .27.79-.77-.03-24-.76-.49-24 .22ZM92.53 127l.47-.54 1-.05 15 .01 1 .32v16.77l-1 .48-16-.08-.48-.91.01-16ZM97 130.44l-.5.56v8l.36 1 8.14.2 1-.57v-8.91l-9-.28ZM153 130.6l-.37 1.4-.01 15 .38.58 3 .13.48-.71-.01-16-.47-.53-3 .13Z"
        />
      </svg>
    );
  }

  if (product === 'litebus') {
    return (
      <svg
        aria-hidden="true"
        className="size-7"
        fill="currentColor"
        focusable="false"
        viewBox="-10.6 -10.7 148.1 148.1"
      >
        <path
          fillRule="evenodd"
          d="M82-.24 80 1.39 31.74 50l-.19 2 .89 2 21.95 22 .3 1-14.99 45 .05 3 2.25 2.25h3l1.61-1L94 78.61 95.24 77l.2-2-.89-2-11.95-12-1.6-1.25-1-.19-2 .19-1 .67-.99-.42-5.01-5-.43-1 1.73-4 15-45-.07-3L86 .47 84-.46 82-.24ZM72.61 20l.39-.39.55.39-.08 1-4.29 13L68 35.9 55 49l-2.33 3-.97 2-1.26 6-.44.39L41.61 52v-1l31-31Z"
        />
      </svg>
    );
  }

  if (product === 'fuse') {
    return (
      <svg
        aria-hidden="true"
        className="size-8"
        fill="none"
        focusable="false"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
        viewBox="0 0 32 32"
      >
        <path d="M7 9h5" opacity=".7" />
        <path d="M7 16h4" />
        <path d="M7 23h5" opacity=".7" />
        <path d="M12 9c3.5 0 1.5 7 5 7" opacity=".7" />
        <path d="M12 23c3.5 0 1.5-7 5-7" opacity=".7" />
        <path d="M19 16h6" />
        <circle cx="17.5" cy="16" fill="currentColor" r="2.7" stroke="none" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="size-7"
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path d="M5 3h10l4 4v14H5z" />
      <path d="M15 3v5h4" />
      <path d="M8 12h8" />
      <path d="M8 16h8" />
    </svg>
  );
}

function ProductBadges({ project }: { project: Project }) {
  return (
    <div
      aria-label={`${project.name} classification`}
      className="mt-5 flex flex-wrap gap-2"
    >
      {[project.category, project.license, project.status]
        .filter((badge): badge is string => Boolean(badge))
        .map((badge) => (
          <Badge key={badge} variant="outline">
            {badge}
          </Badge>
        ))}
    </div>
  );
}

export function ProductsSection() {
  return (
    <Section
      id="products"
      aria-labelledby="products-title"
      className="dot-grid"
    >
      <SectionContainer>
        <SectionHeading titleId="products-title" title="Products">
          Software products and engineering tools maintained by Litenova
          Solutions.
        </SectionHeading>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.name} className="h-full">
              <CardContent className="flex h-full flex-col">
                <div className="flex items-center gap-4">
                  <BrandTile className="size-14 shrink-0 rounded-xl inset-shadow-2xs">
                    <ProductMark product={project.slug} />
                  </BrandTile>
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.name}
                  </h3>
                </div>

                <ProductBadges project={project} />

                <p className="mt-5 flex-1 text-sm leading-7 text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                  {project.website ? (
                    <a
                      href={project.website}
                      className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-primary underline-offset-4 hover:underline"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Product Website
                      <ExternalLink className="size-4" />
                    </a>
                  ) : null}
                  {project.repository ? (
                    <a
                      href={project.repository}
                      className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-primary underline-offset-4 hover:underline"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Source Repository
                      <ExternalLink className="size-4" />
                    </a>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>
    </Section>
  );
}
