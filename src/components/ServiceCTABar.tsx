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
      className="mt-6 p-4 rounded-lg backdrop-blur-sm bg-white/50 border-l-4 flex flex-col sm:flex-row items-center justify-between gap-4"
      style={{ borderLeftColor: 'var(--color-accent)' }}
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
