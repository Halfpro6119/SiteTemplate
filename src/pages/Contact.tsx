import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, CheckCircle, Shield, Zap } from 'lucide-react';
import { businessConfig } from '../config';
import { supabase } from '../lib/supabase';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import ContactCTAPanel from '../components/ContactCTAPanel';
import GasSafeBadge from '../components/GasSafeBadge';

export default function Contact() {
  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (supabase) {
        const { error } = await supabase
          .from('contact_submissions')
          .insert([formData]);

        if (error) throw error;
      } else {
        console.log('Contact form submission (no database configured):', formData);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      setSubmitStatus('success');
      setFormData({
        full_name: '',
        phone: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <PageHero
        title="Get Your Free Quote"
        subtitle="Speak to a specialist. We usually respond within 1 hour. 24/7 emergency available."
      >
        <div className="mt-8">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Contact' }
          ]} />
        </div>
      </PageHero>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }}>
        <div className="content-width">
          <div className="max-w-7xl mx-auto">
            <div className="hero-split">
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4" style={{ letterSpacing: '-0.02em', color: 'var(--color-text-primary)' }}>
                    Send Us a Message
                  </h2>
                  <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                    Fill out the form and we'll get back to you within 1 hour. 24/7 emergency? Call 0131 202 1032
                  </p>
                </div>

                {submitStatus === 'success' && (
                  <div
                    className="mb-6 p-5 rounded-xl flex items-start gap-4"
                    style={{
                      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.05) 100%)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      boxShadow: '0 4px 16px -8px rgba(16, 185, 129, 0.3)'
                    }}
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: 'rgba(16, 185, 129, 0.2)',
                        color: '#10b981'
                      }}
                    >
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p
                        className="font-bold mb-1"
                        style={{ color: 'var(--color-text-primary)' }}
                      >
                        Message sent successfully!
                      </p>
                      <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        We will get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div
                    className="mb-6 p-5 rounded-xl flex items-start gap-4"
                    style={{
                      background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(220, 38, 38, 0.05) 100%)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      boxShadow: '0 4px 16px -8px rgba(239, 68, 68, 0.3)'
                    }}
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: 'rgba(239, 68, 68, 0.2)',
                        color: '#ef4444'
                      }}
                    >
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <p
                        className="font-bold mb-1"
                        style={{ color: 'var(--color-text-primary)' }}
                      >
                        Something went wrong
                      </p>
                      <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        Please try again or call us directly at {businessConfig.phone}
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="full_name"
                      className="modern-label"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="full_name"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      required
                      className="modern-input"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="modern-label"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="modern-input"
                        placeholder="0131 202 1032"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="modern-label"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="modern-input"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="modern-label"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={7}
                      className="modern-textarea"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <div
                    className="p-4 rounded-xl flex items-start gap-3"
                    style={{
                      background: 'rgba(6, 182, 212, 0.08)',
                      border: '1px solid rgba(6, 182, 212, 0.2)'
                    }}
                  >
                    <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                    <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      Your information is secure and will only be used to respond to your inquiry.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
                    style={{ fontSize: '1.0625rem', padding: '1.125rem 2rem' }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <span>→</span>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center" style={{ color: 'var(--color-text-tertiary)' }}>
                    By submitting this form, you agree to be contacted about your inquiry.
                  </p>
                </form>
              </div>

              <div>
                <div
                  className="rounded-2xl p-8 mb-8"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-bg-surface) 0%, var(--color-bg-elevated) 100%)',
                    border: '1px solid var(--color-border-subtle)',
                    boxShadow: 'var(--shadow-luxury-md)'
                  }}
                >
                  <h2
                    className="text-2xl font-bold mb-6"
                    style={{
                      color: 'var(--color-text-primary)',
                      fontFamily: 'Plus Jakarta Sans, sans-serif'
                    }}
                  >
                    Contact Information
                  </h2>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110"
                        style={{
                          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(6, 182, 212, 0.08) 100%)',
                          border: '1px solid var(--color-border-medium)',
                          boxShadow: '0 0 20px -8px var(--color-accent-glow)'
                        }}
                      >
                        <Phone className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
                      </div>
                      <div>
                        <h3
                          className="font-semibold mb-1 text-sm"
                          style={{ color: 'var(--color-text-tertiary)' }}
                        >
                          Phone
                        </h3>
                        <a
                          href={`tel:${businessConfig.phone}`}
                          className="font-bold text-lg hover:text-accent transition-colors"
                          style={{ color: 'var(--color-text-primary)' }}
                        >
                          {businessConfig.phoneDisplay ?? businessConfig.phone}
                        </a>
                        <p className="text-xs mt-1" style={{ color: 'var(--color-text-tertiary)' }}>
                          24/7 Emergency | Mon-Fri: 8am-6pm
                        </p>
                        {'phoneSecondaryDisplay' in businessConfig && businessConfig.phoneSecondaryDisplay && (
                          <p className="text-sm mt-2" style={{ color: 'var(--color-text-secondary)' }}>
                            West Lothian: <a href={`tel:${businessConfig.phoneSecondary}`} className="font-semibold hover:opacity-80" style={{ color: 'var(--color-accent)' }}>{businessConfig.phoneSecondaryDisplay}</a>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110"
                        style={{
                          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(6, 182, 212, 0.08) 100%)',
                          border: '1px solid var(--color-border-medium)',
                          boxShadow: '0 0 20px -8px var(--color-accent-glow)'
                        }}
                      >
                        <Mail className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
                      </div>
                      <div>
                        <h3
                          className="font-semibold mb-1 text-sm"
                          style={{ color: 'var(--color-text-tertiary)' }}
                        >
                          Email
                        </h3>
                        <a
                          href={`mailto:${businessConfig.email}`}
                          className="font-semibold hover:text-accent transition-colors break-all"
                          style={{ color: 'var(--color-text-primary)' }}
                        >
                          {businessConfig.email}
                        </a>
                        <p className="text-xs mt-1" style={{ color: 'var(--color-text-tertiary)' }}>
                          24-hour response time
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110"
                        style={{
                          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(6, 182, 212, 0.08) 100%)',
                          border: '1px solid var(--color-border-medium)',
                          boxShadow: '0 0 20px -8px var(--color-accent-glow)'
                        }}
                      >
                        <MapPin className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
                      </div>
                      <div>
                        <h3
                          className="font-semibold mb-1 text-sm"
                          style={{ color: 'var(--color-text-tertiary)' }}
                        >
                          Service Area
                        </h3>
                        <p className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                          {businessConfig.city}, {businessConfig.state}
                        </p>
                        <p className="text-xs mt-1" style={{ color: 'var(--color-text-tertiary)' }}>
                          & surrounding areas
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="rounded-2xl p-8"
                  style={{
                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.12) 0%, rgba(6, 182, 212, 0.06) 100%)',
                    border: '1px solid rgba(6, 182, 212, 0.2)',
                    boxShadow: '0 4px 24px -8px var(--color-accent-glow)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: 'var(--color-accent)',
                        color: 'var(--color-text-inverse)'
                      }}
                    >
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold" style={{ color: 'var(--color-text-primary)' }}>
                      Prefer to chat?
                    </h3>
                  </div>
                  <p className="mb-5" style={{ color: 'var(--color-text-secondary)' }}>
                    Send us a message on WhatsApp for instant communication
                  </p>
                  <a
                    href={`https://wa.me/${businessConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex w-full justify-center"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
        <div className="content-width">
          <div className="max-w-4xl mx-auto">
            <ContactCTAPanel
              title={businessConfig.ctaTemplates.contact.title}
              responseTime={businessConfig.ctaTemplates.contact.responseTime}
              phoneHref={`tel:${businessConfig.phone}`}
              quoteHref="/contact"
              trustChips={businessConfig.ctaTemplates.contact.trustChips}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
