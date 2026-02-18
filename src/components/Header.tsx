import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, FileText } from 'lucide-react';
import { businessConfig } from '../config';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Process', path: '/process' },
  { name: 'Areas', path: '/areas' },
  { name: 'About', path: '/about' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Contact', path: '/contact' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const linkClass = (path: string) =>
    `text-sm font-medium transition-colors duration-200 nav-link-modern ${
      location.pathname === path ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-header ${
        isScrolled ? 'py-2.5' : 'py-3.5'
      }`}
      style={{
        boxShadow: isScrolled ? '0 1px 0 var(--color-border-subtle)' : 'none'
      }}
    >
      <div className="content-width">
        <div className="flex items-center justify-between gap-4">
          {/* Logo: full brand image, clear spacing from nav */}
          <Link
            to="/"
            className="flex items-center shrink-0 mr-8 group transition-opacity duration-200 hover:opacity-90"
            aria-label={`${businessConfig.businessName} - ${businessConfig.tagline}`}
          >
            <img
              src="/og-image.JPG"
              alt={`${businessConfig.businessName} - ${businessConfig.tagline}`}
              className="h-10 w-auto sm:h-11 object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center min-w-0 max-w-2xl">
            {NAV_LINKS.map((link) => (
              <Link key={link.path} to={link.path} className={`${linkClass(link.path)} whitespace-nowrap`}>
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs: phone as simple link, then primary CTA */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${businessConfig.phoneRaw}`}
              className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 nav-link-modern"
              style={{ color: 'var(--color-text-secondary)' }}
              aria-label={`Call ${businessConfig.phone}`}
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>{businessConfig.phone}</span>
            </a>
            <Link
              to="/contact"
              className="btn-primary flex items-center gap-2 px-4 py-2.5 text-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Request a Quote</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2.5 rounded-lg transition-colors hover:bg-white/5"
            style={{ color: 'var(--color-text-primary)' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden mt-4 pt-4 pb-2"
            style={{ borderTop: '1px solid var(--color-border-subtle)' }}
          >
            <nav className="flex flex-col gap-0.5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-3 px-2 rounded-md text-sm font-medium transition-colors ${linkClass(link.path)}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2 mt-4 pt-4" style={{ borderTop: '1px solid var(--color-border-subtle)' }}>
              <a
                href={`tel:${businessConfig.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-medium transition-colors"
                style={{ color: 'var(--color-text-secondary)' }}
                aria-label={`Call ${businessConfig.phone}`}
              >
                <Phone className="w-4 h-4" />
                {businessConfig.phone}
              </a>
              <Link
                to="/contact"
                className="btn-primary flex items-center justify-center gap-2 py-3 px-4 text-sm"
              >
                <FileText className="w-4 h-4" />
                Request a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
