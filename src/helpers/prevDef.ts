import { MouseEvent } from 'react';

const prevDef = (callback: () => {}) => <T>(ev: MouseEvent<T>) => {
  ev.preventDefault();
  callback();
};

export default prevDef;