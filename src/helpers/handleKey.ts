import type { KeyboardEventHandler } from 'react';

const handleKey = (keyName: string, callback: () => void): KeyboardEventHandler<HTMLInputElement> => {
  return ({ key }) => {
    if (key == keyName) callback();
  };
};

export default handleKey;