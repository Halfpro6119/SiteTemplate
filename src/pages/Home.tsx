import { Link } from 'react-router-dom';
import { businessConfig } from '../config';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useHeroReveal } from '../hooks/useHeroReveal';
import LuxuryDivider from '../components/LuxuryDivider';
import CinematicCTA from '../components/CinematicCTA';
import SignatureServiceCard from '../components/SignatureServiceCard';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

const CRAFT_CARDS = [
  { title: 'Repairs & Refurbishments', benefit: 'Meticulous attention to every repair.' },
  { title: 'Full Roof Replacements', benefit: 'Complete replacements built to last.' },
  { title: 'Commercial & Industrial', benefit: 'Trained, certified, and compliant.' }
];

export default function Home() {
  const { shouldAnimate, isRevealed } = useHeroReveal();
  const trustRef = useScrollReveal();
  const servicesRef = useScrollReveal();
  const projectsRef = useScrollReveal();
  const processRef = useScrollReveal();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className={`relative overflow-hidden cinematic-hero ${shouldAnimate && !isRevealed ? 'hero-bg-animate' : ''}`}
        style={{ paddingTop: '11rem', paddingBottom: '8rem' }}
      >
        <div className="spotlight-glow" />
        <div className="content-width relative z-10">
          <div className="hero-split">
            <div className="relative">
              <div className={`inline-block mb-6 ${shouldAnimate && !isRevealed ? 'hero-headline-animate' : ''} ${isRevealed ? 'hero-revealed' : ''}`}>
                <span
                  className="inline-block px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase"
                  style={{
                    color: 'var(--color-accent-light)',
                    border: '1px solid var(--color-border-medium)',
                    background: 'rgba(91, 124, 153, 0.08)',
                    fontFamily: 'DM Sans, sans-serif'
                  }}
                >
                  Trust • Quality • 20-Year Guarantee
                </span>
              </div>
              <h1 className={`editorial-heading text-balance mb-4 max-w-xl ${shouldAnimate && !isRevealed ? 'hero-headline-animate' : ''} ${isRevealed ? 'hero-revealed' : ''}`}>
                Roofing built on precision.
              </h1>
              <div className="relative inline-block mb-6">
                <div className={`accent-line-reveal ${isRevealed ? 'hero-revealed' : ''}`} />
              </div>
              <p className={`editorial-subheading text-balance mb-8 max-w-xl ${shouldAnimate && !isRevealed ? 'hero-subheadline-animate' : ''} ${isRevealed ? 'hero-revealed' : ''}`}>
                {businessConfig.positioning.heroSub}
              </p>
              <div className={`flex flex-wrap gap-4 mb-8 ${shouldAnimate && !isRevealed ? 'hero-cta-animate' : ''} ${isRevealed ? 'hero-revealed' : ''}`}>
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:01842762719" className="btn-secondary inline-flex items-center gap-2">
                  <span>Call 01842 762719</span>
                </a>
              </div>
              <div className={`flex flex-wrap gap-6 text-sm ${shouldAnimate && !isRevealed ? 'hero-info-animate' : ''} ${isRevealed ? 'hero-revealed' : ''}`} style={{ color: 'var(--color-text-tertiary)' }}>
                <span>20-Year Guarantee</span>
                <span>•</span>
                <span>Family-Run</span>
                <span>•</span>
                <span>Norfolk & Suffolk</span>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="space-y-4">
                {CRAFT_CARDS.map((card, i) => (
                  <div
                    key={card.title}
                    className={`floating-card-3d p-6 rounded-xl ${shouldAnimate && !isRevealed ? 'hero-cta-animate' : ''} ${isRevealed ? 'hero-revealed' : ''}`}
                    style={{
                      marginLeft: i === 1 ? '1.5rem' : i === 2 ? '3rem' : '0',
                      transitionDelay: `${1.6 + i * 0.15}s`
                    }}
                  >
                    <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-text-primary)', fontFamily: 'Instrument Serif, serif' }}>
                      {card.title}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      {card.benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & quality */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-surface)' }} ref={trustRef}>
        <div className="content-width">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="section-title text-balance chapter-heading">
              A company built on trust and quality
            </h2>
            <LuxuryDivider />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {businessConfig.valueTiles.map((tile, index) => {
              const Icon = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[tile.icon] || Icons.Award;
              return (
                <div
                  key={tile.title}
                  className="scroll-reveal text-center p-8 rounded-2xl transition-all duration-300 hover-lift"
                  style={{
                    transitionDelay: `${index * 80}ms`,
                    background: 'var(--color-bg-elevated)',
                    border: '1px solid var(--color-border-subtle)'
                  }}
                >
                  <div className="icon-feature w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-7 h-7" style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text-primary)', fontFamily: 'Instrument Serif, serif' }}>
                    {tile.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {tile.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }} ref={servicesRef}>
        <div className="content-width">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="section-title text-balance chapter-heading">
              Our services
            </h2>
            <LuxuryDivider />
            <p className="section-subtitle">
              From pitched and flat roofs to timber, uPVC and industrial—each delivered with precision and respect.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {businessConfig.services.map((service, index) => (
              <div key={service.id} className="scroll-reveal" style={{ transitionDelay: `${index * 80}ms` }}>
                <SignatureServiceCard
                  number={String(index + 1).padStart(2, '0')}
                  icon={service.icon}
                  title={service.name}
                  description={service.shortDescription}
                  benefits={service.covers?.slice(0, 3)}
                  href={`/services/${service.slug || service.id}`}
                />
              </div>
            ))}
          </div>
          <div className="text-center scroll-reveal">
            <Link to="/services" className="btn-secondary inline-flex items-center gap-2">
              <span>Explore all services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects preview */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-surface)' }} ref={projectsRef}>
        <div className="content-width">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="section-title text-balance chapter-heading">
              Projects
            </h2>
            <LuxuryDivider />
            <p className="section-subtitle">
              A selection of our work—attention to detail and respect for every property.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="scroll-reveal rounded-xl overflow-hidden aspect-[4/3] transition-all duration-300 hover-lift"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  background: 'var(--color-bg-elevated)',
                  border: '1px solid var(--color-border-subtle)'
                }}
              >
                <div className="w-full h-full flex items-center justify-center" style={{ color: 'var(--color-text-tertiary)' }}>
                  <ImageIcon className="w-16 h-16 opacity-40" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center scroll-reveal">
            <Link to="/projects" className="btn-secondary inline-flex items-center gap-2">
              <ImageIcon className="w-5 h-5" />
              <span>View Projects</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Process teaser */}
      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }} ref={processRef}>
        <div className="content-width max-w-3xl mx-auto">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="section-title text-balance chapter-heading">
              What happens after you contact us
            </h2>
            <LuxuryDivider />
          </div>
          <div className="space-y-6 mb-12">
            {businessConfig.processSteps.map((item, index) => (
              <div key={item.step} className="scroll-reveal flex gap-4 items-start" style={{ transitionDelay: `${index * 60}ms` }}>
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold"
                  style={{
                    background: 'rgba(91, 124, 153, 0.15)',
                    color: 'var(--color-accent-light)',
                    fontFamily: 'DM Sans, sans-serif'
                  }}
                >
                  {item.step}
                </span>
                <div>
                  <h3 className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center scroll-reveal">
            <Link to="/process" className="btn-primary">
              Start your quote
            </Link>
          </div>
        </div>
      </section>

      <CinematicCTA
        headline={businessConfig.ctaTemplates.cinematic.headline}
        subtitle="Request a quote or call us. We operate throughout Norfolk and Suffolk and treat every property with respect."
        primaryText={businessConfig.ctaTemplates.cinematic.primaryText}
        primaryHref={businessConfig.ctaTemplates.cinematic.primaryHref}
        secondaryText={businessConfig.ctaTemplates.cinematic.secondaryText}
        secondaryHref={businessConfig.ctaTemplates.cinematic.secondaryHref}
        trustChips={[
          { icon: 'shield', text: '20-Year Guarantee' },
          { icon: 'mapPin', text: 'Norfolk & Suffolk' }
        ]}
      />
    </div>
  );
}
