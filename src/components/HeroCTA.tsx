import { Phone, ArrowRight } from 'lucide-react';
import PremiumButton from './PremiumButton';
import TrustChipRow from './TrustChipRow';

interface HeroCTAProps {
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  trustChips?: Array<{ icon: 'shield' | 'clock' | 'award' | 'check' | 'star' | 'users'; text: string }>;
  variant?: 'light' | 'dark';
}

export default function HeroCTA({
  primaryText = 'Get a Quote',
  primaryHref = '/contact',
  secondaryText = 'Explore Services',
  secondaryHref = '#services',
  trustChips = [
    { icon: 'shield', text: 'Certified & Insured' },
    { icon: 'clock', text: 'Fast Response' },
    { icon: 'award', text: 'Trusted Locally' }
  ],
  variant = 'light'
}: HeroCTAProps) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <PremiumButton
          variant="primary"
          size="lg"
          icon={Phone}
          iconPosition="left"
          href={primaryHref}
        >
          {primaryText}
        </PremiumButton>
        <PremiumButton
          variant="outline"
          size="lg"
          icon={ArrowRight}
          href={secondaryHref}
          className={variant === 'dark' ? 'text-white' : 'text-slate-700'}
        >
          {secondaryText}
        </PremiumButton>
      </div>

      {trustChips && trustChips.length > 0 && (
        <TrustChipRow chips={trustChips} variant={variant} />
      )}
    </div>
  );
}
