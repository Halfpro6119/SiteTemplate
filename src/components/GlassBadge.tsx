import { LucideIcon } from 'lucide-react';

interface GlassBadgeProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function GlassBadge({ icon: Icon, title, subtitle, className = '' }: GlassBadgeProps) {
  return (
    <div className={`glass-badge px-6 py-4 ${className}`}>
      <div className="flex items-center gap-3">
        <div className="trust-badge-icon">
          <Icon className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
        </div>
        <div>
          <div className="font-semibold text-sm" style={{ color: 'var(--color-text-primary)' }}>
            {title}
          </div>
          {subtitle && (
            <div className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
              {subtitle}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
