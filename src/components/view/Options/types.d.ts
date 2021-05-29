export interface OptionsProps {
  userName: string
  listNames: string[]
  selected: number
  changeSelected(i: number): void
}