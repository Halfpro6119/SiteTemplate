import { Link } from 'react-router-dom';
import { businessConfig } from '../config';

interface PostcodeMapProps {
  areas?: { slug: string; name: string; postcodes: string }[];
  className?: string;
}

export default function PostcodeMap({
  areas = businessConfig.serviceAreas.slice(0, 12),
  className = ''
}: PostcodeMapProps) {
  return (
    <div className={className}>
      <div
        className="relative rounded-2xl overflow-hidden p-6"
        style={{
          background: 'linear-gradient(135deg, var(--color-bg-surface) 0%, var(--color-bg-elevated) 100%)',
          border: '1px solid var(--color-border-subtle)',
          boxShadow: 'var(--shadow-luxury-md)'
        }}
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, var(--color-accent-glow) 0%, transparent 40%),
                radial-gradient(circle at 80% 70%, var(--color-accent-glow) 0%, transparent 40%)
              `
            }}
          />
        </div>

        <div className="relative">
          <h3 className="text-lg font-bold mb-4 text-center" style={{ color: 'var(--color-text-primary)' }}>
            Areas We Cover
          </h3>
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
            style={{
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.03) 0%, transparent 50%)',
              padding: '1.5rem',
              borderRadius: '1rem',
              border: '1px solid var(--color-border-subtle)'
            }}
          >
            {areas.map((area, index) => (
              <Link
                key={area.slug}
                to={`/areas/${area.slug}`}
                className="group block p-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--color-border-subtle)'
                }}
              >
                <div
                  className="w-2 h-2 rounded-full mb-2 transition-colors duration-300 group-hover:bg-var(--color-accent)"
                  style={{
                    background: index === 0 ? 'var(--color-accent)' : 'var(--color-text-tertiary)'
                  }}
                />
                <div className="font-semibold text-sm" style={{ color: 'var(--color-text-primary)' }}>
                  {area.name}
                </div>
                <div className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
                  {area.postcodes}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
