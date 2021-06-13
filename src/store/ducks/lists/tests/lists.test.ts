import reducer from '../reducer';
import actions from '../actions';
import { randListsIDs, randPointsIDs, randState } from './fakeData';
import * as faker from 'faker';
import type { ListsState } from '../state.types';
import * as R from 'ramda';
import { haveName } from './helpers';

describe('List', () => {
  describe('AddList', () => {
    const reduce = (name: string, state = randState) => {
      return reducer(state, actions.addList(name));
    };
    it('should add new list to state', () => {
      const newRandName = faker.random.word();
      const state = reduce(newRandName);

      expect(
        haveName(newRandName)(state.points),
      );
    });
    it('should add many lists with same name', () => {
      const newRandNames = R.times(() => faker.random.word(), 10);
      const state = newRandNames.reduce(
        (state, name) => reduce(name, state),
        randState,
      );

      expect(haveName.many(newRandNames)(state.points));
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

      expect(haveName(newRandName)(state.lists));
    });
    it('should add more points with same name', () => {
      const newRandNames = R.times(() => faker.random.word(), 10);
      const state = newRandNames.reduce(
        (state, name) => reduce(name, state),
        randState,
      );

      expect(haveName.many(newRandNames)(state.lists));
    });
  });
  describe('ChangePointCount', () => {

    const defPoint = randPointsIDs[0];

    it('should change point count', () => {
      const randCount = faker.datatype.number(
        randState.points[defPoint].max,
      );

      const state = reducer(randState, actions.changePointCount({
        pointID: defPoint, count: randCount,
      }));

      expect(
        state.points[defPoint].count,
      ).toBe(randCount);
    });
    it('should change count to max if count payload is larger then max', () => {
      const randCount = faker.datatype.number()+50;

      const state = reducer(randState, actions.changePointCount({
        pointID: defPoint, count: randCount,
      }));

      const { count, max } = state.points[defPoint];

      expect(count).toBe(max);
    });
    it('should change count to 0, if count payload is negative', () => {
      const randCount = -faker.datatype.number();

      const state = reducer(randState, actions.changePointCount({
        pointID: defPoint, count: randCount,
      }));

      expect(state.points[defPoint].count).toBe(0);
    });
    it('should change count to 0 or max when count is undefined', () => {
      let state = reducer(randState, actions.changePointCount({
        pointID: defPoint, count: 0,
      }));

      const run = (state: ListsState) => {
        return reducer(state, actions.changePointCount({
          pointID: defPoint,
        }));
      };

      state = run(state);
      let { count, max } = state.points[defPoint];
      expect(count).toBe(max);

      state = run(state);
      count = state.points[defPoint].count;
      expect(count).toBe(0);
    });
    it('should do nothing when point don\'t exist', () => {
      const randCount = -faker.datatype.number();

      const state = reducer(randState, actions.changePointCount({
        pointID: 'fake', count: randCount,
      }));

      expect(state).toEqual(randState);
    });
  });
  describe('ChangeType', () => {
    const defPoint = randPointsIDs[0];
    it('should change point type', () => {
      const randType = faker.random.arrayElement<'count'|'check'>(['count', 'check']);

      const state = reducer(randState, actions.changeType({
        pointID: defPoint, type: randType,
      }));

      expect(
        state.points[defPoint].type,
      ).toBe(randType);
    });
    it('should reset point', () => {
      const state = randPointsIDs.reduce(
        (state, id) => {

          return reducer(state, actions.changeType({
            pointID: id, type: faker.random.arrayElement(['count', 'check']),
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
        pointID: 'fake', type: faker.random.arrayElement(['count', 'check']),
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
    const reduce = (id: string) => reducer(randState, actions.remove(id));
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
    it('should do nothing when point or list don\'t exist', () => {
      const state = reduce('fake');
      expect(state).toEqual(randState);
    });
  });
});