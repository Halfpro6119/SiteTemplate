import { useEffect, useState } from 'react';

const SESSION_KEY = 'hero-revealed';

function getInitialState() {
  if (typeof window === 'undefined') {
    return { shouldAnimate: false, isRevealed: true };
  }

  const hasRevealed = sessionStorage.getItem(SESSION_KEY) === 'true';
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (hasRevealed || prefersReducedMotion) {
    return { shouldAnimate: false, isRevealed: true };
  }

  return { shouldAnimate: true, isRevealed: false };
}

export function useHeroReveal() {
  const initialState = getInitialState();
  const [shouldAnimate] = useState(initialState.shouldAnimate);
  const [isRevealed, setIsRevealed] = useState(initialState.isRevealed);

  useEffect(() => {
    if (!shouldAnimate || isRevealed) {
      return;
    }

    const revealTimer = setTimeout(() => {
      setIsRevealed(true);
      sessionStorage.setItem(SESSION_KEY, 'true');
    }, 3000);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        clearTimeout(revealTimer);
        setIsRevealed(true);
        sessionStorage.setItem(SESSION_KEY, 'true');
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(revealTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [shouldAnimate, isRevealed]);

  return {
    shouldAnimate,
    isRevealed
  };
}
