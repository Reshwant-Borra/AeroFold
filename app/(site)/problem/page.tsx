'use client';

import { PageTransition } from '@/components/motion/PageTransition';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/motion/Reveal';
import { Stagger } from '@/components/motion/Stagger';
import { problemStats } from '@/lib/site';

const problemPoints = [
  {
    id: '1',
    title: 'Fragility',
    description:
      '[PLACEHOLDER: Traditional drag sails are delicate and prone to damage during launch and deployment]',
  },
  {
    id: '2',
    title: 'Complexity',
    description:
      '[PLACEHOLDER: Current systems require complex mechanical deployment mechanisms that can fail]',
  },
  {
    id: '3',
    title: 'Cost',
    description:
      '[PLACEHOLDER: High manufacturing and integration costs make deorbit solutions prohibitive for small satellites]',
  },
  {
    id: '4',
    title: 'Bulkiness',
    description:
      '[PLACEHOLDER: Existing solutions take up significant volume, reducing available payload space]',
  },
];

export default function ProblemPage() {
  return (
    <PageTransition>
      <section className="py-section-y bg-background">
        <div className="max-w-container mx-auto px-6">
          <Reveal>
            <SectionHeader
              title="The Space Debris Problem"
              subtitle="Orbital debris poses a growing threat to space operations and sustainability"
            />
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-section-y">
            <Reveal>
              <div>
                <h3 className="text-h3 text-text-primary mb-6">
                  The Growing Crisis
                </h3>
                <p className="text-body text-text-secondary mb-4">
                  [PLACEHOLDER: Space debris statistics and regulatory
                  requirements from script. Describe the problem of orbital
                  debris, including statistics on trackable objects, collision
                  risks, and regulatory requirements for deorbiting.]
                </p>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <Card className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">
                      {problemStats.debrisCount}
                    </div>
                    <p className="text-small text-text-secondary">
                      Trackable Objects
                    </p>
                  </Card>
                  <Card className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">
                      {problemStats.annualGrowth}
                    </div>
                    <p className="text-small text-text-secondary">
                      Annual Growth
                    </p>
                  </Card>
                  <Card className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">
                      {problemStats.complianceRate}
                    </div>
                    <p className="text-small text-text-secondary">
                      Compliance Rate
                    </p>
                  </Card>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="aspect-video bg-surface rounded-card flex items-center justify-center text-text-secondary">
                [PLACEHOLDER: Debris density visualization]
              </div>
            </Reveal>
          </div>
          <Reveal>
            <h3 className="text-h3 text-text-primary mb-6 text-center">
              Why Current Solutions Fail
            </h3>
          </Reveal>
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problemPoints.map((point) => (
              <Card key={point.id}>
                <div className="text-2xl font-bold text-accent mb-3">
                  {point.id}
                </div>
                <h4 className="text-body font-semibold text-text-primary mb-2">
                  {point.title}
                </h4>
                <p className="text-small text-text-secondary">
                  {point.description}
                </p>
              </Card>
            ))}
          </Stagger>
          <Reveal delay={0.3}>
            <div className="mt-section-y">
              <Card>
                <h3 className="text-h3 text-text-primary mb-4">
                  ESA Compliance Rates
                </h3>
                <div className="aspect-video bg-surface/50 rounded-lg flex items-center justify-center text-text-secondary">
                  [PLACEHOLDER: Table/chart of ESA compliance rates]
                </div>
              </Card>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}

