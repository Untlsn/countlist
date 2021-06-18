import { uid } from 'uid';

const testList = uid(10);
const testPoint = uid(10);
const testUser = '0000000001';

export const states: Record<string, any> = {
  [testUser]: {
    userName: 'Random Guy',
    lists: {
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
    },
  },
};

export const emptyData = {
  name: '',
  lists: {
    lists: {},
    points: {},
  },
};
