import * as Icons from 'lucide-react';
import { businessConfig } from '../config';
import CTASection from '../components/CTASection';
import ServiceCTABar from '../components/ServiceCTABar';
import DecisionPointCTA from '../components/DecisionPointCTA';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import { useScrollReveal } from '../hooks/useScrollReveal';
import LuxuryDivider from '../components/LuxuryDivider';

export default function Services() {
  const servicesRef = useScrollReveal();

  return (
    <div className="min-h-screen">
      <PageHero
        title="Professional Fencing Services"
        subtitle="Quality fence installation for residential and commercial properties across the Indianapolis metro area"
      >
        <div className="mt-8">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Services' }
          ]} />
        </div>
      </PageHero>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }} ref={servicesRef}>
        <div className="content-width">
          <div className="space-y-24">
            {businessConfig.services.map((service, index) => {
              const IconComponent = (Icons as any)[service.icon] || Icons.Star;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  className={`scroll-reveal flex flex-col ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-12 items-center`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center"
                        style={{ 
                          background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.15) 0%, rgba(5, 150, 105, 0.08) 100%)',
                          border: '1px solid var(--color-border-medium)',
                          boxShadow: '0 0 20px -8px var(--color-accent-glow)'
                        }}
                      >
                        <IconComponent
                          className="w-8 h-8"
                          style={{ color: 'var(--color-accent)' }}
                        />
                      </div>
                      <div>
                        <span 
                          className="text-sm font-semibold"
                          style={{ color: 'var(--color-accent)' }}
                        >
                          Service {String(index + 1).padStart(2, '0')}
                        </span>
                        <h2 className="text-3xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
                          {service.name}
                        </h2>
                      </div>
                    </div>
                    
                    <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      {service.fullDescription}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>Key Benefits</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <Icons.CheckCircle
                              className="w-5 h-5 mt-0.5 flex-shrink-0"
                              style={{ color: 'var(--color-accent)' }}
                            />
                            <span style={{ color: 'var(--color-text-secondary)' }}>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div
                      className="p-5 rounded-xl mb-8"
                      style={{ 
                        background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.08) 0%, rgba(5, 150, 105, 0.04) 100%)',
                        border: '1px solid rgba(5, 150, 105, 0.2)'
                      }}
                    >
                      <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-accent)' }}>Ideal For:</p>
                      <p style={{ color: 'var(--color-text-secondary)' }}>{service.idealFor}</p>
                    </div>

                    <ServiceCTABar
                      question={`Interested in ${service.name}?`}
                      primaryText="Get Free Quote"
                      primaryHref="/contact"
                      callText="Call Now"
                      callHref={`tel:${businessConfig.phone}`}
                    />
                  </div>

                  <div className="flex-1 w-full">
                    <div 
                      className="rounded-2xl overflow-hidden relative group"
                      style={{ 
                        aspectRatio: '4/3',
                        background: 'linear-gradient(135deg, var(--color-bg-surface) 0%, var(--color-bg-elevated) 100%)',
                        border: '1px solid var(--color-border-subtle)',
                        boxShadow: 'var(--shadow-luxury-lg)'
                      }}
                    >
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        style={{
                          background: 'radial-gradient(circle at 50% 50%, rgba(5, 150, 105, 0.15) 0%, transparent 70%)'
                        }}
                      />
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center p-6">
                          <IconComponent
                            className="w-24 h-24 mx-auto mb-4 transition-transform duration-500 group-hover:scale-110"
                            style={{ color: 'var(--color-text-tertiary)' }}
                          />
                          <p className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
                            {service.name} Photo Placeholder
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
        <div className="content-width">
          <div className="text-center mb-16">
            <h2 
              className="section-title chapter-heading"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Our Installation Process
            </h2>
            <LuxuryDivider />
            <p className="section-subtitle">
              From initial consultation to final walkthrough, we make fence installation easy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '01',
                title: 'Free Consultation',
                description: 'We visit your property, discuss your needs, and provide a detailed, no-obligation estimate.'
              },
              {
                step: '02',
                title: 'Design & Planning',
                description: 'We help you choose the right fence style and materials for your property and budget.'
              },
              {
                step: '03',
                title: 'Professional Installation',
                description: 'Our experienced crew installs your fence with attention to detail and minimal disruption.'
              },
              {
                step: '04',
                title: 'Final Walkthrough',
                description: 'We review the completed fence with you to ensure your complete satisfaction.'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%)',
                    boxShadow: '0 4px 16px -4px var(--color-accent-glow)'
                  }}
                >
                  <span className="text-xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }}>
        <div className="content-width">
          <DecisionPointCTA
            label="Not sure which fence is right for you?"
            title="We'll Help You Choose"
            subtitle="Our team can recommend the best fencing solution based on your property, needs, and budget. Free consultation included with every estimate."
            primaryText="Get Free Consultation"
            primaryHref="/contact"
            secondaryText="Call Us Now"
            secondaryHref={`tel:${businessConfig.phone}`}
          />
        </div>
      </section>

      <CTASection
        title="Request Your Free Fence Estimate"
        subtitle="No obligation, no pressure—just honest advice and competitive pricing for your fencing project"
      />
    </div>
  );
}
