export interface CircleProps {
  checked: boolean
}

export interface PointCircleProps extends CircleProps {
  onClick?(): void
}