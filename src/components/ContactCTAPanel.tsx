import { Phone, FileText, Clock } from 'lucide-react';
import CTAPanel from './CTAPanel';
import PremiumButton from './PremiumButton';
import TrustChipRow from './TrustChipRow';

interface ContactCTAPanelProps {
  title?: string;
  responseTime?: string;
  phoneHref?: string;
  quoteHref?: string;
  trustChips?: Array<{ icon: 'shield' | 'clock' | 'award' | 'check' | 'star' | 'users'; text: string }>;
}

export default function ContactCTAPanel({
  title = 'Speak to a Specialist',
  responseTime = 'We usually respond within 1 hour',
  phoneHref = 'tel:',
  quoteHref = '#contact',
  trustChips = [
    { icon: 'shield', text: 'Certified' },
    { icon: 'users', text: 'Local' },
    { icon: 'star', text: 'Trusted' }
  ]
}: ContactCTAPanelProps) {
  return (
    <CTAPanel variant="spotlight" withDivider withGlow>
      <div className="p-8 text-center">
        <h3
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {title}
        </h3>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <PremiumButton
            variant="primary"
            size="lg"
            icon={Phone}
            href={phoneHref}
          >
            Call Now
          </PremiumButton>
          <PremiumButton
            variant="secondary"
            size="lg"
            icon={FileText}
            href={quoteHref}
          >
            Request Quote
          </PremiumButton>
        </div>

        <div className="flex items-center justify-center gap-2 mb-6 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          <Clock className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
          <span>{responseTime}</span>
        </div>

        {trustChips && trustChips.length > 0 && (
          <TrustChipRow chips={trustChips} variant="light" size="sm" />
        )}
      </div>
    </CTAPanel>
  );
}
