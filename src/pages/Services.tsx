import * as Icons from 'lucide-react';
import { businessConfig } from '../config';
import CTASection from '../components/CTASection';
import ServiceCTABar from '../components/ServiceCTABar';
import DecisionPointCTA from '../components/DecisionPointCTA';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import ServiceIconReveal from '../components/ServiceIconReveal';
import DrainFlowDiagram from '../components/DrainFlowDiagram';

export default function Services() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Our Plumbing Services"
        subtitle="Ready and available to start your plumbing. We have a rapid response team—including nights and weekends for emergencies."
      >
        <div className="mt-8 flex flex-col items-center gap-4">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Services' }
          ]} />
          <a
            href={businessConfig.phoneTel}
            className="text-xl font-bold"
            style={{ color: 'var(--color-accent)' }}
          >
            Call Now: {businessConfig.phone}
          </a>
        </div>
      </PageHero>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }}>
        <div className="content-width">
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
                    <ServiceIconReveal delay={index * 80}>
                      <div
                        className="w-20 h-20 rounded-xl flex items-center justify-center mb-6"
                        style={{ backgroundColor: 'rgba(16, 185, 129, 0.12)' }}
                      >
                        <IconComponent
                          className="w-10 h-10"
                          style={{ color: 'var(--color-accent)' }}
                        />
                      </div>
                    </ServiceIconReveal>
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
                      style={{ backgroundColor: 'rgba(16, 185, 129, 0.12)' }}
                    >
                      <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-text-secondary)' }}>Ideal For:</p>
                      <p style={{ color: 'var(--color-text-tertiary)' }}>{service.idealFor}</p>
                    </div>

                    <ServiceCTABar
                      question={`Interested in ${service.name}?`}
                      primaryText="Get Quote"
                      primaryHref="/contact"
                      callText="Call Now"
                      callHref={businessConfig.phoneTel}
                    />
                  </div>

                  <div className="flex-1">
                    {service.name === 'Drain Cleaning & Sewer' ? (
                      <div
                        className="rounded-2xl p-8 aspect-square flex items-center justify-center"
                        style={{
                          background: 'linear-gradient(135deg, var(--color-bg-surface) 0%, var(--color-bg-elevated) 100%)',
                          border: '1px solid var(--color-border-subtle)'
                        }}
                      >
                        <DrainFlowDiagram />
                      </div>
                    ) : (
                      <div className="bg-gradient-to-br rounded-2xl aspect-square flex items-center justify-center" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
                        <IconComponent
                          className="w-32 h-32"
                          style={{ color: 'var(--color-text-tertiary)' }}
                        />
                      </div>
                    )}
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
            subtitle="Our friendly team is here to provide expert guidance and free over-the-phone estimates."
            primaryText="Get Free Quote"
            primaryHref="/contact"
            secondaryText="Call Us Now"
            secondaryHref={businessConfig.phoneTel}
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
