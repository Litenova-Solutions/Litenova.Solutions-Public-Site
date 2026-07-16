const workflow = [
  {
    title: 'Specify the behavior',
    description:
      'Product intent, domain rules, risks, and acceptance criteria are written before implementation changes observable behavior.',
  },
  {
    title: 'Use AI inside clear boundaries',
    description:
      'AI helps inspect context, generate focused changes, and challenge decisions. Engineers retain architecture and release ownership.',
  },
  {
    title: 'Require executable evidence',
    description:
      'Builds, tests, browser journeys, security checks, and deployment smoke tests decide whether the result is ready.',
  },
] as const;

export function AiSection() {
  return (
    <section
      id="delivery"
      aria-labelledby="delivery-title"
      className="section dot-grid"
    >
      <div className="section-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="eyebrow">AI-assisted delivery</p>
          <h2
            id="delivery-title"
            className="mt-4 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl"
          >
            Faster feedback without weaker engineering control
          </h2>
          <p className="mt-5 text-base leading-7 text-gray-400">
            AI changes the cost of analysis and implementation. It does not
            remove the need for explicit boundaries, human review, or release
            evidence.
          </p>
        </div>

        <ol className="space-y-5">
          {workflow.map((item, index) => (
            <li key={item.title} className="card flex gap-5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-litenova-gold/30 bg-litenova-gold-dim font-mono text-xs font-semibold text-litenova-gold">
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
