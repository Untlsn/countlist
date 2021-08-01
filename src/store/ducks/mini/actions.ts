import { createAction } from '@reduxjs/toolkit';
import { MiniActions } from './types';



const actions: MiniActions = {
  switchOptions: createAction('MINI/SWITCH_OPTIONS'),
  changeOptions: createAction('MINI/CHANGE_OPTIONS'),
  selectPoint: createAction('MINI/SELECT_POINT'),
  selectList: createAction('MINI/SELECT_LIST'),
  clearSelectPoint: createAction('MINI/CLEAR_SELECT_POINT'),
};

export default actions;

