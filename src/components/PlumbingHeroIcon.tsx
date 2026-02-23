interface PlumbingHeroIconProps {
  className?: string;
  size?: number;
}

export default function PlumbingHeroIcon({ className = '', size = 120 }: PlumbingHeroIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="pipeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--color-accent-dark)" stopOpacity="1" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Wrench */}
      <g filter="url(#glow)" style={{ stroke: 'url(#pipeGradient)' }}>
        <path
          d="M35 55 L45 45 L55 55 L45 65 Z"
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M55 55 L75 35 L85 45 L65 65 Z"
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M85 45 L95 55 L90 60 L80 50 Z"
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      {/* Drip animation */}
      <g>
        <circle cx="95" cy="70" r="4" fill="var(--color-accent)">
          <animate
            attributeName="cy"
            values="70;85;70"
            dur="2s"
            repeatCount="indefinite"
            begin="0s"
          />
          <animate
            attributeName="opacity"
            values="0.8;0.3;0.8"
            dur="2s"
            repeatCount="indefinite"
            begin="0s"
          />
        </circle>
      </g>
    </svg>
  );
}
