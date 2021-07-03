import { FloatingMenuProps } from '@atoms/FloatingMenu';

export interface NavProps {
  name: string
  white?: boolean
  menu: Omit<FloatingMenuProps, 'hideMe'>
}