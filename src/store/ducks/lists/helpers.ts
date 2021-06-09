import { CheckPoint, CountPoint } from './types';
import { uid } from 'uid';
import * as R from 'ramda';

export const createPoint = {
  check: (): CheckPoint => ({ type: 'check', count: 0, max: 1 }),
  count: (max: number): CountPoint => ({ type: 'count', count: 0, max }),
};
export const createID = (x: string) => `${x.trim()}@${uid(3)}`;

export const getBigger = R.max;

const removeSpecials = R.replace(/[!@#$%^&*()=+\[\]{}\\|;':",<>.\/?]/g, '');
export const prepareName = R.pipe(R.trim, removeSpecials);