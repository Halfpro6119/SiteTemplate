import { MapPin, Phone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { businessConfig } from '../config';
import CTASection from '../components/CTASection';
import ServiceAreaChecker from '../components/ServiceAreaChecker';

export default function Locations() {
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
              Areas we cover
            </h1>
            <p className="section-subtitle">
              {businessConfig.footer.areasDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }}>
        <div className="content-width">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
                  We cover {businessConfig.city} and 15 miles
                </h2>
                <p className="text-lg mb-6 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {businessConfig.businessName} serves {businessConfig.city} and a 15-mile radius, including Derbyshire,
                  Stafford, Stone, Rugeley, Cannock and surrounding areas. We prioritise fast response
                  and same-day repair when possible.
                </p>
                <p className="text-lg mb-6 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  Check your postcode or town below to confirm we cover your area. For locations just
                  outside the radius, contact us and we&apos;ll let you know if we can help.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle
                      className="w-6 h-6 flex-shrink-0"
                      style={{ color: 'var(--color-accent)' }}
                    />
                    <span style={{ color: 'var(--color-text-secondary)' }}>Fast local response times</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle
                      className="w-6 h-6 flex-shrink-0"
                      style={{ color: 'var(--color-accent)' }}
                    />
                    <span style={{ color: 'var(--color-text-secondary)' }}>Familiar with local regulations and requirements</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle
                      className="w-6 h-6 flex-shrink-0"
                      style={{ color: 'var(--color-accent)' }}
                    />
                    <span style={{ color: 'var(--color-text-secondary)' }}>Supporting the local community</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle
                      className="w-6 h-6 flex-shrink-0"
                      style={{ color: 'var(--color-accent)' }}
                    />
                    <span style={{ color: 'var(--color-text-secondary)' }}>Available for ongoing support and service</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl aspect-square flex items-center justify-center" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
                <MapPin className="w-32 h-32" style={{ color: 'var(--color-text-tertiary)' }} />
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: 'var(--color-text-primary)' }}>
                Towns and areas we cover
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {businessConfig.serviceAreas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-4 rounded-lg transition-colors"
                    style={{ backgroundColor: 'var(--color-bg-surface)' }}
                  >
                    <MapPin
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: 'var(--color-accent)' }}
                    />
                    <span className="font-medium" style={{ color: 'var(--color-text-secondary)' }}>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-lg mx-auto">
              <h2 className="text-xl font-bold text-center mb-6" style={{ color: 'var(--color-text-primary)' }}>
                Check if we cover your area
              </h2>
              <ServiceAreaChecker />
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
        <div className="content-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{
                color: 'var(--color-text-primary)',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                letterSpacing: '-0.02em'
              }}
            >
              Not sure if we cover you?
            </h2>
            <p className="section-subtitle mb-10">
              Contact us to confirm. We mainly serve a 15-mile radius from Stoke and may be able to help just outside.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${businessConfig.phone.replace(/\s/g, '')}`}
                className="btn-primary"
                style={{ fontSize: '1.125rem', padding: '1.125rem 2rem' }}
              >
                <Phone className="w-5 h-5" />
                <span>Call {businessConfig.phone}</span>
              </a>
              <Link
                to="/contact"
                className="btn-secondary"
                style={{ fontSize: '1.125rem', padding: '1.125rem 2rem' }}
              >
                <span>Contact Us Online</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }}>
        <div className="content-width">
          <div className="max-w-4xl mx-auto">
            <div
              className="rounded-2xl p-8 md:p-12 text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.08) 0%, rgba(220, 38, 38, 0.12) 100%)'
              }}
            >
              <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                Why local matters
              </h2>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                When you hire a local business, you are not just getting a service provider. You are
                supporting your community, creating local jobs, and working with people who genuinely
                care about the area they serve. We live here, we work here, and we are committed
                to making {businessConfig.city} an even better place.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                That is the difference local makes, and that is the difference you will experience
                when you work with {businessConfig.businessName}.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Book a free, no-obligation survey"
        subtitle="We often detect and repair in one visit. 24hr response. Watersafe accredited."
      />
    </div>
  );
}
