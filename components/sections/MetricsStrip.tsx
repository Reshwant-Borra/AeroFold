'use client';

import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Stagger } from '@/components/motion/Stagger';
import { impactMetrics } from '@/lib/site';

export function MetricsStrip() {
  return (
    <section className="py-section-y bg-surface">
      <div className="max-w-container mx-auto px-6">
        <SectionHeader
          title="Impact Metrics"
          subtitle="Quantitative benefits of AeroFold"
        />
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactMetrics.map((metric) => (
            <Card key={metric.id} className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">
                {metric.value}
                {metric.unit && (
                  <span className="text-2xl text-text-secondary">
                    {metric.unit}
                  </span>
                )}
              </div>
              <p className="text-body text-text-primary font-medium">
                {metric.label}
              </p>
            </Card>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

