'use client';

import { PageTransition } from '@/components/motion/PageTransition';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';
import { MetricCard } from '@/components/ui/MetricCard';
import { Reveal } from '@/components/motion/Reveal';
import { content } from '@/lib/content';

export default function ProofPage() {
  const { proof } = content;

  return (
    <PageTransition>
      <section className="py-section-y bg-background">
        <div className="max-w-container mx-auto px-6">
          <Reveal>
            <SectionHeader title={proof.title} subtitle={proof.subtitle} />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {proof.grid.map((item) => (
              <MediaPlaceholder
                key={item}
                label={item}
                className="aspect-[4/3]"
              />
            ))}
          </div>
          <div className="mt-section-y grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10">
            <Card hover={false}>
              <h3 className="text-h3 text-text-primary mb-4">
                {proof.validatedTitle}
              </h3>
              <ul className="space-y-3 text-small text-text-secondary list-disc list-inside">
                {proof.validated.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Card>
            <div className="grid grid-cols-1 gap-6">
              {proof.metrics.map((metric) => (
                <MetricCard
                  key={metric.label}
                  label={metric.label}
                  value={metric.value}
                  detail={metric.detail}
                />
              ))}
            </div>
          </div>
          <div className="mt-section-y">
            <SectionHeader
              title={proof.nextStepsTitle}
              subtitle={proof.nextStepsSubtitle}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {proof.nextSteps.map((step) => (
                <Card key={step} hover={false}>
                  <p className="text-body text-text-primary">{step}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
