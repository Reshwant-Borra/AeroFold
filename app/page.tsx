'use client';

import { Hero } from '@/components/sections/Hero';
import { QuickFacts } from '@/components/sections/QuickFacts';
import { PageTransition } from '@/components/motion/PageTransition';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/motion/Reveal';
import { Button } from '@/components/ui/Button';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';
import { ProcessStep } from '@/components/ui/ProcessStep';
import { content } from '@/lib/content';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <QuickFacts />

      <section className="py-section-y bg-background">
        <div className="max-w-container mx-auto px-6">
          <Reveal>
            <SectionHeader
              title={content.overview.whyMatters.title}
              subtitle={content.overview.whyMatters.body}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <MediaPlaceholder
              label={content.overview.model.media}
              className="aspect-[16/9]"
            />
          </Reveal>
        </div>
      </section>

      <section className="py-section-y bg-surface/40">
        <div className="max-w-container mx-auto px-6">
          <Reveal>
            <SectionHeader
              title={content.overview.howItWorks.title}
              subtitle={content.overview.howItWorks.subtitle}
            />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.overview.howItWorks.steps.map((step, index) => (
              <ProcessStep
                key={step.title}
                index={index + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-y bg-background">
        <div className="max-w-container mx-auto px-6">
          <Reveal>
            <SectionHeader title={content.overview.model.title} />
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
            <MediaPlaceholder
              label={content.overview.model.media}
              className="aspect-[5/4]"
            />
            <div className="space-y-4 text-text-secondary text-body">
              <p>{content.overview.model.body}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-y bg-surface/40">
        <div className="max-w-container mx-auto px-6">
          <Reveal>
            <SectionHeader
              title={content.overview.impact.title}
              subtitle={content.overview.impact.body}
            />
          </Reveal>
          <div className="rounded-card border border-surface/60 bg-surface/60 p-6">
            <h3 className="text-h3 text-text-primary mb-3">
              {content.overview.brand.title}
            </h3>
            <p className="text-body text-text-secondary">
              {content.overview.brand.body}
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              {content.brand.colors.map((color) => (
                <span
                  key={color}
                  className="text-small text-text-secondary rounded-full border border-surface/50 px-3 py-1"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-y bg-background">
        <div className="max-w-container mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-h2 text-text-primary mb-4">
              {content.overview.cta.title}
            </h2>
            <p className="text-body text-text-secondary mb-8 max-w-2xl mx-auto">
              {content.overview.cta.subtitle}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href={content.overview.cta.primary.href} variant="primary">
                {content.overview.cta.primary.label}
              </Button>
              <Button href={content.overview.cta.secondary.href} variant="outline">
                {content.overview.cta.secondary.label}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
