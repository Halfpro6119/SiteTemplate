import { Phone } from 'lucide-react';
import { businessConfig } from '../config';

interface PhoneGlowButtonProps {
  className?: string;
  showLabel?: boolean;
  variant?: 'default' | 'sticky';
}

export default function PhoneGlowButton({
  className = '',
  showLabel = true,
  variant = 'default'
}: PhoneGlowButtonProps) {
  const isSticky = variant === 'sticky';

  return (
    <a
      href={`tel:${businessConfig.phone.replace(/\D/g, '')}`}
      className={`
        inline-flex items-center gap-2 font-bold transition-all duration-300
        hover:scale-105 active:scale-95
        ${isSticky ? 'fixed bottom-6 right-6 z-40 shadow-lg rounded-full p-4' : ''}
        ${className}
      `}
      style={{
        color: 'var(--color-text-inverse)',
        background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%)',
        boxShadow: '0 0 24px -4px var(--color-accent-glow), 0 4px 14px rgba(0,0,0,0.3)',
        padding: isSticky ? '1rem' : '0.75rem 1.5rem',
        borderRadius: isSticky ? '9999px' : '0.75rem',
        animation: 'phone-glow-pulse 2.5s ease-in-out infinite'
      }}
      aria-label={`Call ${businessConfig.businessName} at ${businessConfig.phone}`}
    >
      <Phone className="w-5 h-5" strokeWidth={2.5} />
      {showLabel && (
        <span>{businessConfig.phone}</span>
      )}
    </a>
  );
}
