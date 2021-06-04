import styled from 'styled-components';

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

export const BigText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.huge};
  color: ${({ theme }) => theme.colors.background};
  user-select: none;
`;