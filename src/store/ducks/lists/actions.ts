import { createAction } from '@reduxjs/toolkit';
import Actions from './actions.types';

const actions: Actions = {
  addList: createAction('LISTS/ADD_LIST'),
  addPoint: createAction('LISTS/ADD_POINT'),
  rename: createAction('LIST/CHANGE_NAME'),
  remove: createAction('LISTS/REMOVE'),
  changePoint: createAction('LISTS/CHANGE_POINT'),
};

export default actions;
