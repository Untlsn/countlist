import * as R from 'ramda';

export const save = R.pipe(
  R.replace(/ /g, '_'),
  R.toLower,
);