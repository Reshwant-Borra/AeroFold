'use client';

import { PageTransition } from '@/components/motion/PageTransition';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { MediaPlaceholder } from '@/components/ui/MediaPlaceholder';
import { Reveal } from '@/components/motion/Reveal';
import { content } from '@/lib/content';

export default function TechnologyPage() {
  const { technology } = content;

  return (
    <PageTransition>
      <section className="py-section-y bg-background">
        <div className="max-w-container mx-auto px-6">
          <Reveal>
            <SectionHeader title={technology.title} subtitle={technology.subtitle} />
          </Reveal>
          <Reveal delay={0.1}>
            <MediaPlaceholder
              label={technology.diagram}
              className="aspect-[16/9]"
            />
          </Reveal>
          <div className="mt-section-y grid grid-cols-1 lg:grid-cols-3 gap-6">
            {technology.mechanisms.map((item) => (
              <Card key={item.title} hover={false}>
                <h3 className="text-h3 text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-small text-text-secondary">{item.description}</p>
              </Card>
            ))}
          </div>
          <div className="mt-section-y">
            <SectionHeader
              title={technology.materialsTitle}
              subtitle={technology.materialsSubtitle}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {technology.materials.map((material) => (
                <Card key={material.title} hover={false}>
                  <h3 className="text-body font-semibold text-text-primary mb-2">
                    {material.title}
                  </h3>
                  <p className="text-small text-text-secondary">
                    {material.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
          <div className="mt-section-y">
            <Card hover={false}>
              <h3 className="text-h3 text-text-primary mb-4">
                {technology.integrationTitle}
              </h3>
              <p className="text-body text-text-secondary">{technology.integration}</p>
            </Card>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
