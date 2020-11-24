import { useEffect, RefObject } from 'react';

const useClickOutside = (refs: RefObject<any>[], handler: () => void) => {
  useEffect(() => {
    const listener = e => {
      let isOutSide = true;
      refs.some(({ current }) => {
        if (!current || current.contains(e.target)) {
          isOutSide = false;

          return true;
        }
      });

      if (isOutSide) {
        handler();
      }
    };

    document.addEventListener('mousedown', listener, false);

    return () => {
      document.removeEventListener('mousedown', listener, false);
    };
  }, [handler, refs]);
};

export default useClickOutside;
