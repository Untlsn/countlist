import { createReducer } from '@reduxjs/toolkit';
import initState from './state';
import * as actions from './actions';
import { createPoint, createID, getBigger } from './helpers';

const reducer = createReducer(initState, builder => {
  builder
    .addCase(actions.addList, (state, { payload }) => {
      const { name } = payload;

      if (name.trim() != '') state[createID(name)] = {};
    })
    .addCase(actions.changeLists, (state, { payload }) => payload)
    .addCase(actions.addPoint, (state, { payload }) => {
      const { listID, name } = payload;
      const list = state[listID];

      if (list) list[createID(name)] = createPoint.check();
    })
    .addCase(actions.togglePointCheck, (state, { payload }) => {
      const { listID, pointID, check } = payload;
      const point = state[listID][pointID];

      if (point.type == 'check') {
        point.count = check ? 1 : 0;
      }
    })
    .addCase(actions.addCountPoint, (state, { payload }) => {
      const { name, max, listID } = payload;
      state[listID][createID(name)] = createPoint.count(max);
    })
    .addCase(actions.changePointCount, (state, { payload }) => {
      const { pointID, count, max, listID } = payload;
      const point = state[listID][pointID];
      if (point.type == 'check') return;

      if (max != undefined) point.max = getBigger(max, 1);
      if (count != undefined) point.count = getBigger(count, 0);
      if (point.count > point.max) point.count = point.max;
    });
});

export default reducer;