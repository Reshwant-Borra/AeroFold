import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="bg-surface border-t border-surface/50 mt-section-y">
      <div className="max-w-container mx-auto px-6 py-12">
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-h3 text-text-primary mb-4">AeroFold</h3>
            <p className="text-small text-text-secondary">
              [PLACEHOLDER: Origami-inspired drag sail for sustainable CubeSat
              deorbiting]
            </p>
          </div>
          <div>
            <h4 className="text-body font-semibold text-text-primary mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/problem"
                  className="text-small text-text-secondary hover:text-accent transition-colors"
                >
                  Problem
                </Link>
              </li>
              <li>
                <Link
                  href="/solution"
                  className="text-small text-text-secondary hover:text-accent transition-colors"
                >
                  Solution
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-small text-text-secondary hover:text-accent transition-colors"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-small text-text-secondary hover:text-accent transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-body font-semibold text-text-primary mb-4">
              Contact
            </h4>
            <p className="text-small text-text-secondary mb-2">
              Email: [PLACEHOLDER: contact@aerofold.space]
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                className="text-small text-text-secondary hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                [PLACEHOLDER: Twitter]
              </a>
              <a
                href="#"
                className="text-small text-text-secondary hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                [PLACEHOLDER: LinkedIn]
              </a>
              <a
                href="#"
                className="text-small text-text-secondary hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                [PLACEHOLDER: GitHub]
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-surface/50 pt-8 text-center">
          <p className="text-small text-text-secondary">
            © {new Date().getFullYear()} AeroFold. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

