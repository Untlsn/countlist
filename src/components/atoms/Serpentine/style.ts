import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Text = styled.div`
  position: absolute;
  top: 10px;
  left: 30px;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: #fff;
`;