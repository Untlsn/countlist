import { createAction } from '@reduxjs/toolkit';
import { ListState, ActionPayload } from './types';

export const changeLists = createAction<ListState>('LISTS/CHANGE_LISTS');

export const addList = createAction<ActionPayload.AddList>('LISTS/ADD_LIST');
export const addPoint = createAction<ActionPayload.AddPoint>('LISTS/ADD_POINT');
export const togglePointCheck = createAction<ActionPayload.TogglePointCheck>('LISTS/TOGGLE_POINT_CHECK');
export const addCountPoint = createAction<ActionPayload.AddCountPoint>('LIST/ADD_COUNT_POINT');
export const changePointCount = createAction<ActionPayload.ChangePointCount>('LIST/CHANGE_POINT_COUNT');
export const changeType = createAction<ActionPayload.ChangeType>('LIST/CHANGE_TYPE');
export const changeName = createAction<ActionPayload.ChangeName>('LIST/CHANGE_NAME');
