import {
  Boxes,
  Code2,
  GitBranch,
  LifeBuoy,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import {
  BrandTile,
  Section,
  SectionContainer,
  SectionHeading,
} from '@/components/marketing/Section';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  span: string;
}

const services: readonly Service[] = [
  {
    title: 'Software Products',
    description:
      'Design, operation, and maintenance of software products developed under the Litenova name.',
    icon: Boxes,
    span: 'lg:col-span-2',
  },
  {
    title: 'Custom Software Development',
    description:
      'Design and implementation of applications, distributed services, integrations, and internal engineering tools.',
    icon: Code2,
    span: 'lg:col-span-2',
  },
  {
    title: 'Architecture and Codebase Consulting',
    description:
      'Technical assessment of system boundaries, persistence, failure handling, dependency structure, and migration constraints.',
    icon: GitBranch,
    span: 'lg:col-span-2',
  },
  {
    title: 'AI-Assisted Engineering',
    description:
      'Repository context, specifications, verification gates, and review practices for teams using coding agents.',
    icon: Sparkles,
    span: 'lg:col-span-3',
  },
  {
    title: 'Technical Stewardship',
    description:
      'Ongoing maintenance, dependency management, release engineering, and architecture support for existing systems.',
    icon: LifeBuoy,
    span: 'md:col-span-2 lg:col-span-3',
  },
] as const;

export function ServicesSection() {
  return (
    <Section
      id="services"
      aria-labelledby="services-title"
      className="border-y border-border bg-card"
    >
      <SectionContainer>
        <SectionHeading titleId="services-title" title="Services">
          Litenova develops its own products and provides engineering work for
          defined systems and codebases.
        </SectionHeading>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card key={service.title} className={cn('h-full', service.span)}>
                <CardContent>
                  <BrandTile className="size-11">
                    <Icon className="size-5" />
                  </BrandTile>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </SectionContainer>
    </Section>
  );
}
