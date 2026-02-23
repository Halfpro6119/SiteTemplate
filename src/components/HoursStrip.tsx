import { Clock } from 'lucide-react';
import { businessConfig } from '../config';

export default function HoursStrip() {
  const hours = businessConfig.footer.businessHours;

  return (
    <div
      className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl"
      style={{
        backgroundColor: 'rgba(16, 185, 129, 0.12)',
        border: '1px solid rgba(16, 185, 129, 0.25)'
      }}
    >
      <span
        className="relative flex h-2.5 w-2.5"
        aria-hidden="true"
      >
        <span
          className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"
          style={{ animationDuration: '2s' }}
        />
        <span
          className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"
        />
      </span>
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
        <span
          className="text-sm font-semibold"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {hours}
        </span>
      </div>
      <span
        className="text-xs"
        style={{ color: 'var(--color-text-tertiary)' }}
      >
        Emergency services available
      </span>
    </div>
  );
}
