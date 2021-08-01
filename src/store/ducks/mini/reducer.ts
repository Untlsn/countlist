import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';
import initState from './state';


const reducer = createReducer(initState, builder => {
  builder
    .addCase(actions.switchOptions, (state) => {
      state.optionVisible = !state.optionVisible;
    })
    .addCase(actions.changeOptions, (state, { payload }) => {
      state.optionVisible = payload;
    })
    .addCase(actions.selectPoint, (state, { payload }) => {
      state.selectedPoint = payload;
    })
    .addCase(actions.clearSelectPoint, (state) => {
      state.selectedPoint = undefined;
    })
    .addCase(actions.selectList, (state, { payload }) => {
      state.selectedList = payload;
    });
});

export default reducer;