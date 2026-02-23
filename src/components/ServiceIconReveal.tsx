import { ReactNode, useEffect, useRef, useState } from 'react';

interface ServiceIconRevealProps {
  children: ReactNode;
  delay?: number;
}

export default function ServiceIconReveal({ children, delay = 0 }: ServiceIconRevealProps) {
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const shouldAnimate = isVisible && !reducedMotion;

  return (
    <div
      ref={ref}
      className="relative"
      style={{
        transform: shouldAnimate ? 'scale(1)' : 'scale(0.85)',
        opacity: isVisible ? 1 : 0.6,
        transition: reducedMotion
          ? 'none'
          : `transform 0.7s var(--ease-elegant) ${delay}ms, opacity 0.6s ease ${delay}ms`,
        boxShadow: shouldAnimate ? '0 0 24px -4px var(--color-accent-glow)' : 'none',
        transitionProperty: reducedMotion ? 'none' : 'transform, opacity, box-shadow'
      }}
    >
      {children}
    </div>
  );
}
