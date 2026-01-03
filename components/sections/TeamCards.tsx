'use client';

import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Stagger } from '@/components/motion/Stagger';
import { teamMembers } from '@/lib/site';

export function TeamCards() {
  return (
    <section className="py-section-y bg-background">
      <div className="max-w-container mx-auto px-6">
        <SectionHeader
          title="Our Team"
          subtitle="The people behind AeroFold"
        />
        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="text-center">
              <div className="w-32 h-32 rounded-full bg-surface/50 mx-auto mb-4 flex items-center justify-center text-text-secondary">
                [PLACEHOLDER: {member.name} photo]
              </div>
              <h3 className="text-body font-semibold text-text-primary mb-1">
                {member.name}
              </h3>
              <p className="text-small text-accent mb-4">{member.role}</p>
              <p className="text-small text-text-secondary">{member.bio}</p>
            </Card>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

