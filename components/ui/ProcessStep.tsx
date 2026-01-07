import { Card } from '@/components/ui/Card';

interface ProcessStepProps {
  index: number;
  title: string;
  description: string;
}

export function ProcessStep({ index, title, description }: ProcessStepProps) {
  return (
    <Card className="h-full">
      <div className="text-small uppercase tracking-[0.3em] text-accent mb-3">
        Step {index}
      </div>
      <h3 className="text-h3 text-text-primary mb-3">{title}</h3>
      <p className="text-small text-text-secondary">{description}</p>
    </Card>
  );
}
