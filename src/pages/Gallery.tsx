import { useState } from 'react';
import { businessConfig } from '../config';
import PageHero from '../components/PageHero';
import Breadcrumb from '../components/Breadcrumb';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const PLACEHOLDER_COUNT = 6;
const CATEGORIES = businessConfig.projectCategories || ['Pitched', 'Flat', 'uPVC', 'Industrial'];

export default function Gallery() {
  const [filter, setFilter] = useState<string>('all');
  const sectionRef = useScrollReveal();
  const images = businessConfig.galleryImages || [];
  const hasImages = images.length > 0;

  const placeholders = Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => ({
    id: i + 1,
    url: '',
    caption: CATEGORIES[i % CATEGORIES.length],
    category: CATEGORIES[i % CATEGORIES.length]
  }));
  const filteredImages = hasImages
    ? (filter === 'all' ? images : images.filter((img) => (img as { category?: string }).category === filter))
    : [];
  const filteredPlaceholders = filter === 'all' ? placeholders : placeholders.filter((p) => p.category === filter);
  const displayItems = hasImages
    ? (filteredImages.length ? filteredImages : images)
    : filteredPlaceholders;

  return (
    <div className="min-h-screen">
      <PageHero
        title="Projects"
        subtitle="A selection of our work—attention to detail and respect for every property. Norfolk & Suffolk."
      />

      <section className="section-spacing" style={{ backgroundColor: 'var(--color-bg-base)' }} ref={sectionRef}>
        <div className="content-width">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Projects' }]} />
          <div className="flex flex-wrap gap-2 mb-10 scroll-reveal">
            <button
              onClick={() => setFilter('all')}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{
                background: filter === 'all' ? 'var(--color-accent)' : 'var(--color-bg-surface)',
                color: filter === 'all' ? 'var(--color-off-white)' : 'var(--color-text-secondary)',
                border: '1px solid var(--color-border-subtle)'
              }}
            >
              All
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                style={{
                  background: filter === cat ? 'var(--color-accent)' : 'var(--color-bg-surface)',
                  color: filter === cat ? 'var(--color-off-white)' : 'var(--color-text-secondary)',
                  border: '1px solid var(--color-border-subtle)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {displayItems.map((item, index) => (
              <div
                key={item.id}
                className="scroll-reveal group relative rounded-xl overflow-hidden aspect-[4/3] transition-all duration-300 hover-lift"
                style={{
                  transitionDelay: `${index * 60}ms`,
                  background: 'var(--color-bg-surface)',
                  border: '1px solid var(--color-border-subtle)'
                }}
              >
                {item.url ? (
                  <>
                    <img
                      src={item.url}
                      alt={item.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                      <p className="text-white font-medium text-sm">{item.caption}</p>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2" style={{ color: 'var(--color-text-tertiary)' }}>
                    <ImageIcon className="w-14 h-14 opacity-40" />
                    <span className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>{item.caption}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center scroll-reveal">
            <Link to="/contact" className="btn-primary">
              Start your project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
