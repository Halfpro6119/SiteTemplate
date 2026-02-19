import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { businessConfig } from '../config';
import CTASection from '../components/CTASection';
import TrustFooterStrip from '../components/TrustFooterStrip';
import type { ServiceConfig } from '../config';

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
              Your water infrastructure specialists
            </h1>
            <p className="section-subtitle">
              From leak detection to lead replacement and moling—one team, one visit when possible
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }}>
        <div className="content-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessConfig.services.map((service) => {
              const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[service.icon] ?? Icons.Star;
              const slug = (service as ServiceConfig & { slug?: string }).slug ?? String(service.id);
              return (
                <Link
                  key={service.id}
                  to={`/services/${slug}`}
                  className="group block"
                >
                  <div
                    className="relative h-full overflow-hidden rounded-2xl p-8 transition-all duration-500"
                    style={{
                      background: 'linear-gradient(135deg, var(--color-bg-surface) 0%, var(--color-bg-elevated) 100%)',
                      border: '1px solid var(--color-border-subtle)',
                      boxShadow: 'var(--shadow-luxury-md)'
                    }}
                  >
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                      style={{
                        background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0.08) 100%)',
                        border: '1px solid var(--color-border-medium)'
                      }}
                    >
                      <IconComponent className="w-7 h-7 text-[var(--color-accent)]" />
                    </div>
                    <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                      {service.name}
                    </h2>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                      {service.shortDescription}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-300" style={{ color: 'var(--color-accent)' }}>
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-16">
            <TrustFooterStrip />
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="btn-primary">
              Get a quote
            </Link>
            <a href={`tel:${businessConfig.phone.replace(/\s/g, '')}`} className="btn-secondary">
              Call {businessConfig.phone}
            </a>
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
