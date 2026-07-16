import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, BookIcon } from '@/components/ui/Icons';

export function Hero() {
  return (
    <section aria-labelledby="home-title" className="relative overflow-hidden dot-grid">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[36rem] max-w-5xl bg-[radial-gradient(circle_at_center,rgba(255,206,99,0.12),transparent_62%)]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.25fr_0.75fr] lg:px-8 lg:py-32">
        <div className="max-w-3xl animate-fade-in">
          <p className="eyebrow">Independent software studio in Rotterdam</p>
          <h1
            id="home-title"
            className="mt-5 text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Distributed systems built to a standard you can read.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-gray-300">
            We design and build high-throughput .NET systems, improve delivery
            with AI, and publish the engineering rules behind the work.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="button button-primary">
              Discuss a project
              <ArrowRightIcon className="size-4" />
            </Link>
            <Link href="/Standards" className="button button-secondary">
              <BookIcon className="size-4" />
              Read Engineering Standards v1
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="absolute inset-8 rounded-full bg-litenova-gold/10 blur-3xl" />
          <div className="relative rounded-2xl border border-litenova-gold/20 bg-litenova-surface/85 p-8 shadow-2xl shadow-black/30">
            <Image
              src="/logo.svg"
              alt="Litenova Solutions"
              width={500}
              height={500}
              className="mx-auto h-auto w-full max-w-[18rem]"
              priority
            />
            <div className="mt-2 grid grid-cols-2 gap-3 text-center text-xs text-gray-300">
              <span className="rounded-md border border-litenova-border bg-black/20 px-3 py-2">
                .NET systems
              </span>
              <span className="rounded-md border border-litenova-border bg-black/20 px-3 py-2">
                Public standards
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
