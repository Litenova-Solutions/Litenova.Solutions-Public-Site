export function ApproachSection() {
  return (
    <section
      id="about"
      className="py-24 bg-litenova-surface border-y border-litenova-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-litenova-gold mb-3 font-medium">
            How We Work
          </p>
          <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
          <div className="w-16 h-px bg-litenova-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card-accent p-6 rounded-lg border border-litenova-border bg-litenova-dark card-glow hover:border-litenova-gold/30 transition-all duration-300">
            <i className="fas fa-cogs text-litenova-gold text-2xl mb-4 block"></i>
            <h3 className="text-base font-semibold mb-2 text-gray-100">
              Efficiency &amp; Automation
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              We automate the repetitive parts of delivery, code generation,
              testing, and first-pass review, so engineering effort is spent
              on architecture and design decisions.
            </p>
          </div>

          <div className="card-accent p-6 rounded-lg border border-litenova-border bg-litenova-dark card-glow hover:border-litenova-gold/30 transition-all duration-300">
            <i className="fas fa-network-wired text-litenova-gold text-2xl mb-4 block"></i>
            <h3 className="text-base font-semibold mb-2 text-gray-100">
              Distributed Systems
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              High-throughput, fault-tolerant architecture is our core
              practice, applied for clients and in the products we operate
              ourselves.
            </p>
          </div>

          <div className="card-accent p-6 rounded-lg border border-litenova-border bg-litenova-dark card-glow hover:border-litenova-gold/30 transition-all duration-300">
            <i className="fas fa-layer-group text-litenova-gold text-2xl mb-4 block"></i>
            <h3 className="text-base font-semibold mb-2 text-gray-100">
              Proven Over New
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              We favor proven, well-understood tools over the newest
              framework, which means fewer surprises in production.
            </p>
          </div>

          <div className="card-accent p-6 rounded-lg border border-litenova-border bg-litenova-dark card-glow hover:border-litenova-gold/30 transition-all duration-300">
            <i className="fas fa-code-branch text-litenova-gold text-2xl mb-4 block"></i>
            <h3 className="text-base font-semibold mb-2 text-gray-100">
              Open Source
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              We build on open source and contribute back. LiteBus, LitePress,
              and Fuse are our own projects, free to use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
