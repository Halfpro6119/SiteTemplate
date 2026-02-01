import { ReactNode } from 'react';

interface CTAPanelProps {
  children: ReactNode;
  variant?: 'glass' | 'spotlight' | 'dark';
  withDivider?: boolean;
  withGlow?: boolean;
  className?: string;
}

export default function CTAPanel({
  children,
  variant = 'glass',
  withDivider = true,
  withGlow = true,
  className = ''
}: CTAPanelProps) {
  const variantStyles = {
    glass: 'backdrop-blur-xl bg-white/40 border border-white/30 shadow-2xl',
    spotlight: 'backdrop-blur-xl bg-white/30 border border-white/20 shadow-2xl relative overflow-hidden',
    dark: 'bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 shadow-2xl'
  };

  return (
    <div className="relative">
      {withGlow && variant === 'spotlight' && (
        <div
          className="absolute inset-0 -z-10 blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle at center, var(--color-accent), transparent 70%)'
          }}
        />
      )}

      <div className={`rounded-2xl overflow-hidden ${variantStyles[variant]} ${className}`}>
        {withDivider && (
          <div
            className="h-1 w-full"
            style={{
              background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)'
            }}
          />
        )}
        {children}
      </div>
    </div>
  );
}
