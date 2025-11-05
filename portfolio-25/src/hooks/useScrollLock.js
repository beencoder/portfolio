import { useEffect } from 'react';

import { addScrollLock, removeScrollLock } from '@/lib/scroll-lock';

export default function useScrollLock(active) {
  useEffect(() => {
    if (active) addScrollLock();
    return () => {
      if (active) removeScrollLock();
    };
  }, [active]);
}
