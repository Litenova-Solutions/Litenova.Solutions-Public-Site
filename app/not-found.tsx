import Link from 'next/link';
import { Eyebrow } from '@/components/marketing/Section';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex min-h-screen flex-col items-center justify-center dot-grid px-4 text-center text-foreground"
    >
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-5 text-4xl font-bold">Page Not Available</h1>
      <p className="mt-4 max-w-lg text-muted-foreground">
        The address may have changed during the standards migration. Use one of
        the current entry points below.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button size="lg" variant="outline" render={<Link href="/" />}>
          Company Home
        </Button>
        <Button size="lg" render={<Link href="/Standards" />}>
          Engineering Standards
        </Button>
      </div>
    </main>
  );
}
