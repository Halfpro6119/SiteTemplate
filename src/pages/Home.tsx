import { Link } from 'react-router-dom';
import { Star, MapPin, Shield, Award, Leaf, Users, Heart, Image as ImageIcon } from 'lucide-react';
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
  const credentialsRef = useScrollReveal();
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
            icon={Leaf}
            title="Organic Options"
            subtitle="Safe & Effective"
          />
        </div>
        <div className="absolute top-32 left-10 float-badge-2 hidden lg:block">
          <GlassBadge
            icon={Award}
            title="Est. 1900"
            subtitle="125+ Years"
          />
        </div>
        <div className="absolute bottom-32 right-20 float-badge-3 hidden lg:block">
          <GlassBadge
            icon={Users}
            title="5th Generation"
            subtitle="Family Owned"
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
              <Heart className="w-6 h-6" style={{ color: 'var(--color-accent)' }} />
              <span className="font-semibold" style={{ color: 'var(--color-text-secondary)' }}>14-Year Avg. Customer Loyalty</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }} ref={credentialsRef}>
        <div className="content-width">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="section-title text-balance chapter-heading">
              What Sets Us Apart
            </h2>
            <LuxuryDivider />
            <p className="section-subtitle">
              125 years of family expertise, modern science-based methods
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessConfig.whyChooseUs.map((item, index) => {
              const iconMap: Record<string, typeof Users> = {
                Users,
                Award,
                Leaf,
                Heart
              };
              const IconComponent = iconMap[item.icon] || Shield;
              
              return (
                <div 
                  key={index} 
                  className="scroll-reveal card-luxury p-8 text-center"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    style={{
                      background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.05) 100%)',
                      border: '1px solid rgba(34, 197, 94, 0.2)'
                    }}
                  >
                    <IconComponent className="w-8 h-8" style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <h3 
                    className="text-xl font-bold mb-3"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9375rem', lineHeight: '1.7' }}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
          
          <div className="mt-16 scroll-reveal">
            <DecisionPointCTA
              label={businessConfig.ctaTemplates.decisionPoint.localTrust.label}
              title={businessConfig.ctaTemplates.decisionPoint.localTrust.title}
              subtitle={businessConfig.ctaTemplates.decisionPoint.localTrust.subtitle}
              primaryText={businessConfig.ctaTemplates.decisionPoint.localTrust.primaryText}
              primaryHref="/contact"
              secondaryText={businessConfig.ctaTemplates.decisionPoint.localTrust.secondaryText}
              secondaryHref="/reviews"
            />
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-surface)' }} ref={servicesRef}>
        <div className="content-width">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="section-title text-balance chapter-heading">
              Our Services
            </h2>
            <LuxuryDivider />
            <p className="section-subtitle">
              Comprehensive pest control and lawn care solutions for Metro Detroit homes
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
              secondaryHref={`tel:${businessConfig.phone}`}
              tertiaryText="View Our Reviews"
              tertiaryHref="/reviews"
            />
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }} ref={impactRef}>
        <div className="content-width">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="section-title text-balance chapter-heading">
              The IPM Difference
            </h2>
            <LuxuryDivider />
            <p className="section-subtitle">
              Integrated Pest Management delivers better results with less environmental impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="scroll-reveal" style={{ transitionDelay: '0ms' }}>
              <ImpactBlock
                icon={Shield}
                title="Root Cause Solutions"
                description="We don't just treat symptoms—we identify why pests are attracted to your property and eliminate those conditions. This means lasting results, not temporary fixes."
                index={0}
              />
            </div>
            <div className="scroll-reveal" style={{ transitionDelay: '100ms' }}>
              <ImpactBlock
                icon={Leaf}
                title="Up to 90% Less Pesticide"
                description="By addressing the source of pest problems, IPM dramatically reduces the need for chemical treatments. Better for your family, pets, and the environment."
                index={1}
              />
            </div>
            <div className="scroll-reveal" style={{ transitionDelay: '200ms' }}>
              <ImpactBlock
                icon={Award}
                title="125 Years of Expertise"
                description="Five generations of pest control experience means we've seen it all. Our IPM-trained technicians bring unmatched knowledge to every home we protect."
                index={2}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-surface)' }} ref={galleryRef}>
        <div className="content-width">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="section-title text-balance chapter-heading">
              Our Work
            </h2>
            <LuxuryDivider />
            <p className="section-subtitle">
              Professional pest control and lawn care across Metro Detroit
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

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }} ref={testimonialsRef}>
        <div className="content-width">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="section-title text-balance chapter-heading">
              Trusted by Generations
            </h2>
            <LuxuryDivider />
            <p className="section-subtitle">
              Our customers stay an average of 14 years—here's why
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
                  yearsAsCustomer={testimonial.yearsAsCustomer}
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
                <span>Get Free Inspection</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-surface)' }} ref={serviceAreasRef}>
        <div className="content-width">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="section-title text-balance chapter-heading">
              Areas We Serve
            </h2>
            <LuxuryDivider />
            <p className="section-subtitle">
              Proudly protecting homes across Oakland County, Macomb & surrounding communities
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-16 scroll-reveal">
            {businessConfig.serviceAreas.slice(0, 12).map((area, index) => (
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
        secondaryHref={`tel:${businessConfig.phone}`}
        trustChips={businessConfig.ctaTemplates.contact.trustChips}
      />
    </div>
  );
}
