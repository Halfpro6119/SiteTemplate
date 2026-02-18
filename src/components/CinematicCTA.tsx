import { Phone, FileText } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Link } from 'react-router-dom';

interface CinematicCTAProps {
  label?: string;
  headline: string;
  subtitle: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  trustChips?: Array<{ icon: 'shield' | 'clock' | 'award' | 'check' | 'star' | 'users' | 'mapPin'; text: string }>;
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
        background: 'linear-gradient(180deg, var(--color-bg-surface) 0%, var(--color-bg-base) 100%)',
        borderTop: '1px solid var(--color-border-subtle)'
      }}
      ref={containerRef}
    >
      <div
        className="absolute inset-0 -z-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(91, 124, 153, 0.08), transparent 70%)'
        }}
      />

      <div className="content-width relative z-10">
        <div className="max-w-3xl mx-auto text-center scroll-reveal">
          <h2 className="section-title text-balance mb-4" style={{ color: 'var(--color-text-primary)' }}>
            {headline}
          </h2>

          <p className="editorial-subheading mb-10" style={{ color: 'var(--color-text-secondary)' }}>
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            {primaryHref?.startsWith('http') || primaryHref?.startsWith('tel') || primaryHref?.startsWith('mailto') ? (
              <a href={primaryHref} className="btn-primary inline-flex items-center gap-2">
                <FileText className="w-5 h-5" />
                <span>{primaryText}</span>
              </a>
            ) : (
              <Link to={primaryHref || '/contact'} className="btn-primary inline-flex items-center gap-2">
                <FileText className="w-5 h-5" />
                <span>{primaryText}</span>
              </Link>
            )}
            <a href={secondaryHref} className="btn-secondary inline-flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>{secondaryText}</span>
            </a>
          </div>

          {trustChips && trustChips.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4 text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
              {trustChips.map((chip, i) => (
                <span key={i}>{chip.text}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
