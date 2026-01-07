'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import { content } from '@/lib/content';

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-8">
          <Link
            href="/"
            className="text-h3 font-bold text-text-primary hover:text-accent transition-colors"
          >
            {content.brand.logo}
          </Link>
          <div className="flex items-center gap-6">
            <ul className="hidden md:flex items-center gap-6">
              {content.nav.links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-small font-medium transition-colors ${
                        isActive
                          ? 'text-accent'
                          : 'text-text-secondary hover:text-text-primary'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Button href={content.nav.contactHref} variant="outline">
              {content.nav.contactLabel}
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
