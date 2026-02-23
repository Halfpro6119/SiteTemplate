import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { businessConfig } from '../config';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Areas', path: '/locations' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-header ${
        isScrolled ? 'py-3' : 'py-4'
      }`}
      style={{
        boxShadow: isScrolled ? 'var(--shadow-luxury-lg)' : 'none'
      }}
    >
      <div className="content-width">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            {'logoUrl' in businessConfig && businessConfig.logoUrl ? (
              <img
                src={businessConfig.logoUrl}
                alt={businessConfig.businessName}
                className="h-11 w-auto max-w-[180px] object-contain object-left transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center font-semibold text-xl transition-all duration-500 group-hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%)',
                  color: 'var(--color-text-inverse)',
                  boxShadow: '0 0 24px -8px var(--color-accent-glow)'
                }}
              >
                {businessConfig.businessName.charAt(0)}
              </div>
            )}
            <div>
              <div
                className="font-bold text-lg leading-tight transition-colors duration-300"
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  color: 'var(--color-text-primary)',
                  letterSpacing: '0.01em'
                }}
              >
                {businessConfig.businessName}
              </div>
              <div className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
                {businessConfig.tagline}
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="nav-link-modern text-sm font-semibold transition-colors duration-300"
                style={{
                  color: location.pathname === link.path ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                  letterSpacing: '0.01em'
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${businessConfig.phone}`}
              className="btn-primary"
              style={{ padding: '0.75rem 1.75rem', fontSize: '0.9375rem' }}
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg transition-colors"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--color-border-subtle)'
            }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" style={{ color: 'var(--color-text-primary)' }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: 'var(--color-text-primary)' }} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4" style={{ borderTop: '1px solid var(--color-border-subtle)' }}>
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm font-medium transition-colors py-2"
                  style={{
                    color: location.pathname === link.path
                      ? 'var(--color-accent)'
                      : 'var(--color-text-secondary)'
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 space-y-2">
                <a
                  href={`tel:${businessConfig.phone}`}
                  className="btn-primary w-full"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>
                <Link
                  to="/contact"
                  className="btn-secondary w-full"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Get Quote</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
