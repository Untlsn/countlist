import type { ChangeEventHandler } from 'react';

interface HandleChange {
  (callback: (x: string) => void, type?: 'string'): ChangeEventHandler<HTMLInputElement>
  (callback: (x: number) => void, type: 'number'): ChangeEventHandler<HTMLInputElement>
}

const handleChange: HandleChange = (callback: Function, type?: string): ChangeEventHandler<HTMLInputElement> => {
  if (type == 'number') {
    return ({ target }) => callback(Number(target.value));
  }
  else {
    return ({ target }) => callback(target.value);
  }
};


export default handleChange;