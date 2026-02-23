import { Phone, ArrowRight, FileText, LucideIcon } from 'lucide-react';
import PremiumButton from './PremiumButton';
import TrustChipRow from './TrustChipRow';

interface HeroCTAProps {
  primaryText?: string;
  primaryHref?: string;
  primaryIcon?: LucideIcon;
  secondaryText?: string;
  secondaryHref?: string;
  secondaryIcon?: LucideIcon;
  trustChips?: Array<{ icon: 'shield' | 'clock' | 'award' | 'check' | 'star' | 'users'; text: string }>;
  variant?: 'light' | 'dark';
}

export default function HeroCTA({
  primaryText = 'Get a Quote',
  primaryHref = '/contact',
  primaryIcon,
  secondaryText = 'Call Now',
  secondaryHref = 'tel:',
  secondaryIcon,
  trustChips = [
    { icon: 'shield', text: 'Certified & Insured' },
    { icon: 'clock', text: 'Fast Response' },
    { icon: 'award', text: 'Trusted Locally' }
  ],
  variant = 'light'
}: HeroCTAProps) {
  const PrimaryIcon = primaryIcon || FileText;
  const SecondaryIcon = secondaryIcon || Phone;

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <PremiumButton
          variant="primary"
          size="lg"
          icon={PrimaryIcon}
          iconPosition="left"
          href={primaryHref}
        >
          {primaryText}
        </PremiumButton>
        <PremiumButton
          variant="outline"
          size="lg"
          icon={SecondaryIcon}
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
