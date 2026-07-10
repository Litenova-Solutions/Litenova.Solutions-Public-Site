import Link from 'next/link';

export function StandardsSection() {
  return (
    <section
      id="standards"
      className="py-24 bg-litenova-surface border-y border-litenova-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-1">
              <p className="text-xs uppercase tracking-widest text-litenova-gold mb-3 font-medium">
                Open &amp; Transparent
              </p>
              <h2 className="text-3xl font-bold mb-5">Engineering Standards</h2>
              <div className="w-16 h-px bg-litenova-gold mb-6"></div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                We publish our internal engineering standards publicly on
                GitHub. The document covers everything from architecture
                conventions and code style to branching strategy, API design,
                and AI-assisted workflow guidelines.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                We publish them so clients and contributors know what to
                expect, and so we stay accountable to our own rules.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/Standards/"
                  className="inline-flex items-center gap-3 bg-litenova-gold-dim text-litenova-gold px-5 py-3 rounded-md border border-litenova-gold/30 hover:bg-litenova-gold hover:text-litenova-dark transition-all duration-200 text-sm font-medium"
                >
                  <i className="fas fa-book"></i>
                  Browse the Standards
                  <i className="fas fa-arrow-right text-xs"></i>
                </Link>
                <a
                  href="https://github.com/Litenova-Solutions/Engineering-Standards"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-transparent text-gray-400 px-5 py-3 rounded-md border border-litenova-border text-sm hover:border-litenova-gold/30 hover:text-gray-200 transition-all duration-200 font-medium"
                >
                  <i className="fab fa-github"></i>
                  View on GitHub
                </a>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-1 gap-4">
              <div className="flex items-start gap-4 p-4 rounded-lg border border-litenova-border bg-litenova-dark">
                <div className="mt-0.5 flex-shrink-0 w-7 h-7 rounded flex items-center justify-center bg-litenova-gold-dim border border-litenova-gold/20">
                  <i className="fas fa-layer-group text-litenova-gold text-xs"></i>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-100 mb-1">
                    Architecture &amp; Design Patterns
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Clean Architecture, CQRS, Domain-Driven Design, and
                    API-first conventions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg border border-litenova-border bg-litenova-dark">
                <div className="mt-0.5 flex-shrink-0 w-7 h-7 rounded flex items-center justify-center bg-litenova-gold-dim border border-litenova-gold/20">
                  <i className="fas fa-code text-litenova-gold text-xs"></i>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-100 mb-1">
                    Code Quality &amp; Style
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Language-specific guidelines, naming conventions, and
                    review checklists.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg border border-litenova-border bg-litenova-dark">
                <div className="mt-0.5 flex-shrink-0 w-7 h-7 rounded flex items-center justify-center bg-litenova-gold-dim border border-litenova-gold/20">
                  <i className="fas fa-list-check text-litenova-gold text-xs"></i>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-100 mb-1">
                    AI Workflow Guidelines
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    How AI tooling is integrated into code generation, review,
                    and testing processes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg border border-litenova-border bg-litenova-dark">
                <div className="mt-0.5 flex-shrink-0 w-7 h-7 rounded flex items-center justify-center bg-litenova-gold-dim border border-litenova-gold/20">
                  <i className="fas fa-code-branch text-litenova-gold text-xs"></i>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-100 mb-1">
                    Git &amp; CI/CD Conventions
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Branching strategy, commit message format, and pipeline
                    standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
