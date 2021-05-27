import { createAction } from '@reduxjs/toolkit';

export const switchTheme = createAction('MINI/SWITCH_THEME');
export const changeTheme = createAction<boolean>('MINI/CHANGE_THEME');