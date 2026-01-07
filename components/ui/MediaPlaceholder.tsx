import { ReactNode } from 'react';

interface MediaPlaceholderProps {
  label: ReactNode;
  className?: string;
}

export function MediaPlaceholder({ label, className = '' }: MediaPlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-card border border-dashed border-surface/60 bg-surface/40 text-text-secondary text-center p-6 ${className}`}
    >
      <span className="text-small">{label}</span>
    </div>
  );
}
