import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 5px;
`;

export const Label = styled.label`
  color: #0000004C;
`;

export const Input = styled.input.attrs({ type: 'number' })`
  height: 30px;
  width: 50px;
  padding: 5px 0 0 5px;
  font-size: ${({ theme }) => theme.fontSize.l};
  border: none;
  border-bottom: solid #0000004C 2px;
`;