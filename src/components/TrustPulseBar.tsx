import { useEffect, useRef, useState } from 'react';
import { businessConfig } from '../config';

const stats = [
  `${businessConfig.yearsExperience}+ Years`,
  `${businessConfig.reviewCount}+ 5-Star Reviews`,
  'Free Estimates',
  'Job-Based Pricing'
];

export default function TrustPulseBar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-wrap items-center justify-center gap-6 md:gap-10 py-6"
      style={{
        borderTop: '1px solid var(--color-border-subtle)',
        borderBottom: '1px solid var(--color-border-subtle)',
        backgroundColor: 'var(--color-bg-surface)'
      }}
    >
      {stats.map((stat, i) => (
        <div
          key={stat}
          className="flex items-center gap-2"
          style={{
            animation: reducedMotion ? 'none' : isVisible ? `trust-pulse-in 0.6s var(--ease-elegant) ${i * 0.08}s both` : 'none',
            opacity: reducedMotion || isVisible ? 1 : 0
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{
              backgroundColor: 'var(--color-accent)',
              boxShadow: '0 0 8px var(--color-accent-glow)'
            }}
          />
          <span
            className="text-sm font-semibold"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {stat}
          </span>
        </div>
      ))}
    </div>
  );
}
