export interface Point {
  id: string,
  name: string,
  max: number,
  count: number,
}
export type List = {
  id: string,
  name: string,
  points: Record<string, Point>,
}
export interface ListsState {
  lists: Record<string, List>
  pointsRefs: Record<string, string>
}