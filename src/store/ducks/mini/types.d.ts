import { ActionCreatorWithoutPayload, ActionCreatorWithPayload } from '@reduxjs/toolkit';

export interface MiniActions {
  switchOptions: ActionCreatorWithoutPayload
  changeOptions: ActionCreatorWithPayload<boolean>
  changeUserName: ActionCreatorWithPayload<string>
  usePoint: ActionCreatorWithPayload<string|undefined>
  useList: ActionCreatorWithPayload<string>
}

export interface MiniState {
  userName: string
  optionVisible: boolean
  usedPoint?: string
  usedList?: string
}