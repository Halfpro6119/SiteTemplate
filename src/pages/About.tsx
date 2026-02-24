import { Users, Target, Heart, Shield, Award, Building2, Home, CheckCircle } from 'lucide-react';
import { businessConfig } from '../config';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import PremiumValueCard from '../components/PremiumValueCard';
import StatCard from '../components/StatCard';
import LuxuryDivider from '../components/LuxuryDivider';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const storyRef = useScrollReveal();
  const statsRef = useScrollReveal();
  const valuesRef = useScrollReveal();
  const missionRef = useScrollReveal();

  return (
    <div className="min-h-screen">
      <PageHero
        title="About Secure Links Fence"
        subtitle="Professional fence installation serving the Indianapolis metro area since 2018"
      >
        <div className="mt-8">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'About' }
          ]} />
        </div>
      </PageHero>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }} ref={storyRef}>
        <div className="content-width">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="scroll-reveal">
                <div
                  className="inline-block px-4 py-2 rounded-full mb-6"
                  style={{
                    background: 'rgba(5, 150, 105, 0.1)',
                    border: '1px solid rgba(5, 150, 105, 0.2)',
                    color: 'var(--color-accent)',
                    fontSize: '0.875rem',
                    fontWeight: 600
                  }}
                >
                  Our Story
                </div>
                <h2
                  className="text-4xl font-bold mb-6"
                  style={{
                    color: 'var(--color-text-primary)',
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    letterSpacing: '-0.02em'
                  }}
                >
                  Built on Quality & Trust
                </h2>
                <div className="prose prose-lg leading-relaxed space-y-4" style={{ color: 'var(--color-text-secondary)' }}>
                  {businessConfig.aboutStory.split('\n\n').map((paragraph, index) => (
                    <p key={index} style={{ fontSize: '1.0625rem', lineHeight: '1.8' }}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <div className="scroll-reveal" style={{ transitionDelay: '100ms' }}>
                <div
                  className="relative rounded-2xl aspect-square flex items-center justify-center overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-bg-surface) 0%, var(--color-bg-elevated) 100%)',
                    border: '1px solid var(--color-border-subtle)',
                    boxShadow: 'var(--shadow-luxury-lg)'
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: 'radial-gradient(circle at 50% 50%, rgba(5, 150, 105, 0.15) 0%, transparent 70%)'
                    }}
                  />
                  <div className="text-center p-6 relative z-10">
                    <Users className="w-24 h-24 mx-auto mb-4 transition-transform duration-500 group-hover:scale-110" style={{ color: 'var(--color-text-tertiary)' }} />
                    <p className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>Team Photo Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-surface)' }} ref={statsRef}>
        <div className="content-width">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 scroll-reveal">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  color: 'var(--color-text-primary)',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  letterSpacing: '-0.02em'
                }}
              >
                Trusted Across Indianapolis
              </h2>
              <LuxuryDivider />
              <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                Our track record speaks for itself
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <StatCard
                value={`${businessConfig.yearsExperience}+`}
                label="Years in Business"
                description="Serving Indianapolis since 2018"
                delay={0}
              />
              <StatCard
                value="20+"
                label="Years Experience"
                description="Owner Nick Beard's expertise"
                delay={100}
              />
              <StatCard
                value="50+"
                label="Combined Years"
                description="Team's total experience"
                delay={200}
              />
              <StatCard
                value="100%"
                label="Local"
                description={`Based in ${businessConfig.city}, IN`}
                delay={300}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }}>
        <div className="content-width">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  color: 'var(--color-text-primary)',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  letterSpacing: '-0.02em'
                }}
              >
                Who We Serve
              </h2>
              <LuxuryDivider />
              <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                From homeowners to large commercial facilities
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div 
                className="rounded-2xl p-8"
                style={{
                  background: 'linear-gradient(135deg, var(--color-bg-surface) 0%, var(--color-bg-elevated) 100%)',
                  border: '1px solid var(--color-border-subtle)',
                  boxShadow: 'var(--shadow-luxury-md)'
                }}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.15) 0%, rgba(5, 150, 105, 0.08) 100%)',
                    border: '1px solid var(--color-border-medium)'
                  }}
                >
                  <Home className="w-7 h-7" style={{ color: 'var(--color-accent)' }} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                  Residential Customers
                </h3>
                <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                  Homeowners trust us to enhance their property's privacy, security, and curb appeal with 
                  quality fence installations that last.
                </p>
                <ul className="space-y-3">
                  {['Privacy fencing', 'Decorative boundaries', 'Pool enclosures', 'Pet containment', 'Property line fencing'].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                      <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div 
                className="rounded-2xl p-8"
                style={{
                  background: 'linear-gradient(135deg, var(--color-bg-surface) 0%, var(--color-bg-elevated) 100%)',
                  border: '1px solid var(--color-border-subtle)',
                  boxShadow: 'var(--shadow-luxury-md)'
                }}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.15) 0%, rgba(5, 150, 105, 0.08) 100%)',
                    border: '1px solid var(--color-border-medium)'
                  }}
                >
                  <Building2 className="w-7 h-7" style={{ color: 'var(--color-accent)' }} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                  Commercial & Government
                </h3>
                <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                  We have the experience and equipment to handle large-scale commercial projects with 
                  demanding security and compliance requirements.
                </p>
                <ul className="space-y-3">
                  {['Military bases', 'Colleges & schools', 'Warehouses & industrial', 'Utility companies', 'Property management'].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                      <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-surface)' }} ref={valuesRef}>
        <div className="content-width">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 scroll-reveal">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  color: 'var(--color-text-primary)',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  letterSpacing: '-0.02em'
                }}
              >
                Our Core Values
              </h2>
              <LuxuryDivider />
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {businessConfig.values.map((value, index) => {
                const icons = [Target, Heart, Shield];
                const IconComponent = icons[index % icons.length];

                return (
                  <div key={index} className="scroll-reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                    <PremiumValueCard
                      icon={IconComponent}
                      title={value.title}
                      description={value.description}
                      index={index}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }} ref={missionRef}>
        <div className="content-width">
          <div className="max-w-4xl mx-auto">
            <div
              className="relative overflow-hidden rounded-3xl p-12 md:p-16 scroll-reveal"
              style={{
                background: 'linear-gradient(135deg, var(--color-bg-elevated) 0%, var(--color-bg-surface) 100%)',
                border: '1px solid var(--color-border-medium)',
                boxShadow: 'var(--shadow-luxury-xl)'
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background: 'linear-gradient(90deg, var(--color-accent) 0%, var(--color-accent-light) 100%)'
                }}
              />

              <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 30% 50%, rgba(5, 150, 105, 0.15) 0%, transparent 60%)'
                }}
              />

              <div className="relative z-10 text-center">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%)',
                    boxShadow: '0 8px 32px -8px var(--color-accent-glow)'
                  }}
                >
                  <Award className="w-8 h-8" style={{ color: 'var(--color-text-inverse)' }} />
                </div>

                <h2
                  className="text-3xl md:text-4xl font-bold mb-6"
                  style={{
                    color: 'var(--color-text-primary)',
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    letterSpacing: '-0.02em'
                  }}
                >
                  Our Commitment to You
                </h2>

                <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                  When you choose Secure Links Fence, you're not just getting a fence—you're getting a 
                  team that genuinely cares about doing right by you. We believe in honest pricing, 
                  quality materials, and workmanship that stands the test of time.
                </p>

                <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                  Our goal is simple: deliver a fence you'll be proud of, at a price that's fair, 
                  with service that makes the whole process easy. That's the Secure Links promise.
                </p>

                <div
                  className="inline-block px-6 py-3 rounded-xl font-semibold"
                  style={{
                    background: 'rgba(5, 150, 105, 0.15)',
                    border: '1px solid rgba(5, 150, 105, 0.3)',
                    color: 'var(--color-accent)'
                  }}
                >
                  Proudly Serving Indianapolis Since 2018
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work With Us?"
        subtitle="Get a free, no-obligation estimate for your fencing project"
      />
    </div>
  );
}
