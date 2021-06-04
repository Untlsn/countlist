import { FillFnsProps } from './types';
import { useState } from 'react';

export const useFill = ({ maxFill, initFill, onClick }: FillFnsProps) => {
  const [fill, changeFill] = useState(initFill);

  const main = (callback: (old: number) => number) => () => {
    changeFill(callback);
    onClick(fill);
  };

  const inFill = main(
    (old) => old < maxFill ? old + 1 : old,
  );
  const decFill = main(
    (old) => old > 0 ? old - 1 : old,
  );

  return { fill, inFill, decFill };
};

