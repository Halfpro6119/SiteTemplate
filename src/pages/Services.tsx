import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { businessConfig } from '../config';
import CTASection from '../components/CTASection';
import DecisionPointCTA from '../components/DecisionPointCTA';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import SignatureServiceCard from '../components/SignatureServiceCard';
import LuxuryDivider from '../components/LuxuryDivider';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Services() {
  const servicesRef = useScrollReveal();

  return (
    <div className="min-h-screen">
      <PageHero
        title="Plumbing & Heating Services in Edinburgh & West Lothian"
        subtitle="Gas Safe registered engineers. Boilers, cylinders, powerflush, underfloor heating, and 24/7 emergency call-outs."
      >
        <div className="mt-8">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />
        </div>
      </PageHero>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }} ref={servicesRef}>
        <div className="content-width">
          <div className="text-center mb-20 scroll-reveal">
            <h2 className="section-title chapter-heading">Our Services</h2>
            <LuxuryDivider />
            <p className="section-subtitle">
              Expert plumbing and heating services tailored to your needs. Every service delivered with professionalism and Gas Safe certification.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {businessConfig.services.map((service, index) => (
              <div key={service.id} className="scroll-reveal" style={{ transitionDelay: `${index * 80}ms` }}>
                <SignatureServiceCard
                  number={String(index + 1).padStart(2, '0')}
                  icon={service.icon}
                  title={service.name}
                  description={service.shortDescription}
                  benefits={service.benefits}
                  href={`/services/${(service as { slug?: string }).slug || '#'}`}
                />
              </div>
            ))}
          </div>
          <div className="text-center scroll-reveal">
            <Link to="/contact" className="btn-primary btn-shine">
              <span>Get Free Quote</span>
              <span>→</span>
            </Link>
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
