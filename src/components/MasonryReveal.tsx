import { ReactNode, useEffect, useRef, useState, Children } from 'react';

interface MasonryRevealProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export default function MasonryReveal({
  children,
  staggerDelay = 80,
  className = ''
}: MasonryRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const items = Children.toArray(children);

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
    >
      {items.map((child, i) => (
        <div
          key={i}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible && !reducedMotion ? 'translateY(0)' : 'translateY(24px)',
            transition: reducedMotion
              ? 'none'
              : `opacity 0.6s var(--ease-elegant) ${i * staggerDelay}ms, transform 0.6s var(--ease-elegant) ${i * staggerDelay}ms`
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
