import { Card } from '@/components/ui/Card';

interface MetricCardProps {
  label: string;
  value: string;
  detail?: string;
}

export function MetricCard({ label, value, detail }: MetricCardProps) {
  return (
    <Card className="text-center" hover={false}>
      <div className="text-3xl font-semibold text-primary mb-2">{value}</div>
      <div className="text-body font-medium text-text-primary mb-2">
        {label}
      </div>
      {detail && <p className="text-small text-text-secondary">{detail}</p>}
    </Card>
  );
}
