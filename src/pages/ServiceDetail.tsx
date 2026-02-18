import { useParams, Link } from 'react-router-dom';
import { businessConfig } from '../config';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import ServiceCTABar from '../components/ServiceCTABar';
import { useScrollReveal } from '../hooks/useScrollReveal';
import * as Icons from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const sectionRef = useScrollReveal();

  const service = businessConfig.services.find(
    (s) => s.slug === slug || s.id === slug
  );

  if (!service) {
    return (
      <div className="min-h-screen pt-32 content-width">
        <p style={{ color: 'var(--color-text-secondary)' }}>Service not found.</p>
        <Link to="/services" className="text-[var(--color-accent)] mt-4 inline-block">
          ← Back to Services
        </Link>
      </div>
    );
  }

  const IconComponent = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[service.icon] || Icons.Star;

  return (
    <div className="min-h-screen">
      <PageHero
        title={service.name}
        subtitle={service.outcome || service.shortDescription}
      />

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }} ref={sectionRef}>
        <div className="content-width max-w-3xl mx-auto">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: service.name, href: undefined }
            ]}
          />

          <div className="scroll-reveal mb-12">
            <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-text-primary)', fontFamily: 'Instrument Serif, serif' }}>
              What we do
            </h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              {service.fullDescription}
            </p>
          </div>

          {service.covers && service.covers.length > 0 && (
            <div className="scroll-reveal mb-12">
              <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                This service covers
              </h3>
              <ul className="space-y-2">
                {service.covers.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                    <span style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {service.materialsNote && (
            <div className="scroll-reveal mb-12 p-6 rounded-xl" style={{ background: 'var(--color-bg-surface)', border: '1px solid var(--color-border-subtle)' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                Materials & options
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {service.materialsNote}
              </p>
            </div>
          )}

          {service.repairVsReplacement && (
            <div className="scroll-reveal mb-12 p-6 rounded-xl" style={{ background: 'var(--color-bg-surface)', border: '1px solid var(--color-border-subtle)' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                Repair vs replacement
              </h3>
              <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {service.repairVsReplacement}
              </p>
            </div>
          )}

          <div className="scroll-reveal mb-12 p-6 rounded-xl" style={{ background: 'var(--color-bg-surface)', border: '1px solid var(--color-border-subtle)' }}>
            <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
              Our standard
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                <span style={{ color: 'var(--color-text-secondary)' }}>Cleanliness and tidy finish</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                <span style={{ color: 'var(--color-text-secondary)' }}>Respect for your property</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                <span style={{ color: 'var(--color-text-secondary)' }}>Attention to detail</span>
              </li>
            </ul>
          </div>

          <ServiceCTABar
            question={`Interested in ${service.name}?`}
            primaryText="Request a Quote"
            primaryHref="/contact"
            callText="Call 01842 762719"
            callHref="tel:01842762719"
          />
        </div>
      </section>
    </div>
  );
}
