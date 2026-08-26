import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { standardsRepository, standardsTag } from '@/lib/standards';

export function StandardsHero() {
  return (
    <section
      aria-labelledby="standards-title"
      className="relative overflow-hidden border-b border-border bg-background"
    >
      <div
        className="page-hero-glow pointer-events-none absolute inset-0"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-16 lg:px-8">
        <Image
          src="/logo-mark.svg"
          alt=""
          width={64}
          height={64}
          className="mx-auto mb-5"
          priority
        />
        <p className="mb-3 text-xs font-semibold uppercase tracking-eyebrow text-primary">
          Released Baseline {standardsTag}
        </p>
        <h1
          id="standards-title"
          className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
        >
          Engineering Standards
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          One pinned baseline for a bounded-context ASP.NET Core, PostgreSQL,
          and Marten application, with a Next.js or Blazor frontend.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" render={<Link href="/Standards/guide/getting-started" />}>
            Getting Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            render={<Link href="/Standards/doc-map" />}
          >
            Documentation Map
          </Button>
          <Button
            size="lg"
            variant="outline"
            render={
              <a
                href={standardsRepository}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
