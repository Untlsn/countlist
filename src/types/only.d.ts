export interface OnlyChildren<T = any> {
  children: T
}
export interface OnlyID {
  id: string
}

export interface OnlyOnClick {
  onClick(): void
}