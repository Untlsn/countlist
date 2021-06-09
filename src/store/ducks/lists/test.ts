import reducer from './reducer';
import * as actions from './actions';
import * as R from 'ramda';
import { State } from '@store/ducks/lists/types';
import { createPoint } from '@store/ducks/lists/helpers';

const removeUid = (str: string) => str.split('@')[0];
const getOnlyNames = (obj: object) => Object.keys(obj).map(removeUid);
const fiveArr = R.repeat(undefined, 5);

const lotOfSpecials = '__t!@#$%^&*()=+e[]{}\\|;\':"s,<>./?t__';
const clearOfSpecials = '__test__';

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
    it('should remove all special characters from name', () => {
      const state = reducer({}, actions.addList({ name: lotOfSpecials }));

      const listsNames = getOnlyNames(state);

      expect(listsNames[0]).toBe(clearOfSpecials);
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
    it('should remove all special characters from name', () => {
      const state = reducer(initState, actions.addPoint({ listID, name: lotOfSpecials }));

      const pointsNames = getOnlyNames(state[listID]);

      expect(pointsNames[0]).toBe(clearOfSpecials);
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
    it('should do nothing when list or point don\'t exist', () => {
      let state = reducer(initState, actions.togglePointCheck({
        pointID: checkPointID,
        listID: 'fake',
        check: true,
      }));
      expect(state).toEqual(state);

      state = reducer(initState, actions.togglePointCheck({
        pointID: 'fake',
        listID,
        check: true,
      }));
      expect(state).toEqual(state);
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
    it('should remove all special characters from name', () => {
      const state = reducer(initState, actions.addCountPoint({ listID, max: 5, name: lotOfSpecials }));

      const pointsNames = getOnlyNames(state[listID]);

      expect(pointsNames[0]).toBe(clearOfSpecials);
    });
  });
  describe('ChangePointCount', () => {
    const checkPointID = 'check';
    const countPointID = 'count';
    const listID = 'list';
    const initState: State = {
      [listID]: {
        [checkPointID]: createPoint.check(),
        [countPointID]: createPoint.count(5),
      },
    };

    it('should change point count', () => {
      const state = reducer(initState, actions.changePointCount({
        listID, pointID: countPointID, count: 3,
      }));

      expect(state[listID][countPointID]).toEqual({
        type: 'count',
        count: 3,
        max: 5,
      });
    });
    it('should change point max', () => {
      const state = reducer(initState, actions.changePointCount({
        listID, pointID: countPointID, max: 10,
      }));

      expect(state[listID][countPointID]).toEqual({
        type: 'count',
        count: 0,
        max: 10,
      });
    });
    it('should do nothing when point type is check', () => {
      const state = reducer(initState, actions.changePointCount({
        listID, pointID: checkPointID, count: 1,
      }));

      expect(state[listID][checkPointID]).toEqual(initState[listID][checkPointID]);
    });
    it('should change count to max if count payload is larger then max', () => {
      const state = reducer(initState, actions.changePointCount({
        listID, pointID: countPointID, count: 7,
      }));

      expect(state[listID][countPointID]).toEqual({
        type: 'count',
        count: 5,
        max: 5,
      });
    });
    it('should change count to 0, if count payload is negative', () => {
      const state = reducer(initState, actions.changePointCount({
        listID, pointID: countPointID, count: -2,
      }));

      expect(state[listID][countPointID]).toEqual({
        type: 'count',
        count: 0,
        max: 5,
      });
    });
    it('shouldn\'t change count or max, when in payload are undefined', () => {
      let state = reducer(initState, actions.changePointCount({
        listID, pointID: countPointID, max: 10, count: 5,
      }));

      state = reducer(state, actions.changePointCount({
        listID, pointID: countPointID, count: 3,
      }));

      expect(state[listID][countPointID]).toEqual({
        type: 'count',
        count: 3,
        max: 10,
      });

      state = reducer(state, actions.changePointCount({
        listID, pointID: countPointID, max: 12,
      }));

      expect(state[listID][countPointID]).toEqual({
        type: 'count',
        count: 3,
        max: 12,
      });
    });
    it('should save new max first', () => {
      const state = reducer(initState, actions.changePointCount({
        listID, pointID: countPointID, max: 100, count: 90,
      }));

      expect(state[listID][countPointID]).toEqual({
        type: 'count',
        count: 90,
        max: 100,
      });
    });
    it('should change count when max is less then current count', () => {
      let state = reducer(initState, actions.changePointCount({
        listID, pointID: countPointID, max: 50, count: 30,
      }));

      state = reducer(state, actions.changePointCount({
        listID, pointID: countPointID, max: 5,
      }));

      expect(state[listID][countPointID]).toEqual({
        type: 'count',
        count: 5,
        max: 5,
      });
    });
    it('should change max to 1 if max payload is smaller then 1', () => {
      let state = reducer(initState, actions.changePointCount({
        listID, pointID: countPointID, max: 0,
      }));

      expect(state[listID][countPointID]).toEqual({
        type: 'count',
        count: 0,
        max: 1,
      });

      state = reducer(initState, actions.changePointCount({
        listID, pointID: countPointID, max: -12,
      }));

      expect(state[listID][countPointID]).toEqual({
        type: 'count',
        count: 0,
        max: 1,
      });
    });
    it('should do nothing when list or point don\'t exist', () => {
      let state = reducer(initState, actions.changePointCount({
        listID: 'fake', pointID: countPointID, count: 3,
      }));
      expect(state).toEqual(state);

      state = reducer(initState, actions.changePointCount({
        listID, pointID: 'fake', count: 3,
      }));
      expect(state).toEqual(state);
    });
  });
  describe('ChangeType', () => {
    const pointID = 'point';
    const listID = 'list';
    const initState: State = {
      [listID]: {
        [pointID]: createPoint.check(),
      },
    };
    it('should change type get by payload', () => {
      let state = reducer(initState, actions.changeType({
        listID, pointID, type: 'count',
      }));
      expect(state[listID][pointID].type).toBe('count');

      state = reducer(state, actions.changeType({
        listID, pointID, type: 'check',
      }));
      expect(state[listID][pointID].type).toBe('check');
    });
    it('should reset max and count of point when change to check', () => {
      let state: State = {
        [listID]: {
          [pointID]: {
            ...createPoint.count(5),
            count: 3,
          },
        },
      };

      state = reducer(state, actions.changeType({
        listID, pointID, type: 'check',
      }));

      expect(state[listID][pointID]).toEqual({
        type: 'check',
        count: 0,
        max: 1,
      });
    });
    it('should do nothing when list or point don\'t exist', () => {
      let state = reducer(initState, actions.changeType({
        listID: 'fake', pointID, type: 'count',
      }));
      expect(state).toEqual(state);

      state = reducer(state, actions.changeType({
        listID, pointID: 'fake', type: 'count',
      }));
      expect(state).toEqual(state);
    });
  });
  describe('ChangeName', () => {
    const pointID = 'oldName@UID';
    const listID = 'list';
    const initPointData = {
      ...createPoint.count(10),
      count: 5,
    };

    const initState: State = {
      [listID]: {
        [pointID]: initPointData,
      },
    };

    it('should change name', () => {
      const state = reducer(initState, actions.changeName({
        listID, pointID, name: 'newName',
      }));

      const names = getOnlyNames(state[listID]);

      expect(names).toContain('newName');
      expect(names).not.toContain('oldName');
    });
    it('should save old uid', () => {
      const name = 'newName';

      const state = reducer(initState, actions.changeName({
        listID, pointID, name,
      }));

      expect(state[listID][`${name}@UID`]);
    });
    it('should save old data', () => {
      const name = 'newName';

      const state = reducer(initState, actions.changeName({
        listID, pointID, name,
      }));

      expect(state[listID][`${name}@UID`]).toEqual(initPointData);
    });
    it('should remove all special characters from name', () => {
      const state = reducer(initState, actions.changeName({
        listID, pointID, name: lotOfSpecials,
      }));

      const names = getOnlyNames(state[listID]);

      expect(names[0]).toBe(clearOfSpecials);
    });
    it('should do nothing when list or point don\'t exist', () => {
      let state = reducer(initState, actions.changeName({
        listID: 'fake', pointID, name: 'newName',
      }));
      expect(state).toEqual(state);

      state = reducer(initState, actions.changeName({
        listID, pointID: 'fake', name: 'newName',
      }));
      expect(state).toEqual(state);
    });
  });
});