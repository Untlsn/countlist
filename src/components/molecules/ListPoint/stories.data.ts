import { uid } from 'uid';

const testList = uid(10);
const testPoint = uid(10);

export default {
  [testList]: {
    name: 'test-list',
    composition: [
      testPoint,
    ],
  },
};