import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="floating-card-3d overflow-hidden"
      style={{ transition: 'all 0.3s var(--ease-elegant)' }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex items-center justify-between text-left"
        style={{ transition: 'all 0.2s ease' }}
      >
        <span
          className="font-bold text-lg pr-4"
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            color: 'var(--color-neutral-950)'
          }}
        >
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          style={{ color: 'var(--color-accent)' }}
        />
      </button>
      <div
        style={{
          maxHeight: isOpen ? '500px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s var(--ease-elegant)'
        }}
      >
        <div
          className="px-8 pb-6 leading-relaxed"
          style={{
            color: 'var(--color-neutral-600)',
            fontSize: '0.9375rem',
            lineHeight: '1.7'
          }}
        >
          {answer}
        </div>
      </div>
    </div>
  );
}
