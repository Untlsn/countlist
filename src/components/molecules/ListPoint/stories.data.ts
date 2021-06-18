import { uid } from 'uid';
import { ListsState } from '@store/ducks/lists/state.types';

const testList = uid(10);
const testPoint = uid(10);

export default {
  lists: {
    [testList]: {
      name: 'test-list',
      composition: [
        testPoint,
      ],
    },
  },
  points: {
    [testPoint]: {
      name: 'test-point',
      type: 'check',
      max: 1,
      count: 0,
    },
  },
} as ListsState;