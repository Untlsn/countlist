import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import FloatingMenuBase from '@atoms/FloatingMenu';

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

export const BigText = styled.div<{ white: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.l};
  text-transform: capitalize;
  color: ${({ white, theme }) => white ? 'white' : theme.colors.text };
  letter-spacing: 1px;
`;

export const Hamburger = styled(FaBars)<{ $white: boolean }>`
  color: ${({ $white, theme }) => $white ? 'white' : theme.colors.text };
  @media (min-width: 640px) {
    visibility: hidden;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const Relative = styled.div`
  position: relative;
`;

export const FloatingMenu = styled(FloatingMenuBase)`
  position: absolute;
  top: 50%;
  left: 50%;
`;