import * as R from 'ramda';
export { default as handleChange } from '@helpers/handleChange';
export { uid } from 'uid';

export const removeTrash = (x: number) => x == 0
  ? x
  : R.pipe<number, string, string, string, string>(
        R.toString,
        R.replace(/0+/g, ''),
        R.replace('-', ''),
        R.slice(0, 3),
    )(x);