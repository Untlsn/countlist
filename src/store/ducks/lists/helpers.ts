import { List, Point } from './state.types';
import { v4 as uuid } from 'uuid';

export const createEmptyList = (name: string): List => ({
  id: uuid(),
  name,
  points: {},
});

export const createPoint = (name: string): Point => ({
  id: uuid(),
  name,
  max: 1,
  count: 0,
});