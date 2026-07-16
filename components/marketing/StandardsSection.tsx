import Link from 'next/link';
import { ArrowRightIcon, BookIcon } from '@/components/ui/Icons';
import { standardsTag } from '@/lib/standards';

const areas = [
  'Repository and dependency boundaries',
  'ASP.NET Core, Marten, and PostgreSQL conventions',
  'Next.js rendering, components, and testing',
  'Security, operations, CI, and release evidence',
] as const;

export function StandardsSection() {
  return (
    <section
      id="standards"
      aria-labelledby="standards-section-title"
      className="section border-y border-litenova-border bg-litenova-surface"
    >
      <div className="section-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="eyebrow">Public engineering contract</p>
          <h2
            id="standards-section-title"
            className="mt-4 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl"
          >
            The standard behind the work is published
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400">
            Engineering Standards {standardsTag} is a pinned baseline for one
            bounded-context business application. It separates required rules,
            replaceable conventions, and the evidence needed for review.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/Standards" className="button button-primary">
              <BookIcon className="size-4" />
              Browse the release
            </Link>
            <a
              href="https://github.com/Litenova-Solutions/Engineering-Standards/tree/v1.0.0"
              className="button button-secondary"
            >
              View the source tag
              <ArrowRightIcon className="size-4" />
            </a>
          </div>
        </div>

        <ul className="grid gap-3" aria-label="Standards coverage">
          {areas.map((area) => (
            <li
              key={area}
              className="flex items-start gap-3 rounded-lg border border-litenova-border bg-litenova-dark px-4 py-4 text-sm leading-6 text-gray-300"
            >
              <span
                aria-hidden="true"
                className="mt-2 size-1.5 shrink-0 rounded-full bg-litenova-gold"
              />
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
