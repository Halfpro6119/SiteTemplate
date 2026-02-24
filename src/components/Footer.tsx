import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronDown, ExternalLink, Facebook } from 'lucide-react';
import { businessConfig } from '../config';
import FooterClosingCTA from './FooterClosingCTA';
import TrustChipRow from './TrustChipRow';
import PremiumButton from './PremiumButton';
import MiniSitemap from './MiniSitemap';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)'
      }}
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 60 0 L 0 0 0 60" fill="none" stroke="white" stroke-width="1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23grid)" /%3E%3C/svg%3E")',
        }}
      />

      <div
        className="h-1 w-full"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)'
        }}
      />

      <div className="relative z-10">
        {businessConfig.footer.closingCTA.enabled && (
          <div className="container mx-auto px-4 pt-16">
            <FooterClosingCTA
              title={businessConfig.footer.closingCTA.title}
              subtitle={businessConfig.footer.closingCTA.subtitle}
              primaryText={businessConfig.footer.closingCTA.primaryText}
              primaryHref={businessConfig.footer.closingCTA.primaryHref}
              secondaryText={businessConfig.footer.closingCTA.secondaryText}
              secondaryHref={businessConfig.footer.closingCTA.secondaryHref}
            />
          </div>
        )}

        <div className="container mx-auto px-4 pt-16 pb-8">
          <div className="hidden lg:grid lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="mb-5">
                <img
                  src="/logo.png"
                  alt={`${businessConfig.businessName} - Est. ${businessConfig.foundingYear}`}
                  className="h-14 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-sm text-white/70 mb-6 leading-relaxed">
                {businessConfig.footer.brandStatement}
              </p>
              <TrustChipRow chips={businessConfig.footer.brandTrustChips} variant="dark" size="sm" />
            </div>

            <div>
              <h3 className="font-semibold mb-5 text-white">{businessConfig.footer.servicesTitle}</h3>
              <ul className="space-y-3">
                {businessConfig.services.slice(0, 8).map((service) => (
                  <li key={service.id}>
                    <Link
                      to="/services"
                      className="text-sm text-white/70 hover:text-white transition-all duration-300 relative inline-block group"
                    >
                      <span className="relative">
                        {service.name}
                        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-full transition-all duration-500" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-5 text-white">{businessConfig.footer.areasTitle}</h3>
              <p className="text-sm text-white/70 mb-4 leading-relaxed">
                {businessConfig.footer.areasDescription}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {businessConfig.serviceAreas.slice(0, 6).map((area, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 text-white/80"
                  >
                    {area}
                  </span>
                ))}
              </div>
              <Link
                to="/locations"
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
                style={{ color: 'var(--color-accent)' }}
              >
                <span>View All Areas</span>
                <span>→</span>
              </Link>
            </div>

            <div>
              <h3 className="font-semibold mb-5 text-white">{businessConfig.footer.contactTitle}</h3>
              <ul className="space-y-4 mb-6">
                <li>
                  <a
                    href={`tel:${businessConfig.phone}`}
                    className="flex items-start gap-2.5 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                    <span>{businessConfig.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${businessConfig.email}`}
                    className="flex items-start gap-2.5 text-sm text-white/70 hover:text-white transition-colors break-all"
                  >
                    <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                    <span>{businessConfig.email}</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-2.5 text-sm text-white/70">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                    <span>{businessConfig.address}</span>
                  </div>
                </li>
              </ul>
              <p className="text-xs text-white/60 mb-4">{businessConfig.footer.businessHours}</p>
              <div className="flex flex-col gap-2">
                <PremiumButton variant="primary" size="sm" href="/contact">
                  Get Quote
                </PremiumButton>
                {businessConfig.footer.socialLinks?.facebook && (
                  <a
                    href={businessConfig.footer.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm text-white/70 hover:text-white bg-white/5 border border-white/10 hover:border-white/20 transition-all"
                  >
                    <Facebook className="w-4 h-4" />
                    <span>Facebook</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="lg:hidden space-y-4 mb-12">
            <div>
              <div className="mb-5">
                <img
                  src="/logo.png"
                  alt={`${businessConfig.businessName} - Est. ${businessConfig.foundingYear}`}
                  className="h-12 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-sm text-white/70 mb-6 leading-relaxed">
                {businessConfig.footer.brandStatement}
              </p>
              <TrustChipRow chips={businessConfig.footer.brandTrustChips} variant="dark" size="sm" />
            </div>

            <div>
              <h3 className="font-semibold mb-5 text-white">{businessConfig.footer.contactTitle}</h3>
              <ul className="space-y-4 mb-6">
                <li>
                  <a
                    href={`tel:${businessConfig.phone}`}
                    className="flex items-start gap-2.5 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                    <span>{businessConfig.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${businessConfig.email}`}
                    className="flex items-start gap-2.5 text-sm text-white/70 hover:text-white transition-colors break-all"
                  >
                    <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} />
                    <span>{businessConfig.email}</span>
                  </a>
                </li>
              </ul>
              <p className="text-xs text-white/60 mb-4">{businessConfig.footer.businessHours}</p>
              <div className="flex flex-col gap-2">
                <PremiumButton variant="primary" size="sm" href="/contact">
                  Get Free Estimate
                </PremiumButton>
                <a
                  href={`tel:${businessConfig.phone.replace(/[^0-9]/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm text-white/70 hover:text-white bg-white/5 border border-white/10 hover:border-white/20 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {businessConfig.phone}</span>
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4">
              <button
                onClick={() => toggleAccordion('services')}
                className="flex items-center justify-between w-full py-3 text-white font-semibold"
              >
                <span>{businessConfig.footer.servicesTitle}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openAccordion === 'services' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openAccordion === 'services' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <ul className="space-y-3 py-3">
                  {businessConfig.services.slice(0, 8).map((service) => (
                    <li key={service.id}>
                      <Link
                        to="/services"
                        className="text-sm text-white/70 hover:text-white transition-colors"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4">
              <button
                onClick={() => toggleAccordion('areas')}
                className="flex items-center justify-between w-full py-3 text-white font-semibold"
              >
                <span>{businessConfig.footer.areasTitle}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openAccordion === 'areas' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openAccordion === 'areas' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="py-3">
                  <p className="text-sm text-white/70 mb-4 leading-relaxed">
                    {businessConfig.footer.areasDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {businessConfig.serviceAreas.slice(0, 6).map((area, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 text-white/80"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/locations"
                    className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    <span>View All Areas</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {businessConfig.footer.sitemap.enabled && (
            <div className="border-t border-white/10 pt-12 pb-12">
              <div className="max-w-4xl mx-auto">
                <MiniSitemap
                  variant="dark"
                  defaultOpenDesktop={true}
                  defaultOpenMobile={false}
                />
              </div>
            </div>
          )}

          <div className="border-t border-white/10 pt-8 mb-8">
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/60">
              {businessConfig.footer.trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-white/40" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-sm text-white/60 text-center md:text-left">
                © {currentYear} {businessConfig.businessName}. All rights reserved.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6">
                {businessConfig.footer.legalLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <a
                href="https://nextgensites.net"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors group"
              >
                <span>Designed by Riley Rogers</span>
                <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
