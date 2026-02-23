import { useEffect, useRef, useState } from 'react';

interface YearsCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export default function YearsCounter({ end, duration = 1500, suffix = '', className = '' }: YearsCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setCount(end);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, hasAnimated, reducedMotion]);

  useEffect(() => {
    if (!hasAnimated || reducedMotion) return;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [hasAnimated, end, duration, reducedMotion]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}
