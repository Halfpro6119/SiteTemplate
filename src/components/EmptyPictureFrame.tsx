import { ImageOff } from 'lucide-react';

type EmptyPictureFrameProps = {
  className?: string;
  aspectRatio?: 'square' | '4/3';
};

export default function EmptyPictureFrame({ className = '', aspectRatio = 'square' }: EmptyPictureFrameProps) {
  const aspectClass = aspectRatio === '4/3' ? 'aspect-[4/3]' : 'aspect-square';

  return (
    <div
      className={`${aspectClass} rounded-xl overflow-hidden flex flex-col items-center justify-center ${className}`}
      style={{
        border: '12px solid var(--color-border-strong)',
        backgroundColor: 'var(--color-bg-panel)',
        boxShadow: 'var(--shadow-luxury-md), inset 0 0 0 1px var(--color-border-subtle)'
      }}
    >
      <div
        className="w-full h-full flex flex-col items-center justify-center rounded-sm"
        style={{
          margin: 8,
          backgroundColor: 'var(--color-bg-elevated)',
          border: '1px solid var(--color-border-subtle)'
        }}
      >
        <ImageOff
          className="w-12 h-12 md:w-16 md:h-16 opacity-40"
          style={{ color: 'var(--color-text-tertiary)' }}
          aria-hidden
        />
      </div>
    </div>
  );
}
