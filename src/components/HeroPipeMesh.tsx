import { useEffect, useState } from 'react';

export default function HeroPipeMesh() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.12]"
      aria-hidden="true"
    >
      <svg
        className={`absolute inset-0 w-full h-full ${reducedMotion ? '' : 'animate-pipe-mesh-slow'}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="pipeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--color-accent-dark)" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="pipeGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent-light)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 0 200 Q 200 150 400 200 T 800 200 T 1200 200"
          fill="none"
          stroke="url(#pipeGradient1)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 0 400 Q 300 350 600 400 T 1200 400"
          fill="none"
          stroke="url(#pipeGradient1)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M 0 600 Q 250 550 500 600 T 1000 600 T 1200 600"
          fill="none"
          stroke="url(#pipeGradient2)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 200 0 Q 200 150 200 300 T 200 800"
          fill="none"
          stroke="url(#pipeGradient2)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M 600 0 Q 600 200 600 400 T 600 800"
          fill="none"
          stroke="url(#pipeGradient1)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M 1000 0 Q 1000 250 1000 500 T 1000 800"
          fill="none"
          stroke="url(#pipeGradient2)"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
