import { createAction } from '@reduxjs/toolkit';
import { State, ActionPayload } from './types';

export const changeLists = createAction<State>('LISTS/CHANGE_LISTS');

export const addList = createAction<ActionPayload.AddList>('LISTS/ADD_LIST');
export const addPoint = createAction<ActionPayload.AddPoint>('LISTS/ADD_POINT');
export const togglePointCheck = createAction<ActionPayload.TogglePointCheck>('LISTS/TOGGLE_POINT_CHECK');
export const addCountPoint = createAction<ActionPayload.AddCountPoint>('LIST/ADD_COUNT_POINT');
export const changePointCount = createAction<ActionPayload.ChangePointCount>('LIST/CHANGE_POINT_COUNT');
