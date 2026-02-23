import { useEffect } from 'react';

const BASE_TITLE = 'Plumbers Glasgow Ltd';

/**
 * Sets document.title for the current page. Resets to base title on unmount.
 */
export function useDocumentTitle(title: string | undefined) {
  useEffect(() => {
    const previous = document.title;
    document.title = title ? `${title} | ${BASE_TITLE}` : BASE_TITLE;
    return () => {
      document.title = previous;
    };
  }, [title]);
}
