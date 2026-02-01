import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="breadcrumb">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && <ChevronRight className="w-3 h-3 breadcrumb-separator" />}
          {item.href ? (
            <Link to={item.href}>{item.label}</Link>
          ) : (
            <span style={{ color: 'var(--color-neutral-900)' }}>{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
