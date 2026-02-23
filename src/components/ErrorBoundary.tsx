import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    if (import.meta.env.PROD) {
      console.error('Application error:', error, errorInfo);
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-primary)] px-4">
          <div className="text-center max-w-md">
            <h1 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
              Something went wrong
            </h1>
            <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
              We&apos;re sorry. Please try refreshing the page or return home.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                type="button"
                onClick={() => this.setState({ hasError: false })}
                className="px-4 py-2 rounded-lg font-medium bg-[var(--color-primary)] text-white hover:opacity-90"
              >
                Try again
              </button>
              <Link
                to="/"
                className="px-4 py-2 rounded-lg font-medium border border-[var(--color-text-muted)] text-[var(--color-text-primary)] hover:bg-white/5"
              >
                Go home
              </Link>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
