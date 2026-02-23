import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { businessConfig } from '../config';
import CTASection from '../components/CTASection';
import ServiceCTABar from '../components/ServiceCTABar';
import DecisionPointCTA from '../components/DecisionPointCTA';
import PostcodeMap from '../components/PostcodeMap';

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
              96+ Professional Plumbing Services Across Glasgow G1–G53
            </h1>
            <p className="section-subtitle">
              Emergency, heating, drainage, bathrooms, handyman – one trusted team. Gas Safe registered, 24/7.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }}>
        <div className="content-width">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {businessConfig.services.map((service) => {
              const IconComponent = (Icons as any)[service.icon] || Icons.Star;
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className="block p-6 rounded-2xl transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'var(--color-bg-surface)',
                    border: '1px solid var(--color-border-subtle)',
                    boxShadow: 'var(--shadow-luxury-sm)'
                  }}
                >
                  <IconComponent className="w-10 h-10 mb-3" style={{ color: 'var(--color-accent)' }} />
                  <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    {service.name}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
                    {service.shortDescription}
                  </p>
                  <span className="inline-block mt-3 text-sm font-semibold" style={{ color: 'var(--color-accent)' }}>
                    View details →
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="space-y-12">
            {businessConfig.services.map((service, index) => {
              const IconComponent = (Icons as any)[service.icon] || Icons.Star;
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
          <PostcodeMap className="mb-16" />
          <DecisionPointCTA
            label="Not sure which service you need?"
            title="We'll Help You Find the Perfect Solution"
            subtitle="Our friendly team is here to provide expert guidance and free consultations."
            primaryText="Get Free Quote"
            primaryHref="/contact"
            secondaryText="Call +44 141 468 9930"
            secondaryHref={`tel:${businessConfig.phone.replace(/\s/g, '')}`}
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
