'use client';

import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Stagger } from '@/components/motion/Stagger';

const proofItems = [
  {
    id: '1',
    title: 'CAD Design',
    description: '[PLACEHOLDER: CAD render showing folded and deployed states]',
    image: '[PLACEHOLDER: CAD render]',
  },
  {
    id: '2',
    title: 'Simulation Results',
    description: '[PLACEHOLDER: CFD and orbital mechanics simulation screenshots]',
    image: '[PLACEHOLDER: simulation screenshot]',
  },
  {
    id: '3',
    title: 'Patent Status',
    description: '[PLACEHOLDER: Patent certificate or application number]',
    image: '[PLACEHOLDER: patent certificate]',
  },
];

export function ProofStrip() {
  return (
    <section className="py-section-y bg-background">
      <div className="max-w-container mx-auto px-6">
        <SectionHeader
          title="Proof & Validation"
          subtitle="Evidence of our progress and innovation"
        />
        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {proofItems.map((item) => (
            <Card key={item.id} className="text-center">
              <div className="aspect-video bg-surface/50 rounded-lg mb-4 flex items-center justify-center text-text-secondary">
                {item.image}
              </div>
              <h3 className="text-body font-semibold text-text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-small text-text-secondary">{item.description}</p>
            </Card>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

