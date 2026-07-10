export function Header() {
  return (
    <header className="fixed w-full z-50 bg-litenova-dark/80 backdrop-blur-md border-b border-litenova-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <img
              src="/logo-mark.svg"
              alt="Litenova Solutions"
              className="h-8 w-auto object-contain"
            />
            <span className="text-sm font-semibold tracking-wide text-gray-100">
              Litenova Solutions
            </span>
          </a>

          <div
            className="hidden md:flex items-center gap-8 text-sm text-gray-400"
            role="navigation"
            aria-label="Main navigation"
          >
            <a
              href="#about"
              className="hover:text-litenova-gold transition-colors duration-200"
              aria-label="Our Approach"
            >
              Approach
            </a>
            <a
              href="#ai"
              className="hover:text-litenova-gold transition-colors duration-200"
              aria-label="AI-Driven Development"
            >
              AI Development
            </a>
            <a
              href="#standards"
              className="hover:text-litenova-gold transition-colors duration-200"
              aria-label="Engineering Standards"
            >
              Standards
            </a>
            <a
              href="#projects"
              className="hover:text-litenova-gold transition-colors duration-200"
              aria-label="Our Projects"
            >
              Projects
            </a>
          </div>

          <a
            href="#contact"
            className="text-sm bg-litenova-gold-dim text-litenova-gold px-4 py-2 rounded-md border border-litenova-gold/30 hover:bg-litenova-gold hover:text-litenova-dark transition-all duration-200 font-medium"
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
}
