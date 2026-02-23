import { useParams, Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { businessConfig } from '../config';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import ServiceCTABar from '../components/ServiceCTABar';
import DecisionPointCTA from '../components/DecisionPointCTA';
import CTASection from '../components/CTASection';
import LuxuryDivider from '../components/LuxuryDivider';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ServiceDetail() {
  const { slug } = useParams();
  const serviceRef = useScrollReveal();

  const service = businessConfig.services.find(
    (s) => (s as { slug?: string }).slug === slug
  );

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
            Service Not Found
          </h1>
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = (Icons as Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>>)[
    service.icon
  ] || Icons.Star;

  return (
    <div className="min-h-screen">
      <PageHero
        title={`${service.name} in Edinburgh & West Lothian`}
        subtitle={service.shortDescription}
      >
        <div className="mt-8">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: service.name }
            ]}
          />
        </div>
      </PageHero>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }} ref={serviceRef}>
        <div className="content-width">
          <div className="max-w-4xl mx-auto">
            <div className="scroll-reveal">
              <div
                className="w-20 h-20 rounded-xl flex items-center justify-center mb-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(6, 182, 212, 0.08) 100%)',
                  border: '1px solid var(--color-border-medium)',
                  boxShadow: '0 0 24px -8px var(--color-accent-glow)'
                }}
              >
                <IconComponent className="w-10 h-10" style={{ color: 'var(--color-accent)' }} />
              </div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-text-primary)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                {service.name}
              </h2>
              <div className="prose prose-lg leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)', fontSize: '1.0625rem', lineHeight: '1.8' }}>
                <p>{service.fullDescription}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                  Key Benefits
                </h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Icons.CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                      <span style={{ color: 'var(--color-text-secondary)' }}>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="p-6 rounded-xl mb-8"
                style={{
                  background: 'rgba(6, 182, 212, 0.08)',
                  border: '1px solid rgba(6, 182, 212, 0.2)'
                }}
              >
                <p className="text-sm font-semibold mb-2" style={{ color: 'var(--color-text-tertiary)' }}>
                  Ideal for
                </p>
                <p style={{ color: 'var(--color-text-secondary)' }}>{service.idealFor}</p>
              </div>

              <ServiceCTABar
                question={`Interested in ${service.name}?`}
                primaryText="Get Free Quote"
                primaryHref="/contact"
                callText="Call 0131 202 1032"
                callHref={`tel:${businessConfig.phone}`}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
        <div className="content-width">
          <DecisionPointCTA
            label="Not sure which service you need?"
            title="We'll Help You Find the Right Solution"
            subtitle="Free advice, honest pricing. Call us or request a quote."
            primaryText="Get Free Quote"
            primaryHref="/contact"
            secondaryText="Call 0131 202 1032"
            secondaryHref={`tel:${businessConfig.phone}`}
          />
        </div>
      </section>

      <CTASection
        title="Get Your Free Quote Today"
        subtitle="Free quote, honest advice, and no obligation. 24/7 emergency available."
      />
    </div>
  );
}
