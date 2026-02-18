import { Shield, Clock, Award, CheckCircle2, Star, Users, MapPin } from 'lucide-react';

const iconMap = {
  shield: Shield,
  clock: Clock,
  award: Award,
  check: CheckCircle2,
  star: Star,
  users: Users,
  mapPin: MapPin
};

interface TrustChip {
  icon: keyof typeof iconMap;
  text: string;
}

interface TrustChipRowProps {
  chips: TrustChip[];
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md';
}

export default function TrustChipRow({ chips, variant = 'light', size = 'md' }: TrustChipRowProps) {
  const textSize = size === 'sm' ? 'text-xs' : 'text-sm';
  const iconSize = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';
  const padding = size === 'sm' ? 'px-3 py-1.5' : 'px-4 py-2';

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {chips.map((chip, index) => {
        const Icon = iconMap[chip.icon];
        return (
          <div
            key={index}
            className={`
              ${padding} ${textSize}
              inline-flex items-center gap-2
              rounded-full
              backdrop-blur-sm
              border
              font-medium
              transition-all duration-300
              hover:scale-105
              ${
                variant === 'light'
                  ? 'bg-white/80 border border-black/10 text-[var(--color-text-inverse)]'
                  : 'bg-white/5 border border-white/20 text-white/90'
              }
            `}
          >
            <Icon className={iconSize} style={{ color: 'var(--color-accent)' }} />
            <span>{chip.text}</span>
          </div>
        );
      })}
    </div>
  );
}
