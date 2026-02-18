import { Users, Target, Heart, Shield } from 'lucide-react';
import { businessConfig } from '../config';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import LuxuryDivider from '../components/LuxuryDivider';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Link } from 'react-router-dom';

const valueIcons = [Target, Heart, Shield];

export default function About() {
  const storyRef = useScrollReveal();
  const valuesRef = useScrollReveal();

  const { about } = businessConfig;

  return (
    <div className="min-h-screen">
      <PageHero
        title="About TRC Roofing"
        subtitle="Family-run, with over 40 years combined experience. Precision, integrity, and respect for every property."
      />

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }} ref={storyRef}>
        <div className="content-width">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About' }]} />
          <div className="max-w-3xl mx-auto">
            <div className="scroll-reveal">
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                {about.story}
              </p>
            </div>
            <div className="mt-16 scroll-reveal flex justify-center">
              <div
                className="rounded-2xl aspect-square w-64 flex items-center justify-center"
                style={{
                  background: 'var(--color-bg-surface)',
                  border: '1px solid var(--color-border-subtle)'
                }}
              >
                <Users className="w-24 h-24" style={{ color: 'var(--color-text-tertiary)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-surface)' }} ref={valuesRef}>
        <div className="content-width">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="section-title">Our values</h2>
            <LuxuryDivider />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {about.values.map((value, index) => {
              const Icon = valueIcons[index % valueIcons.length];
              return (
                <div
                  key={value.title}
                  className="scroll-reveal text-center p-8 rounded-2xl hover-lift"
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
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }}>
        <div className="content-width max-w-2xl mx-auto text-center">
          <p className="text-lg mb-8" style={{ color: 'var(--color-text-secondary)' }}>
            Operating throughout Norfolk and Suffolk—including Bury St Edmunds and surrounding towns. When you choose TRC, you're choosing a partner that goes above and beyond.
          </p>
          <Link to="/contact" className="btn-primary">
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
