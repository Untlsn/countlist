import { useEffect, useRef } from 'react';

const useOutClick = <T extends HTMLElement>(event: () => void) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const eventListener = ({ target }: MouseEvent) => {
      if (!ref.current?.contains(target as Element)) event();
    };
    document.addEventListener('mousedown', eventListener);
    return () => document.removeEventListener('mousedown', eventListener);
  }, []);

  return ref;
};

export default useOutClick;