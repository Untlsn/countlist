import styled from 'styled-components';
import { Wrapper as WrapperBase } from '@atoms/PointStyles';

export const Wrapper = styled(WrapperBase)`
  justify-content: left;
  gap: 15px;
  background-color: transparent;
`;

export const Input = styled.input.attrs({ placeholder: 'Point Name' })`
  background-color: transparent;
  outline: none;
  border: none;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.huge};
`;