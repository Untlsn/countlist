import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Point } from './state';

export interface AddPoint {
  listID: string
  name: string
}
export interface ChangePointCount {
  pointID: string
  count?: number
}
export interface ChangeType {
  pointID: string
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
export interface ChangeCount {
  id: string
  count: number
}

interface ListsActions {
  addList: ActionCreatorWithPayload<string>
  addPoint: ActionCreatorWithPayload<AddPoint>
  changePointCount: ActionCreatorWithPayload<ChangePointCount>
  changeType: ActionCreatorWithPayload<ChangeType>
  changeName: ActionCreatorWithPayload<ChangeName>
  remove: ActionCreatorWithPayload<string>
  changeMax: ActionCreatorWithPayload<ChangeMax>
  changeCount: ActionCreatorWithPayload<ChangeCount>
}

export default ListsActions;