import { Phone, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  const isExternal = primaryHref.startsWith('http') || primaryHref.startsWith('tel') || primaryHref.startsWith('mailto');

  return (
    <div className="relative pb-12">
      <div
        className="max-w-4xl mx-auto rounded-2xl p-8 md:p-10 relative overflow-hidden"
        style={{
          background: 'var(--color-bg-elevated)',
          border: '1px solid var(--color-border-subtle)'
        }}
      >
        <div
          className="h-px w-full absolute top-0 left-0"
          style={{
            background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)'
          }}
        />

        <div className="text-center">
          <h3 className="section-title mb-2" style={{ color: 'var(--color-text-primary)' }}>
            {title}
          </h3>
          <p className="text-base mb-8" style={{ color: 'var(--color-text-secondary)' }}>
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {isExternal ? (
              <a href={primaryHref} className="btn-primary inline-flex items-center gap-2">
                <FileText className="w-5 h-5" />
                <span>{primaryText}</span>
              </a>
            ) : (
              <Link to={primaryHref} className="btn-primary inline-flex items-center gap-2">
                <FileText className="w-5 h-5" />
                <span>{primaryText}</span>
              </Link>
            )}
            <a href={secondaryHref} className="btn-secondary inline-flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>{secondaryText}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
