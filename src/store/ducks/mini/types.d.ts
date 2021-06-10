export interface MiniState {
  userName: string
  optionVisible: boolean
  usedPoint?: UsedPoint
}

export interface UsedPoint {
  listID: string,
  pointID: string
}