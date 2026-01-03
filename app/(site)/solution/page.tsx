'use client';

import { PageTransition } from '@/components/motion/PageTransition';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/motion/Reveal';
import { Stagger } from '@/components/motion/Stagger';
import { solutionComparison } from '@/lib/site';

export default function SolutionPage() {
  return (
    <PageTransition>
      <section className="py-section-y bg-background">
        <div className="max-w-container mx-auto px-6">
          <Reveal>
            <SectionHeader
              title="The AeroFold Solution"
              subtitle="Origami-inspired design meets shape-memory alloy technology"
            />
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-section-y">
            <Reveal>
              <div>
                <h3 className="text-h3 text-text-primary mb-6">
                  How It Works
                </h3>
                <p className="text-body text-text-secondary mb-4">
                  [PLACEHOLDER: Describe AeroFold concept, summarising the
                  origami tessellation and shape-memory alloy. Explain how the
                  design enables compact stowage and reliable deployment.]
                </p>
                <p className="text-body text-text-secondary">
                  [PLACEHOLDER: Detail the key advantages: compactness,
                  robustness, and seamless integration with CubeSat systems.]
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="aspect-square bg-surface rounded-card flex items-center justify-center text-text-secondary">
                [PLACEHOLDER: Exploded view diagram]
              </div>
            </Reveal>
          </div>
          <Reveal>
            <h3 className="text-h3 text-text-primary mb-8 text-center">
              AeroFold vs. Alternatives
            </h3>
          </Reveal>
          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <h4 className="text-body font-semibold text-text-primary mb-4 text-center">
                AeroFold
              </h4>
              <div className="space-y-3">
                <div>
                  <span className="text-small text-text-secondary">Cost: </span>
                  <span className="text-small text-text-primary font-medium">
                    {solutionComparison.aerofold.cost}
                  </span>
                </div>
                <div>
                  <span className="text-small text-text-secondary">Mass: </span>
                  <span className="text-small text-text-primary font-medium">
                    {solutionComparison.aerofold.mass}
                  </span>
                </div>
                <div>
                  <span className="text-small text-text-secondary">
                    Reliability:{' '}
                  </span>
                  <span className="text-small text-text-primary font-medium">
                    {solutionComparison.aerofold.reliability}
                  </span>
                </div>
                <div>
                  <span className="text-small text-text-secondary">
                    Complexity:{' '}
                  </span>
                  <span className="text-small text-text-primary font-medium">
                    {solutionComparison.aerofold.complexity}
                  </span>
                </div>
              </div>
            </Card>
            <Card>
              <h4 className="text-body font-semibold text-text-primary mb-4 text-center">
                Traditional Sails
              </h4>
              <div className="space-y-3">
                <div>
                  <span className="text-small text-text-secondary">Cost: </span>
                  <span className="text-small text-text-primary font-medium">
                    {solutionComparison.traditional.cost}
                  </span>
                </div>
                <div>
                  <span className="text-small text-text-secondary">Mass: </span>
                  <span className="text-small text-text-primary font-medium">
                    {solutionComparison.traditional.mass}
                  </span>
                </div>
                <div>
                  <span className="text-small text-text-secondary">
                    Reliability:{' '}
                  </span>
                  <span className="text-small text-text-primary font-medium">
                    {solutionComparison.traditional.reliability}
                  </span>
                </div>
                <div>
                  <span className="text-small text-text-secondary">
                    Complexity:{' '}
                  </span>
                  <span className="text-small text-text-primary font-medium">
                    {solutionComparison.traditional.complexity}
                  </span>
                </div>
              </div>
            </Card>
            <Card>
              <h4 className="text-body font-semibold text-text-primary mb-4 text-center">
                Thrusters
              </h4>
              <div className="space-y-3">
                <div>
                  <span className="text-small text-text-secondary">Cost: </span>
                  <span className="text-small text-text-primary font-medium">
                    {solutionComparison.thrusters.cost}
                  </span>
                </div>
                <div>
                  <span className="text-small text-text-secondary">Mass: </span>
                  <span className="text-small text-text-primary font-medium">
                    {solutionComparison.thrusters.mass}
                  </span>
                </div>
                <div>
                  <span className="text-small text-text-secondary">
                    Reliability:{' '}
                  </span>
                  <span className="text-small text-text-primary font-medium">
                    {solutionComparison.thrusters.reliability}
                  </span>
                </div>
                <div>
                  <span className="text-small text-text-secondary">
                    Complexity:{' '}
                  </span>
                  <span className="text-small text-text-primary font-medium">
                    {solutionComparison.thrusters.complexity}
                  </span>
                </div>
              </div>
            </Card>
          </Stagger>
          <Reveal delay={0.3}>
            <div className="mt-section-y">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-h3 text-text-primary mb-6">
                    Compact Design
                  </h3>
                  <p className="text-body text-text-secondary">
                    [PLACEHOLDER: Explain why AeroFold is compact and fits
                    inside a fraction of a CubeSat unit. Detail the origami
                    folding pattern that enables efficient stowage.]
                  </p>
                </div>
                <div className="aspect-square bg-surface rounded-card flex items-center justify-center text-text-secondary">
                  [PLACEHOLDER: Isometric mockup showing size comparison]
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}

