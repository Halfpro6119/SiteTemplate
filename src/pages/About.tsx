import { Users, Target, Heart, Shield, Award } from 'lucide-react';
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
        title={`About ${businessConfig.businessName}`}
        subtitle={`Watersafe-accredited water infrastructure specialists across ${businessConfig.city} and 15 miles`}
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
                    background: 'rgba(220, 38, 38, 0.1)',
                    border: '1px solid rgba(220, 38, 38, 0.2)',
                    color: 'var(--color-accent)',
                    fontSize: '0.875rem',
                    fontWeight: 600
                  }}
                >
                  Our story
                </div>
                <h2
                  className="text-4xl font-bold mb-6"
                  style={{
                    color: 'var(--color-text-primary)',
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    letterSpacing: '-0.02em'
                  }}
                >
                  Building Trust Since {new Date().getFullYear() - businessConfig.yearsExperience}
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
                      background: 'radial-gradient(circle at 50% 50%, var(--color-accent-glow) 0%, transparent 70%)'
                    }}
                  />
                  <Users className="w-32 h-32 relative z-10 transition-transform duration-500 group-hover:scale-110" style={{ color: 'var(--color-text-tertiary)' }} />
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
                Trusted by the Community
              </h2>
              <LuxuryDivider />
              <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                Our track record speaks for itself
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <StatCard
                value={`${businessConfig.yearsExperience}+`}
                label="Years Experience"
                description="Trusted expertise you can count on"
                delay={0}
              />
              <StatCard
                value={businessConfig.rating}
                label="Star Rating"
                description={`Based on ${businessConfig.reviewCount} reviews`}
                delay={100}
              />
              <StatCard
                value="100%"
                label="Local"
                description={`Owned and operated in ${businessConfig.city}`}
                delay={200}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }} ref={valuesRef}>
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

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-surface)' }} ref={missionRef}>
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
                  background: 'radial-gradient(circle at 30% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 60%)'
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
                  Why We Do What We Do
                </h2>

                <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                  We believe that exceptional {businessConfig.businessType.toLowerCase()} service should
                  be accessible to everyone in {businessConfig.city}. That is why we have built our
                  business on transparency, reliability, and genuine care for our customers.
                </p>

                <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                  When you work with us, you are not just getting a service provider. You are getting a
                  partner who is invested in your success and satisfaction.
                </p>

                <div
                  className="inline-block px-6 py-3 rounded-xl font-semibold"
                  style={{
                    background: 'rgba(6, 182, 212, 0.15)',
                    border: '1px solid rgba(6, 182, 212, 0.3)',
                    color: 'var(--color-accent)'
                  }}
                >
                  Serving {businessConfig.city} with Pride & Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Experience the Difference"
        subtitle="Join hundreds of satisfied customers in {businessConfig.city}"
      />
    </div>
  );
}
