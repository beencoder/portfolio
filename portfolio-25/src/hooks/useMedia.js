import { useEffect, useState } from 'react';

export default function useMedia(query, defaultState = false) {
  const [matches, setMatches] = useState(defaultState);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQueryList = window.matchMedia(query);
    const handler = (event) => {
      setMatches(event.matches);
    };

    setMatches(mediaQueryList.matches);
    mediaQueryList.addEventListener?.('change', handler);

    return () => {
      mediaQueryList.removeEventListener?.('change', handler);
    };
  }, [query]);

  return matches;
}
