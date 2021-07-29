import { MouseEvent } from 'react';

const prevDef = (callback: () => void) => <T>(ev: MouseEvent<T>) => {
  ev.preventDefault();
  callback();
};

export default prevDef;