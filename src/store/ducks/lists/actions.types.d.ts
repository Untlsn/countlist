import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Point, List } from './state.types';

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
  id: string
  max: number
}
export interface ChangeComposition {
  id: string
  composition: string[]
}

interface ListsActions {
  initLists: ActionCreatorWithPayload<Record<string, List>>
  initPoints: ActionCreatorWithPayload<Record<string, Point>>
  addList: ActionCreatorWithPayload<string>
  addPoint: ActionCreatorWithPayload<AddPoint>
  changeType: ActionCreatorWithPayload<ChangeType>
  changeName: ActionCreatorWithPayload<ChangeName>
  remove: ActionCreatorWithPayload<string>
  changeMax: ActionCreatorWithPayload<ChangeMax>
  changeCount: ActionCreatorWithPayload<ChangeCount>
  changeComposition: ActionCreatorWithPayload<ChangeComposition>
}

export default ListsActions;