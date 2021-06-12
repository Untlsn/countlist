import { createAction } from '@reduxjs/toolkit';
import Actions from './actions.d';

const actions: Actions = {
  addList: createAction('LISTS/ADD_LIST'),
  addPoint: createAction('LISTS/ADD_POINT'),
  changePointCount: createAction('LIST/CHANGE_POINT_COUNT'),
  changeType: createAction('LIST/CHANGE_TYPE'),
  changeName: createAction('LIST/CHANGE_NAME'),
};

export * from './actions.d';
export default actions;
