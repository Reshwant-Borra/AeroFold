'use client';

import { PageTransition } from '@/components/motion/PageTransition';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { TeamCards } from '@/components/sections/TeamCards';
import { Reveal } from '@/components/motion/Reveal';
import { content } from '@/lib/content';

export default function TeamPage() {
  const { team } = content;

  return (
    <PageTransition>
      <section className="py-section-y bg-background">
        <div className="max-w-container mx-auto px-6">
          <Reveal>
            <SectionHeader title={team.title} subtitle={team.subtitle} />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-section-y">
            <Card hover={false}>
              <h3 className="text-h3 text-text-primary mb-3">
                {team.missionTitle}
              </h3>
              <p className="text-small text-text-secondary">{team.mission}</p>
            </Card>
            <Card hover={false}>
              <h3 className="text-h3 text-text-primary mb-3">
                {team.visionTitle}
              </h3>
              <p className="text-small text-text-secondary">{team.vision}</p>
            </Card>
            <Card hover={false}>
              <h3 className="text-h3 text-text-primary mb-3">
                {team.valuesTitle}
              </h3>
              <ul className="text-small text-text-secondary space-y-2 list-disc list-inside">
                {team.values.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </Card>
          </div>
          <TeamCards />
        </div>
      </section>
    </PageTransition>
  );
}
