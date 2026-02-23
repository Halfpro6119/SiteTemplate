import { Link } from 'react-router-dom';
import { Home, Phone } from 'lucide-react';
import { businessConfig } from '../config';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function NotFound() {
  useDocumentTitle('Page not found');
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-2" style={{ color: 'var(--color-text-tertiary)' }}>
          404
        </h1>
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
          Page not found
        </h2>
        <p className="mb-8" style={{ color: 'var(--color-text-secondary)' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 btn-primary"
          >
            <Home className="w-5 h-5" />
            Back to home
          </Link>
          <a
            href={`tel:${businessConfig.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center justify-center gap-2 btn-secondary"
          >
            <Phone className="w-5 h-5" />
            Call {businessConfig.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
