import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  rating: number;
  text: string;
  date: string;
}

export default function TestimonialCard({ name, rating, text, date }: TestimonialCardProps) {
  return (
    <div className="group floating-card-3d h-full flex flex-col relative">
      <div className="absolute top-6 right-6 opacity-10 pointer-events-none">
        <svg width="48" height="36" viewBox="0 0 48 36" fill="currentColor" style={{ color: 'var(--color-accent)' }}>
          <path d="M0 36V14.4L10.08 0h9.36L12 14.4h9.12V36H0zm26.88 0V14.4L36.96 0h9.36L38.88 14.4H48V36H26.88z"/>
        </svg>
      </div>
      <div className="p-8 flex flex-col flex-1 relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < rating ? 'text-yellow-400 fill-yellow-400' : 'opacity-20'
                }`}
                style={{
                  color: i < rating ? '#fbbf24' : 'var(--color-text-tertiary)'
                }}
              />
            ))}
          </div>
          <span className="text-sm font-medium" style={{ color: 'var(--color-text-tertiary)' }}>{date}</span>
        </div>
        <p
          className="leading-relaxed mb-8 flex-1 text-lg"
          style={{
            color: 'var(--color-text-secondary)',
            lineHeight: '1.7',
            fontStyle: 'italic'
          }}
        >
          "{text}"
        </p>
        <div className="flex items-center gap-3 pt-6" style={{ borderTop: '1px solid var(--color-border-subtle)' }}>
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
            style={{
              background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%)',
              color: 'var(--color-text-inverse)',
              boxShadow: '0 0 24px -6px var(--color-accent-glow)'
            }}
          >
            {name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-base" style={{ color: 'var(--color-text-primary)' }}>
              {name}
            </p>
            <p className="text-sm font-medium" style={{ color: 'var(--color-accent)' }}>
              Verified Customer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
