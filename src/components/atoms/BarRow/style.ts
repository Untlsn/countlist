import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 30px 0;
`;

export const Bar = styled.div`
  height: 1px;
  margin-top: 60px;
  background-color: ${({ theme }) => theme.colors.secondBackground};
`;
