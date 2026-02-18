import { businessConfig } from '../config';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import PremiumReviewCard from '../components/PremiumReviewCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Reviews() {
  const headerRef = useScrollReveal();
  const reviewsRef = useScrollReveal();
  const testimonials = businessConfig.testimonials || [];
  const hasReviews = testimonials.length > 0;

  return (
    <div className="min-h-screen">
      <PageHero
        title="Reviews"
        subtitle={hasReviews ? `What our customers say about us—Norfolk & Suffolk.` : `We're proud of our reputation. Add your reviews to this page when ready.`}
      />

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }} ref={headerRef}>
        <div className="content-width">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Reviews' }]} />
          <div className="max-w-4xl mx-auto scroll-reveal">
            <div
              className="rounded-2xl p-8 lg:p-10 text-center"
              style={{
                background: 'var(--color-bg-surface)',
                border: '1px solid var(--color-border-subtle)'
              }}
            >
              <div className="inline-flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold" style={{ color: 'var(--color-accent)' }}>
                  {businessConfig.rating}
                </span>
                <span className="text-2xl" style={{ color: 'var(--color-text-tertiary)' }}>/5</span>
              </div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 flex-shrink-0"
                    style={{
                      color: i < Math.floor(businessConfig.rating) ? 'var(--color-accent)' : 'var(--color-text-tertiary)',
                      fill: i < Math.floor(businessConfig.rating) ? 'var(--color-accent)' : 'currentColor'
                    }}
                  />
                ))}
              </div>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                {hasReviews ? `${businessConfig.reviewCount} verified reviews` : 'Trusted across Norfolk & Suffolk'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-surface)' }} ref={reviewsRef}>
        <div className="content-width">
          {hasReviews ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((t, index) => (
                <div key={t.id} className="scroll-reveal" style={{ transitionDelay: `${index * 60}ms` }}>
                  <PremiumReviewCard
                    name={t.name}
                    rating={t.rating}
                    text={t.text}
                    date={t.date}
                    serviceTags={t.serviceTags}
                    verified={t.verified}
                    ownerReply={t.ownerReply}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-xl mx-auto text-center scroll-reveal">
              <p className="text-lg mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                We're proud of our reputation for quality and respect. If you've worked with us, we'd love to hear from you—get in touch or ask us about leaving a review.
              </p>
              <Link to="/contact" className="btn-primary">
                Get in touch
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
