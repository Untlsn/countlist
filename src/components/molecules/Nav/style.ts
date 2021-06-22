import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
`;

export const Layer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BigText = styled.div<{ dotMenu: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.l};
  text-transform: capitalize;
  color: ${({ dotMenu, theme }) => dotMenu ? '#fff' : theme.colors.text };
  letter-spacing: 1px;
`;

export const Hamburger = styled(FaBars)<{ $dotMenu: boolean }>`
  color: ${({ $dotMenu, theme }) => $dotMenu ? '#fff' : theme.colors.text };
  @media (min-width: 640px) {
    visibility: hidden;
  }
  &:hover {
    cursor: pointer;
  }
`;