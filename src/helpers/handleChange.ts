import type React from 'react';

const handleChange = (callback: (x: string) => void): React.ChangeEventHandler<HTMLInputElement> => {
  return ({ target }) => {
    callback(target.value);
  };
};

export default handleChange;