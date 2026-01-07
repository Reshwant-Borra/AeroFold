'use client';

import { Card } from '@/components/ui/Card';
import { Stagger } from '@/components/motion/Stagger';
import { content } from '@/lib/content';

export function TeamCards() {
  return (
    <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {content.team.members.map((member) => (
        <Card key={member.name} className="text-left" hover={false}>
          <div className="w-20 h-20 rounded-full bg-surface/60 mb-4 flex items-center justify-center text-text-secondary">
            [PLACEHOLDER: {member.name} photo]
          </div>
          <h3 className="text-body font-semibold text-text-primary mb-1">
            {member.name}
          </h3>
          <p className="text-small text-accent mb-3">{member.role}</p>
          <p className="text-small text-text-secondary">{member.bio}</p>
        </Card>
      ))}
    </Stagger>
  );
}
