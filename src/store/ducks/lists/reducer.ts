import { createReducer } from '@reduxjs/toolkit';
import initState from './state';
import actions from './actions';
import { createEmptyList, createPoint } from './helpers';
import _ from 'lodash';

const reducer = createReducer(initState, builder => {
  builder
    .addCase(actions.addList,(state, { payload }) => {
      const list = createEmptyList(payload);
      state.lists[list.id] = list;
    })
    .addCase(actions.addPoint, (state,{ payload }) => {
      const { name, list } = payload;
      if (!name) return state;
      const point = createPoint(name);

      state.lists[list].points[point.id] = point;
      state.pointsRefs[point.id] = list;
    })
    .addCase(actions.changeName, (state, { payload }) => {
      const { name, id } = payload;
      const maybeList = state.pointsRefs[id];

      if (maybeList) state.lists[maybeList].points[id].name = name;
      else state.lists[id].name = name;
    })
    .addCase(actions.remove, (state, { payload }) => {
      const maybeList = state.pointsRefs[payload];

      if (maybeList) delete state.lists[maybeList].points[payload];
      else delete state.lists[payload];
    })
    .addCase(actions.changePoint, (state, { payload }) => {
      const { id = '', name, max, count } = payload;
      const list = state.pointsRefs[id];
      const point = state.lists[list].points[id];
      if (name) point.name = name;
      if (max) point.max = _.max([1, max])!;
      if (count != undefined) point.count = _.clamp(count, 0, point.max);
    });
});

export default reducer;