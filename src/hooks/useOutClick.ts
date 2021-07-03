import { useEffect, createRef } from 'react';

const useOutClick = <T extends HTMLElement>(event: () => void) => {
  const ref = createRef<T>();
  const outClick = ({ target }: MouseEvent) => {
    if (!ref?.current?.contains(target as Node)) event();
  };
  useEffect(() => {
    document.addEventListener('mousedown', outClick);
    return () => document.removeEventListener('mousedown', outClick);
  });

  return ref;
};

export default useOutClick;