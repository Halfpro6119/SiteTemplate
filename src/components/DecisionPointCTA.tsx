import { Phone, FileText, Star } from 'lucide-react';
import CTAPanel from './CTAPanel';
import PremiumButton from './PremiumButton';
import TrustChipRow from './TrustChipRow';

interface DecisionPointCTAProps {
  label?: string;
  title: string;
  subtitle: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  tertiaryText?: string;
  tertiaryHref?: string;
  trustChips?: Array<{ icon: 'shield' | 'clock' | 'award' | 'check' | 'star' | 'users' | 'leaf'; text: string }>;
}

export default function DecisionPointCTA({
  label = 'Ready to take the next step?',
  title,
  subtitle,
  primaryText = 'Get Free Quote',
  primaryHref = '#contact',
  secondaryText = 'Speak to Us',
  secondaryHref = 'tel:',
  tertiaryText,
  tertiaryHref,
  trustChips = [
    { icon: 'shield', text: 'Trusted Locally' },
    { icon: 'check', text: 'Clear Pricing' },
    { icon: 'users', text: 'Professional Team' }
  ]
}: DecisionPointCTAProps) {
  return (
    <CTAPanel variant="spotlight" withDivider withGlow>
      <div className="p-8 lg:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <div
                className="text-sm font-bold uppercase tracking-wider mb-3"
                style={{ color: 'var(--color-accent)' }}
              >
                {label}
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {title}
              </h2>
              <p
                className="text-lg md:text-xl leading-relaxed"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {subtitle}
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-end gap-6">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <PremiumButton
                  variant="primary"
                  size="lg"
                  icon={FileText}
                  href={primaryHref}
                  className="w-full sm:w-auto"
                >
                  {primaryText}
                </PremiumButton>
                <PremiumButton
                  variant="secondary"
                  size="lg"
                  icon={Phone}
                  href={secondaryHref}
                  className="w-full sm:w-auto"
                >
                  {secondaryText}
                </PremiumButton>
              </div>

              {tertiaryText && (
                <a
                  href={tertiaryHref}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 hover:opacity-80"
                  style={{ color: 'var(--color-accent)' }}
                >
                  <Star className="w-4 h-4" />
                  {tertiaryText}
                </a>
              )}

              {trustChips && trustChips.length > 0 && (
                <div className="w-full">
                  <TrustChipRow chips={trustChips} variant="light" size="sm" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </CTAPanel>
  );
}
