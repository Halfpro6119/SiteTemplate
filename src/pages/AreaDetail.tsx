import { useParams, Link, Navigate } from 'react-router-dom';
import { Phone, MessageSquare, Zap, Shield, Clock, CheckCircle, MapPin } from 'lucide-react';
import * as Icons from 'lucide-react';
import { businessConfig, getAreaBySlug } from '../config';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import GasSafeBadge from '../components/GasSafeBadge';
import ContactCTAPanel from '../components/ContactCTAPanel';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const areaServices = [
  { icon: 'Zap', name: 'Emergency Plumbing', desc: '24/7 emergency plumbing services' },
  { icon: 'Shield', name: 'Heating & Gas Services', desc: 'Gas Safe heating engineers' },
  { icon: 'Wrench', name: 'Electrical Work', desc: 'Qualified electricians' }
];

export default function AreaDetail() {
  const { slug } = useParams<{ slug: string }>();
  const area = slug ? getAreaBySlug(slug) : undefined;
  useDocumentTitle(area ? `Plumber ${area.name}` : undefined);

  if (!area) return <Navigate to="/locations" replace />;

  const nearbyAreas = businessConfig.serviceAreas
    .filter((a) => a.slug !== area.slug)
    .slice(0, 4);

  return (
    <div className="min-h-screen">
      <PageHero
        title={`Plumber ${area.name}`}
        subtitle={`Professional plumbing, heating and electrical services across ${area.postcodes}. Gas Safe registered, 24/7 emergency, 30-60 minute response.`}
      >
        <div className="mt-8">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Areas', href: '/locations' },
              { label: area.name }
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
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl"
            style={{
              background: 'rgba(6, 182, 212, 0.15)',
              border: '1px solid var(--color-border-subtle)',
              color: 'var(--color-text-primary)'
            }}
          >
            <Clock className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
            <span className="font-semibold">30-60 Min Response</span>
          </div>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl"
            style={{
              background: 'rgba(6, 182, 212, 0.15)',
              border: '1px solid var(--color-border-subtle)',
              color: 'var(--color-text-primary)'
            }}
          >
            <CheckCircle className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
            <span className="font-semibold">1000+ Reviews</span>
          </div>
        </div>
      </PageHero>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }}>
        <div className="content-width">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: 'var(--color-text-primary)' }}>
            Our Services in {area.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {areaServices.map((s, i) => {
              const Icon = (Icons as any)[s.icon] || Icons.Star;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl transition-all duration-300"
                  style={{
                    background: 'var(--color-bg-surface)',
                    border: '1px solid var(--color-border-subtle)',
                    boxShadow: 'var(--shadow-luxury-sm)'
                  }}
                >
                  <Icon className="w-12 h-12 mb-4" style={{ color: 'var(--color-accent)' }} />
                  <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    {s.name}
                  </h3>
                  <p style={{ color: 'var(--color-text-tertiary)' }}>{s.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
                About Our Services in {area.name}
              </h3>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                Plumbers Glasgow Ltd provides 24/7 emergency plumbing services across {area.name}. Our Gas Safe
                registered engineers with 85+ years combined experience understand the unique challenges of
                properties in this area and provide reliable, professional services.
              </p>
              <h4 className="font-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                Postcodes We Cover
              </h4>
              <div className="flex flex-wrap gap-2">
                {area.postcodes.split(',').map((pc, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg font-mono text-sm"
                    style={{
                      background: 'rgba(6, 182, 212, 0.15)',
                      border: '1px solid var(--color-border-subtle)',
                      color: 'var(--color-text-secondary)'
                    }}
                  >
                    {pc.trim()}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                Why Choose Us in {area.name}?
              </h4>
              <ul className="space-y-3">
                {[
                  { icon: MapPin, text: 'Deep understanding of local properties and regulations' },
                  { icon: Zap, text: 'Same day service available' },
                  { icon: Shield, text: 'Gas Safe registered, qualified and fully insured' },
                  { icon: CheckCircle, text: 'No hidden costs - transparent pricing' }
                ].map((item, i) => {
                  const IconComponent = item.icon;
                  return (
                    <li key={i} className="flex items-start gap-3">
                      <IconComponent className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                      <span style={{ color: 'var(--color-text-secondary)' }}>{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
        <div className="content-width">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: 'var(--color-text-primary)' }}>
            We Also Serve Nearby Areas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyAreas.map((a) => (
              <Link
                key={a.slug}
                to={`/areas/${a.slug}`}
                className="block p-6 rounded-2xl transition-all duration-300 hover:scale-105"
                style={{
                  background: 'var(--color-bg-base)',
                  border: '1px solid var(--color-border-subtle)',
                  boxShadow: 'var(--shadow-luxury-sm)'
                }}
              >
                <div className="font-bold mb-1" style={{ color: 'var(--color-text-primary)' }}>
                  {a.name}
                </div>
                <div className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
                  {a.postcodes}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }}>
        <div className="content-width">
          <div className="max-w-2xl mx-auto">
            <ContactCTAPanel
              title={`Need a Plumber in ${area.name}?`}
              responseTime="Don't wait - call us today"
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
