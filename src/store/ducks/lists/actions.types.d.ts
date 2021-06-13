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
interface self {
  addList: ActionCreatorWithPayload<string>
  addPoint: ActionCreatorWithPayload<AddPoint>
  changePointCount: ActionCreatorWithPayload<ChangePointCount>
  changeType: ActionCreatorWithPayload<ChangeType>
  changeName: ActionCreatorWithPayload<ChangeName>
  remove:ActionCreatorWithPayload<string>
}

export default self;