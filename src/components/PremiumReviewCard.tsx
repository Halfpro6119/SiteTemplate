import { useState, useRef, useEffect } from 'react';
import { Star, ChevronDown, ChevronUp, BadgeCheck, MessageCircle, ShieldCheck, Clock } from 'lucide-react';

interface PremiumReviewCardProps {
  name: string;
  rating: number;
  text: string;
  date: string;
  serviceTags?: string[];
  verified?: boolean;
  ownerReply?: string;
  yearsAsCustomer?: number;
}

const HIGHLIGHT_KEYWORDS = [
  'professional', 'friendly', 'fast', 'reliable', 'great', 'excellent',
  'outstanding', 'exceptional', 'quality', 'recommended', 'trusted',
  'honest', 'knowledgeable', 'courteous', 'efficient', 'transparent',
  'organic', 'safe', 'effective', 'thorough', 'humane', 'solved',
  'permanently', 'expertise', 'family', 'generations'
];

function highlightKeywords(text: string): JSX.Element[] {
  const words = text.split(/(\s+)/);
  const elements: JSX.Element[] = [];
  let highlightCount = 0;
  const maxHighlights = 2;

  words.forEach((word, index) => {
    const cleanWord = word.toLowerCase().replace(/[.,!?;:]/g, '');

    if (
      highlightCount < maxHighlights &&
      HIGHLIGHT_KEYWORDS.includes(cleanWord) &&
      word.trim().length > 0
    ) {
      highlightCount++;
      elements.push(
        <span
          key={index}
          className="inline-block px-1.5 py-0.5 rounded transition-all duration-300"
          style={{
            backgroundColor: 'rgba(34, 197, 94, 0.12)',
            color: 'var(--color-accent)'
          }}
        >
          {word}
        </span>
      );
    } else {
      elements.push(<span key={index}>{word}</span>);
    }
  });

  return elements;
}

export default function PremiumReviewCard({
  name,
  rating,
  text,
  date,
  serviceTags = [],
  verified = false,
  ownerReply,
  yearsAsCustomer
}: PremiumReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showExpandButton, setShowExpandButton] = useState(false);
  const [showOwnerReply, setShowOwnerReply] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const lineHeight = parseInt(window.getComputedStyle(textRef.current).lineHeight);
      const maxHeight = lineHeight * 4;
      setShowExpandButton(textRef.current.scrollHeight > maxHeight);
    }
  }, [text]);

  return (
    <div
      className="group rounded-xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
      style={{
        backgroundColor: 'var(--color-bg-surface)',
        border: '1px solid rgba(34, 197, 94, 0.06)'
      }}
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-1 signature-quote-bar"
        style={{
          background: 'linear-gradient(180deg, var(--color-accent) 0%, transparent 100%)'
        }}
      />

      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(34, 197, 94, 0.06), transparent 40%)'
        }}
      />

      <div className="relative z-10 p-6 pl-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <h3 className="font-bold text-lg" style={{ color: 'var(--color-text-primary)' }}>
                {name}
              </h3>
              {verified && (
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', color: 'var(--color-accent)' }}>
                  <BadgeCheck className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              )}
              {yearsAsCustomer && yearsAsCustomer >= 5 && (
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium" style={{ backgroundColor: 'rgba(251, 191, 36, 0.15)', color: '#f59e0b' }}>
                  <Clock className="w-3 h-3" />
                  <span>{yearsAsCustomer}+ year customer</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'fill-gray-300 text-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mb-4 relative">
          <p
            ref={textRef}
            className={`leading-relaxed transition-all duration-500 ${
              !isExpanded && showExpandButton ? 'line-clamp-4' : ''
            }`}
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {highlightKeywords(text)}
          </p>

          {!isExpanded && showExpandButton && (
            <div
              className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
              style={{
                background: 'linear-gradient(to bottom, transparent 0%, var(--color-bg-surface) 100%)'
              }}
            />
          )}

          {showExpandButton && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1 mt-2 text-sm font-semibold transition-colors duration-300 hover:underline relative z-10"
              style={{ color: 'var(--color-accent)' }}
            >
              {isExpanded ? (
                <>
                  <span>Show less</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>Read more</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>

        {ownerReply && (
          <div className="mb-4">
            <button
              onClick={() => setShowOwnerReply(!showOwnerReply)}
              className="flex items-center gap-2 text-sm font-semibold transition-colors duration-300 hover:underline"
              style={{ color: 'var(--color-accent)' }}
            >
              <MessageCircle className="w-4 h-4" />
              <span>View owner response</span>
              {showOwnerReply ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>

            <div
              className={`grid transition-all duration-500 ${
                showOwnerReply ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div
                  className="p-4 rounded-lg border relative"
                  style={{
                    backgroundColor: 'rgba(34, 197, 94, 0.04)',
                    borderColor: 'rgba(34, 197, 94, 0.2)',
                    borderLeftWidth: '3px'
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
                    <span
                      className="text-xs font-bold uppercase tracking-wide"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      Owner Response
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {ownerReply}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex flex-wrap gap-2">
            {serviceTags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'var(--color-bg-base)',
                  color: 'var(--color-text-secondary)',
                  border: '1px solid rgba(34, 197, 94, 0.12)'
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <span className="text-sm whitespace-nowrap" style={{ color: 'var(--color-text-tertiary)' }}>
            {date}
          </span>
        </div>
      </div>
    </div>
  );
}
