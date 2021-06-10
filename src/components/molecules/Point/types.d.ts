export interface CircleProps {
  checked: boolean
}

export interface PointProps extends CircleProps {
  text: string
  onClick(): void
  onEllipsisClick(): void
}