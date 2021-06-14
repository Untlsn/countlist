import { createReducer } from '@reduxjs/toolkit';
import initState from './state';
import actions from './actions';
import { createID } from './helpers';
import * as R from 'ramda';

const reducer = createReducer(initState, builder => {
  builder
    .addCase(actions.addList, (state, { payload: name }) => {
      const id = createID();

      state.lists[id] = { composition: [], name };
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
    })
    .addCase(actions.changePointCount, (state, { payload }) => {
      const { pointID, count } = payload;

      const point = state.points[pointID];
      if (!point) return;

      if (count) {
        point.count = R.clamp(0, point.max, count);
      }
      else {
        point.count = point.count == 0 ? point.max : 0;
      }
    })
    .addCase(actions.changeType, (state, { payload }) => {
      const { pointID, type } = payload;

      if (!state.points[pointID]) return;

      state.points[pointID] = {
        name: state.points[pointID].name,
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
      delete state.points[id];
      delete state.lists[id];
    })
    .addCase(actions.changeMax, (state, { payload }) => {
      const { id, max } = payload;

      const point = state.points[id];
      if (point?.type == 'count') {
        point.max = R.max(1, max);
        point.count = R.min(point.count, max);
      }
    })
    .addCase(actions.changeCount,(state, { payload }) => {
      const { id, count } = payload;

      const point = state.points[id];
      if (!point) return;

      point.count = R.clamp(0, point.max, count);
    });
});

export default reducer;