import { createAction } from '@reduxjs/toolkit';
import { MiniActions } from './types';



const actions: MiniActions = {
  switchOptions: createAction('MINI/SWITCH_OPTIONS'),
  changeOptions: createAction('MINI/CHANGE_OPTIONS'),
  changeUserName: createAction('MINI/CHANGE_USER_NAME'),
  usePoint: createAction<string|undefined>('MINI/USE_POINT'),
  useList: createAction('MINI/USE_LIST'),
  changeUserID: createAction('MINI/CHANGE_USER_ID'),
};

export default actions;

