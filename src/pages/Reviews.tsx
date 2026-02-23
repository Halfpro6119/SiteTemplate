import { useState, useMemo } from 'react';
import { businessConfig } from '../config';
import ReviewSnapshotPanel from '../components/ReviewSnapshotPanel';
import PremiumReviewCard from '../components/PremiumReviewCard';
import ReviewFilters from '../components/ReviewFilters';
import CTASection from '../components/CTASection';
import TrustFooterStrip from '../components/TrustFooterStrip';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Reviews() {
  const [selectedSort, setSelectedSort] = useState('recent');

  const headerRef = useScrollReveal();
  const reviewsRef = useScrollReveal();
  const statsRef = useScrollReveal();

  const sortedReviews = useMemo(() => {
    const sorted = [...businessConfig.testimonials];

    switch (selectedSort) {
      case 'highest':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'longest':
        sorted.sort((a, b) => b.text.length - a.text.length);
        break;
      case 'recent':
      default:
        break;
    }

    return sorted;
  }, [selectedSort]);

  return (
    <div className="min-h-screen">
      <section
        className="pt-32 pb-16"
        style={{
          background: 'linear-gradient(135deg, var(--color-bg-surface) 0%, var(--color-bg-base) 100%)'
        }}
        ref={headerRef}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 scroll-reveal">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Customer Reviews
              </h1>
              <p className="text-xl leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                See what our customers say about Plumbers Glasgow Ltd
              </p>
            </div>

            <div className="scroll-reveal">
              <ReviewSnapshotPanel size="large" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: 'var(--color-bg-base)' }} ref={reviewsRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 scroll-reveal">
              <ReviewFilters
                selectedSort={selectedSort}
                onSortChange={setSelectedSort}
              />
            </div>

            <div className="mb-8 scroll-reveal">
              <p className="text-sm font-semibold" style={{ color: 'var(--color-text-secondary)' }}>
                Showing {sortedReviews.length} {sortedReviews.length === 1 ? 'review' : 'reviews'}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 auto-rows-auto">
              {sortedReviews.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="h-fit scroll-reveal"
                  style={{ transitionDelay: `${(index % 6) * 80}ms` }}
                >
                  <PremiumReviewCard
                    name={testimonial.name}
                    rating={testimonial.rating}
                    text={testimonial.text}
                    date={testimonial.date}
                    serviceTags={testimonial.serviceTags}
                    location={(testimonial as { location?: string }).location}
                    verified={testimonial.verified}
                    ownerReply={testimonial.ownerReply}
                  />
                </div>
              ))}
            </div>

            <div className="mt-16 scroll-reveal">
              <TrustFooterStrip />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: 'var(--color-bg-surface)' }} ref={statsRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto scroll-reveal">
            <div
              className="rounded-2xl p-8 lg:p-12 shadow-lg text-center"
              style={{
                backgroundColor: 'var(--color-bg-base)',
                border: '1px solid rgba(6, 182, 212, 0.1)'
              }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
                Why Customers Trust Us
              </h2>
              <p className="text-lg mb-10 leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
                Our commitment to quality, reliability, and customer satisfaction has earned
                us a reputation as one of the most trusted {businessConfig.businessType.toLowerCase()} providers
                in {businessConfig.city}. Every review represents a real customer who trusted
                us with their needs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div
                    className="text-5xl font-bold mb-3"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {businessConfig.rating}/5
                  </div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--color-text-secondary)' }}>Average Rating</p>
                </div>
                <div className="text-center">
                  <div
                    className="text-5xl font-bold mb-3"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {businessConfig.reviewCount}+
                  </div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--color-text-secondary)' }}>Verified Reviews</p>
                </div>
                <div className="text-center">
                  <div
                    className="text-5xl font-bold mb-3"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {businessConfig.yearsExperience}+
                  </div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--color-text-secondary)' }}>Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Join Our Happy Customers"
        subtitle="Experience the quality service that has earned us consistent 5-star reviews"
      />
    </div>
  );
}
