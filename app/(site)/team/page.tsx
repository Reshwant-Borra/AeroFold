'use client';

import { PageTransition } from '@/components/motion/PageTransition';
import { TeamCards } from '@/components/sections/TeamCards';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/motion/Reveal';

export default function TeamPage() {
  return (
    <PageTransition>
      <section className="py-section-y bg-background">
        <div className="max-w-container mx-auto px-6">
          <TeamCards />
          <Reveal delay={0.3}>
            <div className="mt-section-y">
              <h3 className="text-h3 text-text-primary mb-6 text-center">
                Advisors & Mentors
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((id) => (
                  <Card key={id} className="text-center">
                    <div className="w-24 h-24 rounded-full bg-surface/50 mx-auto mb-4 flex items-center justify-center text-text-secondary">
                      [PLACEHOLDER: Advisor {id} photo]
                    </div>
                    <h4 className="text-body font-semibold text-text-primary mb-1">
                      [PLACEHOLDER: Advisor {id} Name]
                    </h4>
                    <p className="text-small text-accent mb-2">
                      [PLACEHOLDER: Role/Title]
                    </p>
                    <p className="text-small text-text-secondary">
                      [PLACEHOLDER: Short bio]
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-section-y">
              <Card>
                <h3 className="text-h3 text-text-primary mb-4">
                  Our Story
                </h3>
                <p className="text-body text-text-secondary mb-4">
                  [PLACEHOLDER: Explain how the team formed and why they're
                  motivated. Reference the script's team question section. This
                  will be filled in later with actual team information.]
                </p>
                <p className="text-body text-text-secondary">
                  [PLACEHOLDER: Describe shared passion for space sustainability
                  and innovation. Include background on how the team came
                  together for the Conrad Challenge.]
                </p>
              </Card>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}

