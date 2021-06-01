import { createReducer } from '@reduxjs/toolkit';
import initState from './state';
import * as actions from './actions';


const reducer = createReducer(initState, builder => {
  builder
    .addCase(actions.addList, (state, { payload }) => {
      if (payload.name != '') state.push(payload);
    })
    .addCase(actions.changeLists, (state, { payload }) => payload)
    .addCase(actions.addPoint, (state, { payload }) => {
      const { name, newPoint } = payload;
      const record = state.find((it) => it.name = name);
      if (record) {
        record.points.push(newPoint);
      }
    });
});

export default reducer;