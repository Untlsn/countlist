export interface Point {
  name: string
  check: boolean
}

export interface List {
  name: string
  points: Point[]
}

export interface AddPointProps {
  name: string
  newPoint: Point
}

export type State = List[];