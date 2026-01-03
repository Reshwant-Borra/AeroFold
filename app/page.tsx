'use client';

import { PageTransition } from '@/components/motion/PageTransition';
import { Hero } from '@/components/sections/Hero';
import { QuickFacts } from '@/components/sections/QuickFacts';
import { MissionStatement } from '@/components/sections/MissionStatement';
import { FeaturesGrid } from '@/components/sections/FeaturesGrid';
import { ProofStrip } from '@/components/sections/ProofStrip';
import { Roadmap } from '@/components/sections/Roadmap';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/motion/Reveal';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <QuickFacts />
      <MissionStatement />
      <FeaturesGrid />
      <ProofStrip />
      <Roadmap />
      <section className="py-section-y bg-background">
        <div className="max-w-container mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-h2 text-text-primary mb-4">
              Join Us on Our Mission
            </h2>
            <p className="text-body text-text-secondary mb-8 max-w-2xl mx-auto">
              [PLACEHOLDER: Follow our progress or join our pilot program to
              help make space more sustainable]
            </p>
            <div className="flex gap-4 justify-center">
              <Button href="/updates" variant="primary">
                Follow Progress
              </Button>
              <Button href="/contact" variant="outline">
                Get Involved
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}

