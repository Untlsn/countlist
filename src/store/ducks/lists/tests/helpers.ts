import * as R from 'ramda';

export const haveName = (name: string) => R.pipe(
  Object.values,
  R.find(
    R.propEq('name', name),
  ),
  R.complement(R.isNil),
) as (obj: Record<string, { name: string }>) => boolean;

haveName.many = (names: string[]) => R.pipe(
  R.juxt(
    names.map(haveName),
  ),
  R.all(
    R.equals(true),
  ),
) as (obj: Record<string, { name: string }>) => boolean;