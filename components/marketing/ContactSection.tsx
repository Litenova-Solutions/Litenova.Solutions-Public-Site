export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-litenova-surface border-t border-litenova-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-litenova-gold mb-3 font-medium">
            Work With Us
          </p>
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <div className="w-16 h-px bg-litenova-gold mx-auto mb-6"></div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            We work with clients who need high-throughput distributed systems,
            AI-integrated products, and architectural guidance. If that
            describes your challenge, reach out.
          </p>
          <p className="text-xs text-litenova-gold/80 mb-10 border border-litenova-gold/20 bg-litenova-gold-dim rounded-md px-4 py-2 inline-block">
            Communication is conducted in English only.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="mailto:info@litenova.solutions"
              className="flex items-center justify-center gap-2 bg-litenova-gold text-litenova-dark px-6 py-3 rounded-md font-semibold text-sm hover:bg-litenova-gold/90 transition-all duration-200 shadow-md"
            >
              <i className="fas fa-envelope text-xs"></i>
              Email Us
            </a>
            <a
              href="tel:0642535214"
              className="flex items-center justify-center gap-2 bg-litenova-gold-dim text-litenova-gold px-6 py-3 rounded-md border border-litenova-gold/30 text-sm font-medium hover:bg-litenova-gold hover:text-litenova-dark transition-all duration-200"
            >
              <i className="fas fa-phone text-xs"></i>
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
