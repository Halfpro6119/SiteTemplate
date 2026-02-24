import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { businessConfig } from '../config';
import CTASection from '../components/CTASection';
import ServiceCTABar from '../components/ServiceCTABar';
import DecisionPointCTA from '../components/DecisionPointCTA';

export default function Services() {
  return (
    <div className="min-h-screen">
      <section
        className="pt-32 pb-16"
        style={{
          background: 'linear-gradient(135deg, var(--color-bg-surface) 0%, var(--color-bg-base) 100%)'
        }}
      >
        <div className="content-width">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="section-title">
              Our Services
            </h1>
            <p className="section-subtitle">
              We offer a comprehensive range of {businessConfig.businessType.toLowerCase()} services
              designed to meet your needs. Every service is delivered with professionalism,
              expertise, and a commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }}>
        <div className="content-width">
          <div className="space-y-12">
            {businessConfig.services.map((service, index) => {
              const IconComponent = (Icons as Record<string, LucideIcon>)[service.icon] || Icons.Star;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  className={`flex flex-col ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8 items-center`}
                >
                  <div className="flex-1">
                    <div
                      className="w-20 h-20 rounded-xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: 'rgba(6, 182, 212, 0.12)' }}
                    >
                      <IconComponent
                        className="w-10 h-10"
                        style={{ color: 'var(--color-accent)' }}
                      />
                    </div>
                    <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                      {service.name}
                    </h2>
                    <p className="text-lg mb-6 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      {service.fullDescription}
                    </p>

                    <div className="mb-6">
                      <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>Key Benefits:</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <Icons.CheckCircle
                              className="w-5 h-5 mt-0.5 flex-shrink-0"
                              style={{ color: 'var(--color-accent)' }}
                            />
                            <span style={{ color: 'var(--color-text-secondary)' }}>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div
                      className="p-4 rounded-lg mb-6"
                      style={{ backgroundColor: 'rgba(6, 182, 212, 0.12)' }}
                    >
                      <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-text-secondary)' }}>Ideal For:</p>
                      <p style={{ color: 'var(--color-text-tertiary)' }}>{service.idealFor}</p>
                    </div>

                    <ServiceCTABar
                      question={`Interested in ${service.name}?`}
                      primaryText="Get Quote"
                      primaryHref="#contact"
                      callText="Call Now"
                      callHref={`tel:${businessConfig.phone}`}
                    />
                  </div>

                  <div className="flex-1">
                    <div className="bg-gradient-to-br rounded-2xl aspect-square flex items-center justify-center" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
                      <IconComponent
                        className="w-32 h-32"
                        style={{ color: 'var(--color-text-tertiary)' }}
                      />
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
          <DecisionPointCTA
            label="Not sure which service you need?"
            title="We'll Help You Find the Perfect Solution"
            subtitle="Our friendly team is here to provide expert guidance and free consultations."
            primaryText="Get Free Consultation"
            primaryHref="#contact"
            secondaryText="Call Us Now"
            secondaryHref={`tel:${businessConfig.phone}`}
          />
        </div>
      </section>

      <CTASection
        title="Request Your Free Quote Today"
        subtitle="No obligation, no pressure. Just honest advice and competitive pricing."
      />
    </div>
  );
}
