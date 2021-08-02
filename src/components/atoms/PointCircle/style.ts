import styled, { css } from 'styled-components';
import { CircleProps } from './types';
import { GoCheck } from 'react-icons/go';

const ifFill = css`
  border: none;
  justify-content: center;
  align-items: center;
  &::before {
    opacity: 1;
  }
`;

export const Circle = styled.div<CircleProps>`
  display: flex;
  height: 30px;
  width: 30px;
  border: #0000004D 2px solid;
  border-radius: 30px;
  position: relative;
  
  &:hover { cursor: pointer }
  &::before {
    position: absolute;
    border-radius: inherit;
    content: '';
    height: inherit;
    width: inherit;
    background-color: #0000004D;
    opacity: 0;
    transition: opacity .3s;
  }
  
  ${({ checked }) => checked && ifFill}
`;

export const Check = styled(GoCheck)`
  color: #fff;
  z-index: 1;
`;