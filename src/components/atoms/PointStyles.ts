import styled from 'styled-components';
import { FaEllipsisV } from 'react-icons/fa';

export const Wrapper = styled.div`
  height: 60px;
  border-radius: 10px;
  background-color: #00000033;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

export const Flex = styled.div`
  display: flex;
  gap: 15px;

  &:hover { cursor: pointer }
`;

export const BigText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.huge};
  color: ${({ theme }) => theme.colors.background};
  user-select: none;
`;

export const Ellipsis = styled(FaEllipsisV)`
  height: 60px;
  padding: 15px 0;
  color: ${({ theme }) => theme.colors.background};

  &:hover { cursor: pointer }
`;