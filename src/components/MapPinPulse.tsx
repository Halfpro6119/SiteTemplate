import { MapPin } from 'lucide-react';

export default function MapPinPulse() {
  return (
    <div className="relative inline-flex items-center justify-center" aria-hidden="true">
      <span
        className="absolute inline-flex h-8 w-8 rounded-full opacity-40"
        style={{
          backgroundColor: 'var(--color-accent)',
          animation: 'map-pin-pulse 1.5s ease-out infinite'
        }}
      />
      <MapPin
        className="relative w-6 h-6"
        style={{ color: 'var(--color-accent)' }}
      />
    </div>
  );
}
