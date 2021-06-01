import { createAction } from '@reduxjs/toolkit';

export const switchOptions = createAction('MINI/SWITCH_OPTIONS');
export const changeOptions = createAction<boolean>('MINI/CHANGE_OPTIONS');
export const changeUserName = createAction<string>('MINI/CHANGE_USER_NAME');