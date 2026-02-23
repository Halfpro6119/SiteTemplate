import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { businessConfig } from '../config';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
  serviceTags: string[];
  location?: string;
  verified?: boolean;
}

interface PremiumTestimonialCarouselProps {
  testimonials?: Testimonial[];
  maxVisible?: number;
  autoPlay?: boolean;
  className?: string;
}

export default function PremiumTestimonialCarousel({
  testimonials = businessConfig.testimonials,
  maxVisible = 3,
  autoPlay = true,
  className = ''
}: PremiumTestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const maxIndex = Math.max(0, testimonials.length - maxVisible);

  useEffect(() => {
    setCanScrollLeft(activeIndex > 0);
    setCanScrollRight(activeIndex < maxIndex);
  }, [activeIndex, maxIndex]);

  useEffect(() => {
    if (!autoPlay || maxIndex <= 0) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const interval = setInterval(() => {
      setActiveIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, maxIndex]);

  const goLeft = () => setActiveIndex((i) => Math.max(0, i - 1));
  const goRight = () => setActiveIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <div className={`relative ${className}`}>
      <div
        className="overflow-hidden"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div
          className="flex gap-6 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${activeIndex * (100 / testimonials.length)}%)`,
            width: `${testimonials.length * (100 / maxVisible)}%`
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex-shrink-0 p-6 rounded-2xl transition-all duration-500"
              style={{
                width: `${100 / testimonials.length}%`,
                background: 'linear-gradient(135deg, var(--color-bg-surface) 0%, var(--color-bg-elevated) 100%)',
                border: '1px solid var(--color-border-subtle)',
                boxShadow: 'var(--shadow-luxury-md)',
                backdropFilter: 'blur(12px)'
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
                    }`}
                  />
                ))}
                {t.verified && (
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded"
                    style={{
                      background: 'rgba(6, 182, 212, 0.2)',
                      color: 'var(--color-accent)'
                    }}
                  >
                    Verified
                  </span>
                )}
              </div>
              <p className="text-base mb-4 line-clamp-4" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                "{t.text}"
              </p>
              <div>
                <div className="font-bold" style={{ color: 'var(--color-text-primary)' }}>
                  {t.name}
                </div>
                <div className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
                  {t.location || t.serviceTags.join(', ')} • {t.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {maxIndex > 0 && (
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={goLeft}
            disabled={!canScrollLeft}
            className="p-2 rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--color-border-subtle)',
              color: 'var(--color-text-primary)'
            }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {[...Array(maxIndex + 1)].map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="w-2 h-2 rounded-full transition-all"
                style={{
                  background: i === activeIndex ? 'var(--color-accent)' : 'var(--color-border-medium)',
                  transform: i === activeIndex ? 'scale(1.2)' : 'scale(1)'
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={goRight}
            disabled={!canScrollRight}
            className="p-2 rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--color-border-subtle)',
              color: 'var(--color-text-primary)'
            }}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
