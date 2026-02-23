import { Link } from 'react-router-dom';
import { businessConfig } from '../config';
import PremiumAccordion from './PremiumAccordion';

interface MiniSitemapProps {
  variant?: 'light' | 'dark';
  defaultOpenDesktop?: boolean;
  defaultOpenMobile?: boolean;
}

export default function MiniSitemap({
  variant = 'dark',
  defaultOpenDesktop = true,
  defaultOpenMobile = false
}: MiniSitemapProps) {
  const isDark = variant === 'dark';

  const renderLinks = (links: Array<{ label: string; href: string }>) => (
    <ul className="space-y-2.5">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            to={link.href}
            className="text-sm transition-all duration-300 relative inline-block group"
            style={{
              color: isDark ? 'rgba(255, 255, 255, 0.7)' : 'var(--color-text-secondary)'
            }}
          >
            <span className="relative">
              {link.label}
              <span
                className="absolute bottom-0 left-0 w-0 h-[1px] group-hover:w-full transition-all duration-500"
                style={{
                  background: isDark
                    ? 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)'
                    : 'linear-gradient(90deg, transparent, var(--color-accent), transparent)'
                }}
              />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );

  const servicesSection = {
    title: businessConfig.footer.servicesTitle,
    links: [
      ...businessConfig.services.slice(0, 8).map(service => ({
        label: service.name,
        href: `/services/${service.slug}`
      })),
      ...(businessConfig.services.length > 8 ? [{ label: 'View All Services', href: '/services' }] : [])
    ]
  };

  const locationsSection = {
    title: businessConfig.footer.areasTitle,
    content: (
      <div>
        <div className="flex flex-wrap gap-2 mb-3">
          {businessConfig.serviceAreas.slice(0, 10).map((area) => (
            <Link
              key={area.slug}
              to={`/areas/${area.slug}`}
              className="px-3 py-1.5 rounded-full text-xs transition-all duration-300"
              style={{
                background: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                color: isDark ? 'rgba(255, 255, 255, 0.8)' : 'var(--color-text-primary)'
              }}
            >
              {area.name}
            </Link>
          ))}
        </div>
        {businessConfig.serviceAreas.length > 10 && (
          <Link
            to="/locations"
            className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
            style={{ color: 'var(--color-accent)' }}
          >
            <span>See All Areas</span>
            <span>→</span>
          </Link>
        )}
      </div>
    )
  };

  const allSections = [
    ...businessConfig.footer.sitemap.sections,
    servicesSection,
    locationsSection
  ];

  return (
    <nav
      className="w-full"
      aria-label="Site map"
    >
      <div className="mb-6">
        <h2
          className="text-lg font-bold mb-1"
          style={{
            color: isDark ? 'white' : 'var(--color-text-primary)'
          }}
        >
          Site Navigation
        </h2>
        <p
          className="text-sm"
          style={{
            color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'var(--color-text-secondary)'
          }}
        >
          Quick access to all pages and services
        </p>
      </div>

      <div className="hidden lg:block">
        <div className="space-y-3">
          {allSections.map((section, index) => (
            <PremiumAccordion
              key={index}
              title={section.title}
              defaultOpen={defaultOpenDesktop}
              variant={variant}
            >
              {'content' in section ? section.content : renderLinks(section.links)}
            </PremiumAccordion>
          ))}
        </div>
      </div>

      <div className="lg:hidden">
        <div className="space-y-3">
          {allSections.map((section, index) => (
            <PremiumAccordion
              key={index}
              title={section.title}
              defaultOpen={defaultOpenMobile}
              variant={variant}
            >
              {'content' in section ? section.content : renderLinks(section.links)}
            </PremiumAccordion>
          ))}
        </div>
      </div>
    </nav>
  );
}
