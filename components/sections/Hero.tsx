'use client';

import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/motion/Reveal';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-surface/50">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-10">
        [PLACEHOLDER: Hero background image/video]
      </div>
      <div className="relative max-w-container mx-auto px-6 text-center z-10">
        <Reveal>
          <h1 className="text-h1 text-text-primary mb-6">
            AeroFold: Sustainable Deorbiting for CubeSats
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-h3 text-text-secondary mb-8 max-w-3xl mx-auto">
            An origami-inspired drag sail that fits inside a CubeSat and uses
            shape-memory alloy to deploy at end-of-life, deorbiting satellites
            within a year instead of decades.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="flex gap-4 justify-center">
            <Button href="#quick-facts" variant="primary">
              Learn More
            </Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

