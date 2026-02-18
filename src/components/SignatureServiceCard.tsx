import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SignatureServiceCardProps {
  number: string;
  icon: string;
  title: string;
  description: string;
  benefits?: string[];
  href?: string;
}

export default function SignatureServiceCard({
  number,
  icon,
  title,
  description,
  benefits,
  href = '/services'
}: SignatureServiceCardProps) {
  const IconComponent = (Icons as any)[icon] || Icons.Star;

  return (
    <Link
      to={href}
      className="group relative block h-full"
    >
      <div
        className="relative h-full overflow-hidden rounded-2xl transition-all duration-500"
        style={{
          background: 'linear-gradient(135deg, var(--color-bg-surface) 0%, var(--color-bg-elevated) 100%)',
          border: '1px solid var(--color-border-subtle)',
          boxShadow: 'var(--shadow-luxury-md)'
        }}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, var(--color-accent-glow) 0%, transparent 70%)'
          }}
        />

        <div
          className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)'
          }}
        />

        <div className="relative p-8">
          <div className="flex items-start gap-6 mb-6">
            <div
              className="relative flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
              style={{
                background: 'linear-gradient(135deg, rgba(91, 124, 153, 0.15) 0%, rgba(91, 124, 153, 0.08) 100%)',
                border: '1px solid var(--color-border-medium)',
                boxShadow: '0 0 24px -8px var(--color-accent-glow)'
              }}
            >
              <IconComponent
                className="w-8 h-8"
                style={{ color: 'var(--color-accent)' }}
              />
            </div>

            <div
              className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg transition-all duration-500"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--color-border-subtle)',
                color: 'var(--color-text-tertiary)',
                fontFamily: "'DM Sans', sans-serif"
              }}
            >
              {number}
            </div>
          </div>

          <h3
            className="text-xl font-bold mb-3 transition-colors duration-300"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              color: 'var(--color-text-primary)',
              letterSpacing: '0.01em'
            }}
          >
            {title}
          </h3>

          <p
            className="leading-relaxed mb-5"
            style={{
              color: 'var(--color-text-secondary)',
              fontSize: '0.9375rem',
              lineHeight: '1.7'
            }}
          >
            {description}
          </p>

          {benefits && benefits.length > 0 && (
            <ul className="space-y-2 mb-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm"
                  style={{ color: 'var(--color-text-tertiary)' }}
                >
                  <span
                    className="flex-shrink-0 w-1 h-1 rounded-full mt-2"
                    style={{ background: 'var(--color-accent)' }}
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          )}

          <div
            className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-500 mt-auto pt-6"
            style={{
              borderTop: '1px solid var(--color-border-subtle)',
              color: 'var(--color-accent)'
            }}
          >
            <span>Learn More</span>
            <ArrowRight
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
