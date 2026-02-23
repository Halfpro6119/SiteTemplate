import { Shield } from 'lucide-react';

interface GasSafeBadgeProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function GasSafeBadge({ className = '', size = 'md' }: GasSafeBadgeProps) {
  const sizeStyles = {
    sm: 'px-3 py-2 gap-2',
    md: 'px-5 py-3 gap-3',
    lg: 'px-6 py-4 gap-4'
  };

  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  return (
    <a
      href="https://www.gassaferegister.co.uk/"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center rounded-xl transition-all duration-300 hover:scale-105 ${sizeStyles[size]} ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(6, 182, 212, 0.08) 100%)',
        border: '1px solid rgba(6, 182, 212, 0.3)',
        boxShadow: '0 0 24px -8px var(--color-accent-glow)'
      }}
    >
      <div
        className={`flex-shrink-0 rounded-lg flex items-center justify-center ${iconSizes[size]}`}
        style={{
          background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%)',
          color: 'var(--color-text-inverse)',
          boxShadow: '0 0 20px -4px var(--color-accent-glow)'
        }}
      >
        <Shield className={iconSizes[size]} />
      </div>
      <div>
        <div className="font-bold" style={{ color: 'var(--color-text-primary)' }}>
          Gas Safe
        </div>
        <div className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
          Registered
        </div>
      </div>
    </a>
  );
}
