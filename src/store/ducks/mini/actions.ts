import { createAction } from '@reduxjs/toolkit';

export const switchTheme = createAction('MINI/SWITCH_THEME');
export const switchOptions = createAction('MINI/SWITCH_OPTIONS');
export const changeTheme = createAction<boolean>('MINI/CHANGE_THEME');
export const changeOptions = createAction<boolean>('MINI/CHANGE_OPTIONS');
export const changeUserName = createAction<string>('MINI/CHANGE_USER_NAME');