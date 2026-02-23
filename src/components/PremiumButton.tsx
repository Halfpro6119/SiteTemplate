import { LucideIcon } from 'lucide-react';

interface PremiumButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function PremiumButton({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  href,
  onClick,
  className = ''
}: PremiumButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 whitespace-nowrap';

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantStyles = {
    primary: `
      bg-gradient-to-r from-emerald-500 to-emerald-600
      hover:from-emerald-400 hover:to-emerald-500
      text-white
      shadow-lg shadow-emerald-500/25
      hover:shadow-xl hover:shadow-emerald-500/40
      hover:-translate-y-1
      active:translate-y-0
    `,
    secondary: `
      bg-gradient-to-r from-slate-700 to-slate-800
      hover:from-slate-600 hover:to-slate-700
      text-white
      shadow-lg shadow-slate-900/30
      hover:shadow-xl hover:shadow-slate-900/50
      hover:-translate-y-1
      active:translate-y-0
    `,
    outline: `
      border-2 border-current
      hover:bg-white/5
      relative overflow-hidden
      group
      before:absolute before:inset-0
      before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
      before:translate-x-[-200%]
      hover:before:translate-x-[200%]
      before:transition-transform before:duration-700
    `,
    glass: `
      backdrop-blur-xl
      bg-white/10
      border border-white/20
      hover:bg-white/15
      hover:border-white/30
      shadow-lg
      hover:shadow-xl
      hover:-translate-y-0.5
    `
  };

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {content}
    </button>
  );
}
