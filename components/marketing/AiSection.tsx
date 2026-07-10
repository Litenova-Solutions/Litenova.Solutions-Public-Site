export function AiSection() {
  return (
    <section id="ai" className="py-24 dot-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-litenova-gold mb-3 font-medium">
            Development Workflow
          </p>
          <h2 className="text-3xl font-bold mb-4">AI-Driven Development</h2>
          <div className="w-16 h-px bg-litenova-gold mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
            We use AI across architecture, implementation, review, and
            testing. That cuts cycle time and catches issues earlier.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="p-8 rounded-lg border border-litenova-border bg-litenova-surface card-glow hover:border-litenova-gold/30 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-litenova-gold-dim border border-litenova-gold/20 mb-5">
                <i className="fas fa-terminal text-litenova-gold text-sm"></i>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-100">
                AI-Augmented Engineering
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                AI runs across design, implementation, review, and testing.
                That compresses the routine work and concentrates our effort
                on architecture and the decisions that shape the system.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-2 py-1 text-xs rounded border border-litenova-gold/20 bg-litenova-gold-dim text-litenova-gold">
                Code Generation
              </span>
              <span className="px-2 py-1 text-xs rounded border border-litenova-gold/20 bg-litenova-gold-dim text-litenova-gold">
                Automated Review
              </span>
              <span className="px-2 py-1 text-xs rounded border border-litenova-gold/20 bg-litenova-gold-dim text-litenova-gold">
                Test Synthesis
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="p-6 rounded-lg border border-litenova-border bg-litenova-surface card-glow hover:border-litenova-gold/30 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-litenova-gold-dim border border-litenova-gold/20 mb-4">
                <i className="fas fa-sitemap text-litenova-gold text-xs"></i>
              </div>
              <h3 className="text-base font-semibold mb-2 text-gray-100">
                Architecture Review
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                AI-assisted review of trade-offs, dependencies, and performance
                bottlenecks before we commit to a design.
              </p>
            </div>

            <div className="p-6 rounded-lg border border-litenova-border bg-litenova-surface card-glow hover:border-litenova-gold/30 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-litenova-gold-dim border border-litenova-gold/20 mb-4">
                <i className="fas fa-tachometer-alt text-litenova-gold text-xs"></i>
              </div>
              <h3 className="text-base font-semibold mb-2 text-gray-100">
                Faster Delivery
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                We generate boilerplate, docs, and tests early, so validated
                designs reach production sooner.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg border border-litenova-border bg-litenova-surface card-glow hover:border-litenova-gold/30 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-litenova-gold-dim border border-litenova-gold/20 mb-4">
              <i className="fas fa-shield-alt text-litenova-gold text-xs"></i>
            </div>
            <h3 className="text-base font-semibold mb-2 text-gray-100">
              Security by Default
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Static analysis and AI-powered vulnerability scanning are part
              of every pipeline, not a post-release afterthought.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-litenova-border bg-litenova-surface card-glow hover:border-litenova-gold/30 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-litenova-gold-dim border border-litenova-gold/20 mb-4">
              <i className="fas fa-chart-line text-litenova-gold text-xs"></i>
            </div>
            <h3 className="text-base font-semibold mb-2 text-gray-100">
              Production Feedback
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Production telemetry flows back into planning, so effort targets
              the issues that affect users most.
            </p>
          </div>

          <div className="p-6 rounded-lg border border-litenova-border bg-litenova-surface card-glow hover:border-litenova-gold/30 transition-all duration-300">
            <div className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-litenova-gold-dim border border-litenova-gold/20 mb-4">
              <i className="fas fa-puzzle-piece text-litenova-gold text-xs"></i>
            </div>
            <h3 className="text-base font-semibold mb-2 text-gray-100">
              Engineer-Led
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Experienced engineers set the direction and own the outcome,
              with AI accelerating the work in between.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
