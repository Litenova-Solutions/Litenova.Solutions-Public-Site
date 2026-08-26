import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Mail } from 'lucide-react';
import { Eyebrow } from '@/components/marketing/Section';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section
      aria-labelledby="home-title"
      className="relative overflow-hidden dot-grid"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-144 max-w-5xl hero-glow"
      />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="animate-fade-in">
          <Image
            src="/logo.svg"
            alt="Litenova Solutions"
            width={500}
            height={500}
            className="mx-auto mb-8 h-auto w-40 logo-glow sm:w-48"
            priority
          />
          <Eyebrow>Independent Software Company in Rotterdam</Eyebrow>
          <h1
            id="home-title"
            className="mx-auto mt-5 max-w-3xl text-4xl leading-hero font-bold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl"
          >
            Software Systems and Engineering Tools
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-pretty text-muted-foreground">
            Litenova Solutions develops software for distributed and edge
            environments. The company also maintains tools and standards for
            AI-assisted software engineering.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" render={<Link href="/Standards" />}>
              <BookOpen />
              Read Engineering Standards
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={<Link href="/#contact" />}
            >
              <Mail />
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
