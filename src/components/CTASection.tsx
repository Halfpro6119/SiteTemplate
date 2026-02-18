import { Link } from 'react-router-dom';
import { Phone, MessageSquare } from 'lucide-react';
import { businessConfig } from '../config';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  showPhone?: boolean;
  showQuote?: boolean;
}

export default function CTASection({
  title,
  subtitle = 'Get in touch with us today for a free, no-obligation quote',
  showPhone = true,
  showQuote = true
}: CTASectionProps) {
  return (
    <section
      className="relative overflow-hidden section-spacing"
      style={{
        background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%)'
      }}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="content-width relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="section-title text-white mb-6"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            {title}
          </h2>
          <p className="text-xl text-white/85 mb-12 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            {showPhone && (
              <a
                href={`tel:${businessConfig.phone}`}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-400 hover:scale-105"
                style={{
                  backgroundColor: 'white',
                  color: 'var(--color-text-inverse)',
                  boxShadow: '0 8px 24px -4px rgba(0, 0, 0, 0.3)'
                }}
              >
                <Phone className="w-5 h-5" />
                <span>{businessConfig.phone}</span>
              </a>
            )}
            {showQuote && (
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-400 hover:scale-105"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  color: 'white',
                  border: '1.5px solid rgba(255, 255, 255, 0.3)'
                }}
              >
                <MessageSquare className="w-5 h-5" />
                <span>Get Free Quote</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
