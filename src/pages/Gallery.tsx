import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Filter, Image as ImageIcon, Home, Building2, CheckCircle } from 'lucide-react';
import { businessConfig } from '../config';
import CTASection from '../components/CTASection';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';

type FilterType = 'all' | 'residential' | 'commercial';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredImages = businessConfig.galleryImages.filter(image => {
    if (activeFilter === 'all') return true;
    return image.category === activeFilter;
  });

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;

    const newIndex = direction === 'prev'
      ? (selectedImage - 1 + filteredImages.length) % filteredImages.length
      : (selectedImage + 1) % filteredImages.length;

    setSelectedImage(newIndex);
  };

  const filterOptions: { value: FilterType; label: string; icon: typeof Filter }[] = [
    { value: 'all', label: 'All Projects', icon: Filter },
    { value: 'residential', label: 'Residential', icon: Home },
    { value: 'commercial', label: 'Commercial', icon: Building2 }
  ];

  return (
    <div className="min-h-screen">
      <PageHero
        title="Our Fencing Projects"
        subtitle="Browse examples of our residential and commercial fence installations across the Indianapolis metro area"
      >
        <div className="mt-8">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Gallery' }
          ]} />
        </div>
      </PageHero>

      <section className="py-8" style={{ backgroundColor: 'var(--color-bg-surface)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div className="content-width">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {filterOptions.map((option) => {
              const IconComponent = option.icon;
              const isActive = activeFilter === option.value;
              return (
                <button
                  key={option.value}
                  onClick={() => setActiveFilter(option.value)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                    isActive ? 'scale-[1.02]' : 'hover:scale-[1.01]'
                  }`}
                  style={{
                    background: isActive 
                      ? 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%)'
                      : 'rgba(255, 255, 255, 0.03)',
                    color: isActive ? 'white' : 'var(--color-text-secondary)',
                    border: isActive ? '1px solid var(--color-accent)' : '1px solid var(--color-border-medium)',
                    boxShadow: isActive ? '0 4px 16px -4px var(--color-accent-glow)' : 'none'
                  }}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{option.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }}>
        <div className="content-width">
          {filteredImages.length === 0 ? (
            <div className="text-center py-16">
              <ImageIcon className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--color-text-tertiary)' }} />
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
                No projects in this category yet
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Check back soon or browse all projects
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div
                    className="relative overflow-hidden rounded-2xl mb-4 transition-all duration-500 group-hover:-translate-y-2"
                    style={{
                      aspectRatio: '4/3',
                      boxShadow: 'var(--shadow-luxury-md)'
                    }}
                  >
                    <img 
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end"
                    >
                      <div className="p-4 text-white w-full">
                        <p className="font-semibold">{image.caption}</p>
                        {image.location && (
                          <p className="text-sm text-white/80">{image.location}</p>
                        )}
                      </div>
                    </div>

                    <div 
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        background: image.category === 'commercial' 
                          ? 'rgba(30, 64, 175, 0.9)' 
                          : 'rgba(5, 150, 105, 0.9)',
                        color: 'white'
                      }}
                    >
                      {image.category === 'commercial' ? 'Commercial' : 'Residential'}
                    </div>
                  </div>

                  <div>
                    <h3 
                      className="font-bold text-lg mb-1 group-hover:text-accent transition-colors"
                      style={{ color: 'var(--color-text-primary)' }}
                    >
                      {image.caption}
                    </h3>
                    <p className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
                      {image.projectType} {image.location && `• ${image.location}`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div 
            className="max-w-3xl mx-auto mt-16 p-8 rounded-2xl text-center"
            style={{
              background: 'linear-gradient(135deg, var(--color-bg-surface) 0%, var(--color-bg-elevated) 100%)',
              border: '1px solid var(--color-border-subtle)'
            }}
          >
            <CheckCircle className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--color-accent)' }} />
            <h3 
              className="text-xl font-bold mb-2"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Real Projects. Real Results.
            </h3>
            <p className="mb-4" style={{ color: 'var(--color-text-secondary)' }}>
              Every photo in our gallery showcases actual fence installations completed by 
              Secure Links Fence across the Indianapolis metro area.
            </p>
            <p className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
              Have a similar project in mind? Contact us for a free estimate and see how 
              we can bring quality fencing to your property.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
        <div className="content-width">
          <div className="max-w-4xl mx-auto text-center">
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
              We take pride in every fence we build. From residential privacy fences to 
              large commercial installations, we bring the same commitment to quality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-12">
              <div 
                className="rounded-xl p-6"
                style={{ 
                  background: 'var(--color-bg-base)',
                  border: '1px solid var(--color-border-subtle)'
                }}
              >
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: 'var(--color-accent)' }}
                >
                  100%
                </div>
                <p className="font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>Satisfaction Guaranteed</p>
                <p className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
                  We stand behind every fence we install
                </p>
              </div>
              <div 
                className="rounded-xl p-6"
                style={{ 
                  background: 'var(--color-bg-base)',
                  border: '1px solid var(--color-border-subtle)'
                }}
              >
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Local
                </div>
                <p className="font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>Indianapolis Area</p>
                <p className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
                  Serving {businessConfig.city} & surrounding communities
                </p>
              </div>
              <div 
                className="rounded-xl p-6"
                style={{ 
                  background: 'var(--color-bg-base)',
                  border: '1px solid var(--color-border-subtle)'
                }}
              >
                <div
                  className="text-3xl font-bold mb-2"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {businessConfig.yearsExperience}+
                </div>
                <p className="font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>Years Experience</p>
                <p className="text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
                  Residential & commercial expertise
                </p>
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
            className="max-w-4xl w-full relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[selectedImage].url}
              alt={filteredImages[selectedImage].caption}
              className="w-full rounded-t-lg object-cover"
              style={{ maxHeight: '70vh' }}
            />
            <div className="bg-gradient-to-t from-black/90 to-black/60 p-6 rounded-b-lg">
              <p className="text-white text-xl font-semibold mb-1">
                {filteredImages[selectedImage].caption}
              </p>
              <p className="text-white/70">
                {filteredImages[selectedImage].projectType} • {filteredImages[selectedImage].category === 'commercial' ? 'Commercial' : 'Residential'} Project
                {filteredImages[selectedImage].location && ` • ${filteredImages[selectedImage].location}`}
              </p>
            </div>
          </div>
        </div>
      )}

      <CTASection
        title="Ready to Start Your Fence Project?"
        subtitle="Get a free, no-obligation estimate for your residential or commercial fencing needs"
      />
    </div>
  );
}
