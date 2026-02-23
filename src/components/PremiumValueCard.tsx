import { LucideIcon } from 'lucide-react';

interface PremiumValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function PremiumValueCard({ icon: Icon, title, description, index }: PremiumValueCardProps) {
  return (
    <div
      className="group relative h-full overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105"
      style={{
        background: 'linear-gradient(135deg, var(--color-bg-surface) 0%, var(--color-bg-elevated) 100%)',
        border: '1px solid var(--color-border-subtle)',
        boxShadow: 'var(--shadow-luxury-md)'
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(16, 185, 129, 0.15) 0%, transparent 70%)'
        }}
      />

      <div
        className="absolute top-0 left-0 w-full h-1 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
        style={{
          background: 'linear-gradient(90deg, var(--color-accent), var(--color-accent-light))'
        }}
      />

      <div className="relative p-8">
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
          style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0.1) 100%)',
            border: '1px solid var(--color-border-medium)',
            boxShadow: '0 0 24px -8px var(--color-accent-glow)'
          }}
        >
          <Icon
            className="w-8 h-8"
            style={{ color: 'var(--color-accent)' }}
          />
        </div>

        <div
          className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
          style={{
            background: 'rgba(16, 185, 129, 0.1)',
            color: 'var(--color-accent)',
            border: '1px solid rgba(16, 185, 129, 0.2)'
          }}
        >
          Value #{String(index + 1).padStart(2, '0')}
        </div>

        <h3
          className="text-2xl font-bold mb-4"
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            color: 'var(--color-text-primary)',
            letterSpacing: '-0.01em'
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
          className="mt-6 pt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{
            borderTop: '1px solid var(--color-border-subtle)'
          }}
        >
          <div
            className="flex-1 h-0.5 rounded-full"
            style={{
              background: 'linear-gradient(90deg, var(--color-accent) 0%, transparent 100%)'
            }}
          />
        </div>
      </div>
    </div>
  );
}
