import { useEffect, useRef, useState } from 'react';
import { businessConfig } from '../config';

interface ReviewScoreRevealProps {
  size?: 'sm' | 'lg';
}

export default function ReviewScoreReveal({ size = 'lg' }: ReviewScoreRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const rating = businessConfig.rating;
  const count = businessConfig.reviewCount;

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    const el = ref.current;
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

  const sizeClasses = size === 'lg' ? 'text-5xl md:text-6xl' : 'text-3xl md:text-4xl';

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-1"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible && !reducedMotion ? 'scale(1)' : 'scale(0.8)',
        transition: reducedMotion
          ? 'none'
          : 'opacity 0.6s var(--ease-elegant), transform 0.6s var(--ease-elegant)'
      }}
    >
      <span
        className={`font-bold ${sizeClasses}`}
        style={{ color: 'var(--color-text-primary)' }}
      >
        {rating}
      </span>
      <span
        className="text-sm md:text-base"
        style={{ color: 'var(--color-text-tertiary)' }}
      >
        {count}+ reviews
      </span>
    </div>
  );
}
