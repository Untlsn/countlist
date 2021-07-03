import * as faker from 'faker';
import { v4 as createID } from 'uuid';
import * as _ from 'lodash';
import type { ListsState, Point } from '../state.types';

export const randIDs = _.times(10, () => createID());
export const randListsIDs = randIDs.slice(0, 3);
export const randPointsIDs = randIDs.slice(3);

const randNames = _.times(7, () => faker.random.word());
const randMax = _.concat(
  _.times(4, () => faker.datatype.number(50)),
  _.times(3, _.constant(1)),
);
const randCount = _.concat(
  randMax.map(faker.datatype.number),
  _.times(3, () => faker.datatype.number(1)),
);

const randPointData = _.times(
  10,
  (i): Point => ({
    name: randNames[i],
    type: randMax[i] == 1 ? 'check' : 'count',
    max: randMax[i],
    count: randCount[i],
  }),
);

export const randState: ListsState = {
  deleted: [],
  created: [],
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
  points: _.zipObject(randPointsIDs, randPointData),
};