import { businessConfig } from '../config';
import CTASection from '../components/CTASection';
import EmptyPictureFrame from '../components/EmptyPictureFrame';

const GALLERY_FRAME_COUNT = 6;

export default function Gallery() {
  return (
    <div className="min-h-screen">
      <section
        className="pt-32 pb-16"
        style={{
          background: 'linear-gradient(135deg, var(--color-bg-surface) 0%, var(--color-bg-base) 100%)'
        }}
      >
        <div className="content-width">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="section-title">
              Our Work
            </h1>
            <p className="section-subtitle">
              Take a look at some of our recent projects in {businessConfig.city}.
              Quality workmanship you can see.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }}>
        <div className="content-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {Array.from({ length: GALLERY_FRAME_COUNT }, (_, index) => (
              <EmptyPictureFrame key={index} aspectRatio="square" />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
        <div className="content-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{
                color: 'var(--color-text-primary)',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                letterSpacing: '-0.02em'
              }}
            >
              Your Project Could Be Next
            </h2>
            <p className="section-subtitle mb-12">
              We take pride in every project we complete. Whether big or small,
              we bring the same level of dedication, skill, and attention to detail.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="rounded-xl p-6 shadow-md" style={{ backgroundColor: 'var(--color-bg-base)' }}>
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: 'var(--color-accent)' }}
                >
                  100%
                </div>
                <p style={{ color: 'var(--color-text-secondary)' }}>Satisfaction Guaranteed</p>
              </div>
              <div className="rounded-xl p-6 shadow-md" style={{ backgroundColor: 'var(--color-bg-base)' }}>
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Local
                </div>
                <p style={{ color: 'var(--color-text-secondary)' }}>Proudly serving {businessConfig.city}</p>
              </div>
              <div className="rounded-xl p-6 shadow-md" style={{ backgroundColor: 'var(--color-bg-base)' }}>
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {businessConfig.yearsExperience}+
                </div>
                <p style={{ color: 'var(--color-text-secondary)' }}>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start Your Project?"
        subtitle="Let us bring your vision to life with quality workmanship"
      />
    </div>
  );
}
