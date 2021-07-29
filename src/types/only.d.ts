export interface OnlyChildren<T = any> {
  children: T
}
export interface OnlyID {
  id: string
}

export interface onlyOnClick {
  onClick(): void
}