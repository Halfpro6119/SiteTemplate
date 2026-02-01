import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface PremiumAccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  variant?: 'light' | 'dark';
  onToggle?: (isOpen: boolean) => void;
}

export default function PremiumAccordion({
  title,
  children,
  defaultOpen = false,
  variant = 'dark',
  onToggle
}: PremiumAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  const isDark = variant === 'dark';

  return (
    <div
      className="backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300"
      style={{
        background: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
        border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
        boxShadow: isDark
          ? '0 4px 16px -8px rgba(0, 0, 0, 0.3)'
          : '0 4px 16px -8px rgba(0, 0, 0, 0.1)'
      }}
    >
      <button
        onClick={handleToggle}
        className="w-full flex items-center justify-between px-5 py-4 transition-all duration-300 hover:bg-white/5"
        aria-expanded={isOpen}
        aria-label={`Toggle ${title} section`}
      >
        <h3
          className="font-semibold text-left"
          style={{
            color: isDark ? 'white' : 'var(--color-text-primary)',
            fontSize: '0.9375rem'
          }}
        >
          {title}
        </h3>
        <ChevronDown
          className="w-5 h-5 transition-transform duration-500 flex-shrink-0"
          style={{
            color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'var(--color-text-tertiary)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
        />
      </button>

      <div
        className="transition-all"
        style={{
          height: isOpen ? `${contentHeight}px` : '0px',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          transitionDuration: '500ms',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          transitionProperty: 'height, opacity'
        }}
      >
        <div
          ref={contentRef}
          className="px-5 pb-4"
        >
          <div
            className="h-px w-full mb-4"
            style={{
              background: `linear-gradient(90deg, transparent, ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}, transparent)`
            }}
          />
          {children}
        </div>
      </div>
    </div>
  );
}
