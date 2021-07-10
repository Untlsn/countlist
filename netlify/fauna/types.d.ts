export interface Ref {
  id: string
}

export interface Login {
  ref: Ref,
  ts: number,
  instance: Ref,
  secret: string
}

export interface Paginate<Data> {
  data: Data[]
}

export interface ListData {
  id: string
  owner: string
  name: string
}
export interface List {
  ref: Ref
  ts: number
  data: ListData
}
export interface PointData {
  id: string
  owner: string
  name: string
  count: number
  max: number
  type: string
}
export interface Point {
  ref: Ref
  ts: number
  data: PointData
}

export interface AddDataBody {
  created_lists: ListData[]
  created_points: PointData[]
  deleted_lists: string[]
  deleted_points: string[]
}