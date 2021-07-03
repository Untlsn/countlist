import reducer from '../reducer';
import actions from '../actions';
import { randListsIDs, randPointsIDs, randState } from './fakeData';
import * as faker from 'faker';
import type { ListsState } from '../state.types';
import { getNames } from './helpers';

describe('List', () => {
  describe('AddList', () => {
    const reduce = (name: string, state = randState) => {
      return reducer(state, actions.addList(name));
    };
    it('should add new list to state', () => {
      const newRandName = faker.random.word();
      const state = reduce(newRandName);

      expect(getNames(state.lists)).toContain(newRandName);
    });
    it('should add id to created', () => {
      const newRandName = faker.random.word();
      const state = reduce(newRandName);

      expect(
        state.created.length,
      ).toBe(1);
    });
  });
  describe('AddPoint', () => {
    const defList = randListsIDs[0];
    const reduce = (name: string, state = randState) => {
      return reducer(state, actions.addPoint({ listID: defList, name }));
    };

    it('should add point to list', () => {
      const newRandName = faker.random.word();
      const state = reduce(newRandName);

      expect(getNames(state.points)).toContain(newRandName);
    });
    it('should add id to created', () => {
      const newRandName = faker.random.word();
      const state = reduce(newRandName);

      expect(
        state.created.length,
      ).toBe(1);
    });
  });
  describe('ChangeCount', () => {

    const defPoint = randPointsIDs[0];

    it('should change point count', () => {
      const randCount = faker.datatype.number(
        randState.points[defPoint].max,
      );

      const state = reducer(randState, actions.changeCount({
        id: defPoint, count: randCount,
      }));

      expect(
        state.points[defPoint].count,
      ).toBe(randCount);
    });
    it('should change count to max if count payload is larger then max', () => {
      const randCount = faker.datatype.number()+50;

      const state = reducer(randState, actions.changeCount({
        id: defPoint, count: randCount,
      }));

      const { count, max } = state.points[defPoint];

      expect(count).toBe(max);
    });
    it('should change count to 0, if count payload is negative', () => {
      const randCount = -faker.datatype.number();

      const state = reducer(randState, actions.changeCount({
        id: defPoint, count: randCount,
      }));

      expect(state.points[defPoint].count).toBe(0);
    });
    it('should change count to 0 or max when count is undefined', () => {
      let state = reducer(randState, actions.changeCount({
        id: defPoint, count: 0,
      }));

      const run = (state: ListsState) => {
        return reducer(state, actions.changeCount({
          id: defPoint,
        }));
      };

      state = run(state);
      let { count, max } = state.points[defPoint];
      expect(count).toBe(max);

      state = run(state);
      count = state.points[defPoint].count;
      expect(count).toBe(0);
    });
    it('should don\'t treat 0 as undefined', () => {
      const run = (state = randState) => {
        return reducer(state, actions.changeCount({
          id: defPoint, count: 0,
        }));
      };

      let state = run();
      expect(state.points[defPoint].count).toBe(0);

      state = run(state);
      expect(state.points[defPoint].count).toBe(0);
    });
    it('should do nothing when point don\'t exist', () => {
      const randCount = -faker.datatype.number();

      const state = reducer(randState, actions.changeCount({
        id: 'fake', count: randCount,
      }));

      expect(state).toEqual(randState);
    });
  });
  describe('ChangeType', () => {
    const defPoint = randPointsIDs[0];
    it('should change point type', () => {
      const randType = faker.random.arrayElement<'count'|'check'>(['count', 'check']);

      const state = reducer(randState, actions.changeType({
        id: defPoint, type: randType,
      }));

      expect(
        state.points[defPoint].type,
      ).toBe(randType);
    });
    it('should reset point', () => {
      const state = randPointsIDs.reduce(
        (state, id) => {

          return reducer(state, actions.changeType({
            id: id, type: faker.random.arrayElement(['count', 'check']),
          }));
        },
        randState,
      );

      randPointsIDs.forEach(
        (id) => {
          expect(state.points[id].max).toBe(1);
          expect(state.points[id].count).toBe(0);
        },
      );
    });
    it('should do nothing when point don\'t exist', () => {
      const state = reducer(randState, actions.changeType({
        id: 'fake', type: faker.random.arrayElement(['count', 'check']),
      }));

      expect(state).toEqual(randState);
    });
  });
  describe('ChangeName', () => {
    const defPoint = randPointsIDs[0];
    const defList = randListsIDs[0];
    it('should change name', () => {
      const randNames = faker.random.word();

      const run = (id: string) => reducer(randState, actions.changeName({
        id, name: randNames,
      }));

      let state = run(defPoint);
      expect(
        state.points[defPoint].name,
      ).toBe(randNames);

      state = run(defList);
      expect(
        state.lists[defList].name,
      ).toBe(randNames);
    });
    it('should save old data', () => {
      const randNames = faker.random.word();

      const run = (id: string) => reducer(randState, actions.changeName({
        id, name: randNames,
      }));

      let state = run(defPoint);
      expect(
        state.points[defPoint],
      ).toEqual({
        ...randState.points[defPoint],
        name: randNames,
      });

      state = run(defList);
      expect(
        state.lists[defList],
      ).toEqual({
        ...randState.lists[defList],
        name: randNames,
      });
    });
    it('should do nothing when list or point don\'t exist', () => {
      const state = reducer(randState, actions.changeName({
        id: 'fake', name: faker.random.word(),
      }));

      expect(state).toEqual(randState);
    });
  });
  describe('Remove', () => {
    const defPoint = randPointsIDs[0];
    const defList = randListsIDs[0];
    const reduce = (id: string, state = randState) => reducer(state, actions.remove(id));
    it('should remove list or point by id', () => {
      let state = reduce(defPoint);
      expect(state.points[defPoint]).toBeUndefined();

      state = reduce(defList);
      expect(state.lists[defList]).toBeUndefined();
    });
    it('should remove point from list composition', () => {
      const defPoint = randState.lists[defList].composition[0];

      const state = reduce(defPoint);
      expect(state.points[defPoint]).toBeUndefined();

      expect(state.lists[defList]).not.toContain(defPoint);
    });
    it('should add id to deleted', () => {
      let state = reduce(defPoint);
      state = reduce(defList, state);

      expect(
        state.deleted.length,
      ).toBe(2);
    });
  });
  describe('ChangeMax', () => {
    const defPoint = randPointsIDs[0];
    const reduce = (max: number, id = defPoint) => reducer(
      randState,
      actions.changeMax({ id, max }),
    );

    it('should change max of point', () => {
      const randMax = faker.datatype.number();
      const state = reduce(randMax);

      expect(state.points[defPoint].max).toBe(randMax);
    });
    it('should change max to 1 when is not positive', () => {
      const randMax = -faker.datatype.number();
      const state = reduce(randMax);

      expect(state.points[defPoint].max).toBe(1);
    });
    it('should change count when new max is lesser', () => {
      const { count } = randState.points[defPoint];
      const randMax = faker.datatype.number(count-1);

      const state = reduce(randMax);

      expect(state.points[defPoint].count).toBeLessThan(count);
    });
    it('should do nothing when point don\'t exist', () => {
      const state = reduce(15, 'fake');

      expect(state).toEqual(randState);
    });
    it('should do nothing when point type is check', () => {
      const randMax = faker.datatype.number({ min: 2 });
      let state = reducer(randState, actions.changeType({ id: defPoint, type: 'check' }));

      state = reducer(
        state,
        actions.changeMax({ id: defPoint, max: randMax }),
      );

      expect(state.points[defPoint].max).toBe(1);
    });
  });
});