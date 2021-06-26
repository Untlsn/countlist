import { createReducer } from '@reduxjs/toolkit';
import initState from './state';
import actions from './actions';
import { createID } from './helpers';
import * as R from 'ramda';

const reducer = createReducer(initState, builder => {
  builder
    .addCase(actions.initLists, (state, { payload }) => {
      state.lists = payload;
    })
    .addCase(actions.initPoints, (state, { payload }) => {
      state.points = R.merge(state.points, payload);
    })
    .addCase(actions.addList, (state, { payload: name }) => {
      const id = createID();

      state.lists[id] = { composition: [], name };
      state.created.push(id);
    })
    .addCase(actions.addPoint, (state, { payload }) => {
      const { name, listID } = payload;
      const id = createID();

      state.points[id] = {
        name: name,
        count: 0,
        max: 1,
        type: 'check',
      };

      state.lists[listID].composition.push(id);
      state.created.push(id);
    })
    .addCase(actions.changeCount, (state, { payload }) => {
      const { id, count } = payload;

      const point = state.points[id];
      if (!point) return;

      if (R.isNil(count)) {
        point.count = point.count == 0 ? point.max : 0;
      }
      else {
        point.count = R.clamp(0, point.max, count);
      }
    })
    .addCase(actions.changeType, (state, { payload }) => {
      const { id, type } = payload;

      if (!state.points[id]) return;

      state.points[id] = {
        name: state.points[id].name,
        count: 0,
        max: 1,
        type,
      };
    })
    .addCase(actions.changeName, (state, { payload }) => {
      const { id, name } = payload;

      if (state.points[id]) {
        state.points[id].name = name;
      }
      else if (state.lists[id]) {
        state.lists[id].name = name;
      }
    })
    .addCase(actions.remove, (state, { payload: id }) => {
      if (state.points[id]) {
        delete state.points[id];
        R.forEachObjIndexed(
          (list) => list.composition = R.reject(R.equals(id), list.composition),
          state.lists,
        );
      }
      else {
        delete state.lists[id];
      }

      const index = state.created.indexOf(id);

      if (index == -1) {
        state.deleted.push(id);
      }
      else {
        state.created.splice(index, 1);
      }
    })
    .addCase(actions.changeMax, (state, { payload }) => {
      const { id, max } = payload;

      const point = state.points[id];
      if (point?.type == 'count') {
        point.max = R.max(1, max);
        point.count = R.min(point.count, max);
      }
    });
});

export default reducer;