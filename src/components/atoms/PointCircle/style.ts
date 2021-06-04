import styled, { css } from 'styled-components';
import { CircleProps } from '@molecules/Point/types';
import { GoCheck } from 'react-icons/go';

const ifFill = css`
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.div<CircleProps>`
  height: 30px;
  width: 30px;
  border: #000 2px solid;
  border-radius: 30px;
  opacity: .3;
  
  &:hover { cursor: pointer }
  
  ${({ checked }) => checked && ifFill}
`;

export const Check = styled(GoCheck)`
  color: #fff;
`;