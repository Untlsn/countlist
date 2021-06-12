import { MouseEventHandler } from 'react';

export const prevDef = (callback: () => void): MouseEventHandler => {
  return (ev) => {
    callback();
    ev.preventDefault();
  };
};