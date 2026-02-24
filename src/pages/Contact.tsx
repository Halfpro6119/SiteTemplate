import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, Shield, Zap, Home, Building2, Calendar } from 'lucide-react';
import { businessConfig } from '../config';
import { supabase } from '../lib/supabase';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import ContactCTAPanel from '../components/ContactCTAPanel';

export default function Contact() {
  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    email: '',
    project_type: '',
    fence_type: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      setSubmitStatus('success');
      setFormData({
        full_name: '',
        phone: '',
        email: '',
        project_type: '',
        fence_type: '',
        timeline: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    { value: 'residential', label: 'Residential', icon: Home },
    { value: 'commercial', label: 'Commercial', icon: Building2 }
  ];

  const fenceTypes = [
    'Wood Fencing',
    'Vinyl Fencing',
    'Chain Link Fencing',
    'Ornamental Aluminum',
    'Commercial/Industrial',
    'Custom/Other',
    'Not Sure - Need Advice'
  ];

  const timelineOptions = [
    'As soon as possible',
    'Within 2 weeks',
    'Within 1 month',
    'Within 2-3 months',
    'Just getting quotes/planning'
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="Get Your Free Fence Estimate"
        subtitle="Tell us about your project and we'll provide a detailed, no-obligation quote within 24 hours"
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
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                    style={{
                      background: 'rgba(5, 150, 105, 0.1)',
                      border: '1px solid rgba(5, 150, 105, 0.2)',
                      color: 'var(--color-accent)',
                      fontSize: '0.875rem',
                      fontWeight: 600
                    }}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Free estimates - usually same day response</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4" style={{ letterSpacing: '-0.02em', color: 'var(--color-text-primary)' }}>
                    Request Your Free Estimate
                  </h2>
                  <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                    Complete the form below and we'll contact you to discuss your fencing needs
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
                        Estimate request received!
                      </p>
                      <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        We'll review your project details and contact you within 24 hours with your free estimate.
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
                  <div className="mb-8">
                    <label className="modern-label mb-3">Project Type *</label>
                    <div className="grid grid-cols-2 gap-4">
                      {projectTypes.map((type) => {
                        const IconComponent = type.icon;
                        const isSelected = formData.project_type === type.value;
                        return (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => setFormData({ ...formData, project_type: type.value })}
                            className={`p-4 rounded-xl border-2 transition-all duration-300 flex items-center gap-3 ${
                              isSelected ? 'scale-[1.02]' : 'hover:scale-[1.01]'
                            }`}
                            style={{
                              borderColor: isSelected ? 'var(--color-accent)' : 'var(--color-border-medium)',
                              background: isSelected 
                                ? 'rgba(5, 150, 105, 0.1)' 
                                : 'rgba(255, 255, 255, 0.03)',
                              boxShadow: isSelected ? '0 0 20px -8px var(--color-accent-glow)' : 'none'
                            }}
                          >
                            <div
                              className="w-10 h-10 rounded-lg flex items-center justify-center"
                              style={{
                                background: isSelected 
                                  ? 'var(--color-accent)' 
                                  : 'rgba(255, 255, 255, 0.05)',
                                color: isSelected ? 'white' : 'var(--color-text-tertiary)'
                              }}
                            >
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <span 
                              className="font-semibold"
                              style={{ color: isSelected ? 'var(--color-accent)' : 'var(--color-text-secondary)' }}
                            >
                              {type.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="fence_type" className="modern-label">
                      Fence Type *
                    </label>
                    <select
                      id="fence_type"
                      name="fence_type"
                      value={formData.fence_type}
                      onChange={handleChange}
                      required
                      className="modern-input"
                      style={{ cursor: 'pointer' }}
                    >
                      <option value="">Select fence type...</option>
                      {fenceTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="modern-label">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="modern-input"
                      style={{ cursor: 'pointer' }}
                    >
                      <option value="">When do you need this done?</option>
                      {timelineOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

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
                      placeholder="John Smith"
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
                        placeholder="(317) 555-1234"
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
                        required
                        onChange={handleChange}
                        className="modern-input"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="modern-label"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="modern-textarea"
                      placeholder="Tell us about your project: approximate fence length, property details, any specific requirements..."
                    />
                  </div>

                  <div
                    className="p-4 rounded-xl flex items-start gap-3"
                    style={{
                      background: 'rgba(5, 150, 105, 0.08)',
                      border: '1px solid rgba(5, 150, 105, 0.2)'
                    }}
                  >
                    <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                    <div>
                      <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>
                        No obligation, no pressure
                      </p>
                      <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        Your estimate is completely free. We'll provide honest pricing with no hidden fees.
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.project_type}
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
                        <span>Get My Free Estimate</span>
                        <span>→</span>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center" style={{ color: 'var(--color-text-tertiary)' }}>
                    By submitting, you agree to be contacted about your fence estimate. We respect your privacy.
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
                          background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.15) 0%, rgba(5, 150, 105, 0.08) 100%)',
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
                          {businessConfig.phone}
                        </a>
                        <p className="text-xs mt-1" style={{ color: 'var(--color-text-tertiary)' }}>
                          Mon-Fri: 7am-6pm, Sat: 8am-4pm
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110"
                        style={{
                          background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.15) 0%, rgba(5, 150, 105, 0.08) 100%)',
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
                          Usually respond same day
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110"
                        style={{
                          background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.15) 0%, rgba(5, 150, 105, 0.08) 100%)',
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
                          & Indianapolis metro area
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="rounded-2xl p-8 mb-8"
                  style={{
                    background: 'linear-gradient(135deg, rgba(5, 150, 105, 0.12) 0%, rgba(5, 150, 105, 0.06) 100%)',
                    border: '1px solid rgba(5, 150, 105, 0.2)',
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
                      <Clock className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold" style={{ color: 'var(--color-text-primary)' }}>
                      Need it fast?
                    </h3>
                  </div>
                  <p className="mb-5" style={{ color: 'var(--color-text-secondary)' }}>
                    For urgent projects or immediate questions, give us a call. We're here to help.
                  </p>
                  <a
                    href={`tel:${businessConfig.phone}`}
                    className="btn-primary inline-flex w-full justify-center"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call {businessConfig.phone}</span>
                  </a>
                </div>

                <div
                  className="rounded-2xl p-6"
                  style={{
                    background: 'var(--color-bg-surface)',
                    border: '1px solid var(--color-border-subtle)'
                  }}
                >
                  <h3 className="font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                    Why Choose Secure Links?
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Free, no-obligation estimates',
                      'Transparent, competitive pricing',
                      'Licensed & fully insured',
                      'Residential & commercial expertise',
                      'Quality materials guaranteed'
                    ].map((item, index) => (
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
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
        <div className="content-width">
          <div className="max-w-4xl mx-auto">
            <ContactCTAPanel
              title={businessConfig.ctaTemplates.contact.title}
              responseTime={businessConfig.ctaTemplates.contact.responseTime}
              phoneHref={`tel:${businessConfig.phone}`}
              quoteHref="#contact"
              trustChips={businessConfig.ctaTemplates.contact.trustChips}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
