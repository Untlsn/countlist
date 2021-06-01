import { createAction } from '@reduxjs/toolkit';
import { State, AddPoint, AddList } from './types';

export const addList = createAction<AddList>('LISTS/ADD_LIST');
export const changeLists = createAction<State>('LISTS/CHANGE_LISTS');
export const addPoint = createAction<AddPoint>('LISTS/ADD_POINT');