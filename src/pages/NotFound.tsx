import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
          Page not found
        </h1>
        <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
          The page you're looking for doesn't exist.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn-primary">
            Home
          </Link>
          <Link to="/services" className="btn-secondary">
            Services
          </Link>
        </div>
      </div>
    </div>
  );
}
