interface StatCardProps {
  value: string | number;
  label: string;
  description: string;
  delay?: number;
}

export default function StatCard({ value, label, description, delay = 0 }: StatCardProps) {
  return (
    <div
      className="group text-center scroll-reveal"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="relative inline-flex items-center justify-center w-24 h-24 rounded-2xl mb-4 transition-all duration-500 group-hover:scale-110"
        style={{
          background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%)',
          boxShadow: '0 8px 32px -8px var(--color-accent-glow)',
          color: 'var(--color-text-inverse)'
        }}
      >
        <span
          className="text-3xl font-bold"
          style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif'
          }}
        >
          {value}
        </span>

        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%)'
          }}
        />
      </div>

      <h3
        className="text-xl font-bold mb-2"
        style={{
          color: 'var(--color-text-primary)',
          fontFamily: 'Plus Jakarta Sans, sans-serif'
        }}
      >
        {label}
      </h3>

      <p
        className="text-sm"
        style={{
          color: 'var(--color-text-secondary)'
        }}
      >
        {description}
      </p>
    </div>
  );
}
