import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Point } from './state';

export interface AddPoint {
  listID: string
  name: string
}
export interface ChangeCount {
  id: string
  count?: number
}
export interface ChangeType {
  id: string
  type: Point['type']
}
export interface ChangeName {
  id: string
  name: string
}
export interface ChangeMax {
 id: string,
 max: number
}

interface ListsActions {
  addList: ActionCreatorWithPayload<string>
  addPoint: ActionCreatorWithPayload<AddPoint>
  changeType: ActionCreatorWithPayload<ChangeType>
  changeName: ActionCreatorWithPayload<ChangeName>
  remove: ActionCreatorWithPayload<string>
  changeMax: ActionCreatorWithPayload<ChangeMax>
  changeCount: ActionCreatorWithPayload<ChangeCount>
}

export default ListsActions;