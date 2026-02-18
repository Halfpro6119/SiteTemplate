import { LucideIcon } from 'lucide-react';

interface ImpactBlockProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export default function ImpactBlock({ icon: Icon, title, description, index = 0 }: ImpactBlockProps) {
  return (
    <div
      className="floating-card-3d p-8 h-full"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="icon-feature mb-6">
        <Icon className="w-7 h-7" style={{ color: 'var(--color-accent)' }} />
      </div>
      <h3
        className="text-2xl font-bold mb-4"
        style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          color: 'var(--color-text-primary)',
          letterSpacing: '0.01em'
        }}
      >
        {title}
      </h3>
      <p
        className="leading-relaxed"
        style={{
          color: 'var(--color-text-secondary)',
          fontSize: '0.9375rem',
          lineHeight: '1.7'
        }}
      >
        {description}
      </p>
    </div>
  );
}
