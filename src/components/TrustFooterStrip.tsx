import { BadgeCheck, MapPin, DollarSign, Award } from 'lucide-react';

export default function TrustFooterStrip() {
  const trustItems = [
    { icon: BadgeCheck, label: 'Verified Feedback' },
    { icon: MapPin, label: 'Local Reputation' },
    { icon: DollarSign, label: 'Transparent Pricing' },
    { icon: Award, label: 'Certified Team' }
  ];

  return (
    <div
      className="rounded-xl p-6 shadow-sm"
      style={{
        backgroundColor: 'var(--color-bg-surface)',
        border: '1px solid rgba(6, 182, 212, 0.1)'
      }}
    >
      <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
        {trustItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 group"
            >
              <div
                className="p-2.5 rounded-lg transition-all duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: 'rgba(6, 182, 212, 0.1)',
                  border: '1px solid rgba(6, 182, 212, 0.2)'
                }}
              >
                <Icon
                  className="w-5 h-5"
                  style={{ color: 'var(--color-accent)' }}
                />
              </div>
              <span
                className="text-sm font-semibold whitespace-nowrap"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
