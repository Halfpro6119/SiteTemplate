import { businessConfig } from '../config';
import { Phone, FileText, ClipboardCheck, Wrench } from 'lucide-react';

const stepIcons = [Phone, FileText, ClipboardCheck, Wrench];

export default function WhatHappensNextTimeline() {
  const steps = businessConfig.whatHappensNext;
  if (!steps?.length) return null;

  return (
    <section
      className="py-12 md:py-16"
      style={{ backgroundColor: 'var(--color-bg-surface)' }}
      aria-label="What happens next"
    >
      <div className="content-width">
        <h2
          className="text-2xl md:text-3xl font-bold text-center mb-10"
          style={{ color: 'var(--color-text-primary)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          What happens next
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((item, index) => {
            const Icon = stepIcons[index] ?? ClipboardCheck;
            return (
              <div
                key={item.step}
                className="relative flex flex-col items-center text-center"
              >
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-full mb-4 flex-shrink-0"
                  style={{
                    backgroundColor: 'rgba(220, 38, 38, 0.12)',
                    color: 'var(--color-accent)',
                    border: '2px solid var(--color-accent)'
                  }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <span
                  className="text-sm font-semibold mb-1"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Step {item.step}
                </span>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: 'var(--color-text-primary)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
