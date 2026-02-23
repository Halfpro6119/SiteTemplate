import { useEffect, useRef, useState } from 'react';

const nodes = [
  { id: 'pipe', label: 'Sewer Line', x: 100, y: 60 },
  { id: 'hydrojet', label: 'Hydrojetting', x: 100, y: 30 },
  { id: 'scope', label: 'Video Scoping', x: 50, y: 60 },
  { id: 'decalc', label: 'Decalcifying', x: 150, y: 60 }
];

export default function DrainFlowDiagram() {
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

  return (
    <div
      ref={ref}
      className="w-full max-w-md mx-auto"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 120"
        className="w-full h-auto"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.8s var(--ease-elegant)'
        }}
      >
        <defs>
          <linearGradient id="drainFlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent-light)" />
            <stop offset="100%" stopColor="var(--color-accent-dark)" />
          </linearGradient>
        </defs>
        <rect
          x="40"
          y="55"
          width="120"
          height="10"
          rx="5"
          fill="none"
          stroke="url(#drainFlowGrad)"
          strokeWidth="3"
          strokeDasharray={isVisible && !reducedMotion ? 'none' : '8 4'}
          style={{
            transition: reducedMotion ? 'none' : 'stroke-dashoffset 1.2s var(--ease-elegant)'
          }}
        />
        <line
          x1="100"
          y1="60"
          x2="100"
          y2="35"
          stroke="url(#drainFlowGrad)"
          strokeWidth="2"
          opacity="0.7"
        />
        <line
          x1="60"
          y1="60"
          x2="35"
          y2="60"
          stroke="url(#drainFlowGrad)"
          strokeWidth="2"
          opacity="0.7"
        />
        <line
          x1="140"
          y1="60"
          x2="165"
          y2="60"
          stroke="url(#drainFlowGrad)"
          strokeWidth="2"
          opacity="0.7"
        />
        {nodes.map((node, i) => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r="10"
              fill="var(--color-bg-surface)"
              stroke="var(--color-accent)"
              strokeWidth="2"
              style={{
                opacity: isVisible ? 1 : 0,
                animation: isVisible && !reducedMotion ? `drain-node-in 0.5s var(--ease-elegant) ${i * 0.1}s both` : 'none'
              }}
            />
            <text
              x={node.x}
              y={node.y > 55 ? node.y + 22 : node.y - 14}
              textAnchor="middle"
              fontSize="7"
              fill="var(--color-text-tertiary)"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
