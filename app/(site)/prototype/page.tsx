'use client';

import { PageTransition } from '@/components/motion/PageTransition';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PrototypeGallery } from '@/components/sections/PrototypeGallery';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/motion/Reveal';

export default function PrototypePage() {
  return (
    <PageTransition>
      <section className="py-section-y bg-background">
        <div className="max-w-container mx-auto px-6">
          <Reveal>
            <SectionHeader
              title="Prototype & Validation"
              subtitle="Physical prototype, simulations, and testing progress"
            />
          </Reveal>
          <PrototypeGallery />
          <Reveal delay={0.3}>
            <div className="mt-section-y grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card>
                <h3 className="text-h3 text-text-primary mb-4">
                  Simulation Validation
                </h3>
                <p className="text-body text-text-secondary mb-4">
                  [PLACEHOLDER: Summarise simulation validation from script.
                  Include details about CFD simulations, orbital mechanics
                  modeling, and drag coefficient calculations.]
                </p>
                <p className="text-body text-text-secondary">
                  [PLACEHOLDER: Reference specific results such as drag
                  increase percentages, deorbit time predictions, and
                  deployment reliability simulations.]
                </p>
              </Card>
              <Card>
                <h3 className="text-h3 text-text-primary mb-4">
                  Next Milestone
                </h3>
                <p className="text-body text-text-secondary mb-4">
                  [PLACEHOLDER: Note the next milestone: building a deployable
                  prototype. Include timeline and key objectives for prototype
                  testing.]
                </p>
                <p className="text-body text-text-secondary">
                  [PLACEHOLDER: Describe planned tests: thermal cycling,
                  deployment sequence validation, and environmental testing.]
                </p>
              </Card>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-section-y">
              <Card className="bg-accent/10 border-2 border-accent">
                <h3 className="text-h3 text-text-primary mb-4">
                  Patent Status
                </h3>
                <p className="text-body text-text-secondary">
                  [PLACEHOLDER: Patent number and status. Reference the
                  provisional patent application mentioned in the script.]
                </p>
              </Card>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}

