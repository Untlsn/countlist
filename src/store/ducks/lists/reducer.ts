import { createReducer } from '@reduxjs/toolkit';
import initState from './state';
import * as actions from './actions';


const reducer = createReducer(initState, builder => {
  builder
    .addCase(actions.addList, (state, { payload }) => {
      if (payload.name != '') state.push(payload);
    })
    .addCase(actions.changeLists, (state, { payload }) => payload);
});

export default reducer;