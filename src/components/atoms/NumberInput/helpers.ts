import * as R from 'ramda';
export { default as handleChange } from '@helpers/handleChange';
export { v4 as uuid } from 'uuid';

export const removeTrash = (x: number) => x == 0
  ? x
  : String(x).replace(/[-0]/g, '').slice(0, 3);
