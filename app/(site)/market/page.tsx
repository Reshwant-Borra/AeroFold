'use client';

import { PageTransition } from '@/components/motion/PageTransition';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/motion/Reveal';
import { Stagger } from '@/components/motion/Stagger';

const targetCustomers = [
  {
    id: '1',
    title: 'CubeSat Operators',
    description:
      '[PLACEHOLDER: Commercial and government CubeSat operators seeking reliable deorbit solutions]',
  },
  {
    id: '2',
    title: 'Universities',
    description:
      '[PLACEHOLDER: Educational institutions developing CubeSats for research and student projects]',
  },
  {
    id: '3',
    title: 'Commercial Constellations',
    description:
      '[PLACEHOLDER: Companies deploying large constellations of small satellites requiring cost-effective deorbit systems]',
  },
];

export default function MarketPage() {
  return (
    <PageTransition>
      <section className="py-section-y bg-background">
        <div className="max-w-container mx-auto px-6">
          <Reveal>
            <SectionHeader
              title="Market & Business Model"
              subtitle="Target customers, pricing, and competitive positioning"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="text-h3 text-text-primary mb-6">Target Customers</h3>
            <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-section-y">
              {targetCustomers.map((customer) => (
                <Card key={customer.id}>
                  <h4 className="text-body font-semibold text-text-primary mb-3">
                    {customer.title}
                  </h4>
                  <p className="text-small text-text-secondary">
                    {customer.description}
                  </p>
                </Card>
              ))}
            </Stagger>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-section-y">
              <Card>
                <h3 className="text-h3 text-text-primary mb-4">
                  Pricing Model
                </h3>
                <p className="text-body text-text-secondary mb-4">
                  [PLACEHOLDER: Describe pricing model. Explain how AeroFold
                  offers cost-effective deorbit solutions compared to
                  alternatives.]
                </p>
                <p className="text-body text-text-secondary">
                  [PLACEHOLDER: Detail pricing tiers or per-unit costs if
                  available.]
                </p>
              </Card>
              <Card>
                <h3 className="text-h3 text-text-primary mb-4">
                  Cost Savings
                </h3>
                <p className="text-body text-text-secondary mb-4">
                  [PLACEHOLDER: Explain cost savings from avoiding collision
                  avoidance manoeuvres. Reference how reliable deorbit systems
                  reduce long-term operational risks.]
                </p>
                <p className="text-body text-text-secondary">
                  [PLACEHOLDER: Compare total cost of ownership vs. traditional
                  solutions.]
                </p>
              </Card>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <Card>
              <h3 className="text-h3 text-text-primary mb-4">
                Competitive Comparison
              </h3>
              <div className="aspect-video bg-surface/50 rounded-lg flex items-center justify-center text-text-secondary mb-4">
                [PLACEHOLDER: Competitor comparison chart]
              </div>
              <p className="text-body text-text-secondary">
                [PLACEHOLDER: Detailed comparison table showing AeroFold vs.
                competitors across key metrics: cost, mass, reliability,
                complexity, deployment method, etc.]
              </p>
            </Card>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}

