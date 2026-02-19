import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Check, HelpCircle } from 'lucide-react';
import { businessConfig } from '../config';
import { checkCovered } from '../lib/serviceAreaChecker';

export default function ServiceAreaChecker() {
  const config = businessConfig.areaChecker;
  const [value, setValue] = useState('');
  const [result, setResult] = useState<'idle' | 'covered' | 'unknown'>('idle');

  const handleCheck = () => {
    if (!value.trim()) return;
    setResult(checkCovered(value) ? 'covered' : 'unknown');
  };

  return (
    <div
      className="rounded-2xl p-8 max-w-lg mx-auto"
      style={{
        backgroundColor: 'var(--color-bg-surface)',
        border: '1px solid var(--color-border-subtle)',
        boxShadow: 'var(--shadow-luxury-sm)'
      }}
    >
      <h3
        className="text-xl font-bold mb-2 flex items-center justify-center gap-2"
        style={{ color: 'var(--color-text-primary)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
      >
        <MapPin className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
        {config?.title ?? 'In your area?'}
      </h3>
      <p className="text-sm mb-6 text-center" style={{ color: 'var(--color-text-secondary)' }}>
        We serve Stoke-on-Trent and a 15-mile radius.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setResult('idle');
          }}
          onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
          placeholder={config?.placeholder ?? 'Enter postcode or town'}
          className="flex-1 px-4 py-3 rounded-xl text-base"
          style={{
            backgroundColor: 'var(--color-bg-elevated)',
            border: '1px solid var(--color-border-medium)',
            color: 'var(--color-text-primary)'
          }}
          aria-label="Postcode or town"
        />
        <button
          type="button"
          onClick={handleCheck}
          className="btn-primary whitespace-nowrap px-6 py-3"
        >
          {config?.buttonText ?? 'Check coverage'}
        </button>
      </div>
      {result !== 'idle' && (
        <div
          className="mt-6 p-4 rounded-xl flex items-start gap-3"
          style={{
            backgroundColor: result === 'covered' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(255, 255, 255, 0.05)',
            border: `1px solid ${result === 'covered' ? 'rgba(34, 197, 94, 0.3)' : 'var(--color-border-medium)'}`
          }}
        >
          {result === 'covered' ? (
            <>
              <Check className="w-6 h-6 flex-shrink-0 text-green-500" />
              <div>
                <p className="font-semibold text-green-400">{config?.coveredMessage ?? 'Yes, we cover you.'}</p>
                <Link to="/contact" className="btn-primary inline-flex mt-3 text-sm py-2 px-4">
                  {config?.ctaAfterCovered ?? 'Book a survey'}
                </Link>
              </div>
            </>
          ) : (
            <>
              <HelpCircle className="w-6 h-6 flex-shrink-0" style={{ color: 'var(--color-text-tertiary)' }} />
              <div>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  {config?.notCoveredMessage ?? 'We mainly serve a 15-mile radius from Stoke. Contact us to confirm.'}
                </p>
                <Link to="/contact" className="btn-secondary inline-flex mt-3 text-sm py-2 px-4">
                  Contact us
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
