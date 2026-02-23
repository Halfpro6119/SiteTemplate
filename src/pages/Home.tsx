import { Link } from 'react-router-dom';
import { Star, MapPin, Shield, Clock, Zap, Award, Image as ImageIcon, Phone, FileText, Percent, Gift } from 'lucide-react';
import * as Icons from 'lucide-react';
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
import HeroPipeMesh from '../components/HeroPipeMesh';
import TrustPulseBar from '../components/TrustPulseBar';
import FaucetDripReveal from '../components/FaucetDripReveal';
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
        <HeroPipeMesh />

        <div className="absolute top-20 right-10 float-badge-1 hidden lg:block">
          <GlassBadge
            icon={Phone}
            title="Free Estimates"
            subtitle="Over the Phone"
          />
        </div>
        <div className="absolute top-32 left-10 float-badge-2 hidden lg:block">
          <GlassBadge
            icon={FileText}
            title="Job-Based"
            subtitle="No Hourly Rates"
          />
        </div>
        <div className="absolute bottom-32 right-20 float-badge-3 hidden lg:block">
          <GlassBadge
            icon={Award}
            title={`${businessConfig.yearsExperience}+ Years`}
            subtitle="Phoenix Trusted"
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

      <TrustPulseBar />

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }} ref={servicesRef}>
        <div className="content-width">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="section-title text-balance chapter-heading">
              What We Do
            </h2>
            <LuxuryDivider />
            <p className="section-subtitle">
              Residential plumbing, light commercial, and service & repair—from drain cleaning to water heaters
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

          <div
            className="mt-20 scroll-reveal rounded-2xl p-8 lg:p-12"
            style={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0.03) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.2)'
            }}
          >
            <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: 'var(--color-text-primary)' }}>
              We Are Drain Cleaning Experts
            </h3>
            <p className="text-lg text-center max-w-3xl mx-auto mb-6" style={{ color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
              We service all plumbing problems—especially ones that make your space unusable. Drain cleaning, sewer hydrojetting, video scoping, and decalcifying of cast iron sewer lines. If your drain needs cleaning or replacing, contact us. We guarantee our work.
            </p>
            <div className="flex justify-center gap-4">
              <a href={businessConfig.phoneTel} className="btn-primary">
                Call {businessConfig.phone}
              </a>
              <Link to="/services" className="btn-secondary">
                View Services
              </Link>
            </div>
          </div>

          <div className="mt-24 scroll-reveal">
            <DecisionPointCTA
              label={businessConfig.ctaTemplates.decisionPoint.fastResponse.label}
              title={businessConfig.ctaTemplates.decisionPoint.fastResponse.title}
              subtitle={businessConfig.ctaTemplates.decisionPoint.fastResponse.subtitle}
              primaryText={businessConfig.ctaTemplates.decisionPoint.fastResponse.primaryText}
              primaryHref="/contact"
              secondaryText={businessConfig.ctaTemplates.decisionPoint.fastResponse.secondaryText}
              secondaryHref={businessConfig.phoneTel}
              tertiaryText="View Our Reviews"
              tertiaryHref="/reviews"
            />
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-surface)' }} ref={impactRef}>
        <div className="content-width">
          <div className="text-center mb-20 scroll-reveal">
            <div className="flex items-center justify-center gap-2 mb-4">
              <FaucetDripReveal />
              <h2 className="section-title text-balance chapter-heading">
                What We Offer
              </h2>
            </div>
            <LuxuryDivider />
            <p className="section-subtitle">
              Value and peace of mind for every customer
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="scroll-reveal" style={{ transitionDelay: '0ms' }}>
              <ImpactBlock
                icon={Percent}
                title="10% Off Veterans & Seniors"
                description="All plumbing services—10% off for Veterans and Seniors. We appreciate your service and want to give back. Call to learn more."
                index={0}
              />
            </div>
            <div className="scroll-reveal" style={{ transitionDelay: '100ms' }}>
              <ImpactBlock
                icon={Phone}
                title="Free Over-the-Phone Estimates"
                description="We believe free estimates are convenient and make your life easier. Give us a call for a quick, no-obligation quote before we come out."
                index={1}
              />
            </div>
            <div className="scroll-reveal" style={{ transitionDelay: '200ms' }}>
              <ImpactBlock
                icon={Gift}
                title="Warranties"
                description="We offer warranties on our services and products. We stand behind our work—every repair and installation."
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
              Our Work in Action
            </h2>
            <LuxuryDivider />
            <p className="section-subtitle">
              See the quality and craftsmanship that sets us apart
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
        label={businessConfig.ctaTemplates.cinematic.fastResponse.label}
        headline={businessConfig.ctaTemplates.cinematic.fastResponse.headline}
        subtitle={businessConfig.ctaTemplates.cinematic.fastResponse.subtitle}
        primaryText={businessConfig.ctaTemplates.cinematic.fastResponse.primaryText}
        primaryHref="/contact"
        secondaryText={businessConfig.ctaTemplates.cinematic.fastResponse.secondaryText}
        secondaryHref={businessConfig.phoneTel}
        trustChips={businessConfig.ctaTemplates.contact.trustChips}
      />
    </div>
  );
}
