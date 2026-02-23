import { Link } from 'react-router-dom';
import { businessConfig } from '../config';

interface AreaHeatStripProps {
  areas?: { slug: string; name: string; postcodes: string }[];
  maxItems?: number;
  className?: string;
}

export default function AreaHeatStrip({
  areas = businessConfig.serviceAreas,
  maxItems = 16,
  className = ''
}: AreaHeatStripProps) {
  const displayAreas = areas.slice(0, maxItems);

  return (
    <div className={className}>
      <div
        className="flex flex-wrap justify-center gap-2 py-4"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(6, 182, 212, 0.05) 50%, transparent 100%)',
          borderRadius: '1rem',
          border: '1px solid var(--color-border-subtle)'
        }}
      >
        {displayAreas.map((area, index) => (
          <Link
            key={area.slug}
            to={`/areas/${area.slug}`}
            className="group px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            style={{
              background: index === 0
                ? 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%)'
                : 'rgba(255, 255, 255, 0.05)',
              color: index === 0 ? 'var(--color-text-inverse)' : 'var(--color-text-secondary)',
              border: index === 0 ? 'none' : '1px solid var(--color-border-subtle)',
              boxShadow: index === 0 ? '0 0 16px -4px var(--color-accent-glow)' : 'none'
            }}
          >
            <span className="font-medium text-sm group-hover:text-var(--color-accent)">
              {area.name}
            </span>
            <span
              className="ml-1 text-xs opacity-75"
              style={{ color: 'inherit' }}
            >
              ({area.postcodes})
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
