import { ListsState } from './state.types';

const testList = '0000000000';
const testPoint = '0000000001';

const initState: ListsState = {
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
};


export default initState;