import Link from 'next/link';

export default function NotFound() {
  return (
    <main id="main-content" className="dot-grid flex min-h-screen flex-col items-center justify-center px-4 text-center text-gray-100">
      <p className="eyebrow">404</p>
      <h1 className="mt-5 text-4xl font-bold">Page Not Available</h1>
      <p className="mt-4 max-w-lg text-gray-300">
        The address may have changed during the standards migration. Use one of
        the current entry points below.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="button button-secondary"
        >
          Company Home
        </Link>
        <Link
          href="/Standards"
          className="button button-primary"
        >
          Engineering Standards
        </Link>
      </div>
    </main>
  );
}
