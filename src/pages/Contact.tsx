import { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { businessConfig } from '../config';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    postcode: '',
    serviceType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      await new Promise((r) => setTimeout(r, 800));
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', postcode: '', serviceType: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const cta = businessConfig.ctaTemplates.contact;

  return (
    <div className="min-h-screen">
      <PageHero
        title="Contact us"
        subtitle="Request a quote or get in touch. We typically respond within one working day."
      />

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }}>
        <div className="content-width">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3">
                <h2 className="section-title mb-2">Request a quote</h2>
                <p className="mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                  Fill in the form and we'll get back to you with a clear, no-obligation quote.
                </p>

                {submitStatus === 'success' && (
                  <div
                    className="mb-6 p-5 rounded-xl flex items-start gap-4"
                    style={{
                      background: 'rgba(91, 124, 153, 0.1)',
                      border: '1px solid var(--color-border-medium)'
                    }}
                  >
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>Message sent.</p>
                      <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>We'll be in touch soon.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div
                    className="mb-6 p-5 rounded-xl flex items-start gap-4"
                    style={{
                      background: 'rgba(239, 68, 68, 0.08)',
                      border: '1px solid rgba(239, 68, 68, 0.3)'
                    }}
                  >
                    <AlertCircle className="w-6 h-6 flex-shrink-0 text-red-400" />
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>Something went wrong.</p>
                      <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Please try again or call us on 01842 762719.</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="modern-label">Name *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="modern-input" placeholder="Your name" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="modern-label">Phone *</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="modern-input" placeholder="01842 762719" />
                    </div>
                    <div>
                      <label htmlFor="email" className="modern-label">Email *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="modern-input" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="postcode" className="modern-label">Postcode</label>
                    <input type="text" id="postcode" name="postcode" value={formData.postcode} onChange={handleChange} className="modern-input" placeholder="e.g. IP33 1XX" />
                  </div>
                  <div>
                    <label htmlFor="serviceType" className="modern-label">Service type</label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="modern-input"
                    >
                      <option value="">Select a service</option>
                      {businessConfig.contactForm.serviceTypes.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="modern-label">Message *</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="modern-textarea" placeholder="Describe your project or enquiry..." />
                  </div>
                  <p className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
                    You can attach photos when we reply, or describe your project in the message above.
                  </p>
                  <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
                    {isSubmitting ? 'Sending...' : 'Send message'}
                  </button>
                </form>
              </div>

              <div className="lg:col-span-2">
                <div
                  className="rounded-2xl p-8 sticky top-28"
                  style={{
                    background: 'linear-gradient(135deg, var(--color-bg-surface) 0%, var(--color-bg-elevated) 100%)',
                    border: '1px solid var(--color-border-subtle)'
                  }}
                >
                  <h3 className="text-xl font-semibold mb-6" style={{ color: 'var(--color-text-primary)', fontFamily: 'Instrument Serif, serif' }}>
                    Direct contact
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-text-tertiary)' }}>Call</p>
                      <a href="tel:01842762719" className="text-lg font-semibold" style={{ color: 'var(--color-text-primary)' }}>01842 762719</a>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-text-tertiary)' }}>Email</p>
                      <a href={`mailto:${businessConfig.email}`} className="font-semibold break-all" style={{ color: 'var(--color-text-primary)' }}>{businessConfig.email}</a>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1" style={{ color: 'var(--color-text-tertiary)' }}>Service area</p>
                      <p style={{ color: 'var(--color-text-primary)' }}>{cta.serviceArea}</p>
                    </div>
                    <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      {cta.responseTime}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
