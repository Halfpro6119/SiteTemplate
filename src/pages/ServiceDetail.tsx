import { useParams, Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { businessConfig } from '../config';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import ContactCTAPanel from '../components/ContactCTAPanel';
import WhatHappensNextTimeline from '../components/WhatHappensNextTimeline';
import type { ServiceConfig } from '../config';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = businessConfig.services.find((s) => (s as ServiceConfig & { slug?: string }).slug === slug) as (ServiceConfig & { slug?: string }) | undefined;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
            Service not found
          </h1>
          <Link to="/services" className="btn-primary">
            Back to services
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[service.icon] ?? Icons.Star;

  return (
    <div className="min-h-screen">
      <PageHero
        title={service.name}
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

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }}>
        <div className="content-width">
          <div className="max-w-3xl mx-auto">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center mb-8"
              style={{
                background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0.08) 100%)',
                border: '1px solid var(--color-border-medium)'
              }}
            >
              <IconComponent className="w-8 h-8 text-[var(--color-accent)]" />
            </div>
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)' }}>
              {service.fullDescription}
            </p>

            <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
              What&apos;s included
            </h2>
            <ul className="space-y-3 mb-10">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Icons.CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                  <span style={{ color: 'var(--color-text-secondary)' }}>{benefit}</span>
                </li>
              ))}
            </ul>

            <div
              className="p-5 rounded-xl mb-10"
              style={{
                backgroundColor: 'var(--color-bg-surface)',
                border: '1px solid var(--color-border-subtle)'
              }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-text-tertiary)' }}>
                Ideal for
              </p>
              <p style={{ color: 'var(--color-text-secondary)' }}>{service.idealFor}</p>
            </div>

            <WhatHappensNextTimeline />
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
        <div className="content-width">
          <div className="max-w-4xl mx-auto">
            <ContactCTAPanel
              title={`Get a quote for ${service.name}`}
              responseTime={businessConfig.ctaTemplates.contact.responseTime}
              phoneHref={`tel:${businessConfig.phone.replace(/\s/g, '')}`}
              quoteHref="/contact"
              trustChips={businessConfig.ctaTemplates.contact.trustChips as Array<{ icon: 'shield' | 'clock' | 'award' | 'check' | 'star' | 'users'; text: string }>}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
