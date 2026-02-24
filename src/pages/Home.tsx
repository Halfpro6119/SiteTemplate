import { Link } from 'react-router-dom';
import { MapPin, Shield, Clock, Award, TrendingUp, Image as ImageIcon, Home as HomeIcon, Building2, CheckCircle, Users } from 'lucide-react';
import { businessConfig } from '../config';
import SignatureServiceCard from '../components/SignatureServiceCard';
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
  const commercialRef = useScrollReveal();

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
            icon={Shield}
            title="Licensed & Insured"
            subtitle="Full Protection"
          />
        </div>
        <div className="absolute top-32 left-10 float-badge-2 hidden lg:block">
          <GlassBadge
            icon={Clock}
            title="Free Estimates"
            subtitle="Same Day Response"
          />
        </div>
        <div className="absolute bottom-32 right-20 float-badge-3 hidden lg:block">
          <GlassBadge
            icon={Award}
            title="Since 2018"
            subtitle={`${businessConfig.yearsExperience}+ Years`}
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
              <Award className="w-6 h-6" style={{ color: 'var(--color-accent)' }} />
              <span className="font-semibold" style={{ color: 'var(--color-text-secondary)' }}>BBB Accredited Business</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6" style={{ color: 'var(--color-accent)' }} />
              <span className="font-semibold" style={{ color: 'var(--color-text-secondary)' }}>Licensed & Fully Insured</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6" style={{ color: 'var(--color-accent)' }} />
              <span className="font-semibold" style={{ color: 'var(--color-text-secondary)' }}>Indianapolis Metro Area</span>
            </div>
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6" style={{ color: 'var(--color-accent)' }} />
              <span className="font-semibold" style={{ color: 'var(--color-text-secondary)' }}>Competitive Pricing</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }} ref={commercialRef}>
        <div className="content-width">
          <div className="text-center mb-16 scroll-reveal">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: 'rgba(5, 150, 105, 0.1)',
                border: '1px solid rgba(5, 150, 105, 0.2)',
                color: 'var(--color-accent)',
                fontSize: '0.875rem',
                fontWeight: 600
              }}
            >
              <Building2 className="w-4 h-4" />
              <span>Residential & Commercial Specialists</span>
            </div>
            <h2 className="section-title text-balance chapter-heading">
              From Backyards to Business Complexes
            </h2>
            <LuxuryDivider />
            <p className="section-subtitle">
              Whether you need a privacy fence for your home or security fencing for a commercial facility, 
              we have the experience and equipment to deliver quality results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div 
              className="scroll-reveal rounded-2xl p-8 relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, var(--color-bg-surface) 0%, var(--color-bg-elevated) 100%)',
                border: '1px solid var(--color-border-subtle)',
                boxShadow: 'var(--shadow-luxury-md)'
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(5, 150, 105, 0.1) 0%, transparent 70%)'
                }}
              />
              <div className="relative z-10">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.15) 0%, rgba(5, 150, 105, 0.08) 100%)',
                    border: '1px solid var(--color-border-medium)'
                  }}
                >
                  <HomeIcon className="w-7 h-7" style={{ color: 'var(--color-accent)' }} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                  Residential Fencing
                </h3>
                <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                  Privacy fences, decorative boundaries, pool enclosures, and more. We help homeowners 
                  enhance their property's security, value, and curb appeal with quality fence installation.
                </p>
                <ul className="space-y-3 mb-6">
                  {['Wood privacy fencing', 'Vinyl fencing', 'Ornamental aluminum', 'Custom designs'].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                      <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 font-semibold transition-colors"
                  style={{ color: 'var(--color-accent)' }}
                >
                  <span>View Residential Services</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            <div 
              className="scroll-reveal rounded-2xl p-8 relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, var(--color-bg-surface) 0%, var(--color-bg-elevated) 100%)',
                border: '1px solid var(--color-border-subtle)',
                boxShadow: 'var(--shadow-luxury-md)',
                transitionDelay: '100ms'
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(5, 150, 105, 0.1) 0%, transparent 70%)'
                }}
              />
              <div className="relative z-10">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.15) 0%, rgba(5, 150, 105, 0.08) 100%)',
                    border: '1px solid var(--color-border-medium)'
                  }}
                >
                  <Building2 className="w-7 h-7" style={{ color: 'var(--color-accent)' }} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                  Commercial Fencing
                </h3>
                <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                  Large-scale security fencing for businesses, industrial facilities, schools, and government 
                  properties. We understand commercial requirements and deliver on time and on budget.
                </p>
                <ul className="space-y-3 mb-6">
                  {['Military bases & government', 'Colleges & schools', 'Warehouses & industrial', 'Utility companies'].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                      <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 font-semibold transition-colors"
                  style={{ color: 'var(--color-accent)' }}
                >
                  <span>View Commercial Services</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="scroll-reveal">
            <DecisionPointCTA
              label="Ready to discuss your project?"
              title="Free Estimates, Fair Pricing"
              subtitle="Get a detailed quote for your residential or commercial fencing project—no obligation."
              primaryText="Get Free Estimate"
              primaryHref="/contact"
              secondaryText="Call Now"
              secondaryHref={`tel:${businessConfig.phone}`}
              tertiaryText="View Our Work"
              tertiaryHref="/gallery"
            />
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-surface)' }} ref={servicesRef}>
        <div className="content-width">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="section-title text-balance chapter-heading">
              Fencing Solutions
            </h2>
            <LuxuryDivider />
            <p className="section-subtitle">
              Quality materials and expert installation for every type of fence
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
              <span>Explore All Services</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }} ref={impactRef}>
        <div className="content-width">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="section-title text-balance chapter-heading">
              Why Choose Secure Links Fence
            </h2>
            <LuxuryDivider />
            <p className="section-subtitle">
              Quality, honesty, and craftsmanship on every project
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="scroll-reveal" style={{ transitionDelay: '0ms' }}>
              <ImpactBlock
                icon={TrendingUp}
                title="Transparent, Competitive Pricing"
                description="No surprise fees or inflated quotes. We provide detailed estimates upfront and stand behind our pricing. Fair rates for quality work you can trust."
                index={0}
              />
            </div>
            <div className="scroll-reveal" style={{ transitionDelay: '100ms' }}>
              <ImpactBlock
                icon={Shield}
                title="Quality Materials & Craftsmanship"
                description="We use premium materials and proven installation techniques. Your fence is built to withstand Indiana's weather and last for years to come."
                index={1}
              />
            </div>
            <div className="scroll-reveal" style={{ transitionDelay: '200ms' }}>
              <ImpactBlock
                icon={Users}
                title="Residential & Commercial Expertise"
                description="From backyard privacy fences to large commercial projects—military bases, schools, and industrial facilities—we handle it all with the same dedication."
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
              See examples of our residential and commercial fence installations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {businessConfig.galleryImages.slice(0, 6).map((image, index) => (
              <Link
                key={image.id}
                to="/gallery"
                className="scroll-reveal group relative overflow-hidden rounded-2xl cursor-pointer"
                style={{
                  transitionDelay: `${index * 80}ms`,
                  aspectRatio: '4/3'
                }}
              >
                <img 
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-semibold">{image.caption}</p>
                    <p className="text-sm text-white/80">{image.projectType}</p>
                  </div>
                </div>
                <div 
                  className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: image.category === 'commercial' 
                      ? 'rgba(30, 64, 175, 0.9)' 
                      : 'rgba(5, 150, 105, 0.9)',
                    color: 'white'
                  }}
                >
                  {image.category === 'commercial' ? 'Commercial' : 'Residential'}
                </div>
              </Link>
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
              Our Credentials & Trust
            </h2>
            <LuxuryDivider />
            <p className="section-subtitle">
              Professional certifications and industry training you can count on
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: 'BBB Accredited',
                description: 'Better Business Bureau accredited for ethical practices',
                icon: Award
              },
              {
                title: 'AFA Certified',
                description: 'American Fence Association Field Training School graduate',
                icon: Award
              },
              {
                title: 'OSHA Certified',
                description: 'Safety certified for all job sites',
                icon: Shield
              },
              {
                title: '50+ Years Experience',
                description: 'Combined team expertise in fence installation',
                icon: Users
              }
            ].map((credential, index) => {
              const IconComponent = credential.icon;
              return (
                <div 
                  key={index}
                  className="scroll-reveal text-center p-6 rounded-2xl"
                  style={{ 
                    transitionDelay: `${index * 80}ms`,
                    background: 'linear-gradient(135deg, var(--color-bg-surface) 0%, var(--color-bg-elevated) 100%)',
                    border: '1px solid var(--color-border-subtle)'
                  }}
                >
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                    style={{
                      background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.15) 0%, rgba(5, 150, 105, 0.08) 100%)',
                      border: '1px solid var(--color-border-medium)'
                    }}
                  >
                    <IconComponent className="w-7 h-7" style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    {credential.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    {credential.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div 
            className="scroll-reveal rounded-2xl p-8 text-center mb-16"
            style={{
              background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.08) 0%, rgba(5, 150, 105, 0.04) 100%)',
              border: '1px solid rgba(5, 150, 105, 0.2)'
            }}
          >
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>
              References Available Upon Request
            </h3>
            <p className="mb-4" style={{ color: 'var(--color-text-secondary)' }}>
              Ask for customer references when you request your free estimate. We're happy to connect you 
              with past residential and commercial clients who can speak to our work quality.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Licensed', 'Fully Insured', 'Free Estimates', 'Quality Guaranteed'].map((badge, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full text-sm font-semibold"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--color-border-medium)',
                    color: 'var(--color-text-secondary)'
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="text-center scroll-reveal">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/reviews"
                className="btn-primary btn-shine"
              >
                <span>View Our Credentials</span>
                <span>→</span>
              </Link>
              <Link
                to="/contact"
                className="btn-secondary"
              >
                <span>Get Free Estimate</span>
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
              Professional fence installation throughout the Indianapolis metro area
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
        secondaryHref={`tel:${businessConfig.phone}`}
        trustChips={businessConfig.ctaTemplates.contact.trustChips}
      />
    </div>
  );
}
