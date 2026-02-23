import { Clock } from 'lucide-react';

interface EmergencyResponseBadgeProps {
  responseTime?: string;
  className?: string;
}

export default function EmergencyResponseBadge({
  responseTime = '30-60 min',
  className = ''
}: EmergencyResponseBadgeProps) {
  return (
    <div
      className={`relative inline-flex items-center gap-3 px-6 py-4 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 ${className}`}
      style={{
        background: 'linear-gradient(135deg, var(--color-bg-surface) 0%, var(--color-bg-elevated) 100%)',
        border: '1px solid var(--color-border-subtle)',
        boxShadow: 'var(--shadow-luxury-md), 0 0 32px -8px var(--color-accent-glow)'
      }}
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 50%, var(--color-accent-glow) 0%, transparent 60%)',
          animation: 'pulse-opacity 2s ease-in-out infinite'
        }}
      />
      <div
        className="relative flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(6, 182, 212, 0.1) 100%)',
          border: '1px solid rgba(6, 182, 212, 0.3)',
          boxShadow: '0 0 24px -8px var(--color-accent-glow)'
        }}
      >
        <Clock
          className="w-7 h-7"
          style={{ color: 'var(--color-accent)' }}
        />
      </div>
      <div className="relative">
        <div className="font-bold text-lg" style={{ color: 'var(--color-text-primary)' }}>
          {responseTime} Response
        </div>
        <div className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
          24/7 Emergency
        </div>
      </div>
    </div>
  );
}
