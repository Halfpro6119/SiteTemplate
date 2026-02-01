import { Phone, FileText } from 'lucide-react';
import PremiumButton from './PremiumButton';

interface FooterClosingCTAProps {
  title: string;
  subtitle: string;
  primaryText: string;
  primaryHref: string;
  secondaryText: string;
  secondaryHref: string;
}

export default function FooterClosingCTA({
  title,
  subtitle,
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref
}: FooterClosingCTAProps) {
  return (
    <div className="relative pb-12">
      <div
        className="absolute inset-0 -z-10 blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle at center, var(--color-accent), transparent 70%)'
        }}
      />

      <div
        className="max-w-4xl mx-auto backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 md:p-10 relative overflow-hidden"
      >
        <div
          className="h-1 w-full absolute top-0 left-0"
          style={{
            background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)'
          }}
        />

        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
            {title}
          </h3>
          <p className="text-lg text-white/80 mb-8">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <PremiumButton
              variant="primary"
              size="lg"
              icon={FileText}
              href={primaryHref}
            >
              {primaryText}
            </PremiumButton>
            <PremiumButton
              variant="glass"
              size="lg"
              icon={Phone}
              href={secondaryHref}
              className="text-white"
            >
              {secondaryText}
            </PremiumButton>
          </div>
        </div>
      </div>
    </div>
  );
}
