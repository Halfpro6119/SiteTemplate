import { useState } from 'react';
import { Link } from 'react-router-dom';
import { businessConfig } from '../config';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { MapPin, Search } from 'lucide-react';

export default function Areas() {
  const [checkInput, setCheckInput] = useState('');
  const sectionRef = useScrollReveal();

  return (
    <div className="min-h-screen">
      <PageHero
        title="Areas we cover"
        subtitle="Operating throughout Norfolk and Suffolk—including Bury St Edmunds and surrounding towns. Local, respectful, reliable."
      />

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }} ref={sectionRef}>
        <div className="content-width max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Areas' }]} />
          <div className="scroll-reveal mb-12">
            <label htmlFor="area-check" className="modern-label block mb-2">
              Check my area
            </label>
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
                style={{ color: 'var(--color-text-tertiary)' }}
              />
              <input
                id="area-check"
                type="text"
                placeholder={businessConfig.areasPage.checkAreaPlaceholder}
                value={checkInput}
                onChange={(e) => setCheckInput(e.target.value)}
                className="modern-input pl-12 pr-4 py-4"
              />
            </div>
            <p className="text-sm mt-2" style={{ color: 'var(--color-text-tertiary)' }}>
              We cover Norfolk and Suffolk. If you're nearby, get in touch and we'll confirm.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 scroll-reveal">
            {businessConfig.areasPage.primaryRegions.map((region) => (
              <div
                key={region}
                className="rounded-xl p-6 flex items-center gap-4 transition-all duration-300 hover-lift"
                style={{
                  background: 'var(--color-bg-surface)',
                  border: '1px solid var(--color-border-subtle)'
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(91, 124, 153, 0.15)', color: 'var(--color-accent)' }}
                >
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)', fontFamily: 'Instrument Serif, serif' }}>
                    {region}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    Full roofing services across the region
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title mb-6 scroll-reveal">Key towns we serve</h2>
          <div className="space-y-4 mb-16">
            {businessConfig.areasPage.keyTowns.map((town, index) => (
              <div
                key={town.name}
                className="scroll-reveal rounded-xl p-6 transition-all duration-300 hover-lift"
                style={{
                  transitionDelay: `${index * 60}ms`,
                  background: 'var(--color-bg-surface)',
                  border: '1px solid var(--color-border-subtle)'
                }}
              >
                <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-text-primary)', fontFamily: 'Instrument Serif, serif' }}>
                  {town.name}
                </h3>
                <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                  {town.description}
                </p>
              </div>
            ))}
          </div>

          <div
            className="rounded-2xl p-8 text-center scroll-reveal"
            style={{
              background: 'linear-gradient(135deg, var(--color-bg-surface) 0%, var(--color-bg-elevated) 100%)',
              border: '1px solid var(--color-border-subtle)'
            }}
          >
            <p className="text-lg mb-6 max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              We're a family-run business with over 40 years combined experience. When you choose TRC, you get a local team that treats your property with respect and delivers work we stand behind with our 20-year guarantee.
            </p>
            <Link to="/contact" className="btn-primary">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
