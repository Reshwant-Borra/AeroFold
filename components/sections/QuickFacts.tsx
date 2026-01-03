'use client';

import { Card } from '@/components/ui/Card';
import { Stagger } from '@/components/motion/Stagger';
import { quickFacts } from '@/lib/site';

export function QuickFacts() {
  return (
    <section id="quick-facts" className="py-section-y bg-surface">
      <div className="max-w-container mx-auto px-6">
        <Stagger className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {quickFacts.map((fact) => (
            <Card key={fact.id} className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">
                {fact.id}
              </div>
              <h3 className="text-body font-semibold text-text-primary mb-2">
                {fact.title}
              </h3>
              <p className="text-small text-text-secondary">{fact.description}</p>
            </Card>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

