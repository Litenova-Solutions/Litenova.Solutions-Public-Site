export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 dot-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-litenova-gold mb-3 font-medium">
            What We Ship
          </p>
          <h2 className="text-3xl font-bold mb-4">Our Projects</h2>
          <div className="w-16 h-px bg-litenova-gold mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Products we build and run ourselves.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Entro.to */}
          <div className="bg-litenova-surface rounded-lg p-6 border border-litenova-border card-glow hover:border-litenova-gold/30 transition-all duration-300 flex flex-col">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-litenova-gold-dim border border-litenova-gold/20 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-litenova-gold"
                    viewBox="60.5 43.1 133.9 133.9"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M71 52.79 L69.78 54 L69.82 164 L70.25 167 L75 167.34 L180 167.34 L184.76 167 L185.18 164 L185.2 57 L185.17 54 L184.43 53 L71 52.79ZM74.26 58 L75 57.28 L180 57.28 L180.74 58 L180.72 162 L180 162.91 L75 162.91 L74.29 162 L74.26 58ZM89 71.89 L88.66 73 L88.65 96 L89 96.68 L90 97.03 L113.07 97 L113.84 96 L113.56 72 L113 71.66 L89 71.89ZM118 71.97 L117.73 100 L117 100.9 L90 100.9 L89 101.26 L88.66 103 L89 118.27 L92 118.49 L92.5 118 L92.53 106 L93 104.78 L98.28 105 L98.54 118 L99 118.48 L101 118.53 L102.33 118 L102.34 106 L103 104.7 L121 104.71 L121.57 104 L121.56 73 L121 71.68 L118 71.97ZM126 71.75 L125.53 73 L125.54 96 L126 96.86 L128 97.03 L129 96.8 L129.41 96 L129.42 73 L129 71.81 L126 71.75ZM134 71.7 L133.42 73 L133.42 84 L134 85.34 L136 85.37 L136.97 85 L137.22 84 L137.24 73 L136.95 72 L134 71.7ZM142 71.67 L141.42 72 L141.08 74 L141.07 96 L141.91 97 L165 97.05 L166 96.54 L166.03 72 L165 71.66 L142 71.67ZM92.59 76 L94 75.54 L109 75.54 L110 75.86 L110.24 92 L109.88 93 L94 93.31 L92.75 93 L92.59 76ZM144.81 76 L146 75.54 L162 75.64 L162.43 77 L162.2 93 L146 93.31 L145.11 93 L144.72 92 L144.81 76ZM97 79.52 L96.52 80 L96.69 89 L98 89.34 L105.99 89 L106.2 80 L105 79.5 L97 79.52ZM149 79.74 L148.69 81 L149.01 89 L157 89.34 L158.31 89 L158.48 81 L158 79.54 L149 79.74ZM134 93.34 L133.43 94 L133.4 108 L133 108.52 L111 108.68 L110.19 110 L110.23 112 L111 112.56 L132 112.56 L133.31 113 L133.42 147 L134 147.74 L136 147.78 L137.22 147 L137.22 94 L136 93.3 L134 93.34ZM142 100.89 L141.1 102 L141.09 133 L142 134.28 L144 134.26 L144.93 135 L144.94 147 L146 147.75 L148 147.77 L148.64 147 L148.64 131 L148 130.41 L145 130.07 L144.72 129 L145 105.01 L165 104.72 L166.25 104 L166.25 102 L165 100.9 L142 100.89ZM153 108.89 L152.63 110 L152.78 126 L156 126.37 L156.49 125 L156.49 110 L156 108.73 L153 108.89ZM163 108.71 L162.43 110 L162.44 147 L163 147.76 L165 147.78 L166.26 147 L166.26 110 L165.86 109 L163 108.71ZM111 114.7 L110.55 115 L110.22 117 L110.26 118 L111 118.53 L117 118.52 L117.68 119 L117.75 147 L119 147.76 L121 147.74 L121.56 147 L121.34 115 L111 114.7ZM89 122.73 L88.66 125 L88.66 147 L89 147.5 L113 147.77 L113.79 147 L113.76 123 L113 122.51 L89 122.73ZM92.53 127 L93 126.46 L94 126.41 L109 126.42 L110 126.74 L110 143.51 L109 143.99 L93 143.91 L92.52 143 L92.53 127ZM97 130.44 L96.5 131 L96.5 139 L96.86 140 L105 140.2 L106 139.63 L106 130.72 L97 130.44ZM153 130.6 L152.63 132 L152.62 147 L153 147.58 L156 147.71 L156.48 147 L156.47 131 L156 130.47 L153 130.6Z"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-gray-100">
                  Entro.to
                </h3>
              </div>
              <span className="px-2 py-0.5 bg-litenova-gold-dim text-litenova-gold rounded-full text-xs font-medium border border-litenova-gold/20">
                In Development
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
              Event ticketing for organizers of any size. Built for high
              throughput and low operational overhead.
            </p>
            <div className="mt-auto">
              <a
                href="https://entro.to"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-litenova-gold-dim text-litenova-gold px-4 py-2.5 rounded-md border border-litenova-gold/30 hover:bg-litenova-gold hover:text-litenova-dark transition-all duration-200 text-sm font-medium"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* LiteBus */}
          <div className="bg-litenova-surface rounded-lg p-6 border border-litenova-border card-glow hover:border-litenova-gold/30 transition-all duration-300 flex flex-col">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-litenova-gold-dim border border-litenova-gold/20 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-litenova-gold"
                    viewBox="-10.6 -10.7 148.1 148.1"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M82 -.24 L80 1.39 L31.74 50 L31.55 52 L32.44 54 L54.39 76 L54.69 77 L39.7 122 L39.75 125 L42 127.25 L45 127.25 L46.61 126 L94 78.61 L95.24 77 L95.44 75 L94.55 73 L82.6 61 L81 59.75 L80 59.56 L78 59.75 L77 60.42 L76.01 60 L71 55 L70.57 54 L72.3 50 L87.3 5 L87.23 2 L86 .47 L84 -.46 L82 -.24ZM72.61 20 L73 19.61 L73.55 20 L73.47 21 L69.18 34 L68 35.9 L55 49 L52.67 52 L51.7 54 L50.44 60 L50 60.39 L41.61 52 L41.61 51 L72.61 20Z"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-gray-100">LiteBus</h3>
              </div>
              <span className="px-2 py-0.5 bg-litenova-gold-dim text-litenova-gold rounded-full text-xs font-medium border border-litenova-gold/20">
                Open Source
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
              A lightweight, easy-to-use in-process mediator for implementing
              Command Query Separation (CQS) in .NET. Built with minimal
              reflection for real-world performance.
            </p>
            <div className="mt-auto">
              <a
                href="https://github.com/litenova/LiteBus/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-litenova-gold-dim text-litenova-gold px-4 py-2.5 rounded-md border border-litenova-gold/30 hover:bg-litenova-gold hover:text-litenova-dark transition-all duration-200 text-sm font-medium"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* LitePress */}
          <div className="bg-litenova-surface rounded-lg p-6 border border-litenova-border card-glow hover:border-litenova-gold/30 transition-all duration-300 flex flex-col">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-litenova-gold-dim border border-litenova-gold/20 flex items-center justify-center">
                  <i className="fas fa-newspaper text-litenova-gold text-sm"></i>
                </div>
                <h3 className="text-base font-semibold text-gray-100">
                  LitePress
                </h3>
              </div>
              <span className="px-2 py-0.5 bg-litenova-gold-dim text-litenova-gold rounded-full text-xs font-medium border border-litenova-gold/20">
                Open Source
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
              Public site, admin dashboard, and .NET API for publishing.
              Built to our Engineering Standards. Open source; free for
              noncommercial use.
            </p>
            <div className="mt-auto space-y-2">
              <button
                disabled
                title="litenova.blog (coming soon)"
                className="w-full text-center bg-litenova-gold-dim text-litenova-gold px-4 py-2.5 rounded-md border border-litenova-gold/20 text-sm font-medium cursor-not-allowed opacity-60"
              >
                litenova.blog (coming soon)
              </button>
              <a
                href="https://github.com/Litenova-Solutions/LitePress"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-litenova-gold-dim text-litenova-gold px-4 py-2.5 rounded-md border border-litenova-gold/30 hover:bg-litenova-gold hover:text-litenova-dark transition-all duration-200 text-sm font-medium"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* Fuse */}
          <div className="bg-litenova-surface rounded-lg p-6 border border-litenova-border card-glow hover:border-litenova-gold/30 transition-all duration-300 flex flex-col">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-litenova-gold-dim border border-litenova-gold/20 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-litenova-gold"
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 9h5" />
                    <path d="M7 16h4" />
                    <path d="M7 23h5" />
                    <path d="M12 9c3.5 0 1.5 7 5 7" />
                    <path d="M12 23c3.5 0 1.5-7 5-7" />
                    <path d="M19 16h6" />
                    <circle
                      cx="17.5"
                      cy="16"
                      r="2.7"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-gray-100">Fuse</h3>
              </div>
              <span className="px-2 py-0.5 bg-litenova-gold-dim text-litenova-gold rounded-full text-xs font-medium border border-litenova-gold/20">
                Open Source
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
              A .NET-native codebase context optimizer for AI coding agents.
              It reduces a codebase to one structured, token-efficient payload,
              served over the CLI and the Model Context Protocol.
            </p>
            <div className="mt-auto space-y-2">
              <a
                href="https://fuse.codes"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-litenova-gold-dim text-litenova-gold px-4 py-2.5 rounded-md border border-litenova-gold/30 hover:bg-litenova-gold hover:text-litenova-dark transition-all duration-200 text-sm font-medium"
              >
                Visit fuse.codes
              </a>
              <a
                href="https://github.com/Litenova-Solutions/Fuse"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-litenova-gold-dim text-litenova-gold px-4 py-2.5 rounded-md border border-litenova-gold/30 hover:bg-litenova-gold hover:text-litenova-dark transition-all duration-200 text-sm font-medium"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* A Travel Project */}
          <div className="bg-litenova-surface rounded-lg p-6 border border-litenova-border transition-all duration-300 flex flex-col opacity-60">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-litenova-gold-dim border border-litenova-gold/20 flex items-center justify-center">
                  <i className="fas fa-plane text-litenova-gold text-sm"></i>
                </div>
                <h3 className="text-base font-semibold text-gray-100">
                  A Travel Project
                </h3>
              </div>
              <span className="px-2 py-0.5 bg-litenova-gold-dim text-litenova-gold rounded-full text-xs font-medium border border-litenova-gold/20">
                Upcoming
              </span>
            </div>
            <div className="space-y-2.5 mb-6 flex-grow">
              <div className="h-1.5 bg-litenova-border rounded-full w-full"></div>
              <div className="h-1.5 bg-litenova-border rounded-full w-3/4"></div>
              <div className="h-1.5 bg-litenova-border rounded-full w-1/2"></div>
            </div>
            <div className="mt-auto">
              <button
                disabled
                className="w-full text-center bg-litenova-gold-dim text-litenova-gold px-4 py-2.5 rounded-md border border-litenova-gold/20 text-sm font-medium cursor-not-allowed"
              >
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
