import { ActionCreatorWithoutPayload, ActionCreatorWithPayload } from '@reduxjs/toolkit';

export interface MiniActions {
  switchOptions: ActionCreatorWithoutPayload
  changeOptions: ActionCreatorWithPayload<boolean>
  selectPoint: ActionCreatorWithPayload<string>
  selectList: ActionCreatorWithPayload<string>
  clearSelectPoint: ActionCreatorWithoutPayload
}

export interface MiniState {
  optionVisible: boolean
  selectedPoint?: string
  selectedList?: string
}