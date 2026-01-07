'use client';

import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/motion/Reveal';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';
import { content } from '@/lib/content';

export function Hero() {
  const { hero } = content.overview;

  return (
    <section className="relative py-section-y bg-gradient-to-b from-background via-background to-surface/60">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" />
      <div className="relative max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <Reveal>
              <p className="text-small uppercase tracking-[0.4em] text-accent mb-4">
                {content.brand.name}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="text-h1 text-text-primary mb-6">{hero.title}</h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-body text-text-secondary mb-8 max-w-xl">
                {hero.subtitle}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="flex flex-wrap gap-4">
                <Button href={hero.primaryCta.href} variant="primary">
                  {hero.primaryCta.label}
                </Button>
                <Button href={hero.secondaryCta.href} variant="outline">
                  {hero.secondaryCta.label}
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <MediaPlaceholder
              label={hero.media}
              className="aspect-[4/3] w-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
