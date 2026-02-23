import { Shield } from 'lucide-react';

interface GasSafeBadgeProps {
  className?: string;
}

export default function GasSafeBadge({ className = '' }: GasSafeBadgeProps) {
  return (
    <div
      className={`flex items-center gap-3 px-6 py-4 rounded-xl ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.12) 0%, rgba(6, 182, 212, 0.06) 100%)',
        border: '1px solid rgba(6, 182, 212, 0.2)',
        boxShadow: '0 0 24px -8px var(--color-accent-glow)'
      }}
    >
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{
          background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%)',
          boxShadow: '0 4px 16px -4px var(--color-accent-glow)'
        }}
      >
        <Shield className="w-6 h-6" style={{ color: 'var(--color-text-inverse)' }} />
      </div>
      <div>
        <div className="font-bold text-sm" style={{ color: 'var(--color-text-primary)' }}>
          Gas Safe Registered
        </div>
        <div className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
          Fully qualified engineers for all gas work
        </div>
      </div>
    </div>
  );
}
