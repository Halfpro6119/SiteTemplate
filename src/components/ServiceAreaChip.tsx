import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

interface ServiceAreaChipProps {
  area: string;
  isPrimary?: boolean;
  href?: string;
  postcodes?: string;
}

export default function ServiceAreaChip({ area, isPrimary = false, href, postcodes }: ServiceAreaChipProps) {
  const label = postcodes ? `${area} (${postcodes})` : area;

  const chipStyles = {
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
  };

  const chipContent = (
    <>
      <MapPin className="w-4 h-4" />
      <span>{label}</span>
    </>
  );

  if (href) {
    return (
      <Link
        to={href}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-500 hover:scale-105"
        style={chipStyles}
      >
        {chipContent}
      </Link>
    );
  }

  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-500 hover:scale-105"
      style={chipStyles}
    >
      {chipContent}
    </div>
  );
}
