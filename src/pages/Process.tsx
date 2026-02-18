import { Link } from 'react-router-dom';
import { businessConfig } from '../config';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import LuxuryDivider from '../components/LuxuryDivider';
import PremiumAccordion from '../components/PremiumAccordion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FileText, Phone, CheckCircle2 } from 'lucide-react';

export default function Process() {
  const sectionRef = useScrollReveal();
  const faqRef = useScrollReveal();

  return (
    <div className="min-h-screen">
      <PageHero
        title="What happens after you contact us"
        subtitle="Clear steps, written quotes, and work completed with respect and attention to detail."
      />

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }} ref={sectionRef}>
        <div className="content-width max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Process' }]} />
          <div className="space-y-4 mb-16 scroll-reveal">
            <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              {businessConfig.processCopy.reassurance}
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              You get a <strong style={{ color: 'var(--color-text-primary)' }}>{businessConfig.processCopy.writtenQuote}</strong> We discuss options for your situation and look for savings where we can—but we believe <strong style={{ color: 'var(--color-text-primary)' }}>{businessConfig.processCopy.valueLed}</strong>
            </p>
          </div>

          <div className="space-y-8 mb-20">
            {businessConfig.processSteps.map((item, index) => (
              <div
                key={item.step}
                className="scroll-reveal flex gap-6 items-start"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg"
                  style={{
                    background: 'rgba(91, 124, 153, 0.15)',
                    border: '1px solid var(--color-border-medium)',
                    color: 'var(--color-accent-light)',
                    fontFamily: 'DM Sans, sans-serif'
                  }}
                >
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--color-text-primary)', fontFamily: 'Instrument Serif, serif' }}>
                    {item.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-reveal mb-24">
            <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
              <FileText className="w-5 h-5" />
              <span>Start your quote</span>
            </Link>
            <a href="tel:01842762719" className="btn-secondary inline-flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              <span>Call 01842 762719</span>
            </a>
          </div>

          <LuxuryDivider />

          <h2 className="section-title text-center mb-10 scroll-reveal">Common questions</h2>
          <div className="space-y-3 mb-16" ref={faqRef}>
            {businessConfig.faq.map((item, index) => (
              <div key={index} className="scroll-reveal">
                <PremiumAccordion title={item.question} defaultOpen={index === 0} variant="light">
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                    {item.answer}
                  </p>
                </PremiumAccordion>
              </div>
            ))}
          </div>

          <div
            className="rounded-2xl p-8 md:p-10 text-center scroll-reveal"
            style={{
              background: 'linear-gradient(135deg, var(--color-bg-surface) 0%, var(--color-bg-elevated) 100%)',
              border: '1px solid var(--color-border-subtle)'
            }}
          >
            <CheckCircle2 className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--color-accent)' }} />
            <h3 className="text-2xl font-semibold mb-2" style={{ color: 'var(--color-text-primary)', fontFamily: 'Instrument Serif, serif' }}>
              Ready to get started?
            </h3>
            <p className="mb-6 max-w-xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              Request a quote or call us for a no-obligation chat. We serve Norfolk and Suffolk, including Bury St Edmunds and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Request a Quote
              </Link>
              <a href="tel:01842762719" className="btn-secondary">
                Call 01842 762719
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
