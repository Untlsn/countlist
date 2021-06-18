import { createAction } from '@reduxjs/toolkit';
import Actions from './actions.types';

const actions: Actions = {
  init: createAction('LISTS/INIT'),
  addList: createAction('LISTS/ADD_LIST'),
  addPoint: createAction('LISTS/ADD_POINT'),
  changeType: createAction('LIST/CHANGE_TYPE'),
  changeName: createAction('LIST/CHANGE_NAME'),
  remove: createAction('LISTS/REMOVE'),
  changeMax: createAction('LISTS/CHANGE_MAX'),
  changeCount: createAction('LISTS/CHANGE_COUNT'),
};

export default actions;
