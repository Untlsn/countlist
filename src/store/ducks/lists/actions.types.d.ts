import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Point } from './state.types';

interface AddPoint {
  name: string,
  list: string
}

interface ChangeName {
  id: string
  name: string
}

interface ListsActions {
  addList: ActionCreatorWithPayload<string>
  addPoint: ActionCreatorWithPayload<AddPoint>
  rename: ActionCreatorWithPayload<ChangeName>
  remove: ActionCreatorWithPayload<string>
  changePoint: ActionCreatorWithPayload<Partial<Point>>
}

export default ListsActions;