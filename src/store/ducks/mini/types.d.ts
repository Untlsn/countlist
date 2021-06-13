import { ActionCreatorWithoutPayload, ActionCreatorWithPayload } from '@reduxjs/toolkit';

export interface MiniActions {
  switchOptions: ActionCreatorWithoutPayload
  changeOptions: ActionCreatorWithPayload<boolean>
  changeUserName: ActionCreatorWithPayload<string>
  usePoint: ActionCreatorWithPayload<UsedPoint>
}

export interface MiniState {
  userName: string
  optionVisible: boolean
  usedPoint?: UsedPoint
}

export interface UsedPoint {
  listID: string,
  pointID: string
}