import { useState } from 'react';

type useBoolResult<T> = [
  T,
  {
    (): void
    force(force: boolean): void
  }
]

const useBoolState = (initialState?: boolean): useBoolResult<boolean> => {
  const [value, changeValue] = useState(initialState == true);
  const change = () => changeValue(old => !old);
  change.force = (force: boolean) => changeValue(force);

  return [value, change];
};

export default useBoolState;
