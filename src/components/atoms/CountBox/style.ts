import styled from 'styled-components';

export const Wrapper = styled.div`
  
`;

const Round = styled.div<{ size: number }>`
  width: 30px;
  height: calc(30px * ${({ size }) => size});
`;

export const Fill = styled(Round)`
  background-color: #0000004C;
  border-radius: 0 0 5px 5px;
`;

export const Empty = styled(Round)`
  border: solid #0000004C 2px;
  border-radius: 5px 5px 0 0;
`;