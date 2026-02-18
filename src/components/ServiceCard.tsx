import * as Icons from 'lucide-react';
import { businessConfig } from '../config';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const IconComponent = (Icons as any)[icon] || Icons.Star;

  return (
    <div className="group floating-card-3d h-full">
      <div className="p-8">
        <div className="icon-feature mb-6 group-hover:scale-110 transition-transform duration-500">
          <IconComponent
            className="w-7 h-7"
            style={{ color: 'var(--color-accent)' }}
          />
        </div>
        <h3
          className="text-xl font-bold mb-4"
          style={{
            fontFamily: "'DM Sans', sans-serif",
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
        <div
          className="mt-6 pt-6 flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-500"
          style={{
            borderTop: '1px solid var(--color-border-subtle)',
            color: 'var(--color-accent)'
          }}
        >
          <span>Learn More</span>
          <span className="transform group-hover:translate-x-1 transition-transform duration-500">→</span>
        </div>
      </div>
    </div>
  );
}
