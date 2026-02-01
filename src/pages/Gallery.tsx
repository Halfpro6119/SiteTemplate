import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { businessConfig } from '../config';
import CTASection from '../components/CTASection';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;

    const newIndex = direction === 'prev'
      ? (selectedImage - 1 + businessConfig.galleryImages.length) % businessConfig.galleryImages.length
      : (selectedImage + 1) % businessConfig.galleryImages.length;

    setSelectedImage(newIndex);
  };

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
            {businessConfig.galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-1"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white font-semibold">{image.caption}</p>
                  </div>
                </div>
                <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-blue-400 ring-inset transition-all duration-300 rounded-xl"></div>
              </div>
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

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 hover:scale-110 transition-all duration-300 z-10 hover:rotate-90"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
            className="absolute left-4 text-white hover:text-gray-300 hover:scale-110 hover:-translate-x-1 transition-all duration-300 z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
            className="absolute right-4 text-white hover:text-gray-300 hover:scale-110 hover:translate-x-1 transition-all duration-300 z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <div
            className="max-w-5xl max-h-[90vh] relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={businessConfig.galleryImages[selectedImage].url}
              alt={businessConfig.galleryImages[selectedImage].caption}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <p className="text-white text-lg font-semibold text-center">
                {businessConfig.galleryImages[selectedImage].caption}
              </p>
            </div>
          </div>
        </div>
      )}

      <CTASection
        title="Ready to Start Your Project?"
        subtitle="Let us bring your vision to life with quality workmanship"
      />
    </div>
  );
}
