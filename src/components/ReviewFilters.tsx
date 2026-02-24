import { ChevronDown } from 'lucide-react';

interface ReviewFiltersProps {
  selectedSort: string;
  onSortChange: (sort: string) => void;
}

export default function ReviewFilters({
  selectedSort,
  onSortChange
}: ReviewFiltersProps) {
  const sortOptions = [
    { value: 'recent', label: 'Most Recent' },
    { value: 'highest', label: 'Highest Rated' },
    { value: 'longest', label: 'Longest Reviews' }
  ];

  return (
    <div>
      <label className="block text-sm font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
        Sort By
      </label>
      <div className="relative inline-block">
        <select
          value={selectedSort}
          onChange={(e) => onSortChange(e.target.value)}
          className="appearance-none px-5 py-2.5 pr-10 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{
            backgroundColor: 'var(--color-bg-surface)',
            color: 'var(--color-text-primary)',
            border: '1px solid rgba(34, 197, 94, 0.15)'
          }}
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown
          className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
          style={{ color: 'var(--color-text-secondary)' }}
        />
      </div>
    </div>
  );
}
