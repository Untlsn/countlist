import * as faker from 'faker';
import { createID } from '../helpers';
import * as R from 'ramda';
import { ListsState, Point } from '../state';

export const randIDs = R.times(createID, 10);
export const randListsIDs = randIDs.slice(0, 3);
export const randPointsIDs = randIDs.slice(3);

const randNames = R.times(() => faker.random.word(), 7);
const randMax = R.concat(
  R.times(() => faker.datatype.number(50), 4),
  R.repeat(1, 3),
);
const randCount = R.concat(
  randMax.map(faker.datatype.number),
  R.times(() => faker.datatype.number(1), 3),
);

const randPointData = R.times(
  (i): Point => ({
    name: randNames[i],
    type: randMax[i] == 1 ? 'check' : 'count',
    max: randMax[i],
    count: randCount[i],
  }),
  10,
);

export const randState: ListsState = {
  lists: {
    [randListsIDs[0]]: {
      name: faker.random.word(),
      composition: randPointsIDs.slice(0, 2),
    },
    [randListsIDs[1]]: {
      name: faker.random.word(),
      composition: randPointsIDs.slice(2, 6),
    },
    [randListsIDs[2]]: {
      name: faker.random.word(),
      composition: randPointsIDs.slice(6),
    },
  },
  points: R.zipObj(randPointsIDs, randPointData),
};