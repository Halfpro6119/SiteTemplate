import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

interface TrustGaugeProps {
  rating?: number;
  reviewCount?: string;
  className?: string;
}

export default function TrustGauge({
  rating = 5,
  reviewCount = '1000+',
  className = ''
}: TrustGaugeProps) {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setProgress(1);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setProgress(1);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const circumference = Math.PI * 80;
  const strokeDashoffset = circumference * (1 - progress * (rating / 5));

  return (
    <div
      ref={ref}
      className={`relative flex flex-col items-center justify-center ${className}`}
    >
      <svg className="w-44 h-24 -rotate-90" viewBox="0 0 180 90">
        <path
          d="M 20 90 A 80 80 0 0 1 160 90"
          fill="none"
          stroke="var(--color-border-subtle)"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <path
          d="M 20 90 A 80 80 0 0 1 160 90"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{
            transition: 'stroke-dashoffset 1.2s cubic-bezier(0.22, 0.61, 0.36, 1)'
          }}
        />
      </svg>
      <div className="absolute -bottom-2 flex flex-col items-center">
        <div className="flex items-center gap-1">
          <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
          <span className="font-bold text-2xl" style={{ color: 'var(--color-text-primary)' }}>
            {rating}/5
          </span>
        </div>
        <span className="text-sm font-semibold" style={{ color: 'var(--color-text-tertiary)' }}>
          {reviewCount} Reviews
        </span>
      </div>
    </div>
  );
}
