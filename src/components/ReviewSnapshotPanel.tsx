import { Star, CheckCircle2 } from 'lucide-react';
import { businessConfig } from '../config';

interface ReviewSnapshotPanelProps {
  size?: 'default' | 'large';
}

export default function ReviewSnapshotPanel({ size = 'default' }: ReviewSnapshotPanelProps) {
  const isLarge = size === 'large';

  return (
    <div className="relative">
      <div
        className={`rounded-2xl p-8 ${isLarge ? 'lg:p-12' : ''} shadow-lg`}
        style={{
          backgroundColor: 'var(--color-bg-surface)',
          border: '1px solid var(--color-border-subtle)'
        }}
      >
        <div className={`grid ${isLarge ? 'lg:grid-cols-2' : 'md:grid-cols-2'} gap-8 lg:gap-12 items-center`}>
          <div className="text-center md:text-left">
          <div className="inline-flex items-baseline gap-3 mb-4">
            <div
              className={`${isLarge ? 'text-7xl' : 'text-6xl'} font-bold tracking-tight`}
              style={{ color: 'var(--color-accent)' }}
            >
              {businessConfig.rating}
            </div>
            <div className={`${isLarge ? 'text-3xl' : 'text-2xl'} font-semibold`} style={{ color: 'var(--color-text-tertiary)' }}>
              /5
            </div>
          </div>

          <div className="flex justify-center md:justify-start mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`${isLarge ? 'w-7 h-7' : 'w-6 h-6'} ${
                  i < Math.floor(businessConfig.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'fill-gray-300 text-gray-300'
                }`}
              />
            ))}
          </div>

          <p
            className={`${isLarge ? 'text-xl' : 'text-lg'} font-semibold mb-2`}
            style={{ color: 'var(--color-text-primary)' }}
          >
            Trusted by Local Customers
          </p>
          <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            <span className="font-medium">{businessConfig.reviewCount}</span> verified reviews • Consistent 5★ service
          </p>
          </div>

          <div className="space-y-3">
          <p
            className={`${isLarge ? 'text-base' : 'text-sm'} font-semibold mb-4`}
            style={{ color: 'var(--color-text-secondary)' }}
          >
            What customers value most:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {businessConfig.trustChips.map((chip, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'rgba(91, 124, 153, 0.08)',
                  border: '1px solid var(--color-border-medium)'
                }}
              >
                <CheckCircle2
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: 'var(--color-accent)' }}
                />
                <span className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>
                  {chip}
                </span>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>

      <div className="h-1 w-full mt-8 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-border-subtle)' }}>
        <div
          className="h-full signature-divider-animate"
          style={{
            width: '60%',
            background: 'linear-gradient(90deg, var(--color-accent) 0%, transparent 100%)'
          }}
        />
      </div>
    </div>
  );
}
