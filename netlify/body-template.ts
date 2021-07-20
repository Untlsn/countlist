import { ListData, PointData } from './fauna/types';

export interface AddDataBody {
  created_lists: ListData[]
  created_points: PointData[]
  deleted_lists: string[]
  deleted_points: string[]
}
export interface AddUserBody {
  email: string,
  name: string,
  password: string
}
export type GetListsBody = string
export type GetPointsBody = string[]
export interface LoginBody {
  term: string
  password: string
}

export type GetListsReturnBody = { id: string, name: string }[]
export type GetPointsReturnBody = PointData[]
export interface LoginReturnBody {
  id: string
  secret: string
}