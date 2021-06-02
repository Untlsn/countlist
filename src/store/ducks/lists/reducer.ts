import { createReducer } from '@reduxjs/toolkit';
import initState from './state';
import * as actions from './actions';
import { uid } from 'uid';

const createID = (x: string) => `${x.trim()}@${uid(3)}`;

const reducer = createReducer(initState, builder => {
  builder
    .addCase(actions.addList, (state, { payload }) => {
      const { name, data: list } = payload;

      if (name.trim() != '') state[createID(name)] = list;
    })
    .addCase(actions.changeLists, (state, { payload }) => payload)
    .addCase(actions.addPoint, (state, { payload }) => {
      const { listID, data: point, name } = payload;
      const list = state[listID];

      if (list) list[createID(name)] = point;
    })
    .addCase(actions.togglePointCheck, (state, { payload }) => {
      const { listID, pointID, check } = payload;
      state[listID][pointID].check = check;
    });
});

export default reducer;