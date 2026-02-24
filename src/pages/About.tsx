import { Users, Shield, Award, Leaf, TreeDeciduous, Clock, CheckCircle, Star, Target } from 'lucide-react';
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
  const leaderRef = useScrollReveal();
  const statsRef = useScrollReveal();
  const valuesRef = useScrollReveal();
  const credentialsRef = useScrollReveal();
  const missionRef = useScrollReveal();

  return (
    <div className="min-h-screen">
      <PageHero
        title="5th Generation Family-Owned Since 1900"
        subtitle="Board Certified expertise. Organic solutions. 125+ years of protecting Michigan families."
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
                  Protecting Michigan Homes Since {businessConfig.foundingYear}
                </h2>
                <div className="prose prose-lg leading-relaxed space-y-4" style={{ color: 'var(--color-text-secondary)' }}>
                  {businessConfig.aboutStory.split('\n\n').map((paragraph, index) => (
                    <p key={index} style={{ fontSize: '1.0625rem', lineHeight: '1.8' }}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <div className="scroll-reveal" style={{ transitionDelay: '100ms' }}>
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-bg-surface) 0%, var(--color-bg-elevated) 100%)',
                    border: '1px solid var(--color-border-subtle)',
                    boxShadow: 'var(--shadow-luxury-lg)',
                    padding: '2rem'
                  }}
                >
                  <div className="text-center">
                    <div
                      className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
                      style={{
                        background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%)',
                        boxShadow: '0 8px 32px -8px var(--color-accent-glow)'
                      }}
                    >
                      <Leaf className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-3xl font-bold mb-2" style={{ color: 'var(--color-accent)' }}>
                      "{businessConfig.footer.brandStatement.split('.')[0]}"
                    </p>
                    <p className="text-sm italic" style={{ color: 'var(--color-text-tertiary)' }}>
                      — Our Company Motto
                    </p>
                  </div>
                  
                  <div className="mt-8 pt-8" style={{ borderTop: '1px solid var(--color-border-subtle)' }}>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <p className="text-3xl font-bold" style={{ color: 'var(--color-text-primary)' }}>{businessConfig.foundingYear}</p>
                        <p className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>Year Established</p>
                      </div>
                      <div className="text-center">
                        <p className="text-3xl font-bold" style={{ color: 'var(--color-text-primary)' }}>5th Gen</p>
                        <p className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>Family Owned</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-surface)' }} ref={leaderRef}>
        <div className="content-width">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 scroll-reveal">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  color: 'var(--color-text-primary)',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  letterSpacing: '-0.02em'
                }}
              >
                Board Certified Leadership
              </h2>
              <LuxuryDivider />
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
                Expert credentials you can trust
              </p>
            </div>

            <div
              className="rounded-2xl p-8 md:p-12 scroll-reveal"
              style={{
                background: 'linear-gradient(135deg, var(--color-bg-elevated) 0%, var(--color-bg-surface) 100%)',
                border: '1px solid var(--color-border-medium)',
                boxShadow: 'var(--shadow-luxury-lg)'
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                    style={{
                      background: 'rgba(5, 150, 105, 0.15)',
                      border: '1px solid rgba(5, 150, 105, 0.3)',
                    }}
                  >
                    <Award className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
                    <span className="text-sm font-semibold" style={{ color: 'var(--color-accent)' }}>
                      {businessConfig.credentials.arborist}
                    </span>
                  </div>
                  
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-2"
                    style={{
                      color: 'var(--color-text-primary)',
                      fontFamily: 'Plus Jakarta Sans, sans-serif'
                    }}
                  >
                    {businessConfig.leadership.name}
                  </h3>
                  <p className="text-lg mb-6" style={{ color: 'var(--color-accent)' }}>
                    {businessConfig.leadership.title}
                  </p>
                  
                  <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                    With decades of experience in pest control and arboriculture, Doc Pickhardt leads our team with unmatched expertise. His Board Certified Consulting Arborist credentials represent the highest level of professional achievement in the industry.
                  </p>

                  <p className="text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    Doc maintains memberships with the International Society of Arboriculture, National Pest Control Association, Tree Care Industry, and has served on the National Arborists Educational Committee.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                    Professional Certifications
                  </h4>
                  {[
                    businessConfig.credentials.pestManagement,
                    businessConfig.credentials.ornamental,
                    businessConfig.credentials.turfgrass,
                    businessConfig.credentials.miLicense
                  ].map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-xl"
                      style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--color-border-subtle)'
                      }}
                    >
                      <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                      <span style={{ color: 'var(--color-text-secondary)' }}>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }} ref={credentialsRef}>
        <div className="content-width">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 scroll-reveal">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  color: 'var(--color-text-primary)',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  letterSpacing: '-0.02em'
                }}
              >
                Our IPM Methodology
              </h2>
              <LuxuryDivider />
              <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
                Integrated Pest Management is our science-based approach that sets us apart from conventional pest control
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Target,
                  title: 'Targeted Treatment',
                  description: 'We apply treatments only where pests are present, not wasteful scheduled spraying.'
                },
                {
                  icon: TreeDeciduous,
                  title: 'Life Cycle Knowledge',
                  description: 'Understanding insect biology is paramount to effective, long-term control.'
                },
                {
                  icon: Leaf,
                  title: 'Organic Materials',
                  description: 'We use botanical products and naturally occurring materials whenever possible.'
                },
                {
                  icon: Shield,
                  title: 'Prevention Focus',
                  description: 'Monitoring, inspections, and evaluations to prevent problems before they start.'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="scroll-reveal p-6 rounded-2xl"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    background: 'linear-gradient(135deg, var(--color-bg-surface) 0%, var(--color-bg-elevated) 100%)',
                    border: '1px solid var(--color-border-subtle)'
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.15) 0%, rgba(5, 150, 105, 0.08) 100%)',
                      border: '1px solid var(--color-border-medium)'
                    }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    {item.description}
                  </p>
                </div>
              ))}
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
                Generations of families have trusted us with their homes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <StatCard
                value={`${businessConfig.yearsExperience}+`}
                label="Years in Business"
                description={`Since ${businessConfig.foundingYear}`}
                delay={0}
              />
              <StatCard
                value="5th"
                label="Generation"
                description="Family-owned"
                delay={100}
              />
              <StatCard
                value={`${businessConfig.employeeCount}`}
                label="Team Members"
                description="Expert technicians"
                delay={200}
              />
              <StatCard
                value="47+"
                label="Years Retained"
                description="Longest customer"
                delay={300}
              />
            </div>

            <div
              className="rounded-2xl p-8 scroll-reveal"
              style={{
                background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.1) 0%, rgba(5, 150, 105, 0.05) 100%)',
                border: '1px solid rgba(5, 150, 105, 0.2)'
              }}
            >
              <div className="flex items-start gap-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div>
                  <p className="text-lg italic mb-4" style={{ color: 'var(--color-text-primary)' }}>
                    "We have been using American Pest Control since 1977. Couldn't ask for better people! I would refer them to anyone."
                  </p>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
                    <span className="font-semibold" style={{ color: 'var(--color-text-secondary)' }}>
                      Deborah K. — Customer since 1977 (47+ years)
                    </span>
                  </div>
                </div>
              </div>
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
                const icons = [Leaf, Users, Award];
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
                  "Honor the Earth and Its Inhabitants"
                </h2>

                <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                  This isn't just our motto—it's a pledge every American Pest Control employee must sign 
                  upon employment. For over 125 years, we've believed that effective pest control doesn't 
                  have to harm the environment.
                </p>

                <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                  We use organic and botanical products, practice Integrated Pest Management, and 
                  treat every home with the same care we'd want for our own families.
                </p>

                <div
                  className="inline-block px-6 py-3 rounded-xl font-semibold"
                  style={{
                    background: 'rgba(5, 150, 105, 0.15)',
                    border: '1px solid rgba(5, 150, 105, 0.3)',
                    color: 'var(--color-accent)'
                  }}
                >
                  Proudly Serving Metro Detroit Since 1900
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Experience the Difference"
        subtitle="Join thousands of satisfied Michigan families who trust American Pest Control"
      />
    </div>
  );
}
