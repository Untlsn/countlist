export interface CountPointProps {
  text: string
  onClick(num: number): void
  initFill: number
  maxFill: number
}

export interface FillFnsProps {
  onClick(num: number): void
  maxFill: number
  initFill: number
}