import { useEffect, useRef, useState } from 'react';

export default function FaucetDripReveal() {
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
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative inline-flex items-center justify-center w-8 h-8"
      aria-hidden="true"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isVisible && !reducedMotion ? 'animate-faucet-drip' : ''}
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <path
          d="M12 2C12 2 9 6 9 10C9 11.66 10.34 13 12 13C13.66 13 15 11.66 15 10C15 6 12 2 12 2Z"
          fill="var(--color-accent)"
          fillOpacity="0.8"
        />
        <path
          d="M12 13V22"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
