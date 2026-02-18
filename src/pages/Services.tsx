import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { businessConfig } from '../config';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import LuxuryDivider from '../components/LuxuryDivider';
import SignatureServiceCard from '../components/SignatureServiceCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  const sectionRef = useScrollReveal();

  return (
    <div className="min-h-screen">
      <PageHero
        title="Our services"
        subtitle="From roof repairs and refurbishments to complete replacements—pitched, flat, timber & uPVC, and industrial. Each task receives meticulous attention to detail."
      />

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }} ref={sectionRef}>
        <div className="content-width">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Services' }]} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessConfig.services.map((service, index) => (
              <div key={service.id} className="scroll-reveal" style={{ transitionDelay: `${index * 80}ms` }}>
                <SignatureServiceCard
                  number={String(index + 1).padStart(2, '0')}
                  icon={service.icon}
                  title={service.name}
                  description={service.shortDescription}
                  benefits={service.covers?.slice(0, 3)}
                  href={`/services/${service.slug}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
        <div className="content-width max-w-2xl mx-auto text-center">
          <p className="text-lg mb-8" style={{ color: 'var(--color-text-secondary)' }}>
            Not sure which service you need? We'll discuss your situation and recommend the right option—repair or replacement, materials and timescales.
          </p>
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
