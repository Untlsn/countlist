import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';
import initState from './state';


const reducer = createReducer(initState, builder => {
  builder
    .addCase(actions.changeUserName, (state, { payload }) => {
      state.userName = payload;
    })
    .addCase(actions.switchOptions, (state) => {
      state.optionVisible = !state.optionVisible;
    })
    .addCase(actions.changeOptions, (state, { payload }) => {
      state.optionVisible = payload;
    })
    .addCase(actions.usePoint, (state, { payload }) => {
      state.usedPoint = payload;
    })
    .addCase(actions.useList, (state, { payload }) => {
      state.usedList = payload;
    })
    .addCase(actions.changeUserID, (state, { payload }) => {
      state.userID = payload;
    });
});

export default reducer;