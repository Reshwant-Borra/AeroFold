'use client';

import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Stagger } from '@/components/motion/Stagger';

const prototypeImages = [
  {
    id: '1',
    title: 'Physical Prototype',
    description: '[PLACEHOLDER: prototype image 1 - showing folded state]',
  },
  {
    id: '2',
    title: 'Simulation Visualization',
    description: '[PLACEHOLDER: prototype image 2 - CFD results]',
  },
  {
    id: '3',
    title: 'Lab Testing',
    description: '[PLACEHOLDER: prototype image 3 - thermal cycling test]',
  },
  {
    id: '4',
    title: 'Deployment Sequence',
    description: '[PLACEHOLDER: prototype image 4 - deployment animation]',
  },
];

export function PrototypeGallery() {
  return (
    <section className="py-section-y bg-background">
      <div className="max-w-container mx-auto px-6">
        <SectionHeader
          title="Prototype & Testing"
          subtitle="Visual evidence of our development progress"
        />
        <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {prototypeImages.map((item) => (
            <Card key={item.id}>
              <div className="aspect-video bg-surface/50 rounded-lg mb-4 flex items-center justify-center text-text-secondary">
                {item.description}
              </div>
              <h3 className="text-body font-semibold text-text-primary">
                {item.title}
              </h3>
            </Card>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

