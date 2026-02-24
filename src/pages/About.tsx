import { Target, Heart, Shield, Award, Leaf, GraduationCap } from 'lucide-react';
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
  const credentialsRef = useScrollReveal();
  const valuesRef = useScrollReveal();
  const missionRef = useScrollReveal();

  const credentials = [
    {
      icon: Award,
      title: 'Board Certified Consulting Arborist',
      description: 'Our on-staff certified arborist provides expert tree health diagnosis, disease treatment, and pest management that most pest control companies simply cannot offer.'
    },
    {
      icon: Shield,
      title: 'State of Michigan Licensed',
      description: 'Fully licensed by the State of Michigan Department of Agriculture with comprehensive liability coverage for your protection.'
    },
    {
      icon: GraduationCap,
      title: 'IPM Certified Technicians',
      description: 'Our entire team is trained in Integrated Pest Management methodology—the gold standard for effective, environmentally responsible pest control.'
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="Five Generations of Trust"
        subtitle="Family-owned pest control and organic lawn care serving Metro Detroit since 1900"
      >
        <div className="mt-8">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'About Us' }
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
                    background: 'rgba(34, 197, 94, 0.1)',
                    border: '1px solid rgba(34, 197, 94, 0.2)',
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
                  Protecting Michigan Homes Since 1900
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
                      background: 'radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.15) 0%, transparent 70%)'
                    }}
                  />
                  <div className="text-center relative z-10">
                    <div 
                      className="text-8xl font-bold mb-4 transition-transform duration-500 group-hover:scale-110"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      125
                    </div>
                    <div 
                      className="text-xl font-semibold"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      Years of Excellence
                    </div>
                    <div 
                      className="text-sm mt-2"
                      style={{ color: 'var(--color-text-tertiary)' }}
                    >
                      Est. 1900
                    </div>
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
                By the Numbers
              </h2>
              <LuxuryDivider />
              <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                Our track record speaks for itself
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <StatCard
                value="125+"
                label="Years in Business"
                description="Family-owned since 1900"
                delay={0}
              />
              <StatCard
                value="55"
                label="Expert Technicians"
                description="Trained & certified team"
                delay={100}
              />
              <StatCard
                value="14"
                label="Year Avg. Retention"
                description="Customers who stay"
                delay={200}
              />
              <StatCard
                value={businessConfig.rating.toString()}
                label="Star Rating"
                description={`${businessConfig.reviewCount}+ reviews`}
                delay={300}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }} ref={credentialsRef}>
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
                Our Credentials
              </h2>
              <LuxuryDivider />
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
                Professional certifications that set us apart
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {credentials.map((credential, index) => (
                <div key={index} className="scroll-reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                  <div 
                    className="card-luxury p-8 h-full"
                  >
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                      style={{
                        background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(34, 197, 94, 0.05) 100%)',
                        border: '1px solid rgba(34, 197, 94, 0.2)'
                      }}
                    >
                      <credential.icon className="w-8 h-8" style={{ color: 'var(--color-accent)' }} />
                    </div>
                    <h3 
                      className="text-xl font-bold mb-3"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {credential.title}
                    </h3>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9375rem', lineHeight: '1.7' }}>
                      {credential.description}
                    </p>
                  </div>
                </div>
              ))}
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
                The principles that have guided five generations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {businessConfig.values.map((value, index) => {
                const icons = [Target, Leaf, Heart];
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
                  background: 'radial-gradient(circle at 30% 50%, rgba(34, 197, 94, 0.15) 0%, transparent 60%)'
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
                  <Leaf className="w-8 h-8" style={{ color: 'var(--color-text-inverse)' }} />
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
                  We believe that effective pest control shouldn't come at the cost of your family's health or our 
                  shared environment. That's why we've built our practice around Integrated Pest Management and 
                  organic solutions—methods that work better and last longer than conventional approaches.
                </p>

                <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                  When you choose American Pest Control, you're not just getting a service provider. You're 
                  joining a family tradition of excellence that stretches back five generations. We treat every 
                  home like our own, because protecting Michigan families is what we've always done.
                </p>

                <div
                  className="inline-block px-6 py-3 rounded-xl font-semibold"
                  style={{
                    background: 'rgba(34, 197, 94, 0.15)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    color: 'var(--color-accent)'
                  }}
                >
                  Protecting Metro Detroit Since 1900
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Experience the Difference"
        subtitle="Schedule your free inspection today"
      />
    </div>
  );
}
