'use client';

import { PageTransition } from '@/components/motion/PageTransition';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MetricsStrip } from '@/components/sections/MetricsStrip';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/motion/Reveal';

export default function ImpactPage() {
  return (
    <PageTransition>
      <section className="py-section-y bg-background">
        <div className="max-w-container mx-auto px-6">
          <Reveal>
            <SectionHeader
              title="Impact & Sustainability"
              subtitle="Quantitative benefits and vision for space sustainability"
            />
          </Reveal>
          <MetricsStrip />
          <Reveal delay={0.3}>
            <div className="mt-section-y grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-h3 text-text-primary mb-6">
                  Quantitative Benefits
                </h3>
                <div className="space-y-4">
                  <Card>
                    <h4 className="text-body font-semibold text-text-primary mb-2">
                      Deorbit Time
                    </h4>
                    <p className="text-small text-text-secondary">
                      [PLACEHOLDER: Deorbits satellites in &lt; 1 year vs.
                      decades without deorbit systems]
                    </p>
                  </Card>
                  <Card>
                    <h4 className="text-body font-semibold text-text-primary mb-2">
                      Drag Increase
                    </h4>
                    <p className="text-small text-text-secondary">
                      [PLACEHOLDER: Up to X% drag increase vs. baseline,
                      significantly accelerating orbital decay]
                    </p>
                  </Card>
                  <Card>
                    <h4 className="text-body font-semibold text-text-primary mb-2">
                      Mass Efficiency
                    </h4>
                    <p className="text-small text-text-secondary">
                      [PLACEHOLDER: X% mass reduction compared to traditional
                      drag sails, maximizing payload capacity]
                    </p>
                  </Card>
                </div>
              </div>
              <div className="aspect-video bg-surface rounded-card flex items-center justify-center text-text-secondary">
                [PLACEHOLDER: Inspirational space image showing clean orbits]
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-section-y">
              <Card>
                <h3 className="text-h3 text-text-primary mb-4">
                  Vision for Space Sustainability
                </h3>
                <p className="text-body text-text-secondary mb-4">
                  [PLACEHOLDER: Provide a vision for how AeroFold contributes
                  to space sustainability. Discuss the long-term impact on
                  reducing space debris and enabling responsible space
                  operations.]
                </p>
                <p className="text-body text-text-secondary mb-4">
                  [PLACEHOLDER: Explain how AeroFold enables the future of
                  CubeSats by making deorbiting accessible and reliable for
                  small satellite operators.]
                </p>
                <p className="text-body text-text-secondary">
                  [PLACEHOLDER: Reference regulatory compliance and how AeroFold
                  helps satellite operators meet deorbit requirements cost-effectively.]
                </p>
              </Card>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}

