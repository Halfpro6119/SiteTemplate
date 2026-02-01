import { useEffect, useRef, useState } from 'react';

const ENABLE_CURSOR_GLOW = true;

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const [intensity, setIntensity] = useState(1);
  const positionRef = useRef({ x: 0, y: 0 });
  const targetPositionRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>();

  useEffect(() => {
    if (!ENABLE_CURSOR_GLOW) return;

    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || isTouchDevice || prefersReducedMotion) {
      setIsEnabled(false);
      return;
    }

    setIsEnabled(true);

    const handleMouseMove = (e: MouseEvent) => {
      targetPositionRef.current = {
        x: e.clientX,
        y: e.clientY
      };

      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, [role="button"], .group');

      if (isInteractive) {
        setIntensity(1.5);
      } else {
        setIntensity(1);
      }
    };

    const updateGlowPosition = () => {
      const current = positionRef.current;
      const target = targetPositionRef.current;

      const dx = target.x - current.x;
      const dy = target.y - current.y;

      current.x += dx * 0.15;
      current.y += dy * 0.15;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(calc(${current.x}px - 50%), calc(${current.y}px - 50%))`;
      }

      rafRef.current = requestAnimationFrame(updateGlowPosition);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(updateGlowPosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <div
      ref={glowRef}
      className="cursor-glow"
      style={{
        opacity: intensity === 1.5 ? 'var(--glow-opacity-hover)' : 'var(--glow-opacity)',
        transition: 'opacity 300ms ease-out'
      }}
      aria-hidden="true"
    >
      <div className="cursor-glow-accent" />
      <div className="cursor-glow-light" />
    </div>
  );
}
