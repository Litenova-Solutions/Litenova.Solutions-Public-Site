import Link from 'next/link';

export function Footer() {
  return (
    <footer className="py-10 border-t border-litenova-border bg-litenova-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-gray-200 mb-1">
              Litenova Solutions
            </p>
            <p className="text-xs text-gray-500">
              Schiedamsedijk 58B, 3011 EG Rotterdam, The Netherlands
            </p>
            <p className="text-xs text-gray-500">KVK Number: 95043497</p>
          </div>

          <p className="text-xs text-gray-600 order-last md:order-none">
            &copy; 2026 Litenova Solutions. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/company/litenova/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-litenova-gold transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a
              href="https://github.com/Litenova-Solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-litenova-gold transition-colors duration-200"
              aria-label="GitHub"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <Link
              href="/Standards/"
              className="text-xs text-gray-500 hover:text-litenova-gold border border-litenova-border hover:border-litenova-gold/30 px-3 py-1.5 rounded-md transition-all duration-200 flex items-center gap-1.5"
            >
              <i className="fas fa-book text-xs"></i>
              Eng Standards
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
