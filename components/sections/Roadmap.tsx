'use client';

import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Stagger } from '@/components/motion/Stagger';
import { roadmapPhases } from '@/lib/site';

export function Roadmap() {
  return (
    <section className="py-section-y bg-surface">
      <div className="max-w-container mx-auto px-6">
        <SectionHeader
          title="Development Roadmap"
          subtitle="Our journey from concept to commercialization"
        />
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapPhases.map((phase) => (
            <Card key={phase.id} className="relative">
              <div
                className={`absolute top-4 right-4 px-3 py-1 rounded-full text-small font-medium ${
                  phase.status === 'completed'
                    ? 'bg-green-500/20 text-green-400'
                    : phase.status === 'in-progress'
                    ? 'bg-accent/20 text-accent'
                    : 'bg-text-secondary/20 text-text-secondary'
                }`}
              >
                {phase.status === 'completed'
                  ? '✓ Done'
                  : phase.status === 'in-progress'
                  ? 'In Progress'
                  : 'Upcoming'}
              </div>
              <div className="text-small text-accent font-semibold mb-2">
                {phase.phase}
              </div>
              <h3 className="text-body font-semibold text-text-primary mb-2">
                {phase.title}
              </h3>
              <p className="text-small text-text-secondary mb-4">
                {phase.description}
              </p>
              <div className="text-small text-text-secondary/70">
                {phase.date}
              </div>
            </Card>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

