import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface StatItemProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  delay?: number;
}

function StatItem({ value, suffix = '+', prefix = '', label, delay = 0 }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const start = Date.now();
          const animate = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          setTimeout(() => requestAnimationFrame(animate), delay);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, delay]);

  return (
    <div ref={ref} className="text-center scroll-reveal">
      <div
        className="text-4xl md:text-5xl font-bold mb-2"
        style={{
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          color: 'var(--color-text-primary)',
          letterSpacing: '-0.02em'
        }}
      >
        {prefix}{count}{suffix}
      </div>
      <div className="text-sm font-medium" style={{ color: 'var(--color-text-tertiary)' }}>
        {label}
      </div>
    </div>
  );
}

interface StatItemConfig {
  value?: number;
  text?: string;
  suffix?: string;
  label: string;
}

interface StatsCounterProps {
  stats: Array<StatItemConfig>;
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  const containerRef = useScrollReveal();

  return (
    <section
      className="py-16"
      style={{ backgroundColor: 'var(--color-bg-surface)', borderTop: '1px solid var(--color-border-subtle)' }}
      ref={containerRef}
    >
      <div className="content-width">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) =>
            stat.text !== undefined ? (
              <div key={index} className="text-center scroll-reveal">
                <div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  style={{
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    color: 'var(--color-text-primary)',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {stat.text}
                </div>
                <div className="text-sm font-medium" style={{ color: 'var(--color-text-tertiary)' }}>
                  {stat.label}
                </div>
              </div>
            ) : (
              <StatItem
                key={index}
                value={stat.value ?? 0}
                suffix={stat.suffix}
                label={stat.label}
                delay={index * 150}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
