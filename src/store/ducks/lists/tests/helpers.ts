import * as _ from 'lodash';

export const getNames = (obj: Record<string, { name: string }>) => _.map(
  _.values(obj),
  'name',
);