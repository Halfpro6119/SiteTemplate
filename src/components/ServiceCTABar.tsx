import { Phone, FileText } from 'lucide-react';
import PremiumButton from './PremiumButton';

interface ServiceCTABarProps {
  question?: string;
  primaryText?: string;
  primaryHref?: string;
  callText?: string;
  callHref?: string;
}

export default function ServiceCTABar({
  question = 'Need help with this service?',
  primaryText = 'Get Quote',
  primaryHref = '/contact',
  callText = 'Call Now',
  callHref = 'tel:'
}: ServiceCTABarProps) {
  return (
    <div
      className="mt-6 p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4"
      style={{
        background: 'linear-gradient(135deg, var(--color-bg-surface) 0%, var(--color-bg-elevated) 100%)',
        border: '1px solid var(--color-border-subtle)',
        borderLeftWidth: '4px',
        borderLeftColor: 'var(--color-accent)',
        boxShadow: 'var(--shadow-luxury-md)'
      }}
    >
      <p
        className="text-sm font-semibold"
        style={{ color: 'var(--color-text-primary)' }}
      >
        {question}
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <PremiumButton
          variant="primary"
          size="sm"
          icon={FileText}
          href={primaryHref}
        >
          {primaryText}
        </PremiumButton>
        <a
          href={callHref}
          className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 transition-colors duration-300 hover:opacity-80"
          style={{ color: 'var(--color-accent)' }}
        >
          <Phone className="w-4 h-4" />
          {callText}
        </a>
      </div>
    </div>
  );
}
