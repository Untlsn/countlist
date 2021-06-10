import { createAction } from '@reduxjs/toolkit';
import { UsedPoint } from './types';

export const switchOptions = createAction('MINI/SWITCH_OPTIONS');
export const changeOptions = createAction<boolean>('MINI/CHANGE_OPTIONS');
export const changeUserName = createAction<string>('MINI/CHANGE_USER_NAME');
export const usePoint = createAction<UsedPoint>('MINI/USE_POINT');