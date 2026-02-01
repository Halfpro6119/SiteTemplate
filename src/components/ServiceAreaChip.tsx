import { MapPin } from 'lucide-react';

interface ServiceAreaChipProps {
  area: string;
  isPrimary?: boolean;
}

export default function ServiceAreaChip({ area, isPrimary = false }: ServiceAreaChipProps) {
  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-500 hover:scale-105"
      style={{
        background: isPrimary
          ? 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%)'
          : 'rgba(255, 255, 255, 0.05)',
        color: isPrimary ? 'var(--color-text-inverse)' : 'var(--color-text-secondary)',
        boxShadow: isPrimary
          ? 'var(--shadow-luxury-md), var(--shadow-glow-accent)'
          : 'var(--shadow-luxury-sm)',
        border: isPrimary ? 'none' : '1px solid var(--color-border-medium)',
        fontWeight: isPrimary ? '600' : '500',
        fontSize: '0.9375rem'
      }}
    >
      <MapPin className="w-4 h-4" />
      <span>{area}</span>
    </div>
  );
}
