import { Phone, FileText } from 'lucide-react';
import PremiumButton from './PremiumButton';
import TrustChipRow from './TrustChipRow';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface CinematicCTAProps {
  label?: string;
  headline: string;
  subtitle: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  trustChips?: Array<{ icon: 'shield' | 'clock' | 'award' | 'check' | 'star' | 'users'; text: string }>;
}

export default function CinematicCTA({
  label = 'Get Started',
  headline,
  subtitle,
  primaryText = 'Get a Quote',
  primaryHref = '/contact',
  secondaryText = 'Call Now',
  secondaryHref = 'tel:',
  trustChips = [
    { icon: 'shield', text: 'Certified' },
    { icon: 'users', text: 'Local' },
    { icon: 'star', text: 'Trusted' }
  ]
}: CinematicCTAProps) {
  const containerRef = useScrollReveal();

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)'
      }}
      ref={containerRef}
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 60 0 L 0 0 0 60" fill="none" stroke="white" stroke-width="1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23grid)" /%3E%3C/svg%3E")',
        }}
      />

      <div
        className="absolute inset-0 -z-0 blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 50%, var(--color-accent), transparent 60%)'
        }}
      />

      <div
        className="h-1 w-full absolute top-0 left-0"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center scroll-reveal">
          <div
            className="text-sm font-bold uppercase tracking-wider mb-4"
            style={{ color: 'var(--color-accent)' }}
          >
            {label}
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            {headline}
          </h2>

          <p className="text-xl md:text-2xl mb-12 text-white/80 leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
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

          {trustChips && trustChips.length > 0 && (
            <TrustChipRow chips={trustChips} variant="dark" />
          )}
        </div>
      </div>
    </section>
  );
}
