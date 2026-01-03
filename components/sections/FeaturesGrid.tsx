'use client';

import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Stagger } from '@/components/motion/Stagger';
import { features } from '@/lib/site';

export function FeaturesGrid() {
  return (
    <section className="py-section-y bg-surface">
      <div className="max-w-container mx-auto px-6">
        <SectionHeader
          title="Key Features"
          subtitle="What makes AeroFold unique"
        />
        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.id} className="relative">
              <div className="absolute top-4 right-4 text-4xl font-bold text-accent/20">
                {feature.number}
              </div>
              <h3 className="text-h3 text-text-primary mb-4 mt-8">
                {feature.title}
              </h3>
              <p className="text-body text-text-secondary">
                {feature.description}
              </p>
            </Card>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

