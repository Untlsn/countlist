import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.div`
  font-size: ${({ theme }) => theme.fontSize.big};
`;

export const Ring = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 25px;
  border: 2px #0000004C solid;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover { cursor: pointer }
`;

export const Circle = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 25px;
  background-color: #0000004C;
`;

