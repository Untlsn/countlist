import styled, { css } from 'styled-components';
import type { CircleProps } from './types';
import { GoCheck } from 'react-icons/go';

export const Wrapper = styled.div`
  height: 60px;
  border-radius: 10px;
  background-color: #00000033;
  
  display: flex;
  align-items: center;
  padding: 15px;
  gap: 15px;
  
  &:hover {
    cursor: pointer;
  }
`;

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
  
  ${({ checked }) => checked && ifFill}
`;

export const Check = styled(GoCheck)`
  color: #fff;
`;

export const BigText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.huge};
  color: ${({ theme }) => theme.colors.background};
  user-select: none;
`;