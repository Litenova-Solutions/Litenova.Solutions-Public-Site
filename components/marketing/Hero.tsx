import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative dot-grid overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-litenova-gold/5 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-8">
            <img
              src="/logo.svg"
              alt="Litenova Logo"
              className="h-64 w-auto object-contain drop-shadow-lg"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-litenova-gold/30 bg-litenova-gold-dim text-litenova-gold text-xs font-medium mb-6 tracking-wide">
            AI-Driven Software Studio
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            We Build Distributed Systems to{' '}
            <span className="text-litenova-gold">a Standard We Publish</span>
          </h1>

          <p className="text-lg text-gray-400 mb-10 leading-relaxed">
            An independent studio building high-throughput, fault-tolerant systems in
            .NET. We build with AI at every stage, hold each release to the
            engineering standards we publish, and prove the approach in the
            products we run ourselves.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#contact"
              className="bg-litenova-gold text-litenova-dark px-6 py-3 rounded-md font-semibold text-sm hover:bg-litenova-gold/90 transition-all duration-200 shadow-md"
            >
              Get Started
            </a>
            <a
              href="#projects"
              className="bg-transparent text-litenova-gold px-6 py-3 rounded-md border border-litenova-gold/40 text-sm hover:bg-litenova-gold-dim transition-all duration-200"
            >
              View Projects
            </a>
            <Link
              href="/Standards/"
              className="bg-transparent text-gray-400 px-6 py-3 rounded-md border border-litenova-border text-sm hover:border-litenova-gold/30 hover:text-gray-200 transition-all duration-200 flex items-center gap-2"
            >
              <i className="fas fa-book text-sm"></i>
              Engineering Standards
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
