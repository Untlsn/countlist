import { ListsState } from './state.types';

const testList = '0000000000';
const testPoint = '0000000001';

const initState: ListsState = {
  lists: {
    [testList]: {
      id: testList,
      name: 'test-list',
      points: {
        [testPoint]: {
          id: testPoint,
          name: 'test-point',
          max: 1,
          count: 0,
        },
      },
    },
  },
  pointsRefs: {
    [testPoint]: testList,
  },
};


export default initState;