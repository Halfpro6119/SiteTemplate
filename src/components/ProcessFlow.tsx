import { Phone, ClipboardList, Wrench } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

interface Step {
  icon: typeof Phone;
  title: string;
  description: string;
}

const defaultSteps: Step[] = [
  { icon: Phone, title: 'You Call Us', description: 'Speak to our friendly team about your problem' },
  { icon: ClipboardList, title: 'We Give Price/ETA', description: 'Upfront pricing with no hidden costs' },
  { icon: Wrench, title: 'We Fix It', description: 'Professional repair with full guarantee' }
];

interface ProcessFlowProps {
  steps?: Step[];
  className?: string;
}

export default function ProcessFlow({ steps = defaultSteps, className = '' }: ProcessFlowProps) {
  const [visible, setVisible] = useState<number[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setVisible(steps.map((_, i) => i));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          steps.forEach((_, i) => {
            setTimeout(() => setVisible((v) => [...v, i]), i * 150);
          });
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [steps.length]);

  return (
    <div ref={ref} className={className}>
      <h3 className="text-2xl font-bold mb-10 text-center" style={{ color: 'var(--color-text-primary)' }}>
        What Happens Next?
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isVisible = visible.includes(index);

          return (
            <div
              key={index}
              className="relative flex flex-col items-center text-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s cubic-bezier(0.22, 0.61, 0.36, 1) ${index * 0.15}s, transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1) ${index * 0.15}s`
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(6, 182, 212, 0.1) 100%)',
                  border: '1px solid var(--color-border-medium)',
                  boxShadow: '0 0 24px -8px var(--color-accent-glow)'
                }}
              >
                <Icon className="w-8 h-8" style={{ color: 'var(--color-accent)' }} />
              </div>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold mb-3 flex-shrink-0"
                style={{
                  background: 'var(--color-accent)',
                  color: 'var(--color-text-inverse)',
                  fontSize: '1rem'
                }}
              >
                {index + 1}
              </div>
              <h4 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                {step.title}
              </h4>
              <p className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-8 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-0.5"
                  style={{
                    background: 'linear-gradient(90deg, var(--color-accent), transparent)',
                    opacity: 0.5
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
