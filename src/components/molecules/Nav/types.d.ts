import { MouseEventHandler } from 'react';

export interface NavProps {
  name: string
  onDotClick: MouseEventHandler
  white?: boolean
}