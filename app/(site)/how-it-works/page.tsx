'use client';

import { PageTransition } from '@/components/motion/PageTransition';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/motion/Reveal';
import { Stagger } from '@/components/motion/Stagger';

const processSteps = [
  {
    id: '1',
    title: 'Folded Integration',
    description:
      '[PLACEHOLDER: AeroFold is stowed in its compact origami-folded state within the CubeSat during launch and operation]',
  },
  {
    id: '2',
    title: 'Trigger Activation',
    description:
      '[PLACEHOLDER: At end-of-life, a thermal trigger activates the shape-memory alloy (nitinol) actuators]',
  },
  {
    id: '3',
    title: 'Self-Expansion',
    description:
      '[PLACEHOLDER: Nitinol returns to its memorized shape when heated, unfolding the origami structure and deploying the sail]',
  },
  {
    id: '4',
    title: 'Drag & Decay',
    description:
      '[PLACEHOLDER: The deployed sail increases atmospheric drag, accelerating orbital decay and deorbiting the satellite within a year]',
  },
];

export default function HowItWorksPage() {
  return (
    <PageTransition>
      <section className="py-section-y bg-background">
        <div className="max-w-container mx-auto px-6">
          <Reveal>
            <SectionHeader
              title="How It Works"
              subtitle="From stowed configuration to deployment and deorbiting"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mb-section-y">
              <div className="aspect-video bg-surface rounded-card flex items-center justify-center text-text-secondary mb-8">
                [PLACEHOLDER: System diagram showing deployment process: stowed
                configuration → heating → deployment → increased drag]
              </div>
            </div>
          </Reveal>
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-section-y">
            {processSteps.map((step) => (
              <Card key={step.id}>
                <div className="text-4xl font-bold text-accent mb-4">
                  {step.id}
                </div>
                <h3 className="text-body font-semibold text-text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-small text-text-secondary">
                  {step.description}
                </p>
              </Card>
            ))}
          </Stagger>
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card>
                <h3 className="text-h3 text-text-primary mb-4">
                  The Physics
                </h3>
                <p className="text-body text-text-secondary mb-4">
                  [PLACEHOLDER: Briefly discuss the physics of atmospheric drag
                  and orbital decay. Reference how AeroFold increases the
                  satellite's cross-sectional area, leading to faster deorbiting
                  times.]
                </p>
                <p className="text-body text-text-secondary">
                  [PLACEHOLDER: Explain the relationship between altitude, drag
                  coefficient, and deorbit time.]
                </p>
              </Card>
              <Card>
                <h3 className="text-h3 text-text-primary mb-4">
                  Material Science
                </h3>
                <p className="text-body text-text-secondary mb-4">
                  [PLACEHOLDER: Discuss nitinol (nickel-titanium) shape-memory
                  alloy behavior. Explain the phase transformation that occurs
                  when heated, causing the material to return to its memorized
                  shape.]
                </p>
                <p className="text-body text-text-secondary">
                  [PLACEHOLDER: Reference the script's discussion of material
                  selection and thermal activation mechanisms.]
                </p>
              </Card>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}

