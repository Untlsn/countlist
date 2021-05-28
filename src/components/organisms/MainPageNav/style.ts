import styled from 'styled-components';

export const Shadow = styled.div`
  height: 75px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: ${({ theme }) => theme.colors.background};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px;
`;

export const Layer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BigText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.big};
`;