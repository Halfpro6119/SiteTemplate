import { ReactNode } from 'react';

interface ImageShineProps {
  children: ReactNode;
  className?: string;
}

export default function ImageShine({ children, className = '' }: ImageShineProps) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      {children}
      <div
        className="absolute inset-0 pointer-events-none image-shine-overlay"
        style={{
          background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.08) 55%, transparent 65%)',
          backgroundSize: '200% 100%',
          backgroundPosition: '-100% 0',
          opacity: 0,
          transition: 'opacity 0.5s ease'
        }}
      />
    </div>
  );
}
