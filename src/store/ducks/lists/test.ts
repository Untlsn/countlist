import reducer from './reducer';
import * as actions from './actions';
import * as R from 'ramda';
import { State } from '@store/ducks/lists/types';

const removeUid = (str: string) => str.split('@')[0];
const getOnlyNames = (obj: object) => Object.keys(obj).map(removeUid);
const fiveArr = R.repeat(undefined, 5);

describe('List', () => {
  describe('AddList', () => {
    const name = 'testName';
    const reduce = (state: State) => reducer(state, actions.addList({ name }));
    it('should add new list to state', () => {
      const state = reduce({});

      const listsNames = getOnlyNames(state);

      expect(listsNames[0]).toBe(name);
    });
    it('should add many lists with same name', () => {
      const state = fiveArr.reduce(reduce, {});

      const listsNames = getOnlyNames(state);

      expect(listsNames.length).toBe(5);
      listsNames.forEach(
        (listName) => expect(listName).toBe(name),
      );
    });
  });
  describe('AddPoint', () => {
    const reduce = (state: State) => reducer(state, actions.addPoint({ listID, name }));
    const name = 'point';
    const listID = 'list';
    const initState = {
      [listID]: {},
    };

    it('should add point to list', () => {
      const state = reduce(initState);
      const pointsNames = getOnlyNames(state[listID]);

      expect(pointsNames[0]).toBe(name);
    });
    it('should add more points with same name', () => {
      const state = fiveArr.reduce(reduce, initState);
      const pointsNames = getOnlyNames(state[listID]);

      expect(pointsNames.length).toBe(5);
      pointsNames.map(
        (pointName) => expect(pointName).toBe(name),
      );
    });
  });
  describe('TogglePointCheck', () => {
    const pointID = 'point';
    const listID = 'list';
    const initState: State = {
      [listID]: {
        [pointID]: { check: false },
      },
    };
    it('should change point check', () => {
      const state = reducer(initState, actions.togglePointCheck({
        pointID,
        listID,
        check: true,
      }));

      expect(state[listID][pointID].check).toBe(true);
    });
  });
});