import { useParams, Link, Navigate } from 'react-router-dom';
import { Phone, MessageSquare, CheckCircle } from 'lucide-react';
import * as Icons from 'lucide-react';
import { businessConfig, getServiceBySlug } from '../config';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import ProcessFlow from '../components/ProcessFlow';
import GasSafeBadge from '../components/GasSafeBadge';
import EmergencyResponseBadge from '../components/EmergencyResponseBadge';
import AreaHeatStrip from '../components/AreaHeatStrip';
import FAQItem from '../components/FAQItem';
import ContactCTAPanel from '../components/ContactCTAPanel';

const defaultFAQs = [
  {
    question: 'How quickly can you respond to a plumbing emergency in Glasgow?',
    answer: 'Our emergency plumbers aim to reach you within 30-60 minutes across all Glasgow areas. We operate 24/7, 365 days a year for genuine plumbing emergencies.'
  },
  {
    question: 'Do you charge a call-out fee for emergencies?',
    answer: 'We have transparent emergency pricing with no hidden call-out charges. You will know the cost before we start any work. Emergency rates apply after 7pm and on weekends.'
  },
  {
    question: 'What counts as a plumbing emergency?',
    answer: 'Emergencies include burst pipes, major leaks, no hot water/heating in winter, gas smells, sewage backups, and overflowing toilets. Call us if you are unsure - we are happy to advise.'
  },
  {
    question: 'Are your emergency plumbers Gas Safe registered?',
    answer: 'Yes, all our engineers are Gas Safe registered. This is essential for any work involving gas boilers, pipes, or appliances. We can provide our registration details on request.'
  }
];

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) return <Navigate to="/services" replace />;

  const IconComponent = (Icons as any)[service.icon] || Icons.Star;
  const relatedServices = businessConfig.services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 4);
  const emergencyTestimonials = businessConfig.testimonials.filter((t) =>
    t.serviceTags.some((tag) => tag.toLowerCase().includes('emergency') || tag.toLowerCase().includes('burst'))
  );

  return (
    <div className="min-h-screen">
      <PageHero
        title={`${service.name} Glasgow`}
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
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a href={`tel:${businessConfig.phone.replace(/\s/g, '')}`} className="btn-primary inline-flex items-center gap-2">
            <Phone className="w-5 h-5" />
            Call +44 141 468 9930
          </a>
          <a
            href={`https://wa.me/${businessConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <MessageSquare className="w-5 h-5" />
            WhatsApp Quote
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <GasSafeBadge size="sm" />
          <EmergencyResponseBadge responseTime="30-60 min" />
        </div>
      </PageHero>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }}>
        <div className="content-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              About Our {service.name} Glasgow
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
              {service.fullDescription}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div>
                <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                  What&apos;s Included
                </h3>
                <ul className="space-y-3">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                      <span style={{ color: 'var(--color-text-secondary)' }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                  Why Choose Us
                </h3>
                <ul className="space-y-3">
                  {['All Glasgow postcodes covered', 'Transparent pricing', 'Professional team', 'Fast response'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                      <span style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <ProcessFlow className="mb-16" />

            <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              Frequently Asked Questions
            </h3>
            <div className="space-y-4 mb-16">
              {defaultFAQs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>

            {emergencyTestimonials.length > 0 && (
              <div className="mb-16">
                <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
                  What Our Customers Say
                </h3>
                <div className="space-y-6">
                  {emergencyTestimonials.slice(0, 2).map((t) => (
                    <blockquote
                      key={t.id}
                      className="p-6 rounded-2xl border-l-4"
                      style={{
                        background: 'var(--color-bg-surface)',
                        borderColor: 'var(--color-accent)',
                        borderLeftWidth: '4px'
                      }}
                    >
                      <p className="text-lg mb-4" style={{ color: 'var(--color-text-secondary)', fontStyle: 'italic' }}>
                        &ldquo;{t.text}&rdquo;
                      </p>
                      <footer className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                        {t.name} — {t.location}
                      </footer>
                    </blockquote>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
        <div className="content-width">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--color-text-primary)' }}>
            Areas We Cover for {service.name} Glasgow
          </h2>
          <AreaHeatStrip maxItems={20} />
          <div className="text-center mt-6">
            <Link
              to="/locations"
              className="btn-secondary inline-flex items-center gap-2"
            >
              View All 49+ Areas
            </Link>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }}>
        <div className="content-width">
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--color-text-primary)' }}>
            Related Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedServices.map((s) => {
              const Icon = (Icons as any)[s.icon] || Icons.Star;
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="block p-6 rounded-2xl transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'var(--color-bg-surface)',
                    border: '1px solid var(--color-border-subtle)',
                    boxShadow: 'var(--shadow-luxury-sm)'
                  }}
                >
                  <Icon className="w-10 h-10 mb-3" style={{ color: 'var(--color-accent)' }} />
                  <h3 className="font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    {s.name}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
                    {s.shortDescription}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
        <div className="content-width">
          <div className="max-w-2xl mx-auto">
            <ContactCTAPanel
              title={`Get Your Free ${service.name} Quote`}
              responseTime="We'll get back to you within 1 hour"
              phoneHref={`tel:${businessConfig.phone.replace(/\s/g, '')}`}
              quoteHref="/contact"
              trustChips={businessConfig.ctaTemplates.contact.trustChips}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
