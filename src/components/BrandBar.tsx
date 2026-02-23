import { useScrollReveal } from '../hooks/useScrollReveal';

interface BrandBarProps {
  brands: string[];
  title?: string;
}

export default function BrandBar({ brands, title = 'Trusted boiler brands we install' }: BrandBarProps) {
  const ref = useScrollReveal();

  return (
    <section
      className="py-12"
      style={{ backgroundColor: 'var(--color-bg-base)', borderTop: '1px solid var(--color-border-subtle)' }}
      ref={ref}
    >
      <div className="content-width">
        <p
          className="text-center text-sm font-semibold mb-6 scroll-reveal"
          style={{ color: 'var(--color-text-tertiary)', letterSpacing: '0.05em' }}
        >
          {title.toUpperCase()}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 scroll-reveal">
          {brands.map((brand, index) => (
            <span
              key={index}
              className="text-xl md:text-2xl font-bold transition-opacity duration-300 hover:opacity-100 opacity-80"
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                color: 'var(--color-text-secondary)',
                letterSpacing: '-0.01em'
              }}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
