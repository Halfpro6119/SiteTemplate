import { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden cinematic-hero">
      <div className="spotlight-glow" />
      <div className="content-width relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="editorial-heading text-balance mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="editorial-subheading text-balance">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
