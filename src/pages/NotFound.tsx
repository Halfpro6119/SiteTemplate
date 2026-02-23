import { Link } from 'react-router-dom';
import { businessConfig } from '../config';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{ backgroundColor: 'var(--color-bg-base)' }}>
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-4" style={{ color: 'var(--color-text-primary)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          404
        </h1>
        <p className="text-xl mb-6" style={{ color: 'var(--color-text-secondary)' }}>
          Page not found. The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
          <a href={`tel:${businessConfig.phone}`} className="btn-secondary">
            Call {businessConfig.phoneDisplay ?? businessConfig.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
