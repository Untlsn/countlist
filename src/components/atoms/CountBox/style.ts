import styled from 'styled-components';
import { GoCheck } from 'react-icons/go';

export const Wrapper = styled.div`
  position: relative;
`;

const Round = styled.div<{ size: number }>`
  width: 30px;
  height: calc(30px * ${({ size }) => size});
  display: ${({ size }) => size == 0 && 'none'};
`;

export const Fill = styled(Round)`
  background-color: ${({ theme }) => theme.colors.transparently.gray};
`;

export const Empty = styled(Round)`
  border: solid 2px ${({ theme }) => theme.colors.transparently.gray};
`;

export const Check = styled(GoCheck)`
  color: #fff;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`;