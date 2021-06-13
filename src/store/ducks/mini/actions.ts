import { createAction } from '@reduxjs/toolkit';
import { MiniActions } from './types';



const actions: MiniActions = {
  switchOptions: createAction('MINI/SWITCH_OPTIONS'),
  changeOptions: createAction('MINI/CHANGE_OPTIONS'),
  changeUserName: createAction('MINI/CHANGE_USER_NAME'),
  usePoint: createAction('MINI/USE_POINT'),
};

export default actions;

