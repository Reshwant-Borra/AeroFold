'use client';

import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Reveal } from '@/components/motion/Reveal';
import { updates } from '@/lib/site';

export function UpdatesList() {
  return (
    <section className="py-section-y bg-surface">
      <div className="max-w-container mx-auto px-6">
        <SectionHeader
          title="Progress Updates"
          subtitle="Latest developments and milestones"
        />
        <div className="max-w-3xl mx-auto space-y-6">
          {updates.map((update, index) => (
            <Reveal key={update.id} delay={index * 0.1}>
              <Card>
                <div className="flex items-start gap-4">
                  <div className="text-small text-accent font-semibold whitespace-nowrap">
                    {update.date}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-body font-semibold text-text-primary mb-2">
                      {update.title}
                    </h3>
                    <p className="text-small text-text-secondary">
                      {update.description}
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

