import { IconType } from 'react-icons';

export interface FloatingMenuProps {
  icons: IconType[]
  text: string[]
  actions: (() => void)[]
}

export interface BarProps {
  Icon: IconType
  text: string
  actions: () => void
}