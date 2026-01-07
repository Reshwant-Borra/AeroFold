import Link from 'next/link';
import { content } from '@/lib/content';

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-surface border-t border-surface/50 mt-section-y">
      <div className="max-w-container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-h3 text-text-primary mb-4">
              {content.brand.name}
            </h3>
            <p className="text-small text-text-secondary">
              {content.brand.tagline}
            </p>
          </div>
          <div>
            <h4 className="text-body font-semibold text-text-primary mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {content.nav.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-small text-text-secondary hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-body font-semibold text-text-primary mb-4">
              {content.footer.contactTitle}
            </h4>
            <p className="text-small text-text-secondary mb-2">
              {content.footer.emailLabel}: {content.footer.contact.email}
            </p>
            <div className="flex gap-4 mt-4 flex-wrap">
              {content.footer.contact.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-small text-text-secondary hover:text-accent transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-surface/50 pt-8 text-center">
          <p className="text-small text-text-secondary">
            © {new Date().getFullYear()} {content.brand.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
