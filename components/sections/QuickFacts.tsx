'use client';

import { Card } from '@/components/ui/Card';
import { Stagger } from '@/components/motion/Stagger';
import { content } from '@/lib/content';

export function QuickFacts() {
  return (
    <section id="quick-facts" className="py-section-y bg-surface/40">
      <div className="max-w-container mx-auto px-6">
        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.overview.quickFacts.map((fact) => (
            <Card key={fact.title} className="text-left" hover={false}>
              <h3 className="text-h3 text-text-primary mb-3">{fact.title}</h3>
              <p className="text-small text-text-secondary">{fact.description}</p>
            </Card>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
