interface Ref {
  id: string
}

export interface User {
  ref: Ref
  data: {
    name: string
    password: string
    lists: string[]
  }
}

export interface List {
  ref: Ref
  data: {
    name: string
    points: string[]
  }
}

export interface Point {
  ref: Ref
  data: {
    name: string
    type: string
    count: number
    max: number
  }
}