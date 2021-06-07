import reducer from './reducer';
import * as actions from './actions';
import * as R from 'ramda';
import { State } from '@store/ducks/lists/types';
import { createPoint } from '@store/ducks/lists/helpers';

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
    const checkPointID = 'check';
    const countPointID = 'count';
    const listID = 'list';
    const initState: State = {
      [listID]: {
        [checkPointID]: createPoint.check(),
        [countPointID]: createPoint.count(5),
      },
    };
    it('should change point check', () => {
      const state = reducer(initState, actions.togglePointCheck({
        pointID: checkPointID,
        listID,
        check: true,
      }));

      expect(state[listID][checkPointID].count).toBeTruthy();
    });
    it('should do nothing when point type is count', () => {
      const state = reducer(initState, actions.togglePointCheck({
        pointID: countPointID,
        listID,
        check: true,
      }));

      expect(state[listID][checkPointID].count).toBe(0);
    });
  });
  describe('AddCountPoint', () => {
    const listID = 'list';
    const name = 'point';
    const initState: State = {
      [listID]: {},
    };

    const reduce = (state: State) => reducer(
      state, actions.addCountPoint({ listID, max: 5, name }),
    );

    it('should add new count point to a list', () => {
      const state = reduce(initState);

      const pointKey = Object.keys(state[listID])[0];
      expect(removeUid(pointKey)).toBe(name);

      expect(state[listID][pointKey]).toEqual({
        type: 'count',
        count: 0,
        max: 5,
      });
    });
    it('should add new count points with same name to list', () => {
      const state = fiveArr.reduce(
        reduce,
        initState,
      );

      const list = state[listID];

      expect(Object.keys(list).length).toBe(5);

      getOnlyNames(list).forEach(
        (gotName) => expect(gotName).toBe(name),
      );

      const points = Object.values(list);
      points.forEach(
        (point) => expect(point).toEqual({
          type: 'count',
          count: 0,
          max: 5,
        }),
      );

    });
  });
});