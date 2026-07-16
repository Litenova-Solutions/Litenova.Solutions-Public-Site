import Link from 'next/link';
import { standardsTag } from '@/lib/standards';

export function LitenovaDocsFooter() {
  return (
    <footer className="mt-8 border-t border-fd-border pt-6 text-sm text-fd-muted-foreground">
      <p>
        Engineering Standards {standardsTag}, published by{' '}
        <Link href="/" className="text-fd-foreground underline underline-offset-4 hover:text-fd-primary">
          Litenova Solutions
        </Link>
        .
      </p>
      <p className="mt-2">
        <Link href="/privacy" className="underline underline-offset-4 hover:text-fd-primary">
          Privacy
        </Link>{' '}
        <span aria-hidden="true">/</span>{' '}
        <Link href="/accessibility" className="underline underline-offset-4 hover:text-fd-primary">
          Accessibility
        </Link>
      </p>
    </footer>
  );
}
