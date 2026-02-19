import { Link } from 'react-router-dom';
import { FileWarning, Phone, Shield, Clock, Zap } from 'lucide-react';
import { businessConfig } from '../config';

export default function SevernTrentBlock() {
  const { severnTrent } = businessConfig;
  if (!severnTrent) return null;

  return (
    <section
      className="relative overflow-hidden section-spacing"
      style={{
        backgroundColor: 'var(--color-bg-panel)',
        borderTop: '1px solid var(--color-border-subtle)',
        borderBottom: '1px solid var(--color-border-subtle)'
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%)'
        }}
      />
      <div className="content-width relative z-10">
        <div
          className="max-w-4xl mx-auto rounded-2xl p-10 md:p-12 text-center"
          style={{
            background: 'linear-gradient(135deg, var(--color-bg-surface) 0%, var(--color-bg-elevated) 100%)',
            border: '1px solid var(--color-border-medium)',
            boxShadow: 'var(--shadow-luxury-md), 0 0 32px -8px var(--color-accent-glow)'
          }}
        >
          <div className="flex justify-center mb-6">
            <div
              className="flex items-center justify-center w-16 h-16 rounded-xl"
              style={{
                backgroundColor: 'rgba(220, 38, 38, 0.15)',
                color: 'var(--color-accent)'
              }}
            >
              <FileWarning className="w-8 h-8" />
            </div>
          </div>
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ color: 'var(--color-text-primary)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            {severnTrent.headline}
          </h2>
          <p
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {severnTrent.subhead}
          </p>
          <p
            className="flex flex-wrap items-center justify-center gap-3 text-sm mb-8"
            style={{ color: 'var(--color-text-tertiary)' }}
          >
            <span className="inline-flex items-center gap-1.5">
              <Shield className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
              Watersafe accredited
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
              24hr response
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Zap className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
              Same-day repair often
            </span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={severnTrent.ctaHref}
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              {severnTrent.ctaText}
            </Link>
            <a
              href={severnTrent.ctaTel}
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call {businessConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
