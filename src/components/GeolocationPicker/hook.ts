import { type RefObject, useEffect, useRef } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useOutsideClick = <T extends HTMLElement>(
  callback: () => void,
): RefObject<T> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback]);

  return ref;
};
