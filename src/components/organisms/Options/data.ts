import { FloatingMenuProps } from '@atoms/FloatingMenu';
import { IoPersonCircleSharp } from 'react-icons/all';

export const menu: Omit<FloatingMenuProps, 'hideMe'> = {
  icons: [
    IoPersonCircleSharp,
  ],
  text: [
    'Log out',
  ],
  actions: [],
};