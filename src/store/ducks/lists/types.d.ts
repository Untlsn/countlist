export module ActionPayload {
  export interface AddList {
    name: string
  }
  export interface AddPoint {
    listID: string
    name: string
  }
  export interface TogglePointCheck {
    listID: string
    pointID: string
    check: boolean
  }
}


export interface Point {
  check: boolean
}

export type List = Record<string, Point>
export type State = Record<string, List>