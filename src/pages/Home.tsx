import { Link } from 'react-router-dom';
import { Star, MapPin, Clock, Award, Image as ImageIcon, Leaf, Users } from 'lucide-react';
import { businessConfig } from '../config';
import SignatureServiceCard from '../components/SignatureServiceCard';
import ReviewSnapshotPanel from '../components/ReviewSnapshotPanel';
import PremiumReviewCard from '../components/PremiumReviewCard';
import TrustFooterStrip from '../components/TrustFooterStrip';
import GlassBadge from '../components/GlassBadge';
import ImpactBlock from '../components/ImpactBlock';
import ServiceAreaChip from '../components/ServiceAreaChip';
import LuxuryDivider from '../components/LuxuryDivider';
import HeroCTA from '../components/HeroCTA';
import DecisionPointCTA from '../components/DecisionPointCTA';
import CinematicCTA from '../components/CinematicCTA';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useHeroReveal } from '../hooks/useHeroReveal';

export default function Home() {
  const { shouldAnimate, isRevealed } = useHeroReveal();
  const servicesRef = useScrollReveal();
  const impactRef = useScrollReveal();
  const galleryRef = useScrollReveal();
  const testimonialsRef = useScrollReveal();
  const serviceAreasRef = useScrollReveal();

  return (
    <div className="min-h-screen">
      <section
        className={`relative overflow-hidden cinematic-hero ${shouldAnimate && !isRevealed ? 'hero-bg-animate' : ''}`}
        style={{
          paddingTop: '12rem',
          paddingBottom: '8rem'
        }}
      >
        <div className="spotlight-glow" />

        <div className="absolute top-20 right-10 float-badge-1 hidden lg:block">
          <GlassBadge
            icon={Award}
            title="Board Certified"
            subtitle="Consulting Arborist"
          />
        </div>
        <div className="absolute top-32 left-10 float-badge-2 hidden lg:block">
          <GlassBadge
            icon={Leaf}
            title="Organic Options"
            subtitle="Eco-Friendly"
          />
        </div>
        <div className="absolute bottom-32 right-20 float-badge-3 hidden lg:block">
          <GlassBadge
            icon={Users}
            title={`Est. ${businessConfig.foundingYear}`}
            subtitle="5th Generation"
          />
        </div>

        <div className="content-width relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="relative inline-block">
              <h1 className={`editorial-heading text-balance mb-8 ${shouldAnimate && !isRevealed ? 'hero-headline-animate' : ''} ${isRevealed ? 'hero-revealed' : ''}`}>
                {businessConfig.heroHeadline}
              </h1>
              <div className={`accent-line-reveal ${isRevealed ? 'hero-revealed' : ''}`} />
            </div>
            <p className={`editorial-subheading text-balance mb-14 ${shouldAnimate && !isRevealed ? 'hero-subheadline-animate' : ''} ${isRevealed ? 'hero-revealed' : ''}`}>
              {businessConfig.heroSubheading}
            </p>
            <div className={`mb-20 ${shouldAnimate && !isRevealed ? 'hero-cta-animate' : ''} ${isRevealed ? 'hero-revealed' : ''}`}>
              <HeroCTA
                primaryText={businessConfig.ctaTemplates.hero.primaryText}
                primaryHref={businessConfig.ctaTemplates.hero.primaryHref}
                secondaryText={businessConfig.ctaTemplates.hero.secondaryText}
                secondaryHref={businessConfig.ctaTemplates.hero.secondaryHref}
                trustChips={businessConfig.ctaTemplates.hero.trustChips}
                variant="light"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10" style={{ backgroundColor: 'var(--color-bg-surface)', borderTop: '1px solid var(--color-border-subtle)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="content-width">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            <div className="flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(businessConfig.rating)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'opacity-20'
                    }`}
                  />
                ))}
              </div>
              <div>
                <span className="font-bold text-lg" style={{ color: 'var(--color-text-primary)' }}>{businessConfig.rating}</span>
                <span className="text-sm ml-2" style={{ color: 'var(--color-text-tertiary)' }}>({businessConfig.reviewCount}+ reviews)</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6" style={{ color: 'var(--color-accent)' }} />
              <span className="font-semibold" style={{ color: 'var(--color-text-secondary)' }}>Board Certified Arborist</span>
            </div>
            <div className="flex items-center gap-3">
              <Leaf className="w-6 h-6" style={{ color: 'var(--color-accent)' }} />
              <span className="font-semibold" style={{ color: 'var(--color-text-secondary)' }}>Organic & IPM Methods</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6" style={{ color: 'var(--color-accent)' }} />
              <span className="font-semibold" style={{ color: 'var(--color-text-secondary)' }}>Same-Day Service Available</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }} ref={servicesRef}>
        <div className="content-width">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="section-title text-balance chapter-heading">
              Our Services
            </h2>
            <LuxuryDivider />
            <p className="section-subtitle">
              Professional {businessConfig.businessType.toLowerCase()} services tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {businessConfig.services.slice(0, 6).map((service, index) => (
              <div key={service.id} className="scroll-reveal" style={{ transitionDelay: `${index * 80}ms` }}>
                <SignatureServiceCard
                  number={String(index + 1).padStart(2, '0')}
                  icon={service.icon}
                  title={service.name}
                  description={service.shortDescription}
                  benefits={service.benefits}
                />
              </div>
            ))}
          </div>
          <div className="text-center scroll-reveal">
            <Link
              to="/services"
              className="btn-primary btn-shine"
            >
              <span>View All Services</span>
              <span>→</span>
            </Link>
          </div>

          <div className="mt-24 scroll-reveal">
            <DecisionPointCTA
              label={businessConfig.ctaTemplates.decisionPoint.fastResponse.label}
              title={businessConfig.ctaTemplates.decisionPoint.fastResponse.title}
              subtitle={businessConfig.ctaTemplates.decisionPoint.fastResponse.subtitle}
              primaryText={businessConfig.ctaTemplates.decisionPoint.fastResponse.primaryText}
              primaryHref="/contact"
              secondaryText={businessConfig.ctaTemplates.decisionPoint.fastResponse.secondaryText}
              secondaryHref={`tel:${businessConfig.phone.replace(/[^0-9]/g, '')}`}
              tertiaryText="View Our Reviews"
              tertiaryHref="/reviews"
            />
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-surface)' }} ref={impactRef}>
        <div className="content-width">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="section-title text-balance chapter-heading">
              Why Choose American Pest Control
            </h2>
            <LuxuryDivider />
            <p className="section-subtitle">
              125+ years of expertise, organic solutions, and customers who stay for decades
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="scroll-reveal" style={{ transitionDelay: '0ms' }}>
              <ImpactBlock
                icon={Award}
                title="Board Certified Expertise"
                description="Led by Board Certified Consulting Arborist Doc Pickhardt with decades of experience. Our team includes entomologists and certified pest managers."
                index={0}
              />
            </div>
            <div className="scroll-reveal" style={{ transitionDelay: '100ms' }}>
              <ImpactBlock
                icon={Leaf}
                title="Organic & IPM Solutions"
                description="We use botanical products and Integrated Pest Management—targeting pests where they live, not wasteful scheduled spraying. Safe for families and pets."
                index={1}
              />
            </div>
            <div className="scroll-reveal" style={{ transitionDelay: '200ms' }}>
              <ImpactBlock
                icon={Users}
                title="5th Generation Family Trust"
                description="Established in 1900, customers have trusted us for over 125 years. Some families have been with us since 1977—that's the loyalty we earn."
                index={2}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }} ref={galleryRef}>
        <div className="content-width">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="section-title text-balance chapter-heading">
              Protecting Michigan Homes & Landscapes
            </h2>
            <LuxuryDivider />
            <p className="section-subtitle">
              From pest control to tree care, see the organic solutions we provide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {businessConfig.galleryImages.slice(0, 6).map((image, index) => (
              <div
                key={image.id}
                className="scroll-reveal group relative overflow-hidden rounded-2xl"
                style={{
                  transitionDelay: `${index * 80}ms`,
                  aspectRatio: '4/3'
                }}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="font-semibold">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center scroll-reveal">
            <Link
              to="/gallery"
              className="btn-primary btn-shine"
            >
              <ImageIcon className="w-5 h-5" />
              <span>View Full Gallery</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-surface)' }} ref={testimonialsRef}>
        <div className="content-width">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="section-title text-balance chapter-heading">
              Trusted by Local Customers
            </h2>
            <LuxuryDivider />
            <p className="section-subtitle">
              Real feedback from real customers in {businessConfig.city}
            </p>
          </div>

          <div className="mb-16 scroll-reveal">
            <ReviewSnapshotPanel />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {businessConfig.testimonials.slice(0, 6).map((testimonial, index) => (
              <div key={testimonial.id} className="scroll-reveal" style={{ transitionDelay: `${index * 80}ms` }}>
                <PremiumReviewCard
                  name={testimonial.name}
                  rating={testimonial.rating}
                  text={testimonial.text}
                  date={testimonial.date}
                  serviceTags={testimonial.serviceTags}
                  verified={testimonial.verified}
                  ownerReply={testimonial.ownerReply}
                />
              </div>
            ))}
          </div>

          <div className="mb-16 scroll-reveal">
            <TrustFooterStrip />
          </div>

          <div className="text-center scroll-reveal">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/reviews"
                className="btn-primary btn-shine"
              >
                <span>Read All Reviews</span>
                <span>→</span>
              </Link>
              <Link
                to="/contact"
                className="btn-secondary"
              >
                <span>Get a Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }} ref={serviceAreasRef}>
        <div className="content-width">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="section-title text-balance chapter-heading">
              Areas We Serve
            </h2>
            <LuxuryDivider />
            <p className="section-subtitle">
              Providing expert {businessConfig.businessType.toLowerCase()} services throughout the region
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-16 scroll-reveal">
            {businessConfig.serviceAreas.slice(0, 10).map((area, index) => (
              <div key={index} style={{ animationDelay: `${index * 50}ms` }}>
                <ServiceAreaChip
                  area={area}
                  isPrimary={index === 0}
                />
              </div>
            ))}
          </div>
          <div className="text-center scroll-reveal">
            <Link
              to="/locations"
              className="btn-secondary"
            >
              <MapPin className="w-5 h-5" />
              <span>View All Service Areas</span>
            </Link>
          </div>
        </div>
      </section>

      <CinematicCTA
        label={businessConfig.ctaTemplates.cinematic.localTrust.label}
        headline={businessConfig.ctaTemplates.cinematic.localTrust.headline}
        subtitle={businessConfig.ctaTemplates.cinematic.localTrust.subtitle}
        primaryText={businessConfig.ctaTemplates.cinematic.localTrust.primaryText}
        primaryHref="/contact"
        secondaryText={businessConfig.ctaTemplates.cinematic.localTrust.secondaryText}
        secondaryHref={`tel:${businessConfig.phone.replace(/[^0-9]/g, '')}`}
        trustChips={businessConfig.ctaTemplates.contact.trustChips}
      />
    </div>
  );
}
