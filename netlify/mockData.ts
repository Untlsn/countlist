import { uid } from 'uid';

const testList = uid(10);
const testPoint = uid(10);
const testUser = '0000000001';

const testUsername = 'Random_Guy';
const testPassword = 'admin123';


export const userPipe: Record<string, Record<string, string>> = {
  [testUsername]: { [testPassword]: testUser },
};

export const states: Record<string, any> = {
  [testUser]: {
    userName: testUsername,
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
