import { Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

interface StickyEmergencyBarProps {
  phone: string;
  phoneDisplay?: string;
}

export default function StickyEmergencyBar({ phone, phoneDisplay }: StickyEmergencyBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isMobile || !isVisible) return null;

  return (
    <a
      href={`tel:${phone}`}
      className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center gap-2 py-4 px-6 font-bold text-lg shadow-[0_-4px_24px_rgba(0,0,0,0.4)] transition-all duration-300 active:scale-[0.98]"
      style={{
        background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%)',
        color: 'var(--color-text-inverse)',
        boxShadow: '0 -4px 24px -8px var(--color-accent-glow)'
      }}
      aria-label="Call for 24/7 emergency plumbing"
    >
      <Phone className="w-5 h-5" />
      <span>24/7 Emergency? Call {phoneDisplay || phone}</span>
    </a>
  );
}
