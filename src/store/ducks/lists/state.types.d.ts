export interface Point {
  name: string
  type: 'check'|'count'
  count: number
  max: number
}

export interface CheckPoint extends Point {
  type: 'check'
  count: 0|1
  max: 1
}

export interface CountPoint extends Point {
  type: 'count'
}

export interface List {
  name: string
  composition: string[]
}
export interface RawListsState {
  lists: Record<string, List>
  points: Record<string, Point>
}
export interface ListsState extends RawListsState {
  deleted: string[]
  created: string[]
}