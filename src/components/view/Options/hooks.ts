import { useState } from 'react';

type useArrayStateResult<T> = [
  T[],
  {
    push(...items: T[]): void
  }
]

export const useArrayState = <T>(initArr: T[]): useArrayStateResult<T> => {
  const [arr, changeListNames] = useState(initArr);

  return [
    arr,
    {
      push: (...items) => changeListNames(old => [...old, ...items]),
    },
  ];
};

