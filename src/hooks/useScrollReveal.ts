import { useEffect, useRef } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {}
) {
  const { threshold = 0.1, rootMargin = '50px 0px -10% 0px', triggerOnce = true } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const scrollRevealElements = element.querySelectorAll('.scroll-reveal');

    const checkIfVisible = (el: Element) => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      return rect.top <= windowHeight && rect.bottom >= 0;
    };

    scrollRevealElements.forEach((el) => {
      if (checkIfVisible(el)) {
        el.classList.add('revealed');
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            entry.target.classList.remove('revealed');
          }
        });
      },
      { threshold, rootMargin }
    );

    scrollRevealElements.forEach((el) => {
      if (!el.classList.contains('revealed')) {
        observer.observe(el);
      }
    });

    return () => {
      scrollRevealElements.forEach((el) => observer.unobserve(el));
    };
  }, [threshold, rootMargin, triggerOnce]);

  return ref;
}
