import { CheckPoint, CountPoint } from './types';
import { uid } from 'uid';
export { clamp } from 'ramda';

export const createPoint = {
  check: (): CheckPoint => ({ type: 'check', count: 0, max: 1 }),
  count: (max: number): CountPoint => ({ type: 'count', count: 0, max }),
};
export const createID = (x: string) => `${x.trim()}@${uid(3)}`;