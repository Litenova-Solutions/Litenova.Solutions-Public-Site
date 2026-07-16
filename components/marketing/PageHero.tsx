interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <header className="relative overflow-hidden border-b border-litenova-border dot-grid">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-80 max-w-4xl bg-[radial-gradient(circle_at_top,rgba(255,206,99,0.12),transparent_65%)]"
      />
      <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg leading-8 text-gray-300">
          {description}
        </p>
      </div>
    </header>
  );
}
