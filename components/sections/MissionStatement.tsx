'use client';

import { Reveal } from '@/components/motion/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { missionStatement } from '@/lib/site';

export function MissionStatement() {
  return (
    <section className="py-section-y bg-background">
      <div className="max-w-container mx-auto px-6">
        <Reveal>
          <SectionHeader
            title={missionStatement.title}
            subtitle={missionStatement.content}
          />
        </Reveal>
        <Reveal delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-surface rounded-card p-8 text-center">
              [PLACEHOLDER: Mission infographic or visualization]
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

