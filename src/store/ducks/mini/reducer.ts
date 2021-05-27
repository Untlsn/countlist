import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';
import initState from './state';


const reducer = createReducer(initState, builder => {
  builder
    .addCase(actions.changeTheme, (state , { payload }) => {
      state.isDark = payload;
    })
    .addCase(actions.switchTheme, (state) => {
      state.isDark = !state.isDark;
    });
});

export default reducer;