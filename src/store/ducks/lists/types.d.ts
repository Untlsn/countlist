export interface AddList {
  name: string,
  data: List
}
export interface AddPoint {
  listID: string,
  name: string
  data: Point
}

export interface Point {
  check: boolean
}

export type List = Record<string, Point>
export type State = Record<string, List>