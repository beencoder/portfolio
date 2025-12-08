import { useEffect } from 'react';

import { addScrollLock, removeScrollLock } from '@/lib/scrollLock';

export default function useScrollLock(active) {
  useEffect(() => {
    if (active) addScrollLock();
    return () => {
      if (active) removeScrollLock();
    };
  }, [active]);
}
