import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-litenova-dark px-4 text-center text-gray-100">
      <h1 className="mb-2 text-4xl font-bold">404</h1>
      <p className="mb-8 text-gray-400">Page not found.</p>
      <div className="flex gap-3">
        <Link
          href="/"
          className="rounded-md border border-litenova-border px-4 py-2 text-sm text-gray-300 hover:border-litenova-gold/30 hover:text-litenova-gold"
        >
          Marketing home
        </Link>
        <Link
          href="/Standards"
          className="rounded-md bg-litenova-gold px-4 py-2 text-sm font-medium text-litenova-dark"
        >
          Engineering Standards
        </Link>
      </div>
    </div>
  );
}
