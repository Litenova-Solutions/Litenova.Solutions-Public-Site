import Image from 'next/image';
import Link from 'next/link';
import { BookIcon, MailIcon } from '@/components/ui/Icons';

export function Hero() {
  return (
    <section aria-labelledby="home-title" className="relative overflow-hidden dot-grid">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[36rem] max-w-5xl bg-[radial-gradient(circle_at_center,rgba(255,206,99,0.12),transparent_62%)]"
      />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="animate-fade-in">
          <Image
            src="/logo.svg"
            alt="Litenova Solutions"
            width={500}
            height={500}
            className="mx-auto mb-8 h-auto w-40 drop-shadow-[0_18px_45px_rgba(255,206,99,0.12)] sm:w-48"
            priority
          />
          <p className="eyebrow">Independent Software Company in Rotterdam</p>
          <h1
            id="home-title"
            className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Software Systems and Engineering Tools
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-8 text-gray-300">
            Litenova Solutions develops software for distributed and edge
            environments. The company also maintains tools and standards for
            AI-assisted software engineering.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/Standards" className="button button-secondary">
              <BookIcon className="size-4" />
              Engineering Standards v1
            </Link>
            <Link href="/#contact" className="button button-quiet">
              <MailIcon className="size-4" />
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
