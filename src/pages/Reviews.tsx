import { Shield, Award, Users, CheckCircle, Clock, Building2 } from 'lucide-react';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import LuxuryDivider from '../components/LuxuryDivider';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Reviews() {
  const credentialsRef = useScrollReveal();
  const statsRef = useScrollReveal();

  return (
    <div className="min-h-screen">
      <PageHero
        title="Our Credentials & Trust"
        subtitle="Professional certifications, industry training, and a commitment to quality that speaks for itself"
      >
        <div className="mt-8">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Reviews' }
          ]} />
        </div>
      </PageHero>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }} ref={credentialsRef}>
        <div className="content-width">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 scroll-reveal">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  color: 'var(--color-text-primary)',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  letterSpacing: '-0.02em'
                }}
              >
                Why Trust Secure Links Fence?
              </h2>
              <LuxuryDivider />
              <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                Our professional credentials and industry certifications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  icon: Award,
                  title: 'BBB Accredited Business',
                  description: 'We maintain accreditation with the Better Business Bureau, demonstrating our commitment to ethical business practices and customer satisfaction.'
                },
                {
                  icon: Shield,
                  title: 'AFA Field Training Graduate',
                  description: 'Owner Nick Beard is a graduate of the American Fence Association\'s Field Training School in Athens, Georgia—the industry\'s premier training program.'
                },
                {
                  icon: CheckCircle,
                  title: 'OSHA Certified',
                  description: 'Our team maintains OSHA safety certifications, ensuring every job site meets the highest safety standards for workers and property owners.'
                },
                {
                  icon: Building2,
                  title: 'MICCS Certified',
                  description: 'Military Installation Compatible Contractor certification qualifies us for government and military base projects with strict security requirements.'
                }
              ].map((credential, index) => {
                const IconComponent = credential.icon;
                return (
                  <div
                    key={index}
                    className="scroll-reveal rounded-2xl p-6"
                    style={{
                      background: 'linear-gradient(135deg, var(--color-bg-surface) 0%, var(--color-bg-elevated) 100%)',
                      border: '1px solid var(--color-border-subtle)',
                      boxShadow: 'var(--shadow-luxury-md)',
                      transitionDelay: `${index * 100}ms`
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.15) 0%, rgba(5, 150, 105, 0.08) 100%)',
                        border: '1px solid var(--color-border-medium)'
                      }}
                    >
                      <IconComponent className="w-6 h-6" style={{ color: 'var(--color-accent)' }} />
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                      {credential.title}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      {credential.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div
              className="scroll-reveal rounded-2xl p-8 text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.08) 0%, rgba(5, 150, 105, 0.04) 100%)',
                border: '1px solid rgba(5, 150, 105, 0.2)'
              }}
            >
              <Users className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--color-accent)' }} />
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                50+ Years Combined Experience
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Our installation team brings over five decades of combined fence industry experience, 
                with owner Nick Beard contributing 20+ years of expertise in residential and commercial fencing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-surface)' }} ref={statsRef}>
        <div className="content-width">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 scroll-reveal">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{
                  color: 'var(--color-text-primary)',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  letterSpacing: '-0.02em'
                }}
              >
                Our Track Record
              </h2>
              <LuxuryDivider />
              <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                Trusted by homeowners and businesses across Indianapolis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="scroll-reveal text-center" style={{ transitionDelay: '0ms' }}>
                <div
                  className="text-5xl font-bold mb-3"
                  style={{ color: 'var(--color-accent)' }}
                >
                  2018
                </div>
                <p className="text-lg font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>
                  Established
                </p>
                <p className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
                  Serving Indianapolis since founding
                </p>
              </div>
              <div className="scroll-reveal text-center" style={{ transitionDelay: '100ms' }}>
                <div
                  className="text-5xl font-bold mb-3"
                  style={{ color: 'var(--color-accent)' }}
                >
                  20+
                </div>
                <p className="text-lg font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>
                  Years Experience
                </p>
                <p className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
                  Owner Nick Beard's industry expertise
                </p>
              </div>
              <div className="scroll-reveal text-center" style={{ transitionDelay: '200ms' }}>
                <div
                  className="text-5xl font-bold mb-3"
                  style={{ color: 'var(--color-accent)' }}
                >
                  50+
                </div>
                <p className="text-lg font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>
                  Combined Years
                </p>
                <p className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
                  Team's total fence industry experience
                </p>
              </div>
            </div>

            <div
              className="scroll-reveal rounded-2xl p-8 md:p-12"
              style={{
                background: 'var(--color-bg-base)',
                border: '1px solid var(--color-border-subtle)'
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%)'
                  }}
                >
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
                    Customer Reviews Coming Soon
                  </h3>
                </div>
              </div>
              <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
                We're in the process of collecting and verifying customer testimonials to share on our website. 
                In the meantime, we invite you to ask for references when you request your free estimate—we're 
                happy to connect you with past customers who can speak to our work quality and professionalism.
              </p>
              <div className="flex flex-wrap gap-3">
                {['BBB Accredited', 'Licensed', 'Fully Insured', 'Free Estimates'].map((badge, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full text-sm font-semibold"
                    style={{
                      background: 'rgba(5, 150, 105, 0.1)',
                      border: '1px solid rgba(5, 150, 105, 0.2)',
                      color: 'var(--color-accent)'
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }}>
        <div className="content-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{
                color: 'var(--color-text-primary)',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                letterSpacing: '-0.02em'
              }}
            >
              Experience Our Quality Firsthand
            </h2>
            <p className="text-lg mb-8" style={{ color: 'var(--color-text-secondary)' }}>
              The best way to understand our commitment to quality is to see our work in person. 
              Contact us for a free estimate and we'll be happy to provide references from past 
              customers in your area.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Free Estimates', sublabel: 'No obligation quotes' },
                { label: 'References Available', sublabel: 'Upon request' },
                { label: 'Quality Guaranteed', sublabel: 'On every project' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl"
                  style={{
                    background: 'var(--color-bg-surface)',
                    border: '1px solid var(--color-border-subtle)'
                  }}
                >
                  <p className="font-bold" style={{ color: 'var(--color-text-primary)' }}>{item.label}</p>
                  <p className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>{item.sublabel}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Get Started?"
        subtitle="Request your free estimate and ask for customer references in your area"
      />
    </div>
  );
}
