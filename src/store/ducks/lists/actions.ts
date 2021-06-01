import { createAction } from '@reduxjs/toolkit';
import { AddPointProps, List } from '@store/ducks/lists/types';

export const addList = createAction<List>('LISTS/ADD_LIST');
export const changeLists = createAction<List[]>('LISTS/CHANGE_LISTS');
export const addPoint = createAction<AddPointProps>('LISTS/ADD_POINT');