interface GetList {
  listID: string
}

interface GetPoint {
  listID: string
  pointID: string
}

interface Create {
  name: string
}

export module ActionPayload {
  export type AddList = Create
  export type AddPoint = GetList & Create
  export interface TogglePointCheck extends GetPoint {
    check: boolean
  }
  export interface AddCountPoint extends GetList, Create {
    max: number
  }
  export interface ChangePointCount extends GetPoint {
    count: number
  }
}


export interface Point {
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

export type List = Record<string, CheckPoint|CountPoint>
export type State = Record<string, List>