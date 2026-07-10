import Image from 'next/image';
import Link from 'next/link';

export function StandardsHero() {
  return (
    <section className="relative overflow-hidden border-b border-litenova-border bg-litenova-dark">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255, 206, 99, 0.12) 0%, transparent 70%)',
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <Image
          src="/logo.png"
          alt="Litenova Solutions"
          width={72}
          height={72}
          className="mx-auto mb-6 rounded-lg"
          priority
        />
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Engineering Standards
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400">
          Public engineering standards for Litenova Solutions — architecture,
          conventions, guides, and decisions for .NET and Next.js systems.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/Standards/guides/onboarding"
            className="rounded-md bg-litenova-gold px-5 py-2.5 text-sm font-semibold text-litenova-dark transition hover:opacity-90"
          >
            Start onboarding
          </Link>
          <Link
            href="/Standards/doc-map"
            className="rounded-md border border-litenova-border px-5 py-2.5 text-sm font-medium text-gray-200 transition hover:border-litenova-gold/30 hover:text-litenova-gold"
          >
            Documentation map
          </Link>
          <a
            href="https://github.com/Litenova-Solutions/Engineering-Standards"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-litenova-border px-5 py-2.5 text-sm font-medium text-gray-200 transition hover:border-litenova-gold/30 hover:text-litenova-gold"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
