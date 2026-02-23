import { Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface ReviewStarsWaveProps {
  rating?: number;
  size?: 'sm' | 'md' | 'lg';
}

export default function ReviewStarsWave({ rating = 5, size = 'md' }: ReviewStarsWaveProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

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
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`${sizeClasses[size]} ${
            i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-white/20'
          }`}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible && !reducedMotion ? 'scale(1)' : 'scale(0.5)',
            transition: reducedMotion
              ? 'none'
              : `opacity 0.4s ease ${i * 0.08}s, transform 0.4s var(--ease-elegant) ${i * 0.08}s`
          }}
        />
      ))}
    </div>
  );
}
